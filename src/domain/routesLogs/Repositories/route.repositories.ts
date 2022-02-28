import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  RouteDocument,
  IMongoResponseRoute,
  IRouteDataToCreate,
} from '../route.interface';
import { utils } from '../../../utils/utils';
import IRouteRepository from './route.repository.interface';

@Injectable()
export class RouteRepository implements IRouteRepository {
  constructor(
    @Inject('ROUTE_ENTITY')
    private routeModel: Model<RouteDocument>,
  ) {}

  async findAllRouteMongo(): Promise<IMongoResponseRoute[]> {
    return utils.convertArrayDocumentMongoose(await this.routeModel.find());
  }
  async createRoute(
    responseData: IRouteDataToCreate,
  ): Promise<IRouteDataToCreate> {
    return (await this.routeModel.create(responseData)).toJSON();
  }
  async updateRoute(
    routeData: IRouteDataToCreate,
    routeId: Types.ObjectId,
  ): Promise<IRouteDataToCreate> {
    this.routeModel.updateOne(
      { _id: routeId },
      {
        $set: {
          hosts: routeData.hosts
        },
      },
    );
    return (await this.routeModel.findOne({ _id: routeId })).toJSON();
  }
}
