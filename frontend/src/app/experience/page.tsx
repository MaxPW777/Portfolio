import ExperienceList from "@/components/experience/ExperienceList";
import ExperienceButton from "@/components/experience/ExperienceButton";

function Page() {
    return (
        <main className={'abs-center'}>
            <ExperienceButton/>
            <ExperienceList/>
        </main>
    );
}

export default Page;
