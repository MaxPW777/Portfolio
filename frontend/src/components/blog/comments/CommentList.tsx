import {IComment} from "@common/types/IComment";

interface CommentListProps {
    comments: IComment[];
}

function CommentList({comments}: CommentListProps) {
    return (
        <div className={'flex flex-col'}>
            {comments && comments.map((comment) => (
                <div className={'p-2 border rounded flex flex-col gap-2'}>
                    <p>@{comment.author}</p>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentList;
