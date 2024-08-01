import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
import {IsDate, IsString} from "@nestjs/class-validator";

export class CreateExperienceDto implements ICreateExperienceDto {
    @IsString()
    company: string;
    @IsString()
    description: string;
    image: File;
    @IsDate()
    startDate: Date;
    @IsDate()
    endDate? : Date
}
