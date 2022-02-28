import { ResponseDocument } from './Repositories/Entity/response.entity';

interface IMongoResponse {
  _id: string;
  status: number;
  size: string;
  headers: object;
}
interface IResponseDataToCreate {
  status: number;
  size: string;
  headers: object;
}

export { IMongoResponse, ResponseDocument, IResponseDataToCreate };
