import axios from '@/providers/axios';
import {API_URL} from '@common/utils/constants';

export const login = async ({username, password}: {
    username: string,
    password: string
}): Promise<{
    access_token: string,
    refresh_token: string,
    userid: string
}> => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });
    return response.data;
}
