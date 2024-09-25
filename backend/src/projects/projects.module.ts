import {Module} from "@nestjs/common";
import {ProjectsService} from "@/projects/projects.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "@/projects/schema/project.schema";
import {ProjectsController} from "@/projects/projects.controller";
import {JwtAuthGuard} from "@/auth/jwt-auth.guard";

@Module({
        imports: [MongooseModule.forFeature([{name : Project.name, schema: ProjectSchema}])],
        providers: [ProjectsService],
    controllers: [ProjectsController],
    exports: [ProjectsService]
    })
export class ProjectsModule{}
