import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { ContactModule } from './contact/contact.module';
import { PostModule } from '@/post/post.module';
import { UserModule } from '@/user/user.module';
import { S3Module } from '@/s3/s3.module';
import { ExperienceModule } from '@/experience/experience.module';
import { ProjectsModule } from '@/projects/projects.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    PostModule,
    ExperienceModule,
    AuthModule,
    CommentModule,
    ContactModule,
    S3Module,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
