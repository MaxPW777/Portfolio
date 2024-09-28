import {useMutation, useQuery, useQueryClient} from "react-query";
import {createProject, getProjects} from "@/services/projects/routes";
import {ICreatePostDto} from "@common/dto/ICreatePostDto";
import {ICreateProjectDto} from "@common/dto/ICreateProjectDto";

export const useProjectQuery = () => {
    return useQuery('projects', getProjects)
}
export const useCreateProjectMutation = () => {
    const queryClient = useQueryClient()
    return useMutation('project', {mutationFn : (data : ICreateProjectDto) => createProject(data), onSuccess: () => {
        queryClient.invalidateQueries('projects')
        }})
}
