import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResponseDocument = Response & Document;

@Schema()
export class Response {
  @Prop(Number)
  status: number;

  @Prop(String)
  size: string;

  @Prop(Object)
  headers: {
    'Content-Length': string;
    'via': string;
    'Connection': string;
    'access-control-allow-credentials': string;
    'Content-Type': string;
    'server': string;
    'acess-control-allow-origin': string;
  };
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
