import ContactForm from "@/components/contact/ContactForm";
import ContactList from "@/components/contact/ContactList";

function ContactPage() {
    return (
            <div className="flex abs-center">
                <ContactForm/>
                <ContactList/>
            </div>
    );
}

export default ContactPage;
