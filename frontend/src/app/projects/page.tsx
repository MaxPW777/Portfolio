import ProjectsComponent from "@/components/projects/ProjectsComponent";
import ProjectButton from "@/components/projects/ProjectButton";

export default function page() {
    return (
        <main className={'mx-7'}>
            <h1 className="text-3xl font-bold mb-4">Mes Projets Github</h1>
            <ProjectButton/>
            <ProjectsComponent/>
        </main>
    );
}
