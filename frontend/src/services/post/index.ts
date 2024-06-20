import { useMutation, useQuery } from 'react-query';
import { createPost, editPost, getPosts } from '@/services/post/routes';
import { ICreatePostDto } from '@common/dto/ICreatePostDto';
import { IEditPostDto } from '@common/dto/IEditPostDto';

// Mutation for creating a post
export const useCreatePostMutation = () => {
    return useMutation((data: ICreatePostDto) => createPost(data));
};

// Query for fetching posts
export const useGetPostsQuery = () => {
    return useQuery('posts', getPosts);
};

// Mutation for editing a post
export const useEditPostMutation = () => {
    return useMutation(({ id, data }: { id: string; data: IEditPostDto }) => editPost(id, data));
};
