import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ICreateUserDto } from '@common/dto/ICreateUserDto';

export class CreateUserDto implements ICreateUserDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;
}
