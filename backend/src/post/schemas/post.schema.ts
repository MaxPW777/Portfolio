import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import {IPostDocument} from "@/post/interfaces/post.interface";

@Schema()
export class Post extends Document implements IPostDocument {
    @Prop({required: true})
    title: string;
    @Prop({required: true})
    content: string;
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    author: string;
    @Prop()
    image: string;
    @Prop({default: Date.now})
    created_at: Date;
    @Prop({default: Date.now})
    updated_at: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
