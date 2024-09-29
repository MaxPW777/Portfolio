"use client"
import {IProject} from "@common/types/IProject";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {FaExternalLinkAlt} from "react-icons/fa";
import Link from "next/link";


interface ProjectsComponentProps {
    projectData: IProject[]
}

function ProjectsComponent({projectData}: ProjectsComponentProps) {

    return (
        <div className={'border grid grid-cols-3 gap-3'}>
            {projectData.map((project: IProject) => {
                return (
                    <Link target={"_blank"} key={project.link}
                          href={project.link}>
                        <Card
                            className="relative transition duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.5)]">
                            <FaExternalLinkAlt
                                className="absolute right-2 top-2"/>
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className={'flex flex-wrap'}>
                                {project.languages.map((language) => {
                                    return (
                                        <span key={language} className="border p-1 mr-2 rounded">
                                            {language}
                                        </span>
                                    );
                                })}
                            </CardFooter>
                        </Card>
                    </Link>
                )
            })
            }

        </div>
    );
}

export default ProjectsComponent;
