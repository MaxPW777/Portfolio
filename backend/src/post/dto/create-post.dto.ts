import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ICreatePostDto } from '@common/dto/ICreatePostDto';

export class CreatePostDto implements ICreatePostDto {
  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public content: string;

  // image will be handled separately by Multer
  public image?: File;
}
