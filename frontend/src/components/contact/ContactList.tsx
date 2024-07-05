"use client"
import {useGetContactsQuery} from "@/services/contact";
import {IContactRequest} from "@common/types/IContactRequest";
import {useAuth} from "@/providers/auth-context";

function ContactList() {
    const {isAuthenticated} = useAuth()
    const {data, isLoading} = useGetContactsQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return
    }

    return (
        <div className={'border rounded p-2'}>
            <ul>
                {data && data.map((contact: IContactRequest, index: number) => (
                    <li key={index}>
                        <div>{contact.name}</div>
                        <div>{contact.email}</div>
                        <div>{contact.message}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;
