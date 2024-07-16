import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreatePostMutation } from '@/services/post';
import { ICreatePostDto } from '@common/dto/ICreatePostDto';

interface IFormInput {
    title: string;
    content: string;
    image: string;
}

const NewPost: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const createPost = useCreatePostMutation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

    const toggleMenu = () => setShowMenu(!showMenu);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const postDto: ICreatePostDto = {
            title: data.title,
            content: data.content,
            image: data.image[0], // Assuming the first file is the one to upload
        };

        createPost.mutate(postDto, {
            onSuccess: () => {
                toggleMenu();
                reset();
            },
            onError: (error: any) => {
                console.error('Error creating post:', error);
            }
        });
    };

    return (
        <>
            <div className={'absolute right-1 top-1 flex'}>
                <button
                    onClick={toggleMenu}
                    className="rounded-2xl bg-blue-500 p-3 text-white"
                >
                    + New Post
                </button>
            </div>
            {showMenu && (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="absolute z-10 top-16 right-1 bg-white p-4 rounded-lg shadow-md"
                >
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-2 border rounded mb-4"
                        {...register('title', { required: true })}
                    />
                    {errors.title && <span className="text-red-500">This field is required</span>}

                    <input
                        type="file"
                        className="w-full p-2 border rounded mb-4"
                        {...register('image', { required: false })}
                    />

                    <textarea
                        placeholder="Content"
                        className="w-full p-2 border rounded mb-4"
                        {...register('content', { required: true })}
                    />
                    {errors.content && <span className="text-red-500">This field is required</span>}

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Post
                    </button>
                </form>
            )}
        </>
    );
};

export default NewPost;
