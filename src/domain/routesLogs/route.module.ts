import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteProviders } from './route.providers';
import { DatabaseModule } from '../../database/database.module';
import { RouteController } from 'src/controllers/route.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [RouteService, ...RouteProviders],
  exports: [],
})
export class RequestModule {}
