import {Module} from "@nestjs/common";
import {CommentController} from "@/comment/comment.controller";
import {CommentService} from "@/comment/comment.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Comment, CommentSchema} from "@/comment/schemas/comment.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: Comment.name,
        schema: CommentSchema
    }])],
    controllers: [CommentController],
    providers: [CommentService],
    exports: [CommentService]
})
export class CommentModule {
}
