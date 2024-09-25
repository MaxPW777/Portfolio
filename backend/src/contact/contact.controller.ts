import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ContactService } from '@/contact/contact.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateContactRequestDto } from '@/contact/dto/create-contact-request.dto';

@Controller('contact')
export class ContactController {
  public constructor(private readonly contactService: ContactService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  public getAllContacts() {
    return this.contactService.getAllContacts();
  }

  @Post()
  public createContact(@Body() contactRequest: CreateContactRequestDto) {
    return this.contactService.createContact(contactRequest);
  }
}
