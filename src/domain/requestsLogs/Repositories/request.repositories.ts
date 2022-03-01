import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  RequestDocument,
  IMongoResponseRequest,
  IRequestDataToCreate,
} from '../request.interface';
import { utils } from '../../../utils/utils';
import IRequestRepository from './request.repository.interface';

const config = require('../../../../mock/cosumer-logs.json');
const fs = require('fs');

@Injectable()
export class RequestRepository implements IRequestRepository {
  constructor(
    @Inject('REQUEST_ENTITY')
    private requestModel: Model<RequestDocument>,
  ) {}

  // TODO:
  // Method that returns all request data registered in the database
  async findAllRequestMongo(): Promise<IMongoResponseRequest[]> {
    return utils.convertArrayDocumentMongoose(await this.requestModel.find());
  }

  // TODO:
  // Method of creating the requests based on the data that is found in the logs mock
  async createRequest(
    requestData: IRequestDataToCreate,
  ): Promise<IRequestDataToCreate> {
    try {
      const jsonString = fs.readFileSync(config);
      const consumer = JSON.parse(jsonString);
      console.log(consumer.request);
      if (consumer.length > 0) {
        return (await this.requestModel.create(requestData)).toJSON();
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // TODO:
  // Method of updating request data, passing in the body exactly the data that is required
  async updateRequest(
    requestData: IRequestDataToCreate,
    requestId: Types.ObjectId,
  ): Promise<IRequestDataToCreate> {
    this.requestModel.updateOne(
      { _id: requestId },
      {
        $set: {
          method: requestData.method,
          uri: requestData.uri,
          url: requestData.url,
          size: requestData.size,
          querystring: requestData.querystring,
          headers: requestData.headers,
        },
      },
    );
    return (await this.requestModel.findOne({ _id: requestId })).toJSON();
  }
}
