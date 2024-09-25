import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from '@/post/post.controller';
import { PostService } from '@/post/post.service';
import { Post, PostSchema } from '@/post/schemas/post.schema';
import { CommentModule } from '@/comment/comment.module';
import { S3Service } from '@/s3/s3.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
    CommentModule,
  ],
  controllers: [PostController],
  providers: [PostService, S3Service],
  exports: [PostService],
})
export class PostModule {}
