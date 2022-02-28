import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatencieModule } from './domain/LatenciesLogs/latencie.module';
import { RequestModule } from './domain/requestsLogs/request.module';

@Module({
  imports: [LatencieModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
