import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  LatenciesDocument,
  IMongoResponseLatencie,
  ILatencieDataToCreate,
} from '../latencie.interface';
import ILatenciesRepository from './latencie.repository.interface';
import { utils } from '../../../utils/utils';

const config = require('../../../../mock/cosumer-logs.json');
const fs = require('fs');

@Injectable()
export class LatencieRepository implements ILatenciesRepository {
  constructor(
    @Inject('LATENCIE_ENTITY')
    private latencieModel: Model<LatenciesDocument>,
  ) {}

  // TODO:
  // Method that returns all latency data registered in the database
  async findAllLatenciesMongo(): Promise<IMongoResponseLatencie[]> {
    return utils.convertArrayDocumentMongoose(await this.latencieModel.find());
  }

  // TODO:
  // Method of creating the latencies based on the data that is found in the logs mock
  async createLatencie(
    latencieData: ILatencieDataToCreate,
  ): Promise<ILatencieDataToCreate> {
    try {
      const jsonString = fs.readFileSync(config);
      const consumer = JSON.parse(jsonString);
      console.log(consumer.latencie);
      if (consumer.length > 0) {
        return (await this.latencieModel.create(latencieData)).toJSON();
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // TODO:
  // Method of updating latency data, passing in the body exactly the data that is required
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
