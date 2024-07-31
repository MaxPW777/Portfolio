import {IsNotEmpty, IsString} from '@nestjs/class-validator';
import {ICreateCommentDto} from "@common/dto/ICreateCommentDto";

export class CreateCommentDto implements ICreateCommentDto {
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
