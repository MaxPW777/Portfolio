import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Contact} from "@/contact/schemas/contact.schema";
import {IContactRequestDocument} from "@/contact/interfaces/contact.interface";
import {Model} from "mongoose";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";

@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<IContactRequestDocument>) {
    }

    async getAllContacts(): Promise<IContactRequestDocument[]> {
        return this.contactModel.find().exec()
    }

    async createContact(contactRequest: IContactRequestDto): Promise<IContactRequestDocument> {
        const createdContact = new this.contactModel(contactRequest);
        return createdContact.save();
    }
}
