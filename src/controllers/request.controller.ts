import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { RequestService } from 'src/domain/requestsLogs/request.service';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get('health')
  health(): string {
    return this.requestService.health();
  }
  @Get()
  findAll(): any {
    return this.requestService.findAll();
  }
  @Post()
  createRequest(@Req() req: Request): any {
    const requestData: any = req.body;
    return this.requestService.createRequest(requestData);
  }
}
