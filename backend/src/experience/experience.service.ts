import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Experience} from "@/experience/schemas/experience.schema";
import {Model} from "mongoose";
import {
    IExperienceDocument
} from "@/experience/interfaces/experience.interface";

@Injectable()
export class ExperienceService {
    constructor(@InjectModel(Experience.name) private experienceModel: Model<IExperienceDocument>) {
    }

    async getAllExperiences(): Promise<IExperienceDocument[]> {
        return this.experienceModel.find().exec()
    }
}
