import {API_URL} from "@common/utils/constants";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";
import {IContactRequest} from "@common/types/IContactRequest";

const CONTACT_URL = `${API_URL}/contact`;

export const getContacts = async () : Promise<IContactRequest[]> => {
    const response = await fetch(CONTACT_URL, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') || '',
        },
    });
    return response.json();
};

export const createContact = async (data : IContactRequestDto) => {
    const response = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
