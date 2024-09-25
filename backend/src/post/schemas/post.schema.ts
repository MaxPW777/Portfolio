import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IPostDocument } from '@/post/interfaces/post.interface';

@Schema()
export class Post extends Document implements IPostDocument {
  @Prop({ required: true })
  public title: string;
  @Prop({ required: true })
  public content: string;
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  public author: string;
  @Prop()
  public image: string;
  @Prop({ default: Date.now })
  public created_at: Date;
  @Prop({ default: Date.now })
  public updated_at: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
