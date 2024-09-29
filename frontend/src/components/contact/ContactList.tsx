"use client"
import {useGetContactsQuery} from "@/services/contact";
import {IContactRequest} from "@common/types/IContactRequest";
import {useAuth} from "@/providers/auth-context";
import Link from "next/link";

interface IContactListProps {
    contactData: IContactRequest[];
}

function ContactList({contactData}: IContactListProps) {
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {
        return <div>
            <p>
                afin de voir les messages et decouvrir le site veuillez vous connecter sur le compte administateur
                <Link href={'/login'}>CLIQUEZ ICI</Link>
                avec le nom d&#39;utilisateur: <strong>max</strong> et le mot de passe: <strong>password</strong>
            </p>
        </div>
    }

    return (
        <div className={'contact overflow-y-auto h-[600px] w-[600px] p-4'}>
            <ul className={'flex flex-col gap-y-2.5'}>
                {contactData && contactData.map((contact: IContactRequest, index: number) => (
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
