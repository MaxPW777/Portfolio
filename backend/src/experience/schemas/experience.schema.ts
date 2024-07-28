import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IExperienceDocument} from "@/experience/interfaces/experience.interface";
import {Document} from "mongoose";

@Schema()
export class Experience extends Document implements IExperienceDocument {
    @Prop({required : true})
    title: string;
    @Prop({required : true})
    description: string;
    @Prop({required : true})
    company: string;
    @Prop()
    image: string;
    @Prop()
    endDate: Date;
    @Prop()
    startDate: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
