import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceProviders } from './service.providers';
import { DatabaseModule } from '../../database/database.module';
import { RouteController } from 'src/controllers/route.controller';
import { ServiceController } from 'src/controllers/service.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ServiceController],
  providers: [ServiceService, ...ServiceProviders],
  exports: [],
})
export class RequestModule {}
