"use client"
import React, { useState } from 'react';
import NewPost from "@/components/blog/NewPost";
import PostArea from "@/components/blog/PostArea";
import {IPostDocument} from "@common/types/IPost";

const postDataSource: IPostDocument[] = [
    {
        "_id": "6674388182046c276a5fd818",
        "title": "Mon aventure chez Luxcarta : Un nouveau départ",
        "content": "Bonjour à tous,\n\nJe suis ravi de partager avec vous mon nouveau parcours professionnel chez Luxcarta. Luxcarta est une entreprise spécialisée dans la cartographie et la modélisation 3D, fournissant des solutions innovantes pour diverses industries, y compris les télécommunications, la planification urbaine et la défense.\n\nMon rôle chez Luxcarta consiste à développer une application en utilisant Electron et React avec Vite. Je suis très enthousiaste à l'idée de relever ce défi et de travailler avec une équipe talentueuse pour créer des solutions de pointe.\n\nDans les prochains posts, je partagerai mon expérience de codage avec Electron et React, ainsi que mes découvertes et apprentissages en cours de route. Restez à l'écoute pour en savoir plus sur cette aventure passionnante !\n\nÀ bientôt",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "created_at": new Date("2024-06-20T14:11:13.058Z"),
        "updated_at": new Date("2024-06-20T14:11:13.058Z"),
        "__v": 0
    },
    {
        "_id": "6679826b4388a2d246952651",
        "title": "Découverte d'Electron : Une nouvelle dimension pour les applications desktop",
        "content": "Bonjour à tous,\n\nAujourd'hui, je souhaite partager avec vous ma découverte d'Electron. Pour ceux qui ne le savent pas, Electron est un framework qui permet de créer des applications desktop multiplateformes en utilisant JavaScript, HTML et CSS. Ce qui rend Electron unique, c'est qu'il combine les capacités de Node.js avec Chromium, ce qui permet aux développeurs web de créer des applications desktop robustes et interactives.\n\nL'une des raisons pour lesquelles j'ai choisi Electron pour notre projet chez Luxcarta est sa flexibilité et sa large adoption dans l'industrie. De nombreuses applications populaires comme Visual Studio Code et Slack sont construites avec Electron, ce qui témoigne de sa puissance et de sa fiabilité.\n\nEn travaillant avec Electron, j'ai pu explorer ses nombreuses fonctionnalités, notamment la gestion des fenêtres, l'intégration avec les modules Node.js et la création de menus personnalisés. C'est fascinant de voir comment une technologie web peut être utilisée pour créer des applications desktop natives.\n\nJe suis impatient de continuer à explorer Electron et de partager avec vous les défis et les réussites de ce projet. Dans mon prochain post, je parlerai de mon expérience avec React et Vite dans le cadre de ce projet.",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "created_at": new Date("2024-06-24T14:27:55.781Z"),
        "updated_at": new Date("2024-06-24T14:27:55.781Z"),
        "__v": 0
    },
    {
        "_id": "667982864388a2d246952659",
        "title": "Intégration de React et Vite dans notre projet Electron",
        "content": "Bonjour à tous,\n\nAprès avoir découvert les capacités d'Electron, le prochain défi consistait à intégrer React et Vite dans notre projet chez Luxcarta. React est une bibliothèque JavaScript très populaire pour la construction d'interfaces utilisateur, tandis que Vite est un outil de build incroyablement rapide qui offre une excellente expérience de développement.\n\nL'une des premières étapes a été de configurer Vite pour qu'il fonctionne correctement avec Electron. Heureusement, Vite dispose d'une documentation claire et de nombreux plugins qui facilitent cette intégration. Une fois Vite configuré, j'ai pu créer une architecture modulaire pour notre application, ce qui permet un développement rapide et efficace.\n\nEn utilisant React, j'ai pu créer des composants réutilisables pour notre interface utilisateur. La combinaison de React et Vite a considérablement amélioré notre flux de travail, en permettant des rechargements instantanés et une expérience de développement fluide.\n\nUn des aspects les plus intéressants a été de voir comment React et Electron interagissent ensemble. J'ai appris à gérer les communications entre le processus principal d'Electron et les composants React, ce qui a ouvert de nouvelles possibilités pour notre application.\n\nJe suis très enthousiaste à l'idée de continuer à développer cette application et de voir comment elle évolue. Je partagerai bientôt plus de détails sur les fonctionnalités spécifiques que nous avons mises en œuvre et les défis techniques que nous avons rencontrés.",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "created_at": new Date("2024-06-24T14:28:22.574Z"),
        "updated_at": new Date("2024-06-24T14:28:22.574Z"),
        "__v": 0
    },
    {
        "_id": "667982a54388a2d246952660",
        "title": "Défis et réussites dans le développement de notre application Electron",
        "content": "Bonjour à tous,\n\nAujourd'hui, je souhaite vous parler des défis et des réussites que j'ai rencontrés lors du développement de notre application Electron chez Luxcarta. Comme tout projet de développement, il y a eu des moments difficiles, mais aussi des moments de grande satisfaction.\n\nL'un des principaux défis a été d'assurer une communication fluide entre le processus principal d'Electron et les composants React. Cela nécessitait une compréhension approfondie des événements IPC (Inter-Process Communication) et la mise en œuvre de mécanismes de communication efficaces.\n\nUn autre défi a été de garantir que l'application reste performante malgré l'utilisation de technologies web. Heureusement, Vite a joué un rôle crucial en optimisant le processus de build et en réduisant les temps de chargement, ce qui a considérablement amélioré les performances de l'application.\n\nMalgré ces défis, nous avons réussi à créer une application robuste et fonctionnelle. Une des plus grandes réussites a été la mise en place d'une fonctionnalité de visualisation 3D, qui permet aux utilisateurs d'explorer des cartes en trois dimensions. Cette fonctionnalité a été rendue possible grâce à la puissance combinée de React pour la gestion de l'interface utilisateur et d'Electron pour les capacités desktop.\n\nJe suis très fier du travail accompli jusqu'à présent et je suis impatient de continuer à améliorer cette application. Dans les prochains posts, je partagerai des tutoriels et des astuces basées sur mes expériences pour aider d'autres développeurs à tirer le meilleur parti d'Electron, React et Vite.",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "created_at": new Date("2024-06-24T14:28:53.208Z"),
        "updated_at": new Date("2024-06-24T14:28:53.208Z"),
        "__v": 0
    },
    {
        "_id": "66a21f9cc7d77de641531c47",
        "title": "Test Image",
        "content": "Voici un test avec une image en utilisant Amazon S3",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/e0c6e3fe-aac2-4be9-ad7a-ba7684cc3068",
        "created_at": new Date("2024-07-25T09:49:16.949Z"),
        "updated_at": new Date("2024-07-25T09:49:16.949Z"),
        "__v": 0
    },
    {
        "_id": "66f50d66d6081a71db9d4246",
        "title": "Rendu Final du projet",
        "content": "Bonjour à tous,\r\n\r\nAujourd'hui, j'aimerais partager avec vous une réflexion sur le parcours de développement de notre application de téléchargement chez Luxcarta, en mettant en lumière les défis que nous avons rencontrés et les solutions que nous avons mises en place pour les surmonter.\r\n\r\nL'image ci-dessus montre le rendu final de notre application, mais derrière cette interface simple et intuitive, se cache une complexité technique qui a nécessité des efforts considérables.\r\n\r\nL'un des plus grands défis que nous avons rencontrés a été l'optimisation des performances, un élément crucial pour garantir une expérience utilisateur fluide, surtout lorsque l'application doit gérer le téléchargement de gros fichiers géospatiaux. Vite a été un allié indispensable pour minimiser les temps de chargement et améliorer les performances globales, ce qui a été déterminant pour la réactivité de l'application.\r\n\r\nUn autre défi significatif a été d'assurer une intégration harmonieuse entre Electron et React. L'objectif était de tirer parti de la flexibilité de React pour créer une interface utilisateur moderne tout en profitant des capacités natives d'Electron pour une application desktop. La gestion des communications entre le processus principal d'Electron et les composants React, via IPC, a nécessité une planification rigoureuse et une exécution précise pour éviter les bogues et les problèmes de performance.\r\n\r\nMalgré ces défis, la satisfaction de voir l'application prendre forme et répondre aux besoins de nos utilisateurs a été immense. La fonctionnalité de téléchargement, cœur de l'application, a été conçue pour être robuste et efficace, permettant aux utilisateurs de télécharger les solutions offertes par Luxcarta avec une grande facilité.\r\n\r\nJe suis particulièrement fier de ce que nous avons accompli et de la manière dont nous avons relevé les défis techniques. Ce projet m'a non seulement permis de renforcer mes compétences en développement desktop, mais il m'a également donné l'occasion de travailler sur une application qui fait une réelle différence pour ses utilisateurs.\r\n\r\nDans les prochains articles, je partagerai des détails techniques supplémentaires et des astuces que j'ai découvertes au cours de ce projet. Restez à l'écoute pour plus d'insights sur le développement avec Electron, React, et Vite !\r\n\r\nÀ bientôt !",
        "author": "667174ede451d73f4461c3ed",
        "comments": [],
        "image": "https://maximilianpw-portfolio.s3.eu-central-1.amazonaws.com/e2ac2e06-5efc-4536-96e9-fd823a109238",
        "created_at": new Date("2024-09-26T07:29:42.480Z"),
        "updated_at": new Date("2024-09-26T07:29:42.480Z"),
        "__v": 0
    }
]

function BlogPage() {
    const [postData, setPostData] = useState<any>(postDataSource)
    return (
        <>
            <NewPost setPostData={setPostData}/>
            <div className="h-[calc(100vh-4rem)] mt-16">
                <div className="flex h-full">
                    <PostArea postData={postData}/>
                </div>
            </div>
        </>
    );
}

export default BlogPage;
