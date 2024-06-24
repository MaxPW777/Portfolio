import {IComment} from "@common/types/IComment";
import {useState} from "react";

interface CommentListProps {
    comments: IComment[];
}

function CommentList({comments}: CommentListProps){
    return (
        <div>
            {comments && comments.map((comment) => (
                <div>
                    <p>{comment.content}</p>
                    <p>{comment.author}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentList;
