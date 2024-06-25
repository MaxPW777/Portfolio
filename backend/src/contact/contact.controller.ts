import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ContactService} from "@/contact/contact.service";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";
import {JwtAuthGuard} from "@/auth/jwt-auth.guard";

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllContacts() {
        return this.contactService.getAllContacts();
    }

    @Post()
    createContact(@Body() contactRequest: IContactRequestDto) {
        return this.contactService.createContact(contactRequest);
    }
}
