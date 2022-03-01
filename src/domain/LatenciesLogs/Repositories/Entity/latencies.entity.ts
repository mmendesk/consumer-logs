import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LatenciesDocument = Latencie & Document;

@Schema({ timestamps: true })
export class Latencie {
  @Prop(Number)
  proxy: number;

  @Prop(Number)
  gateway: number;

  @Prop(Number)
  request: number;
}

export const LatencieSchema = SchemaFactory.createForClass(Latencie);
