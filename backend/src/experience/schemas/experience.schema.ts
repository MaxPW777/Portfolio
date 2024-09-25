import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IExperienceDocument } from '@/experience/interfaces/experience.interface';

@Schema()
export class Experience extends Document implements IExperienceDocument {
  @Prop({ required: true })
  public description: string;
  @Prop({ required: true })
  public company: string;
  @Prop({ required: true })
  public image: string;
  @Prop()
  public startDate: Date;
  @Prop()
  public endDate: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
