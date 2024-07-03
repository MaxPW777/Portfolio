"use client"
import {useGetContactsQuery} from "@/services/contact";
import {IContactRequest} from "@common/types/IContactRequest";
import {useEffect, useState} from "react";

function ContactList() {
    const [isLogged, setIsLogged] = useState(false);
    const {data, isLoading} = useGetContactsQuery();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        setIsLogged(token !== null);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isLogged) {
        return
    }

    return (
        <ul>
            {data && data.map((contact: IContactRequest, index: number) => (
                <li key={index}>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>{contact.message}</div>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;
