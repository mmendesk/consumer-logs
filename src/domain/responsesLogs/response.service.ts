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

  //TODO:
  //I left the repository banking the logic to read and register and left
  //the service isolated only for when it is called on the endpoint
  async createResponse(responseData: IResponseDataToCreate): Promise<any[]> {
    let responses;
    try {
      responses = await this.responseRepository.createResponse(responseData);
    } catch (error) {
      utils.makeException(['erro ao criar Response'], 400);
    }

    return responses;
  }
}
