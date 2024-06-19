import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class EditPostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
