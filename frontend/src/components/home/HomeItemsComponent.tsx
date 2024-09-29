"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {useGetHomeItemsQuery} from '@/services/home';

const homeData = {
    post: {
        "_id": "66f50d66d6081a71db9d4246",
        "title": "Rendu Final du projet",
        "content": "Bonjour à tous,\r\n\r\nAujourd'hui, j'aimerais partager avec vous une réflexion sur le parcours de développement de notre application de téléchargement chez Luxcarta, en mettant en lumière les défis que nous avons rencontrés et les solutions que nous avons mises en place pour les surmonter.\r\n\r\nL'image ci-dessus montre le rendu final de notre application, mais derrière cette interface simple et intuitive, se cache une complexité technique qui a nécessité des efforts considérables.\r\n\r\nL'un des plus grands défis que nous avons rencontrés a été l'optimisation des performances, un élément crucial pour garantir une expérience utilisateur fluide, surtout lorsque l'application doit gérer le téléchargement de gros fichiers géospatiaux. Vite a été un allié indispensable pour minimiser les temps de chargement et améliorer les performances globales, ce qui a été déterminant pour la réactivité de l'application.\r\n\r\nUn autre défi significatif a été d'assurer une intégration harmonieuse entre Electron et React. L'objectif était de tirer parti de la flexibilité de React pour créer une interface utilisateur moderne tout en profitant des capacités natives d'Electron pour une application desktop. La gestion des communications entre le processus principal d'Electron et les composants React, via IPC, a nécessité une planification rigoureuse et une exécution précise pour éviter les bogues et les problèmes de performance.\r\n\r\nMalgré ces défis, la satisfaction de voir l'application prendre forme et répondre aux besoins de nos utilisateurs a été immense. La fonctionnalité de téléchargement, cœur de l'application, a été conçue pour être robuste et efficace, permettant aux utilisateurs de télécharger les solutions offertes par Luxcarta avec une grande facilité.\r\n\r\nJe suis particulièrement fier de ce que nous avons accompli et de la manière dont nous avons relevé les défis techniques. Ce projet m'a non seulement permis de renforcer mes compétences en développement desktop, mais il m'a également donné l'occasion de travailler sur une application qui fait une réelle différence pour ses utilisateurs.\r\n\r\nDans les prochains articles, je partagerai des détails techniques supplémentaires et des astuces que j'ai découvertes au cours de ce projet. Restez à l'écoute pour plus d'insights sur le développement avec Electron, React, et Vite !\r\n\r\nÀ bientôt !",
        "author": "667174ede451d73f4461c3ed",
        "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/e2ac2e06-5efc-4536-96e9-fd823a109238",
        "created_at": "2024-09-26T07:29:42.480Z",
        "updated_at": "2024-09-26T07:29:42.480Z",
        "__v": 0
    },
    project: {
        "_id": "66f7d1e6cf2fe6cfb8b13e8e",
        "name": "myRecipeTracker",
        "description": "Recipe tracking web application",
        "languages": [
            "TypeScript",
            "React",
            "Node.js",
            "ExpressJS"
        ],
        "link": "https://github.com/MaxPW777/myRecipeTracker",
        "__v": 0
    },
}


export function HomeItemsComponent() {
    const query = useGetHomeItemsQuery();
    return (
        <div className={'flex flex-col gap-20'}>
            <Link className={'flex flex-col gap-4'} href={'/blog'}>
                <Card>
                    <CardHeader>
                        <CardTitle>{homeData.post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={'line-clamp-3 w-[400px]'}>
                            {homeData.post.content}
                        </p>
                    </CardContent>
                </Card>
                <Card className={'bg-[rgba(0,0,0,0.1)]'}>
                    <CardHeader>
                        <CardTitle>Recent Blog Posts</CardTitle>
                    </CardHeader>
                </Card>
            </Link>
            <Link className={'flex flex-col gap-4'} href={'/projects'}>
                <Card>
                    <CardHeader>
                        <CardTitle>{homeData.project.name}</CardTitle>
                        <CardDescription>
                            {homeData.project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>made using {homeData.project.languages.map((language : string) => {
                            return language + ', ';
                        })}</p>
                    </CardContent>
                </Card>
                <Card className={'bg-[rgba(0,0,0,0.1)]'}>
                    <CardHeader>
                        <CardTitle>Check out my most recent projects</CardTitle>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
}

export default HomeItemsComponent;
