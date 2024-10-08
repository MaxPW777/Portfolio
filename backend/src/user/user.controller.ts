import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { IUserDocument } from '@/user/interfaces/user.interface';
import { CreateUserDto } from '@/user/dto/create-user.dto';

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post('create')
  public async create(@Body() createUserDto: CreateUserDto): Promise<IUserDocument> {
    return this.userService.create(createUserDto);
  }

  @Get()
  public async findAll(): Promise<IUserDocument[]> {
    return this.userService.findAll();
  }
}
