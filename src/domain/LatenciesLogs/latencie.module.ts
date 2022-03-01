import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LatencieService } from './latencie.service';
import { LatencieController } from 'src/controllers/latencie.controller';
import {
  Latencie,
  LatencieSchema,
} from './Repositories/Entity/latencies.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Latencie', schema: LatencieSchema }]),
    Latencie,
  ],
  controllers: [LatencieController],
  providers: [LatencieService],
  exports: [],
})
export class LatencieModule {}
