import { Document } from 'mongoose';
import { LatenciesDocument } from './Repositories/Entity/latencies.entity';

interface IMongoResponseLatencie {
  _id: string;
  proxy: number;
  gateway: number;
  request: number;
}
interface ILatencieDataToCreate {
  proxy: number;
  gateway: number;
  request: number;
}

export { IMongoResponseLatencie, LatenciesDocument, ILatencieDataToCreate };
