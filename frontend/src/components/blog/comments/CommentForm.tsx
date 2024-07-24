import {useCreateCommentMutation} from '@/services/comment';
import {FormProvider, useForm} from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

interface CommentFormProps {
    postID: string;
}

type commentForm = {
    content: string;
    author: string;
}

function CommentForm({postID}: CommentFormProps) {
    const createCommentMutation = useCreateCommentMutation();
    const formMethods = useForm<commentForm>();

    const onSubmit = async (data: commentForm) => {
        try {
            await createCommentMutation.mutateAsync({
                postID,
                ...data
            });
            formMethods.reset();
        } catch (error) {
            console.error('Failed to create comment', error);
        }
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}
                  className="mt-2 w-full flex flex-col gap-4">
                <div
                    className="flex flex-row justify-between items-center gap-x-10">
                    <FormField control={formMethods.control} name="author"
                               rules={{required: "Author is Required"}} render={
                        ({field}) => (
                            <Input type="text" placeholder="Name" {...field}
                                   className="p-2"/>
                        )}/>
                    <Button type="submit"
                            className='w-1/3 min-w-24'>Submit</Button>
                </div>
                <FormField control={formMethods.control} name="content"
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
        </FormProvider>
    );
}

export default CommentForm;
