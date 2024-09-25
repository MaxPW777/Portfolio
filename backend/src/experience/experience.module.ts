import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from '@/experience/schemas/experience.schema';
import { ExperienceService } from '@/experience/experience.service';
import { ExperienceController } from '@/experience/experience.controller';
import { S3Module } from '@/s3/s3.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Experience.name,
        schema: ExperienceSchema,
      },
    ]),
    S3Module,
  ],
  providers: [ExperienceService],
  controllers: [ExperienceController],
})
export class ExperienceModule {}
