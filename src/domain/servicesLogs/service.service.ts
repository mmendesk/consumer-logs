import { utils } from 'src/utils/utils';
import { Inject, Injectable } from '@nestjs/common';
import IServiceRepository from './Repositories/service.repository.interface';
import {
  IMongoResponseService,
  IServiceDataToCreate,
} from './service.interface';

@Injectable()
export class ServiceService {
  constructor(
    @Inject('SERVICE_REPOSITORY')
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
