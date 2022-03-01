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
