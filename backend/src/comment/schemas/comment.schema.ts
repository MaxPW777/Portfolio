import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICommentDocument } from '@/comment/interfaces/comment.interface';

@Schema()
export class Comment extends Document implements ICommentDocument {
  @Prop({ required: true })
  public content: string;
  @Prop()
  public postID: string;
  @Prop()
  public author: string;
  @Prop({ default: Date.now })
  public createdAt: Date;
  @Prop({ default: Date.now })
  public updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
