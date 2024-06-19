import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ICommentDocument} from "@/comments/interfaces/comment.interface";

@Schema()
export class Comment extends Document implements ICommentDocument {
    @Prop({required: true})
    content: string;
    @Prop()
    postID: string;
    @Prop()
    authorID: string;
    @Prop({default : Date.now})
    createdAt: Date;
    @Prop({default : Date.now})
    updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
