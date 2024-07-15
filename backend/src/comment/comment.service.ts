import {Injectable} from '@nestjs/common';
import {ICommentDocument} from "@/comment/interfaces/comment.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Comment} from "@/comment/schemas/comment.schema";
import {DeleteResult} from "mongodb";

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<ICommentDocument>) {
    }

    async getForPost(postID: string): Promise<ICommentDocument[]> {
        // Sorting comments by creation date in descending order (newest first)
        return this.commentModel.find({postID}).sort({createdAt: -1}).exec();
    }

    async create(comment: ICommentDocument): Promise<ICommentDocument> {
        const createdComment = new this.commentModel(comment);
        return createdComment.save();
    }

    async deleteCommentsByPost(postID: string): Promise<DeleteResult> {
        return this.commentModel.deleteMany({postID}).exec();
    }
}
