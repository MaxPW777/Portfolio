import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {IUserDocument} from "@/user/interfaces/user.interface";

@Schema()
export class User extends Document implements IUserDocument {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    refresh_token: string;

    @Prop({ default: Date.now })
    created_at: Date;

    @Prop({ default: Date.now })
    updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
