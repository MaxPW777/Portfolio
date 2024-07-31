import {API_URL} from "@common/utils/constants";
import {ICreateCommentDto} from "@common/dto/ICreateCommentDto";

const COMMENT_API = API_URL + "/comment";

export const getCommentsForPost = async (postId: string) => {
    const response = await fetch(`${COMMENT_API}/${postId}`);
    return response.json();
};

export const createComment = async (data: ICreateCommentDto) => {
    const response = await fetch(COMMENT_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

