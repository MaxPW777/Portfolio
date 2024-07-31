import {
    Body,
    Controller,
    Get,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {ExperienceService} from "@/experience/experience.service";
import {JwtAuthGuard} from "@/auth/jwt-auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateExperienceDto} from "@/experience/dto/create-experience.dto";

@Controller('experience')
export class ExperienceController {
    constructor(private readonly experienceService: ExperienceService) {
    }

    @Get()
    getAllExperiences() {
        return this.experienceService.getAllExperiences();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    addExperience(@Body() experience: CreateExperienceDto, @UploadedFile() file: Express.Multer.File) {
        return this.experienceService.addExperience(experience, file);
    }
}
