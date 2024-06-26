import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ICommentDocument} from "@/comment/interfaces/comment.interface";

@Schema()
export class Comment extends Document implements ICommentDocument {
    @Prop({required: true})
    content: string;
    @Prop()
    postID: string;
    @Prop()
    author: string;
    @Prop({default : Date.now})
    createdAt: Date;
    @Prop({default : Date.now})
    updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
