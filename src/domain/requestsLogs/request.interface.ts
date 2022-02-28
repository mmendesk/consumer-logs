import { Document } from 'mongoose';
import { RequestDocument } from './Repositories/Entity/request.entity';

interface IMongoResponseRequest {
  _id: string;
  method: string;
  uri: string;
  url: string;
  size: string;
  querystring: Object;
  headers: Object;
}
interface IRequestDataToCreate {
  method: string;
  uri: string;
  url: string;
  size: string;
  querystring: Object;
  headers: Object;
}

export { IMongoResponseRequest, RequestDocument, IRequestDataToCreate };
