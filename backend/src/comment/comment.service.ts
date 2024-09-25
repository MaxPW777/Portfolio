import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Comment } from '@/comment/schemas/comment.schema';
import { ICommentDocument } from '@/comment/interfaces/comment.interface';
import { CreateCommentDto } from '@/comment/dto/create-comment.dto';

@Injectable()
export class CommentService {
  public constructor(@InjectModel(Comment.name) private commentModel: Model<ICommentDocument>) {}

  public async getForPost(postID: string): Promise<ICommentDocument[]> {
    // Sorting comments by creation date in descending order (newest first)
    return this.commentModel.find({ postID }).sort({ createdAt: -1 }).exec();
  }

  public async create(comment: CreateCommentDto): Promise<ICommentDocument> {
    const createdComment = new this.commentModel(comment);
    return createdComment.save();
  }

  public async deleteCommentsByPost(postID: string): Promise<DeleteResult> {
    return this.commentModel.deleteMany({ postID }).exec();
  }
}
