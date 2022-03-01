import { Global, Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RouteController } from 'src/controllers/route.controller';
import { Route, RouteSchema } from './Repositories/Entity/route.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Route', schema: RouteSchema }]),
    Route,
  ],
  controllers: [RouteController],
  providers: [RouteService],
  exports: [],
})
export class RouteModule {}
