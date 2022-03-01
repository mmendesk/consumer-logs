import { Inject, Injectable, Optional } from '@nestjs/common';
import { utils } from 'src/utils/utils';
import IRequestRepository from './Repositories/request.repository.interface';
import {
  IMongoResponseRequest,
  IRequestDataToCreate,
} from './request.interface';

@Injectable()
export class RequestService {
  constructor(
    @Optional()
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

  //TODO:
  //I left the repository banking the logic to read and register and left
  //the service isolated only for when it is called on the endpoint
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
