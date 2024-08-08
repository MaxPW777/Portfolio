"use client";
import {IExperience} from "@common/types/IExperience";
import Image from "next/image";
import {useExperienceQuery} from "@/services/experience";
import {cn} from "@/lib/utils";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";

function ExperienceList() {
    const query = useExperienceQuery();

    if (query.isLoading) {
        return <h1>Loading...</h1>;
    }

    if (query.error) {
        return <h1>Failed to load experiences</h1>;
    }

    return (
        <ScrollArea className={'w-2/3 h-5/6 gap-y-2.5'}>
            {query.data && query.data.map((experience: IExperience, index: number) => {
                const startDate = experience.startDate ? new Date(experience.startDate).toLocaleDateString() : null;
                const endDate = experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present";

                return (
                    <Card key={index}
                          className={cn("flex w-full h-[300px]", index % 2 === 0 ? "flex-row-reverse" : "flex-row")}
                    >
                        <div className="w-2/3 max-h-[300px]">
                            <CardHeader>
                                <CardTitle
                                    className="text-xl font-bold">{experience.company}</CardTitle>
                                {startDate && (
                                    <h3 className="font-bold text-lg">
                                        {startDate} - {endDate}
                                    </h3>
                                )}
                            </CardHeader>
                            <CardDescription>
                                <p className="p-6 overflow-y-auto">{experience.description}</p>
                            </CardDescription>
                        </div>
                        <div
                            className="w-2/3 h-full relative flex items-center justify-center">
                            <Image
                                className="object-contain w-full h-full"
                                fill={true}
                                src={experience.image}
                                alt={`${experience.company} image`}
                            />
                        </div>
                    </Card>


                );
            })}
        </ScrollArea>
    );
}

export default ExperienceList;
