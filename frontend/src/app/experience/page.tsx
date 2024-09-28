import ExperienceList from "@/components/experience/ExperienceList";
import ExperienceButton from "@/components/experience/ExperienceButton";

function Page() {
    return (
        <>
            <ExperienceButton/>
            <main >
                <h1 className="text-3xl font-bold mb-4 ml-7">Mes Expériences</h1>
                <ExperienceList/>
            </main>
        </>
    );
}

export default Page;
