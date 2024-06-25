import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IContactRequestDocument} from "@/contact/interfaces/contact.interface";
import {Document} from "mongoose";

@Schema()
export class Contact extends Document implements IContactRequestDocument {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    email: string;
    @Prop({required: true})
    message: string;
    @Prop({default: Date.now})
    date: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
