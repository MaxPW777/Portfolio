"use client"
import ProjectsComponent from "@/components/projects/ProjectsComponent";
import ProjectButton from "@/components/projects/ProjectButton";
import { useState } from "react";


const projectDataSource = [
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e8d",
        "name": "Portfolio",
        "description": "Ce portfolio",
        "languages": [
            "TypeScript",
            "Next.js",
            "Nest.js",
            "TailwindCSS",
            "AWS"
        ],
        "link": "https://github.com/MaxPW777/Portfolio",
        "__v": 0
    },
    {
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
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e8f",
        "name": "2048-Clone",
        "description": "2048 game clone",
        "languages": [
            "C#",
            "Unity"
        ],
        "link": "https://github.com/MaxPW777/2048-Clone",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e93",
        "name": "C",
        "description": "Une collection de programmes en C",
        "languages": [
            "C"
        ],
        "link": "https://github.com/MaxPW777/C",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e8f",
        "name": "Angry-Bird-Clone",
        "description": "Angry Bird Clone",
        "languages": [
            "Unity",
            "C#"
        ],
        "link": "https://github.com/MaxPW777/Angry-Bird-Clone",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e90",
        "name": "rust-passworder",
        "description": "CLI password manager",
        "languages": [
            "Rust"
        ],
        "link": "https://github.com/MaxPW777/rust-passworder",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e92",
        "name": "Flappy-Bird",
        "description": "Flappy bird clone in Unity",
        "languages": [
            "C#", "Unity"
        ],
        "link": "https://github.com/MaxPW777/Flappy-Bird",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e96",
        "name": "Duelling-Nexus-Clone",
        "description": "Duelling Nexus Clone",
        "languages": [
            "TypeScript",
            "React",
            "Node.js",
            "ExpressJS"
        ],
        "link": "https://github.com/MaxPW777/Duelling-Nexus-Clone",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e97",
        "name": "Windows-Forms-Prison",
        "description": "Card game using Windows Forms",
        "languages": [
            "C#",
            "Windows Forms"
        ],
        "link": "https://github.com/MaxPW777/Windows-Forms-Prison",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e98",
        "name": "DYdle-Jump",
        "description": "Doodle Jump Clone",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "link": "https://github.com/MaxPW777/DYdle-Jump",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e92",
        "name": "Spotify-Clone",
        "description": "Spotify clone in Next.js, Supabase, Tailwind, and PostgreSQL",
        "languages": [
            "TypeScript",
            "Next.js",
            "Supabase",
            "PostgreSQL",
        ],
        "link": "https://github.com/MaxPW777/Spotify-Clone",
        "__v": 0
    },
    {
        "_id": "66f7d1e6cf2fe6cfb8b13e93",
        "name": "PhPortfolio",
        "description": "PHP-based portfolio",
        "languages": [
            "PHP"
        ],
        "link": "https://github.com/MaxPW777/PhPortfolio",
        "__v": 0
    }
]

export default function ProjectPage() {
    const [projectData, setProjectData] = useState<any>(projectDataSource);
    return (
        <main className={'mx-7'}>
            <h1 className="text-3xl font-bold mb-4">Mes Projets Github</h1>
            <ProjectButton setProjectData={setProjectData} projectData={projectData}/>
            <ProjectsComponent projectData={projectData}/>
        </main>
    );
}
