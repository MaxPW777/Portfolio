"use client"
import {useGetContactsQuery} from "@/services/contact";
import {IContactRequest} from "@common/types/IContactRequest";
import {useAuth} from "@/providers/auth-context";

function ContactList() {
    const {isAuthenticated} = useAuth()
    const {data, isLoading} = useGetContactsQuery();

    if (isAuthenticated && isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return
    }

    return (
        <div className={'contact overflow-y-auto h-[600px] w-[600px] p-4'}>
            <ul className={'flex flex-col gap-y-2.5'}>
                {data && data.map((contact: IContactRequest, index: number) => (
                    <li className={'border rounded p-3 flex flex-col gap-y-2.5'} key={index}>
                        <div className={'flex justify-between'}>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                        </div>
                        <p className={'w-full'}>{contact.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;
