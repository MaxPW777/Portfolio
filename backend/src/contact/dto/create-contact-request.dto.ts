import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { IContactRequestDto } from '@common/dto/IContactRequestDto';

export class CreateContactRequestDto implements IContactRequestDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public message: string;
}
