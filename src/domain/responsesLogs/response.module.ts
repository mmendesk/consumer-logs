import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseProviders } from './response.providers';
import { DatabaseModule } from '../../database/database.module';
import { ResponseController } from 'src/controllers/response.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ResponseController],
  providers: [ResponseService, ...ResponseProviders],
  exports: [],
})
export class RequestModule {}
