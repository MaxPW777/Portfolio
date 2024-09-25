import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IContactRequestDocument } from '@/contact/interfaces/contact.interface';

@Schema()
export class Contact extends Document implements IContactRequestDocument {
  @Prop({ required: true })
  public name: string;
  @Prop({ required: true })
  public email: string;
  @Prop({ required: true })
  public message: string;
  @Prop({ default: Date.now })
  public date: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
