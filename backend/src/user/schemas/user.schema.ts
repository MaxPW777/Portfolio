import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUserDocument } from '@/user/interfaces/user.interface';

@Schema()
export class User extends Document implements IUserDocument {
  @Prop({ required: true })
  public name: string;

  @Prop({ required: true, unique: true })
  public email: string;

  @Prop({ required: true })
  public password: string;

  @Prop()
  public refresh_token: string;

  @Prop({ default: Date.now })
  public created_at: Date;

  @Prop({ default: Date.now })
  public updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
