import { ICreatePostDto } from '@common/dto/ICreatePostDto';
import { IEditPostDto } from '@common/dto/IEditPostDto';
import { API_URL } from '@common/utils/constants';

const POSTS_URL = `${API_URL}/post`;

export const getPosts = async () => {
    const response = await fetch(POSTS_URL);
    return response.json();
};

export const createPost = async (data: ICreatePostDto) => {
    const response = await fetch(POSTS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
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
