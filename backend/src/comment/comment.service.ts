import {Injectable} from '@nestjs/common';
import {ICommentDocument} from "@/comment/interfaces/comment.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Comment} from "@/comment/schemas/comment.schema";

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<ICommentDocument>) {
    }

    async getForPost(postID: string): Promise<ICommentDocument[]> {
        return this.commentModel.find({postID}).exec();
    }

    async create(comment: ICommentDocument): Promise<ICommentDocument> {
        const createdComment = new this.commentModel(comment);
        return createdComment.save();
    }

}
