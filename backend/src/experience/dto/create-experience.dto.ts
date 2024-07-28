import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
import {IsString} from "@nestjs/class-validator";

export class CreateExperienceDto implements ICreateExperienceDto {
    @IsString()
    title: string;
    @IsString()
    company: string;
    @IsString()
    description: string;
    @IsString()
    image: string;
}
