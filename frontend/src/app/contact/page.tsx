import ContactForm from "@/components/contact/ContactForm";
import ContactList from "@/components/contact/ContactList";

const contactData = [{
    "_id": "667ac09870c2f4f49ed1dfa0",
    "name": "max",
    "email": "pinder@white.com",
    "message": "whatup",
    "date": "1719320728562",
    "__v": 0
}, {
    "_id": "6694ec50b747f8b0023f31be",
    "name": "wow",
    "email": "maxc@gmail.com",
    "message": "wow max you are sooooo cool",
    "date": "1721035856614",
    "__v": 0
}, {
    "_id": "66a0bb3e75ecfaa7acf813d3",
    "name": "Maximilian Pinder-White",
    "email": "mpinderwhite@gmail.com",
    "message": "Bonjour Maximilian, nous sommes interesses par votre profil et aimerions vous rencontrer pour discuter de votre experience et de vos motivations. Merci de nous contacter pour convenir d'un rendez-vous. Cordialement, l'equipe de recrutement",
    "date": "1721809726644",
    "__v": 0
}, {
    "_id": "66f7b42452a401d4197d4ac9",
    "name": "max",
    "email": "mpinderwhite@gmail.com",
    "message": "message",
    "date": "1727509540320",
    "__v": 0
}]

function ContactPage() {
    return (
        <div className="flex abs-center gap-x-9">
            <ContactForm contactData={contactData}/>
            <ContactList contactData={contactData}/>
        </div>
    );
}

export default ContactPage;
