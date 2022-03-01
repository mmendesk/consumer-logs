import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import {
  RouteDocument,
  IMongoResponseRoute,
  IRouteDataToCreate,
} from '../route.interface';
import { utils } from '../../../utils/utils';
import IRouteRepository from './route.repository.interface';

const config = require('../../../../mock/cosumer-logs.json');
const fs = require('fs');

@Injectable()
export class RouteRepository implements IRouteRepository {
  constructor(
    @Inject('ROUTE_ENTITY')
    private routeModel: Model<RouteDocument>,
  ) {}

  // TODO:
  // Method that returns all route data registered in the database
  async findAllRouteMongo(): Promise<IMongoResponseRoute[]> {
    return utils.convertArrayDocumentMongoose(await this.routeModel.find());
  }

  // TODO:
  // Method of creating the routes based on the data that is found in the logs mock
  async createRoute(
    responseData: IRouteDataToCreate,
  ): Promise<IRouteDataToCreate> {
    try {
      const jsonString = fs.readFileSync(config);
      const consumer = JSON.parse(jsonString);
      console.log(consumer.route);
      if (consumer.length > 0) {
        return (await this.routeModel.create(responseData)).toJSON();
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // TODO:
  // Method of updating route data, passing in the body exactly the data that is required
  async updateRoute(
    routeData: IRouteDataToCreate,
    routeId: Types.ObjectId,
  ): Promise<IRouteDataToCreate> {
    this.routeModel.updateOne(
      { _id: routeId },
      {
        $set: {
          hosts: routeData.hosts,
          protocols: routeData.protocols,
          methods: routeData.methods,
          paths: routeData.paths,
          preserve_host: routeData.preserve_host,
          regex_priority: routeData.regex_priority,
          strip_path: routeData.strip_path,
        },
      },
    );
    return (await this.routeModel.findOne({ _id: routeId })).toJSON();
  }
}
