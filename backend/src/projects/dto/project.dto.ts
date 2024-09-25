import {ICreateProjectDto} from "@common/dto/ICreateProjectDto";
import {IsString} from "@nestjs/class-validator";

export class ProjectDto implements ICreateProjectDto{
    @IsString()
    name : string
    @IsString()
    description: string
    @IsString()
    link: string
    @IsString({each : true})
    languages : string[]
}
