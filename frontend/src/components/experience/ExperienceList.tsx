"use client";
import {IExperience} from "@common/types/IExperience";
import Image from "next/image";
import {useExperienceQuery} from "@/services/experience";
import {cn} from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";


interface ExperienceListProps {
    experienceData: IExperience[]
}

function ExperienceList({experienceData}: ExperienceListProps) {
    const query = useExperienceQuery();


    return (
        <ScrollArea className={'w-2/3 h-5/6 flex flex-col mx-auto'}>
            {experienceData.map((experience: IExperience, index: number) => {
                const startDate = experience.startDate ? new Date(experience.startDate).toLocaleDateString() : null;
                const endDate = experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present";

                return (
                    <Card key={index}
                          className={cn("flex w-full h-[350px]", index % 2 === 0 ? "flex-row-reverse" : "flex-row")}
                    >
                        <div className="w-2/3 max-h-[35`0px]">
                            <CardHeader>
                                <CardTitle
                                    className="text-xl font-bold">{experience.company}</CardTitle>
                                {startDate && (
                                    <h3 className="font-bold text-lg">
                                        {startDate} - {endDate}
                                    </h3>
                                )}
                            </CardHeader>
                            <CardContent>
                            <CardDescription>
                                <p className="overflow-y-auto">{experience.description}</p>
                            </CardDescription>
                            </CardContent>
                        </div>
                        <div
                            className="w-2/3 h-full relative flex items-center justify-center">
                            {experience.image && <Image
                                className="object-contain w-full h-full"
                                fill={true}
                                src={experience.image}
                                alt={`${experience.company} image`}
                            />}
                        </div>
                    </Card>


                );
            })}
        </ScrollArea>
    );
}

export default ExperienceList;
