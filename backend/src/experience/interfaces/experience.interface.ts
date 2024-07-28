import {IExperience} from "@common/types/IExperience";
import {Document} from "mongoose";

export interface IExperienceDocument extends IExperience, Document {}
