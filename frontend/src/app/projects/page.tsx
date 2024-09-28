import ProjectsComponent from "@/components/projects/ProjectsComponent";
import ProjectButton from "@/components/projects/ProjectButton";

export default function page() {
    return (
        <main className="flex h-screen min-h-screen items-center justify-center">
          <ProjectButton/>
            <ProjectsComponent />
        </main>
    );
}
