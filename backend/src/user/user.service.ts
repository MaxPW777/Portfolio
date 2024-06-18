import {Injectable} from "@nestjs/common";
import {IUser} from "@common/types/IUser";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "@/user/schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "@/user/dto/create-user.dto";

@Injectable()
export class UserService{

    constructor(@InjectModel('Users') private userModel : Model<IUser>){
    }

    async findAll() : Promise<IUser[]>{
        return this.userModel.find().exec()
    }

    async create(user: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}
