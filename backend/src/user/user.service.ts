import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@/user/schemas/user.schema';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { IUserDocument } from '@/user/interfaces/user.interface';

@Injectable()
export class UserService {
  public constructor(@InjectModel(User.name) private userModel: Model<IUserDocument>) {}

  public async findAll(): Promise<IUserDocument[]> {
    return this.userModel.find().exec();
  }

  public async findByName(username: string): Promise<IUserDocument> {
    return this.userModel.findOne({ name: username }).exec();
  }

  public async findById(userId: string): Promise<IUserDocument> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  public async create(user: CreateUserDto): Promise<IUserDocument> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  public async updateRefreshToken(userId: string, refreshToken: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { refresh_token: refreshToken }).exec();
    console.log(`Refresh token updated for user ${userId}`);
  }
}
