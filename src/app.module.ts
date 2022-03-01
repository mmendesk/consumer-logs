import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controllers/app.controller';
import { RouteModule } from './domain/routesLogs/route.module';
import { RequestModule } from './domain/requestsLogs/request.module';
import { ServiceModule } from './domain/servicesLogs/service.module';
import { LatencieModule } from './domain/LatenciesLogs/latencie.module';
import { ResponseModule } from './domain/responsesLogs/response.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_ADDRESS),
    RouteModule,
    RequestModule,
    ServiceModule,
    LatencieModule,
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
