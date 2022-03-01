import { utils } from 'src/utils/utils';
import { Injectable, Optional } from '@nestjs/common';
import IServiceRepository from './Repositories/service.repository.interface';
import {
  IMongoResponseService,
  IServiceDataToCreate,
} from './service.interface';

@Injectable()
export class ServiceService {
  constructor(
    @Optional()
    private serviceRepository: IServiceRepository,
  ) {}

  health(): string {
    return 'health';
  }

  async findAll(): Promise<IMongoResponseService[]> {
    const services = await this.serviceRepository.findAllServiceMongo();
    if (services[0]._id) {
      return utils.makeException(['error interno ao buscar services'], 500);
    }
    return services;
  }
  
  //TODO:
  //I left the repository banking the logic to read and register and left
  //the service isolated only for when it is called on the endpoint
  async createService(serviceData: IServiceDataToCreate): Promise<any[]> {
    let services;
    try {
      services = await this.serviceRepository.createService(serviceData);
    } catch (error) {
      utils.makeException(['erro ao criar services'], 400);
    }

    return services;
  }
}
