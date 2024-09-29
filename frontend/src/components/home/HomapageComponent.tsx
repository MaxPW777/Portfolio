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
            <ResizablePanel defaultSize={25}>
                <HomeSidebar />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 relative">
                    <div className="space-y-6 h-full w-full flex items-end justify-between">
                    <Image className={'absolute -z-10'} width={1414/2} height={900} alt={'CV Image'} src={'/CV2.png'}/>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
                            <p className="text-gray-700">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Hi, I'm <strong>Maximilian</strong>, a <em>Junior Developer</em>.
                            </p>
                        </div>
                        <HomeItemsComponent/>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}

export default HomepageComponent;
