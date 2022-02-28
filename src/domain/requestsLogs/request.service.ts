import { Inject, Injectable } from '@nestjs/common';
import { utils } from 'src/utils/utils';
import IRequestRepository from './Repositories/request.repository.interface';
import {
  IMongoResponseRequest,
  IRequestDataToCreate,
} from './request.interface';

@Injectable()
export class RequestService {
  constructor(
    @Inject('REQUEST_REPOSITORY')
    private requestRepository: IRequestRepository,
  ) {}

  health(): string {
    return 'health';
  }

  async findAll(): Promise<IMongoResponseRequest[]> {
    const requests = await this.requestRepository.findAllRequestMongo();
    if (requests[0]._id) {
      return utils.makeException(['error interno ao buscar Request'], 500);
    }
    return requests;
  }
  async createRequest(requestData: IRequestDataToCreate): Promise<any[]> {
    let requests;
    try {
      requests = await this.requestRepository.createRequest(requestData);
    } catch (error) {
      utils.makeException(['erro ao criar latencia'], 400);
    }

    return requests;
  }
}
