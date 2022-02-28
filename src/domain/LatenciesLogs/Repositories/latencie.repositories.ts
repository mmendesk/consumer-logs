import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  LatenciesDocument,
  IMongoResponseLatencie,
  ILatencieDataToCreate,
} from '../latencie.interface';
import ILatenciesRepository from './latencie.repository.interface';
import { utils } from '../../../utils/utils';

@Injectable()
export class LatencieRepository implements ILatenciesRepository {
  constructor(
    @Inject('LATENCIE_ENTITY')
    private latencieModel: Model<LatenciesDocument>,
  ) {}

  async findAllLatenciesMongo(): Promise<IMongoResponseLatencie[]> {
    return utils.convertArrayDocumentMongoose(await this.latencieModel.find());
  }
  async createLatencie(
    latencieData: ILatencieDataToCreate,
  ): Promise<ILatencieDataToCreate> {
    return (await this.latencieModel.create(latencieData)).toJSON();
  }
  async updateLatencie(
    latencieData: ILatencieDataToCreate,
    latencieId: Types.ObjectId,
  ): Promise<ILatencieDataToCreate> {
    this.latencieModel.updateOne(
      { _id: latencieId },
      {
        $set: {
          proxy: latencieData.proxy,
          gateway: latencieData.gateway,
          request: latencieData.request,
        },
      },
    );
    return (await this.latencieModel.findOne({ _id: latencieId })).toJSON();
  }
}
