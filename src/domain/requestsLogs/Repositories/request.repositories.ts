import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  RequestDocument,
  IMongoResponseRequest,
  IRequestDataToCreate,
} from '../request.interface';
import { utils } from '../../../utils/utils';
import IRequestRepository from './request.repository.interface';

@Injectable()
export class RequestRepository implements IRequestRepository {
  constructor(
    @Inject('REQUEST_ENTITY')
    private requestModel: Model<RequestDocument>,
  ) {}

  async findAllRequestMongo(): Promise<IMongoResponseRequest[]> {
    return utils.convertArrayDocumentMongoose(await this.requestModel.find());
  }
  async createRequest(
    requestData: IRequestDataToCreate,
  ): Promise<IRequestDataToCreate> {
    return (await this.requestModel.create(requestData)).toJSON();
  }
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
