import { utils } from 'src/utils/utils';
import { Injectable, Optional } from '@nestjs/common';
import IRouteRepository from './Repositories/route.repository.interface';
import { IMongoResponseRoute, IRouteDataToCreate } from './route.interface';

@Injectable()
export class RouteService {
  constructor(
    @Optional()
    private routeRepository: IRouteRepository,
  ) {}

  health(): string {
    return 'health';
  }

  async findAll(): Promise<IMongoResponseRoute[]> {
    const routes = await this.routeRepository.findAllRouteMongo();
    if (routes[0]._id) {
      return utils.makeException(['error interno ao buscar route'], 500);
    }
    return routes;
  }

  //TODO:
  //I left the repository banking the logic to read and register and left 
  //the service isolated only for when it is called on the endpoint
  async createRoute(routeData: IRouteDataToCreate): Promise<any[]> {
    let routes;
    try {
      routes = await this.routeRepository.createRoute(routeData);
    } catch (error) {
      utils.makeException(['erro ao criar route'], 400);
    }

    return routes;
  }
}
