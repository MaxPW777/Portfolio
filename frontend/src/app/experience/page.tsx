"use client"
import ExperienceList from "@/components/experience/ExperienceList";
import ExperienceButton from "@/components/experience/ExperienceButton";
import {useState} from "react";
const experienceDataSource =
    [
        {
            "_id": "66b490cc7620d00dc41c0574",
            "description": "Au sein de Ynov Sophia Antipolis, j'ai suivi un cursus en Informatique où j'ai acquis des compétences approfondies en développement logiciel (JavaScript, HTML, CSS, React, Angular, Java, Python), en systèmes d'information (SQL, NoSQL, administration des systèmes Linux/Windows, cybersécurité) et en gestion de projet Agile (Scrum, Kanban). J'ai participé à des projets marquants, notamment le développement de ce portfolio, fait en NextJS comme frontend et NestJS comme backend.",
            "company": "Ynov",
            "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/93b91e98-2ce8-46a7-8651-d729b94d8a27",
            "startDate": new Date("2022-01-08T23:00:00.000Z"),
            "__v": 0
        },
        {
            "_id": "66f50c9cd6081a71db9d4234",
            "description": "Luxcarta est une entreprise spécialisée dans la cartographie numérique et la modélisation géospatiale, fournissant des solutions avancées pour l'industrie des télécommunications, de la défense, et de l'urbanisme. Lors de mon passage chez Luxcarta en tant que développeur, j'ai conçu et développé une application de bureau en Electron, utilisant React et Vite pour le front-end. Cette application servait de downloader permettant aux utilisateurs de télécharger facilement les solutions offertes par l'entreprise, tout en garantissant une interface utilisateur rapide et efficace.",
            "company": "Luxcarta",
            "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/bd22b4c8-efc1-497f-b49b-595a08c23d69",
            "startDate": new Date("2024-03-17T23:00:00.000Z"),
            "endDate": new Date("2024-08-01T22:00:00.000Z"),
            "__v": 0
        },
        {
            "_id": "66f50b86d6081a71db9d422a",
            "description": "VEV est une entreprise innovante spécialisée dans le développement de plateformes numériques, intégrant des technologies modernes et de l'intelligence artificielle pour simplifier les processus métiers et améliorer la productivité des entreprises. En tant que développeur fullstack chez VEV, je travaille sur leur plateforme phare, VEV IQ, en utilisant Angular pour le front-end, ExpressJS pour le back-end, et NestJS pour les microservices, afin de créer une solution performante, évolutive et centrée sur l'utilisateur.",
            "company": "Vev",
            "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/b038a38a-835d-4a68-a3fb-9bc8ac7672c7",
            "startDate": new Date("2024-09-01T22:00:00.000Z"),
            "__v": 0
        }

    ]
function Page() {
    const [experienceData, setExperienceData] = useState<any>(experienceDataSource);
    return (
        <>
            <ExperienceButton setExperienceData={setExperienceData} experienceData={experienceData}/>
            <main >
                <h1 className="text-3xl font-bold mb-4 ml-7">Mes Expériences</h1>
                <ExperienceList experienceData={experienceData}/>
            </main>
        </>
    );
}

export default Page;
