"use client";
import {IExperience} from "@common/types/IExperience";
import Image from "next/image";
import {useExperienceQuery} from "@/services/experience";
import {cn} from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";

const experienceData =
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

function ExperienceList() {
    const query = useExperienceQuery();


    return (
        <ScrollArea className={'w-2/3 h-5/6 flex flex-col mx-auto'}>
            {experienceData.map((experience: IExperience, index: number) => {
                const startDate = experience.startDate ? new Date(experience.startDate).toLocaleDateString() : null;
                const endDate = experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present";

                return (
                    <Card key={index}
                          className={cn("flex w-full h-[350px]", index % 2 === 0 ? "flex-row-reverse" : "flex-row")}
                    >
                        <div className="w-2/3 max-h-[35`0px]">
                            <CardHeader>
                                <CardTitle
                                    className="text-xl font-bold">{experience.company}</CardTitle>
                                {startDate && (
                                    <h3 className="font-bold text-lg">
                                        {startDate} - {endDate}
                                    </h3>
                                )}
                            </CardHeader>
                            <CardContent>
                            <CardDescription>
                                <p className="overflow-y-auto">{experience.description}</p>
                            </CardDescription>
                            </CardContent>
                        </div>
                        <div
                            className="w-2/3 h-full relative flex items-center justify-center">
                            <Image
                                className="object-contain w-full h-full"
                                fill={true}
                                src={experience.image}
                                alt={`${experience.company} image`}
                            />
                        </div>
                    </Card>


                );
            })}
        </ScrollArea>
    );
}

export default ExperienceList;
