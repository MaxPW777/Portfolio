import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProjectsService } from '@/projects/projects.service';
import { ProjectDto } from '@/projects/dto/project.dto';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('/projects')
export class ProjectsController {
  public constructor(private readonly projectService: ProjectsService) {}
  @Get()
  public getAllProjects() {
    return this.projectService.getProjects();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public createProject(@Body() body: ProjectDto) {
    return this.projectService.createProject(body);
  }
}
