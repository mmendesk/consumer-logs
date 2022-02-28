import { Connection, Model } from 'mongoose';
import { ServiceSchema } from './Repositories/Entity/service.entity';
import { ServiceRepository } from './Repositories/service.repositories';
import { ServiceDocument } from './Repositories/Entity/service.entity';

export const ServiceProviders = [
  {
    provide: 'SERVICE_ENTITY',
    useFactory: (connection: Connection) =>
      connection.model('service', ServiceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'SERVICE_REPOSITORY',
    useFactory: (serviceModel: Model<ServiceDocument>) => {
      return new ServiceRepository(serviceModel);
    },
    inject: ['SERVICE_ENTITY'],
  },
];
