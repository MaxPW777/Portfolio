import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '@/projects/schema/project.schema';
import { ProjectDto } from '@/projects/dto/project.dto';

@Injectable()
export class ProjectsService {
  public constructor(@InjectModel(Project.name) private projectModel: Model<Project>) {}

  public async getProjects(): Promise<Project[]> {
    return this.projectModel.find();
  }

  public async createProject(body: ProjectDto) {
    return this.projectModel.create(body);
  }
}
