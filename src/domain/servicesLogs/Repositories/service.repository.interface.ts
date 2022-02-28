import { Types } from 'mongoose';
import { IMongoResponseService, IServiceDataToCreate } from '../service.interface';

export default interface IServiceRepository {
  findAllServiceMongo(): Promise<IMongoResponseService[]>;
  createService(
    serviceData: IServiceDataToCreate,
  ): Promise<IServiceDataToCreate>;
  updateService(
    serviceData: IServiceDataToCreate,
    serviceId: Types.ObjectId,
  ): Promise<IServiceDataToCreate>;
}
