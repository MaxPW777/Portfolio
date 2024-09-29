import {IComment} from "@common/types/IComment";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";

interface CommentListProps {
    comments: IComment[];
}

function CommentList({ comments }: CommentListProps) {
    return (
        <ScrollArea className="flex flex-col py-10 gap-y-4">
            {comments.length > 0 ? comments.map((comment, index) => (
                <Card key={index} className="flex gap-2 justify-between items-center p-4">
                    <div className="flex flex-col gap-y-2">
                        <p>@{comment.author}</p>
                        <p>{comment.content}</p>
                    </div>
                    <div>
                        <p>Ecrit le:</p>
                        <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
                    </div>
                </Card>
            )) : <p>Pas encore de commentaires soit le/la premier(e) a commenter!</p>}
        </ScrollArea>
    );
}


export default CommentList;
