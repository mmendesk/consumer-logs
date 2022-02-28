import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  ServiceDocument,
  IMongoResponseService,
  IServiceDataToCreate,
} from '../service.interface';
import { utils } from '../../../utils/utils';
import IServiceRepository from './service.repository.interface';

@Injectable()
export class ServiceRepository implements IServiceRepository {
  constructor(
    @Inject('SERVICE_ENTITY')
    private serviceModel: Model<ServiceDocument>,
  ) {}

  async findAllServiceMongo(): Promise<IMongoResponseService[]> {
    return utils.convertArrayDocumentMongoose(await this.serviceModel.find());
  }
  async createService(
    serviceData: IServiceDataToCreate,
  ): Promise<IServiceDataToCreate> {
    return (await this.serviceModel.create(serviceData)).toJSON();
  }
  async updateService(
    serviceData: IServiceDataToCreate,
    serviceId: Types.ObjectId,
  ): Promise<IServiceDataToCreate> {
    this.serviceModel.updateOne(
      { _id: serviceId },
      {
        $set: {
          host: serviceData.host,
        },
      },
    );
    return (await this.serviceModel.findOne({ _id: serviceId })).toJSON();
  }
}
