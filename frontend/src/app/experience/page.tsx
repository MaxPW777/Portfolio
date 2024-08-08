import ExperienceList from "@/components/experience/ExperienceList";
import ExperienceButton from "@/components/experience/ExperienceButton";

function Page() {
    return (
        <>
            <ExperienceButton/>
            <main className={'h-[calc(100vh-4rem)] w-full mt-16 flex items-center justify-center'}>
                <ExperienceList/>
            </main>
        </>
    );
}

export default Page;
