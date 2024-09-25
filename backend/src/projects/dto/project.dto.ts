import { ICreateProjectDto } from '@common/dto/ICreateProjectDto';
import { IsString } from '@nestjs/class-validator';

export class ProjectDto implements ICreateProjectDto {
  @IsString()
  public name: string;
  @IsString()
  public description: string;
  @IsString()
  public link: string;
  @IsString({ each: true })
  public languages: string[];
}
