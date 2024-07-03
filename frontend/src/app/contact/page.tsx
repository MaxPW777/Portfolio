import ContactForm from "@/components/contact/ContactForm";
import ContactList from "@/components/contact/ContactList";

function ContactPage() {
    return (
        <div>
            <h1>Contact</h1>
            <div className="flex abs-center">
                <div className={'border rounded p-2'}>
                    <ContactForm/>
                </div>
                <div className={'border rounded p-2'}>
                    <ContactList/>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
