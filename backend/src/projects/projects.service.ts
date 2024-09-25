import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Project} from "@/projects/schema/project.schema";
import {Model} from "mongoose";
import {ProjectDto} from "@/projects/dto/project.dto";

@Injectable()
export class ProjectsService{
    constructor(@InjectModel(Project.name) private projectModel : Model<Project>) {
    }

    async getProjects() : Promise<Project[]> {
        return this.projectModel.find()
    }

    async createProject(body : ProjectDto){
        return this.projectModel.create(body)
    }
}
