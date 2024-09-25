import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ICreateCommentDto } from '@common/dto/ICreateCommentDto';

export class CreateCommentDto implements ICreateCommentDto {
  @IsNotEmpty()
  @IsString()
  public content: string;

  @IsNotEmpty()
  @IsString()
  public author: string;

  @IsNotEmpty()
  @IsString()
  public postID: string;
}
