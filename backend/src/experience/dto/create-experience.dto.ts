import { ICreateExperienceDto } from '@common/dto/ICreateExperienceDto';
import { IsDate, IsString } from '@nestjs/class-validator';

export class CreateExperienceDto implements ICreateExperienceDto {
  @IsString()
  public company: string;
  @IsString()
  public description: string;
  public image: File;
  @IsDate()
  public startDate: Date;
  @IsDate()
  public endDate?: Date;
}
