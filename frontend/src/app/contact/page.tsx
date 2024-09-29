import ContactForm from "@/components/contact/ContactForm";
import ContactList from "@/components/contact/ContactList";

const contactData = [
    {
        "_id": "667ac09870c2f4f49ed1dfa0",
        "name": "Jean Dupont",
        "email": "jean.dupont@entreprise.com",
        "message": "Bonjour Max, j'ai découvert votre profil et je suis impressionné par votre travail. J'aimerais discuter d'une potentielle collaboration sur un projet sur lequel nous travaillons. Merci de me dire si vous êtes disponible pour un appel rapide.",
        "date": "1719320728562",
        "__v": 0
    },
    {
        "_id": "6694ec50b747f8b0023f31be",
        "name": "Sarah Martin",
        "email": "sarah.martin@agence.com",
        "message": "Bonjour Max, j'ai récemment lu un article sur votre dernier projet, et je pense que vos compétences conviendraient parfaitement à un projet que nous avons en cours à l'agence. Seriez-vous disponible pour une réunion afin d'en discuter davantage ? J'attends votre réponse avec impatience.",
        "date": "1721035856614",
        "__v": 0
    },
    {
        "_id": "66a0bb3e75ecfaa7acf813d3",
        "name": "Maximilian Pinder-White",
        "email": "mpinderwhite@gmail.com",
        "message": "Bonjour Maximilian, nous sommes intéressés par votre profil et aimerions vous rencontrer pour discuter de votre expérience et de vos motivations. Merci de nous contacter pour convenir d'un rendez-vous. Cordialement, l'équipe de recrutement.",
        "date": "1721809726644",
        "__v": 0
    },
    {
        "_id": "66f7b42452a401d4197d4ac9",
        "name": "David Lefebvre",
        "email": "david.lefebvre@startup.fr",
        "message": "Bonjour Max, je vous contacte car nous lançons une nouvelle startup et nous pensons que votre expertise serait inestimable. Seriez-vous disponible pour discuter d'une éventuelle collaboration en tant que consultant ? Merci de me dire quand vous seriez disponible pour en parler.",
        "date": "1727509540320",
        "__v": 0
    }
];

function ContactPage() {
    return (
        <main className="flex abs-center gap-x-9">
            <ContactForm contactData={contactData}/>
            <ContactList contactData={contactData}/>
        </main>
    );
}

export default ContactPage;
