import { Types } from 'mongoose';
import { IMongoResponseRequest, IRequestDataToCreate } from '../request.interface';

export default interface IRequestRepository {
  findAllRequestMongo(): Promise<IMongoResponseRequest[]>;
  createRequest(
    requestData: IRequestDataToCreate,
  ): Promise<IRequestDataToCreate>;
  updateRequest(
    requestData: IRequestDataToCreate,
    requestId: Types.ObjectId,
  ): Promise<IRequestDataToCreate>;
}
