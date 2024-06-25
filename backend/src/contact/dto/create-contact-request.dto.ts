import {IsNotEmpty, IsString} from '@nestjs/class-validator';
import {IContactRequestDto} from "@common/dto/IContactRequestDto";

export class CreateContactRequestDto implements IContactRequestDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    message: string;
}
