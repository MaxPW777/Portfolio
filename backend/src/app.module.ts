import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "@/user/user.module";
import {PostModule} from "@/post/post.module";
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';

require('dotenv').config();

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URI), UserModule, PostModule, AuthModule, CommentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
