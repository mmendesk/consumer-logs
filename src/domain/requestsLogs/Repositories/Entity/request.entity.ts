import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RequestDocument = Request & Document;

@Schema()
export class Request {
  @Prop(String)
  method: string;

  @Prop(String)
  uri: string;

  @Prop(String)
  url: string;

  @Prop(String)
  size: string;

  @Prop(Object)
  querystring: string;

  @Prop(Object)
  headers: {
    'accept': string;
    'host': string;
    'user-agent': string;
  };
}

export const RequestSchema = SchemaFactory.createForClass(Request);
