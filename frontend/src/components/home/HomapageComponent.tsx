"use client"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable";
import HomeSidebar from "@/components/home/Sidebar";
import HomeItemsComponent from "@/components/home/HomeItemsComponent";
import Image from "next/image";

function HomepageComponent() {
    return (
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
            <ResizablePanel defaultSize={18}>
                <HomeSidebar/>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={72}>
                <div
                    className="flex h-full items-center justify-center p-6 relative">
                    <div
                        className="space-y-6 h-full w-full flex items-center justify-between">
                        <div
                            className="flex flex-col max-w-[380px] justify-between text-center bg-white py-8 px-4 rounded-lg shadow-lg">
                            <h1 className="text-4xl font-bold mb-6 text-gray-900">A propos de moi</h1>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Je suis un développeur web junior passionné,
                                toujours curieux et motivé pour relever de
                                nouveaux défis techniques.
                                Ma spécialité réside dans l&#39;utilisation de
                                frameworks modernes comme Next.js et NestJS, me
                                permettant de construire
                                des applications performantes et scalables.
                                J&#39;aime créer des solutions innovantes qui
                                répondent aux besoins des utilisateurs
                                tout en explorant de nouvelles technologies et
                                bonnes pratiques du développement.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                En plus de mes compétences techniques, je suis
                                un apprenant rapide, toujours à la recherche
                                d&#39;opportunités pour améliorer
                                mon savoir-faire. Que ce soit en travaillant en
                                équipe ou de manière autonome, je suis motivé à
                                participer à des projets
                                qui ont un impact réel et qui me permettent de
                                développer mes compétences.
                            </p>
                        </div>
                        <Image width={'550'} height={'550'} alt={'CV Image'}
                               src={'/CV2.png'}/>
                        <HomeItemsComponent/>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}

export default HomepageComponent;
