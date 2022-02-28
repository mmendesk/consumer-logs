import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  ResponseDocument,
  IMongoResponse,
  IResponseDataToCreate,
} from '../response.interface';
import { utils } from '../../../utils/utils';
import IResponseRepository from './response.repository.interface';

@Injectable()
export class ResponseRepository implements IResponseRepository {
  constructor(
    @Inject('RESPONSE_ENTITY')
    private responseModel: Model<ResponseDocument>,
  ) {}

  async findAllResponseMongo(): Promise<IMongoResponse[]> {
    return utils.convertArrayDocumentMongoose(await this.responseModel.find());
  }
  async createResponse(
    responseData: IResponseDataToCreate,
  ): Promise<IResponseDataToCreate> {
    return (await this.responseModel.create(responseData)).toJSON();
  }
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
