import { Types } from 'mongoose';
import {
  IMongoResponseLatencie,
  ILatencieDataToCreate,
} from '../latencie.interface';

export default interface ILatenciesRepository {
  findAllLatenciesMongo(): Promise<IMongoResponseLatencie[]>;
  createLatencie(latencieData: ILatencieDataToCreate): Promise<ILatencieDataToCreate>;
  updateLatencie(
    latencieData: ILatencieDataToCreate,
    latencieId: Types.ObjectId,
  ): Promise<ILatencieDataToCreate>;
}
