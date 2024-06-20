import {API_URL} from "@common/utils/constants";

export const login = async ({username, password}: {
    username: string,
    password: string
}): Promise<{access_token : string, userid : string}  > => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });
    return response.json();
}
