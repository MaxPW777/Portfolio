import {useMutation, useQuery, useQueryClient} from "react-query";
import {createContact, getContacts} from "@/services/contact/routes";

export const useGetContacts = () => {
    return useQuery('contacts', getContacts)
}

export const useCreateContactMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(createContact, {
        onSuccess: () => {
            queryClient.invalidateQueries('contacts');
        }
    });
}
