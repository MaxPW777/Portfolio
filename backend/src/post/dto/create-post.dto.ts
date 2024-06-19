import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}