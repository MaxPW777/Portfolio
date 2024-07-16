"use client"
import ContactForm from "@/components/contact/ContactForm";
import ContactList from "@/components/contact/ContactList";
import {useAuth} from "@/providers/auth-context";

function ContactPage() {
    const {isAuthenticated} = useAuth();
    return (
        <div className="flex abs-center gap-x-9">
            <ContactForm/>
            {isAuthenticated && <ContactList/>}
        </div>
    );
}

export default ContactPage;
