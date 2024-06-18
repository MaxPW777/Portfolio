import {IUserDocument} from "@common/types/IUser";
import {Document} from "mongoose";

export interface IUserDocument extends Document, IUserDocument {}
