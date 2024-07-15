import {useCreateCommentMutation} from '@/services/comment';
import {useForm} from "react-hook-form";

interface CommentFormProps {
    postID: string;
}

type commentForm = {
    content: string;
    author: string;
}

function CommentForm({postID}: CommentFormProps) {
    const createCommentMutation = useCreateCommentMutation();
    const {register, handleSubmit, reset} = useForm<commentForm>();

    const onSubmit = async (data: commentForm) => {
        try {
            await createCommentMutation.mutateAsync({
                postID,
                ...data
            });
            reset()
        } catch (error) {
            console.error('Failed to create comment', error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="mt-2 w-full flex flex-col">
            <div className={'flex w-full gap-x-12'}>
            <div className={'flex flex-col w-full '}>
                <label className="text-sm">Name:</label>
                <input className={'p-2 border rounded'}
                       type="text" {...register('author')}/>
            </div>
            <button type="submit"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded w-1/2">
                Post
            </button>
            </div>
            <textarea
                {...register('content')}
                className="mt-2 p-2 w-full border rounded"
                placeholder="Write a comment..."
            ></textarea>
        </form>
    );
}

export default CommentForm;
