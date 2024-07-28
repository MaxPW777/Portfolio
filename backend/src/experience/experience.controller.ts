import {Controller, Get} from "@nestjs/common";
import {ExperienceService} from "@/experience/experience.service";

@Controller('experience')
export class ExperienceController {
    constructor(private readonly experienceService: ExperienceService) {
    }

    @Get()
    getAllExperiences() {
        return this.experienceService.getAllExperiences();
    }
}
