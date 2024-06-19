import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IPostDocument} from "@/post/interfaces/post.interface";
import {Post} from "@/post/schemas/post.schema"
import {CreatePostDto} from "@/post/dto/create-post.dto";
import {EditPostDto} from "@/post/dto/edit-post.dto";

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private postModel: Model<IPostDocument>) {
    }

    async getAll(): Promise<IPostDocument[]> {
        return this.postModel.find().exec()
    }

    async create(post: CreatePostDto, userID: string): Promise<IPostDocument> {
        const createdPost = new this.postModel({...post, author: userID});
        return createdPost.save();
    }

    async edit(post: EditPostDto, postID: string, userId: string): Promise<IPostDocument> {
        console.log(post, postID, userId)
        return await this.postModel.findOneAndUpdate({
            _id: postID
        }, post, {new: true}).exec();
    }
}
