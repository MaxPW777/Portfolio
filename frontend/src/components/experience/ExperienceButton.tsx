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
import {IExperience} from "@common/types/IExperience";

interface ExperienceButtonProps {
    experienceData: IExperience[]
    setExperienceData: (data: IExperience[]) => void
}

function ExperienceButton({experienceData, setExperienceData}: ExperienceButtonProps) {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) return null;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='absolute right-5 top-5 z-30'>+ New
                    Experience</Button>
            </DialogTrigger>
            <DialogContent className={'min-w-[600px]'}>
                <DialogHeader>
                    <DialogTitle>Add a New Experience</DialogTitle>
                    <DialogDescription>Use this form to add a new Experience to
                        the database</DialogDescription>
                </DialogHeader>
                <NewExperienceForm setExperienceData={setExperienceData} experienceData={experienceData}/>

            </DialogContent>
        </Dialog>
    );
}

export default ExperienceButton;
