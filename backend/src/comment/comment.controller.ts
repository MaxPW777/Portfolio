import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CommentService} from "@/comments/comment.service";
import {ICommentDocument} from "@/comments/interfaces/comment.interface";

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {
    }

    @Get(':id')
    async getCommentsForPost(@Param('id') postID: string): Promise<ICommentDocument[]> {
        return this.commentService.getForPost(postID);
    }

    @Post('create')
    async createComment(@Body() comment: ICommentDocument): Promise<ICommentDocument> {
        return this.commentService.create(comment);
    }

}
