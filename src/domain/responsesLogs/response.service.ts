import { utils } from 'src/utils/utils';
import { Injectable, Optional } from '@nestjs/common';
import IResponseRepository from './Repositories/response.repository.interface';
import { IMongoResponse, IResponseDataToCreate } from './response.interface';

@Injectable()
export class ResponseService {
  constructor(
    @Optional()
    private responseRepository: IResponseRepository,
  ) {}

  health(): string {
    return 'health';
  }

  async findAll(): Promise<IMongoResponse[]> {
    const responses = await this.responseRepository.findAllResponseMongo();
    if (responses[0]._id) {
      return utils.makeException(['error interno ao buscar response'], 500);
    }
    return responses;
  }
  async createResponse(responseData: IResponseDataToCreate): Promise<any[]> {
    let responses;
    try {
      responses = await this.responseRepository.createResponse(responseData);
    } catch (error) {
      utils.makeException(['erro ao criar latencia'], 400);
    }

    return responses;
  }
}
