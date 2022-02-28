import { Connection, Model } from 'mongoose';
import { RouteSchema } from './Repositories/Entity/route.entity';
import { RouteRepository } from './Repositories/route.repositories';
import { RouteDocument } from './Repositories/Entity/route.entity';

export const RouteProviders = [
  {
    provide: 'ROUTE_ENTITY',
    useFactory: (connection: Connection) =>
      connection.model('route', RouteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ROUTE_REPOSITORY',
    useFactory: (routeModel: Model<RouteDocument>) => {
      return new RouteRepository(routeModel);
    },
    inject: ['ROUTE_ENTITY'],
  },
];
