import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    BookOpenIcon,
    BriefcaseIcon,
    LayersIcon,
    MailIcon,
    UserIcon
} from "lucide-react";

function HomeSidebar() {
    return (
        <div className="flex h-full flex-col p-6 bg-[rgba(255,255,255,0.7)] space-y-4">
            <span className="font-semibold text-lg">Navigation</span>
            <nav className="flex flex-col space-y-2 w-full">
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

export default HomeSidebar;
