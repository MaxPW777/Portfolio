import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import {ICreatePostDto} from "@common/dto/ICreatePostDto";
import {ICreateComentDto} from "@common/dto/ICreateComentDto";

export class CreatePostDto implements ICreateComentDto{
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    postID: string;
}
