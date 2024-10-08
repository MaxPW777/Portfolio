import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from '@/comment/comment.service';
import { ICommentDocument } from '@/comment/interfaces/comment.interface';
import { CreateCommentDto } from '@/comment/dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  public constructor(private readonly commentService: CommentService) {}

  @Get(':id')
  public async getCommentForPost(@Param('id') postID: string): Promise<ICommentDocument[]> {
    return this.commentService.getForPost(postID);
  }

  @Post()
  public async createComment(@Body() comment: CreateCommentDto): Promise<ICommentDocument> {
    return this.commentService.create(comment);
  }
}
