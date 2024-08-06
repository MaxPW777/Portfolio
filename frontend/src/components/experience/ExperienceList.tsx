"use client";
import {IExperience} from "@common/types/IExperience";
import Image from "next/image";
import {useExperienceQuery} from "@/services/experience";
import {cn} from "@/lib/utils";

function ExperienceList() {
    const query = useExperienceQuery();

    if (query.isLoading) {
        return <h1>Loading...</h1>;
    }

    if (query.error) {
        return <h1>Failed to load experiences</h1>;
    }

    return (
        <ul className="abs-center flex flex-col space-y-6 p-3 w-2/3">
            {query.data && query.data.map((experience: IExperience, index: number) => {
                const startDate = experience.startDate ? new Date(experience.startDate).toLocaleDateString() : null;
                const endDate = experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present";

                return (
                    <li
                        key={index}
                        className={cn("flex w-full h-full", index % 2 === 0 ? "flex-row-reverse" : "flex-row")}
                    >
                        <div className="w-1/3 p-4">
                            <h1 className="text-xl font-bold">{experience.company}</h1>
                            {startDate && (
                                <h3 className="font-bold text-lg">
                                    {startDate} - {endDate}
                                </h3>
                            )}
                            <p className="mt-6">{experience.description}</p>
                        </div>
                        <div className="w-full h-[200px] relative">
                            <Image
                                className="object-cover"
                                fill={true}
                                src={experience.image}
                                alt={`${experience.company} image`}
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default ExperienceList;
