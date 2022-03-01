import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceService } from './service.service';
import { ServiceController } from 'src/controllers/service.controller';
import { Service, ServiceSchema } from './Repositories/Entity/service.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }]),
    Service,
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [],
})
export class ServiceModule {}
