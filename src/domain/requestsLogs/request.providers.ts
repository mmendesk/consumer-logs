import { Connection, Model } from 'mongoose';
import { RequestSchema } from './Repositories/Entity/request.entity';
import { RequestRepository } from './Repositories/request.repositories';
import { RequestDocument } from './Repositories/Entity/request.entity';

export const RequestProviders = [
  {
    provide: 'REQUEST_ENTITY',
    useFactory: (connection: Connection) =>
      connection.model('request', RequestSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'REQUEST_REPOSITORY',
    useFactory: (requestModel: Model<RequestDocument>) => {
      return new RequestRepository(requestModel);
    },
    inject: ['REQUEST_ENTITY'],
  },
];
