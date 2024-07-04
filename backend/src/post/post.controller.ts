import {
    Body,
    Controller, Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UseGuards
} from "@nestjs/common";
import {PostService} from "@/post/post.service";
import {CreatePostDto} from "@/post/dto/create-post.dto";
import {IPostDocument} from "@/post/interfaces/post.interface";
import {JwtAuthGuard} from "@/auth/jwt-auth.guard";
import {EditPostDto} from "@/post/dto/edit-post.dto";
import {CommentService} from "@/comment/comment.service";


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService, private commentService: CommentService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createPostDto: CreatePostDto, @Req() req): Promise<IPostDocument>{
        const userId = req.user.userId; // Assumes the JWT strategy adds a `user` object to the reques
        return this.postService.create(createPostDto, userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put('edit/:id')
    async edit(@Param('id') postId : string, @Body() editPostDto : EditPostDto, @Req() req): Promise<IPostDocument>{
        const userId = req.user.userId;
        return this.postService.edit(editPostDto, postId, userId);
    }
    @Get()
    async getAllPosts(): Promise<IPostDocument[]> {
        return this.postService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(@Param('id') postId : string): Promise<IPostDocument>{
        await this.commentService.deleteCommentsByPost(postId);
        return this.postService.delete(postId);
    }
}
