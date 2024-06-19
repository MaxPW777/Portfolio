import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    authorID: string;

    @IsNotEmpty()
    @IsString()
    postID: string;
}
