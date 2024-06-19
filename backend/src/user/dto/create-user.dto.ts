import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import {ICreateUserDto} from "@common/dto/ICreateUserDto";

export class CreateUserDto implements ICreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
