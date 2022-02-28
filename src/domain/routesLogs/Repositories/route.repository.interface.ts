import { Types } from 'mongoose';
import { IMongoResponseRoute, IRouteDataToCreate } from '../route.interface';

export default interface IRouteRepository {
  findAllRouteMongo(): Promise<IMongoResponseRoute[]>;
  createRoute(
    routeData: IRouteDataToCreate,
  ): Promise<IRouteDataToCreate>;
  updateRoute(
    routeData: IRouteDataToCreate,
    routeId: Types.ObjectId,
  ): Promise<IRouteDataToCreate>;
}
