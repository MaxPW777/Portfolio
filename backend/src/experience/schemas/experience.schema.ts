import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IExperienceDocument} from "@/experience/interfaces/experience.interface";
import {Document} from "mongoose";

@Schema()
export class Experience extends Document implements IExperienceDocument {
    @Prop({required : true})
    description: string;
    @Prop({required : true})
    company: string;
    @Prop({required : true})
    image: string;
    @Prop()
    startDate: Date;
    @Prop()
    endDate: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
