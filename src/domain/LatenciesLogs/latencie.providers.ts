import { Connection, Model } from 'mongoose';
import { LatencieSchema } from './Repositories/Entity/latencies.entity';
import { LatencieRepository } from './Repositories/latencie.repositories';
import { LatenciesDocument } from './latencie.interface';

export const LatencieProviders = [
  {
    provide: 'LATENCIE_ENTITY',
    useFactory: (connection: Connection) =>
      connection.model('latencies', LatencieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'LATENCIE_REPOSITORY',
    useFactory: (latencieModel: Model<LatenciesDocument>) => {
      return new LatencieRepository(latencieModel);
    },
    inject: ['LATENCIE_ENTITY'],
  },
];
