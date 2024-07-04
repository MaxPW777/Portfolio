import {Module} from "@nestjs/common";
import {PostController} from "@/post/post.controller";
import {PostService} from "@/post/post.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Post, PostSchema} from "@/post/schemas/post.schema";
import {CommentModule} from "@/comment/comment.module";

@Module({
    imports: [MongooseModule.forFeature([{
        name: Post.name,
        schema: PostSchema
    }]), CommentModule],
    controllers: [PostController],
    providers: [PostService],
    exports: [PostService]
})
export class PostModule {
}
