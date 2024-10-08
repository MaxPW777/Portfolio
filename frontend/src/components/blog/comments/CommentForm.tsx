import {useCreateCommentMutation} from '@/services/comment';
import {useForm} from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {IComment} from "@common/types/IComment";
import {IPostDocument} from "@common/types/IPost";


interface CommentFormProps {
    selectedPost: IPostDocument
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
}

type commentForm = {
    content: string;
    author: string;
}

function CommentForm({selectedPost, setComments}: CommentFormProps) {
    const createCommentMutation = useCreateCommentMutation();
    const form = useForm<commentForm>();

    const onSubmit = async (data: commentForm) => {
        try {
            const newComment =({
                ...data,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            selectedPost.comments.push(newComment)
            setComments((prevComments) => [...prevComments])
            form.reset({
                content: "",
                author: ""
            });
        } catch (error) {
            console.error('Failed to create comment', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-2 w-full flex flex-col gap-4">
                <div
                    className="flex flex-row justify-between items-center gap-x-10">
                    <FormField control={form.control} name="author"
                               rules={{required: "Author is Required"}} render={
                        ({field}) => (
                            <Input type="text" placeholder="Name" {...field}
                                   className="p-2"/>
                        )}/>
                    <Button type="submit"
                            className='w-1/3 min-w-24'>Submit</Button>
                </div>
                <FormField control={form.control} name="content"
                           rules={{required: "Content is Required"}} render={
                    ({field, fieldState}) => (
                        <FormItem>
                            <FormControl>
                                <Input type="text"
                                       placeholder="Comment" {...field}
                                       className="p-2"/>
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}/>
            </form>
        </Form>
    );
}

export default CommentForm;
