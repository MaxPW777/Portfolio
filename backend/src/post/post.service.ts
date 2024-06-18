import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IPostDocument} from "@/post/interfaces/post.interface";
import {Post} from "@/post/schemas/post.schema"
import {CreatePostDto} from "@/post/dto/create-post.dto";

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private postModel: Model<IPostDocument>) {
    }

    async findAll(): Promise<IPostDocument[]> {
        return this.postModel.find().exec()
    }

    async create(post: CreatePostDto, userID: string): Promise<IPostDocument> {
        const createdPost = new this.postModel({...post, author: userID});
        return createdPost.save();
    }
}
