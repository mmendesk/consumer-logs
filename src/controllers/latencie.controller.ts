import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { LatencieService } from '../domain/LatenciesLogs/latencie.service';

@Controller('latencies')
export class LatencieController {
  constructor(private readonly latencieService: LatencieService) {}

  @Get('health')
  health(): string {
    return this.latencieService.health();
  }
  @Get()
  findAll(): any {
    return this.latencieService.findAll();
  }
  @Post()
  createLatencie(@Req() req: Request): any {
    const latencieData: any = req.body;
    return this.latencieService.createLatencie(latencieData);
  }
}
