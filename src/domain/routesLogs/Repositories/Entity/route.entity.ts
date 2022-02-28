import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema()
export class Route {
  @Prop(String)
  hosts: string;

  @Prop(String)
  protocols: string[];

  @Prop(String)
  methods: string[];

  @Prop(String)
  paths: string[];

  @Prop(Boolean)
  preserve_host: boolean;

  @Prop(Number)
  regex_priority: number;

  @Prop(Object)
  service: { id: string };

  @Prop(Boolean)
  strip_path: boolean;

  @Prop(Date)
  created_at: Date;

  @Prop(Date)
  updated_at: Date;
}

export const RouteSchema = SchemaFactory.createForClass(Route);
