import {Document} from "mongoose";
import {IComment} from "@common/types/IComment";

export interface ICommentDocument extends Document, IComment {
}
