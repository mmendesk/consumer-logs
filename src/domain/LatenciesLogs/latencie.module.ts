import { Module } from '@nestjs/common';
import { LatencieService } from './latencie.service';
import { LatencieProviders } from './latencie.providers';
import { DatabaseModule } from '../../database/database.module';
import { LatencieController } from 'src/controllers/latencie.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [LatencieController],
  providers: [LatencieService, ...LatencieProviders],
  exports: [],
})
export class LatencieModule {}
