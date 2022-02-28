import { ServiceDocument } from './Repositories/Entity/service.entity';

interface IMongoResponseService {
  _id: string;
  host: string;
  name: string;
  path: string;
  port: number;
  protocol: string;
  read_timeout: number;
  retries: number;
  write_timeout: number;
  connect_timeout: number;
  created_at: Date;
  updated_at: Date;
}
interface IServiceDataToCreate {
  host: string;
  name: string;
  path: string;
  port: number;
  protocol: string;
  read_timeout: number;
  retries: number;
  write_timeout: number;
  connect_timeout: number;
  created_at: Date;
  updated_at: Date;
}

export { IMongoResponseService, ServiceDocument, IServiceDataToCreate };
