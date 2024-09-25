import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { IEditPostDto } from '@common/dto/IEditPostDto';

export class EditPostDto implements IEditPostDto {
  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public content: string;
}
