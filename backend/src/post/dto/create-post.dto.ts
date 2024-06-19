import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import {ICreatePostDto} from "@common/dto/ICreatePostDto";

export class CreatePostDto implements ICreatePostDto{
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
