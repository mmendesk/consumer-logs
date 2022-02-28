import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { ServiceService } from 'src/domain/servicesLogs/service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('health')
  health(): string {
    return this.serviceService.health();
  }
  @Get()
  findAll(): any {
    return this.serviceService.findAll();
  }
  @Post()
  createService(@Req() req: Request): any {
    const serviceData: any = req.body;
    return this.serviceService.createService(serviceData);
  }
}
