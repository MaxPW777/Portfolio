import {IPost} from "@common/types/IPost";
import {Document} from "mongoose";

export interface IPostDocument extends Document, IPost {}
