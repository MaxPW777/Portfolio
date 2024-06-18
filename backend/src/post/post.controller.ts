import {Body, Controller, Get, Post, Req} from "@nestjs/common";
import {PostService} from "@/post/post.service";
import {CreatePostDto} from "@/post/dto/create-post.dto";
import {IPostDocument} from "@/post/interfaces/post.interface";


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {
    }

    @Post('create')
    async create(@Body() createPostDto: CreatePostDto, @Req() req): Promise<IPostDocument>{
        console.log(req)
        const userId = req.user.userId; // Assumes the JWT strategy adds a `user` object to the reques
        return this.postService.create(createPostDto, userId)
    }

    @Get()
    async findAll(): Promise<IPostDocument[]> {
        return this.postService.findAll()
    }
}
