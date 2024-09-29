"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/providers/auth-context";
import NewExperienceForm from "@/components/experience/NewExperienceForm";
import ProjectForm from "./ProjectForm";
import {IProject} from "@common/types/IProject";

interface ProjectButtonProps {
    projectData: IProject[]
    setProjectData: (data: IProject[]) => void
}
function ProjectButton({projectData, setProjectData}: ProjectButtonProps) {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) return null;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='absolute right-5 top-5 z-30'>+ New
                    Project</Button>
            </DialogTrigger>
            <DialogContent className={'min-w-[600px]'}>
                <DialogHeader>
                    <DialogTitle>Add a New Project</DialogTitle>
                    <DialogDescription>Use this form to add a new Experience to
                        the database</DialogDescription>
                </DialogHeader>

                <ProjectForm setProjectData={setProjectData} projectData={projectData}/>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectButton;
