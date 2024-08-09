import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Experience} from "@/experience/schemas/experience.schema";
import {Model} from "mongoose";
import {
    IExperienceDocument
} from "@/experience/interfaces/experience.interface";
import {S3Service} from "@/s3/s3.service";
import {CreateExperienceDto} from "@/experience/dto/create-experience.dto";

@Injectable()
export class ExperienceService {
    constructor(@InjectModel(Experience.name) private experienceModel: Model<IExperienceDocument>, private s3Service: S3Service) {
    }

    async getAllExperiences(): Promise<IExperienceDocument[]> {
        return this.experienceModel.find().sort({startDate : 1}).exec()
    }

    async addExperience(experience : CreateExperienceDto, file : Express.Multer.File): Promise<IExperienceDocument> {
        let imageUrl : string;
        if (file) {
            const imageKey = await this.s3Service.uploadFile(file);
            imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${imageKey}`;
        }

        const createdExperience = new this.experienceModel({
            ...experience,
            image: imageUrl
        });
        return createdExperience.save();
    }

    async deleteExperience(id: string): Promise<IExperienceDocument> {
        const experience = await this.experienceModel.findById(id);
        await this.s3Service.deleteFile(experience.image.split('/').pop());
        return this.experienceModel.findByIdAndDelete(id).exec();
    }
}
