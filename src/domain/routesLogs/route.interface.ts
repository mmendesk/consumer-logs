import { RouteDocument } from './Repositories/Entity/route.entity';

interface IMongoResponseRoute {
  _id: string;
  hosts: string;
  protocols: Array<string>;
  methods: Array<string>;
  paths: Array<string>;
  preserve_host: boolean;
  regex_priority: number;
  strip_path: boolean;
  created_at: Date;
  updated_at: Date;
}
interface IRouteDataToCreate {
  hosts: string;
  protocols: Array<string>;
  methods: Array<string>;
  paths: Array<string>;
  preserve_host: boolean;
  regex_priority: number;
  strip_path: boolean;
  created_at: Date;
  updated_at: Date;
}

export { IMongoResponseRoute, RouteDocument, IRouteDataToCreate };
