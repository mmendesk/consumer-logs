import { RouteService } from 'src/domain/routesLogs/route.service';
import { Controller, Get, Post, Req, Request } from '@nestjs/common';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get('health')
  health(): string {
    return this.routeService.health();
  }
  @Get()
  findAll(): any {
    return this.routeService.findAll();
  }
  @Post()
  createRoute(@Req() req: Request): any {
    const routeData: any = req.body;
    return this.routeService.createRoute(routeData);
  }
}
