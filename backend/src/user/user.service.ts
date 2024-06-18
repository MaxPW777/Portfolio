import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "@/user/schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "@/user/dto/create-user.dto";
import {IUserDocument} from "@/user/interfaces/user.interface";

@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel : Model<IUserDocument>){
    }

    async findAll() : Promise<IUserDocument[]>{
        return this.userModel.find().exec()
    }

    async create(user: CreateUserDto): Promise<IUserDocument> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}
