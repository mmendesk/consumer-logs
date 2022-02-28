import { Types } from 'mongoose';
import { IMongoResponse, IResponseDataToCreate } from '../response.interface';

export default interface IResponseRepository {
  findAllResponseMongo(): Promise<IMongoResponse[]>;
  createResponse(
    responseData: IResponseDataToCreate,
  ): Promise<IResponseDataToCreate>;
  updateResponse(
    responseData: IResponseDataToCreate,
    responseId: Types.ObjectId,
  ): Promise<IResponseDataToCreate>;
}
