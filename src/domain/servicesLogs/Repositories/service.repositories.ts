import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  ServiceDocument,
  IMongoResponseService,
  IServiceDataToCreate,
} from '../service.interface';
import { utils } from '../../../utils/utils';
import IServiceRepository from './service.repository.interface';

const config = require('../../../../mock/cosumer-logs.json');
const fs = require('fs');

@Injectable()
export class ServiceRepository implements IServiceRepository {
  constructor(
    @Inject('SERVICE_ENTITY')
    private serviceModel: Model<ServiceDocument>,
  ) {}

  // TODO:
  // Method that returns all service data registered in the database
  async findAllServiceMongo(): Promise<IMongoResponseService[]> {
    return utils.convertArrayDocumentMongoose(await this.serviceModel.find());
  }

  // TODO:
  // Method of creating the services based on the data that is found in the logs mock
  async createService(
    serviceData: IServiceDataToCreate,
  ): Promise<IServiceDataToCreate> {
    try {
      const jsonString = fs.readFileSync(config);
      const consumer = JSON.parse(jsonString);
      console.log(consumer.service);
      if (consumer.length > 0) {
        return (await this.serviceModel.create(serviceData)).toJSON();
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // TODO:
  // Method of updating service data, passing in the body exactly the data that is required
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
