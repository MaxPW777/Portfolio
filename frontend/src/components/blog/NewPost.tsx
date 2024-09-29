"use client"
import { useForm } from 'react-hook-form';
import { useCreatePostMutation } from '@/services/post';
import { ICreatePostDto } from '@common/dto/ICreatePostDto';
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from '../ui/input';
import {Textarea} from "@/components/ui/textarea";
import {useAuth} from "@/providers/auth-context";
import {IPostDocument} from "@common/types/IPost";

interface NewPostProps {
    setPostData: React.Dispatch<React.SetStateAction<IPostDocument[]>>;
}

function NewPost({setPostData}: NewPostProps) {
    const {isAuthenticated} = useAuth()
    const form = useForm<ICreatePostDto>({ defaultValues: {
        content: "",
        title: "",
        image: ""
        } });
    // const mutation = useCreatePostMutation();

    if (!isAuthenticated) return

    const onSubmit = async (data: ICreatePostDto) => {
        // Convert image field to File if it's not already
        // const imageFile = data.image instanceof FileList ? data.image[0] : data.image;
        // const postData : ICreatePostDto = { ...data, image: imageFile };
        try {
            // await mutation.mutateAsync(postData);
            const newPost = ({
                ...data,
                __v: 0,
                author: 'Anonymous',
                comments: [],
                _id: Math.random().toString(),
                created_at: new Date(),
                updated_at: new Date()
            })
            setPostData((prevPosts) => [...prevPosts, newPost]);
            form.reset();
        } catch (error) {
            console.error('Failed to create post', error);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='absolute right-5 top-5 z-30'>+ New Post</Button>
            </DialogTrigger>
            <DialogContent className={'min-w-[600px]'}>
                <DialogHeader>
                    <DialogTitle>Add a New Post</DialogTitle>
                    <DialogDescription>Use this form to add a new post to the database</DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form className={'gap-y-2.5 flex flex-col'} onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} rules={{ required: "title is required" }} name="title"
                                   render={({ field, fieldState }) => (
                                       <FormItem>
                                           <FormLabel>Title</FormLabel>
                                           <FormControl>
                                               <Input placeholder='Really cool title' {...field} />
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )} />
                        <FormField control={form.control} rules={{ required: "content is required" }} name="content"
                                   render={({ field, fieldState }) => (
                                       <FormItem>
                                           <FormLabel>Content</FormLabel>
                                           <FormControl>
                                               <Textarea className={'h-[400px]'} placeholder='Lorem Ipsum Content' {...field} />
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )} />
                        <FormField control={form.control} name="image"
                                   render={({ field }) => (
                                       <FormItem>
                                             <FormLabel>Image</FormLabel>
                                             <FormControl>
                                                  <Input placeholder={'link to image'} {...field} />
                                             </FormControl>
                                       </FormItem>
                                   )} />
                        <DialogClose asChild>
                            <Button type='submit'>Submit</Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default NewPost;
