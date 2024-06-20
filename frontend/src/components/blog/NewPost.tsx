import {useEffect, useState} from 'react';
import {useCreatePostMutation} from '@/services/post';

const NewPost: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<{
        message: string,
        statusCode: string
    }>()
    const [showMenu, setShowMenu] = useState(false);
    const createPost = useCreatePostMutation();

    const toggleMenu = () => setShowMenu(!showMenu);

    const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        createPost.mutate({
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        });
        toggleMenu();
    };

    useEffect(() => {
        if (createPost.data && createPost.data.statusCode != undefined ) {
            setErrorMessage({
                message: createPost.data.message,
                statusCode: createPost.data.statusCode,
            });
        }
    }, [createPost.data]);

    return (
        <>
            <div className={'absolute right-1 top-1 flex'}>
            {errorMessage && (
                <div className="text-red-500 p-3 rounded-lg">
                    {errorMessage.message}
                </div>
            )}
            <button
                onClick={toggleMenu}
                className=" rounded-2xl bg-blue-500 p-3 text-white"
            >
                + New Post
            </button>
            </div>
            {showMenu && (
                <form
                    onSubmit={submitPost}
                    className="absolute top-16 right-1 bg-white p-4 rounded-lg shadow-md"
                >
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="w-full p-2 border rounded mb-4"
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button type="submit"
                            className="bg-blue-500 text-white p-2 rounded">
                        Post
                    </button>
                </form>
            )}
        </>
    );
};

export default NewPost;
