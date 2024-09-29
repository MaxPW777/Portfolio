import {IComment} from "@common/types/IComment";

export interface IPost{
    title: string;
    content: string;
    author: string;
    image?: string;
    created_at: Date;
    updated_at: Date;
}

export interface IPostDocument extends IPost {
    _id: string;
    __v: number;
    image?: string;
    comments: IComment[];
}
