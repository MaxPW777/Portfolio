import {IPost} from "@common/types/Ipost";
import {Document} from "mongoose";

export interface IPostDocument extends Document, IPost {}
