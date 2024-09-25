import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProjectDocument } from '@/projects/interfaces/project.interface';

@Schema()
export class Project extends Document implements IProjectDocument {
  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public description: string;

  @Prop({ required: true })
  public languages: string[];

  @Prop({ required: true })
  public link: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
