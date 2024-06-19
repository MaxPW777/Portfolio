import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import {IEditPostDto} from "@common/dto/IEditPostDto";

export class EditPostDto implements IEditPostDto{
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
