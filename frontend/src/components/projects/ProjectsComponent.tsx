"use client"
import {useProjectQuery} from "@/services/projects";
import {IProject} from "@common/types/IProject";
import {
    Card, CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Link from "next/link";

function ProjectsComponent() {
    const query = useProjectQuery()

    if (query.isLoading){
        return <p>Loading...</p>
    }
    if (query.error){
        return <p>Could not find projects</p>
    }
    return (
        <div className={'border'}>
            {query.data && query.data.map((project : IProject) => {
                return (
                    <Link href={project.link}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })
            }

        </div>
    );
}

export default ProjectsComponent;
