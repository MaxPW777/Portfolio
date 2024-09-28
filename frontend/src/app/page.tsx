import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

// Import icons (assuming you're using Lucide icons)
import {
    UserIcon,
    BriefcaseIcon,
    BookOpenIcon,
    LayersIcon,
    MailIcon,
} from "lucide-react";
import HomeItemsComponent from '@/components/home/HomeItemsComponent'; // Install and import from 'lucide-react'

function Sidebar() {
    return (
        <div className="flex h-full flex-col p-6 space-y-4">
            <span className="font-semibold text-lg">Navigation</span>
            <nav className="flex flex-col space-y-2 w-full">
                <Link href="/about" passHref>
                    <Button variant="ghost" className="w-full justify-start">
                        <UserIcon className="mr-2 h-5 w-5" />
                        About
                    </Button>
                </Link>
                <Link href="/projects" passHref>
                    <Button variant="ghost" className="w-full justify-start">
                        <BriefcaseIcon className="mr-2 h-5 w-5" />
                        Projects
                    </Button>
                </Link>
                <Link href="/blog" passHref>
                    <Button variant="ghost" className="w-full justify-start">
                        <BookOpenIcon className="mr-2 h-5 w-5" />
                        Blog
                    </Button>
                </Link>
                <Link href="/experience" passHref>
                    <Button variant="ghost" className="w-full justify-start">
                        <LayersIcon className="mr-2 h-5 w-5" />
                        Experience
                    </Button>
                </Link>
                <Link href="/contact" passHref>
                    <Button variant="ghost" className="w-full justify-start">
                        <MailIcon className="mr-2 h-5 w-5" />
                        Contact
                    </Button>
                </Link>
            </nav>
        </div>
    );
}

export default function HomepageComponent() {
    return (
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
            <ResizablePanel defaultSize={25}>
                <Sidebar />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 relative">
                    <div className="space-y-6 h-full w-full flex items-end justify-between">
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

export function page() {
    return (
        <main className="flex h-screen min-h-screen items-center justify-center">
            <HomepageComponent />
        </main>
    );
}
