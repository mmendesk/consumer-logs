import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestProviders } from './request.providers';
import { DatabaseModule } from '../../database/database.module';
import { RequestController } from 'src/controllers/request.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RequestController],
  providers: [RequestService, ...RequestProviders],
  exports: [],
})
export class RequestModule {}
