import {useMutation, useQuery, useQueryClient} from 'react-query';
import {
    createPost,
    deletePost,
    editPost,
    getPosts
} from '@/services/post/routes';
import { ICreatePostDto } from '@common/dto/ICreatePostDto';
import { IEditPostDto } from '@common/dto/IEditPostDto';

// Mutation for creating a post
export const useCreatePostMutation = () => {
    const queryClient = useQueryClient()
    return useMutation((data: ICreatePostDto) => createPost(data), {onSuccess: () => {
        // Invalidate the posts query to refetch the data
            queryClient.invalidateQueries('posts');}
    });
};

// Query for fetching posts
export const useGetPostsQuery = () => {
    return useQuery('posts', getPosts);
};

// Mutation for editing a post
export const useEditPostMutation = () => {
    return useMutation(({ id, data }: { id: string; data: IEditPostDto }) => editPost(id, data));
};

// Mutation for deleting a post
export const useDeletePostMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((id: string) => deletePost(id), {
        onSuccess: () => {
            // Invalidate the posts query to refetch the data
            queryClient.invalidateQueries('posts');
        },
    });
}
