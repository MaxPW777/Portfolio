import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExperienceService } from '@/experience/experience.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateExperienceDto } from '@/experience/dto/create-experience.dto';

@Controller('experience')
export class ExperienceController {
  public constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  public getAllExperiences() {
    return this.experienceService.getAllExperiences();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  public addExperience(@Body() experience: CreateExperienceDto, @UploadedFile() file: Express.Multer.File) {
    return this.experienceService.addExperience(experience, file);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public deleteExperience(@Param('id') id: string) {
    return this.experienceService.deleteExperience(id);
  }
}
