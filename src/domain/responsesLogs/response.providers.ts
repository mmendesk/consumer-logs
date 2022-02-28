import { Connection, Model } from 'mongoose';
import { ResponseSchema } from './Repositories/Entity/response.entity';
import { ResponseRepository } from './Repositories/response.repositories';
import { ResponseDocument } from './Repositories/Entity/response.entity';

export const ResponseProviders = [
  {
    provide: 'RESPONSE_ENTITY',
    useFactory: (connection: Connection) =>
      connection.model('request', ResponseSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'RESPONSE_REPOSITORY',
    useFactory: (responseModel: Model<ResponseDocument>) => {
      return new ResponseRepository(responseModel);
    },
    inject: ['RESPONSE_ENTITY'],
  },
];
