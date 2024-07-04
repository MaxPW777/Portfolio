import { ICreatePostDto } from '@common/dto/ICreatePostDto';
import { IEditPostDto } from '@common/dto/IEditPostDto';
import { API_URL } from '@common/utils/constants';
import axios from '@/providers/axios';

const POSTS_URL = `${API_URL}/post`;

export const getPosts = async () => {
    const response = await fetch(POSTS_URL);
    return response.json();
};

export const createPost = async (data: ICreatePostDto) => {
    return await axios.post(POSTS_URL, data);
};


export const editPost = async (id: string, data: IEditPostDto) => {
    const response = await fetch(`${POSTS_URL}/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deletePost = async (id: string) => {
    return await axios.delete(`${POSTS_URL}/delete/${id}`);
}
