import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema({ timestamps: true })
export class Service {
  @Prop(String)
  host: string;

  @Prop(String)
  name: string;

  @Prop(String)
  path: string;

  @Prop(Number)
  port: number;

  @Prop(String)
  protocol: string;

  @Prop(Number)
  read_timeout: number;

  @Prop(Number)
  retries: number;

  @Prop(Number)
  write_timeout: number;

  @Prop(Number)
  connect_timeout: number;

  @Prop(Date)
  created_at: Date;

  @Prop(Date)
  updated_at: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
