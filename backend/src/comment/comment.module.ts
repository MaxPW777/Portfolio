import {Module} from "@nestjs/common";
import {CommentController} from "@/comments/comment.controller";
import {CommentService} from "@/comments/comment.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Comment, CommentSchema} from "@/comments/schemas/comment.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: Comment.name,
        schema: CommentSchema
    }])],
    controllers: [CommentController],
    providers: [CommentService],
    exports: [CommentService]
})
export class commentModule {
}
