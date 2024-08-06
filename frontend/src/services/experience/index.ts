import {useMutation, useQuery, useQueryClient} from "react-query";
import {addExperience, getExperiences} from "@/services/experience/routes";
import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";

export const useExperienceQuery = () => {
    return useQuery(['experience'], getExperiences)
}

export const useCreateExperienceMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(
        (experience: ICreateExperienceDto) => addExperience(experience), {
            onSuccess: () => {
                queryClient.invalidateQueries('experience')
            }
        });
}
