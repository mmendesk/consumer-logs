import { Types } from 'mongoose';
import { IRequestDataToCreate } from '../request.interface';

export default interface IRequestRepository {
  findAllRequestMongo(): Promise<IRequestRepository[]>;
  createRequest(
    requestData: IRequestDataToCreate,
  ): Promise<IRequestDataToCreate>;
  updateRequest(
    requestData: IRequestDataToCreate,
    requestId: Types.ObjectId,
  ): Promise<IRequestDataToCreate>;
}
