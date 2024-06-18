import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "@/user/user.service";
import {IUser} from "@common/types/IUser";
import {CreateUserDto} from "@/user/dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto): Promise<IUser>{
        return this.userService.create(createUserDto)
    }

    @Get()
    async findAll(): Promise<IUser[]> {
        return this.userService.findAll()
    }
}
