import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { ResponseService } from 'src/domain/responsesLogs/response.service';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('health')
  health(): string {
    return this.responseService.health();
  }
  @Get()
  findAll(): any {
    return this.responseService.findAll();
  }
  @Post()
  createResponse(@Req() req: Request): any {
    const responseData: any = req.body;
    return this.responseService.createResponse(responseData);
  }
}
