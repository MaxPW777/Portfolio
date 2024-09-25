import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPostDocument } from '@/post/interfaces/post.interface';
import { Post } from '@/post/schemas/post.schema';
import { CreatePostDto } from '@/post/dto/create-post.dto';
import { EditPostDto } from '@/post/dto/edit-post.dto';
import { S3Service } from '@/s3/s3.service';
import { CommentService } from '@/comment/comment.service';

@Injectable()
export class PostService {
  public constructor(
    @InjectModel(Post.name) private postModel: Model<IPostDocument>,
    private s3Service: S3Service,
    private commentService: CommentService,
  ) {}

  public async getAll(): Promise<IPostDocument[]> {
    return this.postModel.find().exec();
  }

  public async create(post: CreatePostDto, file: Express.Multer.File, userID: string): Promise<IPostDocument> {
    let imageUrl: string;
    if (file) {
      const imageKey = await this.s3Service.uploadFile(file);
      imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${imageKey}`;
    }

    const createdPost = new this.postModel({
      ...post,
      image: imageUrl,
      author: userID,
    });
    return createdPost.save();
  }

  public async edit(post: EditPostDto, postID: string, userId: string): Promise<IPostDocument> {
    return await this.postModel.findOneAndUpdate({ _id: postID }, post, { new: true }).exec();
  }

  public async delete(postID: string): Promise<IPostDocument> {
    const post = await this.postModel.findById(postID);
    if (post.image) {
      await this.s3Service.deleteFile(post.image.split('/').pop());
    }
    await this.commentService.deleteCommentsByPost(postID);
    return this.postModel.findByIdAndDelete(postID).exec();
  }
}
