import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  ResponseDocument,
  IMongoResponse,
  IResponseDataToCreate,
} from '../response.interface';
import { utils } from '../../../utils/utils';
import IResponseRepository from './response.repository.interface';

const config = require('../../../../mock/cosumer-logs.json');
const fs = require('fs');

@Injectable()
export class ResponseRepository implements IResponseRepository {
  constructor(
    @Inject('RESPONSE_ENTITY')
    private responseModel: Model<ResponseDocument>,
  ) {}

  // TODO:
  // Method that returns all response data registered in the database
  async findAllResponseMongo(): Promise<IMongoResponse[]> {
    return utils.convertArrayDocumentMongoose(await this.responseModel.find());
  }

  // TODO:
  // Method of creating the responses based on the data that is found in the logs mock
  async createResponse(
    responseData: IResponseDataToCreate,
  ): Promise<IResponseDataToCreate> {
    try {
      const jsonString = fs.readFileSync(config);
      const consumer = JSON.parse(jsonString);
      console.log(consumer.response);
      if (consumer.length > 0) {
        return (await this.responseModel.create(responseData)).toJSON();
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // TODO:
  // Method of updating response data, passing in the body exactly the data that is required
  async updateResponse(
    responseData: IResponseDataToCreate,
    responseId: Types.ObjectId,
  ): Promise<IResponseDataToCreate> {
    this.responseModel.updateOne(
      { _id: responseId },
      {
        $set: {
          status: responseData.status,
          size: responseData.size,
          headers: responseData.headers,
        },
      },
    );
    return (await this.responseModel.findOne({ _id: responseId })).toJSON();
  }
}
