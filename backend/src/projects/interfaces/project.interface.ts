import {IProject} from "@common/types/IProject";
import {Document} from "mongoose";

export interface IProjectDocument extends Document, IProject{}
