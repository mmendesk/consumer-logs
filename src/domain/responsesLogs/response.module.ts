import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseService } from './response.service';
import { ResponseController } from 'src/controllers/response.controller';
import {
  Response,
  ResponseSchema,
} from './Repositories/Entity/response.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Response', schema: ResponseSchema }]),
    Response,
  ],
  controllers: [ResponseController],
  providers: [ResponseService],
  exports: [],
})
export class ResponseModule {}
