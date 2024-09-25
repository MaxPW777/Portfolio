import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from '@/contact/schemas/contact.schema';
import { IContactRequestDocument } from '@/contact/interfaces/contact.interface';
import { CreateContactRequestDto } from '@/contact/dto/create-contact-request.dto';

@Injectable()
export class ContactService {
  public constructor(@InjectModel(Contact.name) private contactModel: Model<IContactRequestDocument>) {}

  public async getAllContacts(): Promise<IContactRequestDocument[]> {
    return this.contactModel.find().exec();
  }

  public async createContact(contactRequest: CreateContactRequestDto): Promise<IContactRequestDocument> {
    const createdContact = new this.contactModel(contactRequest);
    return createdContact.save();
  }
}
