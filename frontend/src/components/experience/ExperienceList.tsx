import {IExperience} from "@common/types/IExperience";
import Image from 'next/image'
import {useExperienceQuery} from "@/services/experience";
import {cn} from "@/lib/utils";


function ExperienceList() {
    const {data, isLoading} = useExperienceQuery()

    if (isLoading){
        return <h1>Loading...</h1>
    }
    if (data) {
        return (
            <ul className={'flex flex-col'}>
                {data.map((experience: IExperience, index: number) => {
                    return (
                        <li key={index}
                            className={cn('flex w-full h-full', index % 2 == 0 && 'flex-row-reverse')}>
                            <div className={'w-1/3'}>
                                <h1 className={'text-xl'}>{experience.company}</h1>
                                {experience.startDate && experience.endDate &&
                                    <h3 className={'font-bold text-lg'}>{experience.startDate.toLocaleString()} - {experience.endDate.toLocaleString()}</h3>}
                                <p className={'mt-6'}>{experience.description}</p>
                            </div>
                            <div className={'w-1/3 h-full'}>
                                <Image className={'object-cover'} fill={true}
                                       src={experience.image}
                                       alt={`${experience.company}_image`}/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ExperienceList
