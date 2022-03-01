import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestService } from './request.service';
import { RequestController } from 'src/controllers/request.controller';
import { Request, RequestSchema } from './Repositories/Entity/request.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Request', schema: RequestSchema }]),
    Request,
  ],
  controllers: [RequestController],
  providers: [RequestService],
  exports: [],
})
export class RequestModule {}
