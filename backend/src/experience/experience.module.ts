import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {
    Experience,
    ExperienceSchema
} from "@/experience/schemas/experience.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: Experience.name,
        schema: ExperienceSchema
    }])],
    providers: [],
    controllers: []
})

export class ExperienceModule {}
