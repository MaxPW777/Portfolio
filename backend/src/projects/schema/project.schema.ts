import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IProjectDocument} from "@/projects/interfaces/project.interface";
import {Document} from "mongoose";

@Schema()
export class Project extends Document implements IProjectDocument {
    @Prop({required : true})
    name : string


@Prop({required : true})
    description : string

@Prop({required : true})
    languages : string[]
@Prop({required : true})
    link : string
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
