import { IComment } from "@common/types/IComment";

interface CommentListProps {
    comments: IComment[];
}

function CommentList({ comments }: CommentListProps) {
    return (
        <div className="flex flex-col py-10 gap-y-4">
            {comments && comments.map((comment) => (
                // @ts-ignore
                <div key={comment._id} className="p-2 border rounded flex gap-2 justify-between items-center">
                    <div className="flex flex-col">
                        <p>@{comment.author}</p>
                        <p>{comment.content}</p>
                    </div>
                    <div>
                        <p>Written on:</p>
                        <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
