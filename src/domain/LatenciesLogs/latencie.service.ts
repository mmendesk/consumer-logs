import { Inject, Injectable } from '@nestjs/common';
import { utils } from 'src/utils/utils';
import ILatenciesRepository from './Repositories/latencie.repository.interface';
import {
  IMongoResponseLatencie,
  ILatencieDataToCreate,
} from './latencie.interface';

@Injectable()
export class LatencieService {
  constructor(
    @Inject('LATENCIE_REPOSITORY')
    private latencieRepository: ILatenciesRepository,
  ) {}

  health(): string {
    return 'health';
  }

  async findAll(): Promise<IMongoResponseLatencie[]> {
    const latencies = await this.latencieRepository.findAllLatenciesMongo();
    if (latencies[0]._id) {
      return utils.makeException(['error interno ao buscar usuário'], 500);
    }
    return latencies;
  }
  async createLatencie(latencieData: ILatencieDataToCreate): Promise<any[]> {
    let latencies;
    try {
      latencies = await this.latencieRepository.createLatencie(latencieData);
    } catch (error) {
      utils.makeException(['erro ao criar latencia'], 400);
    }

    return latencies;
  }
}
