import {API_URL} from "@common/utils/constants";
import {ICreateProjectDto} from "@common/dto/ICreateProjectDto";
import axios from "@/providers/axios";

const PROJECT_API = API_URL + '/projects'

export const getProjects = async () => {
    const response = await fetch(PROJECT_API)
    return response.json()
}

export const createProject = async (data : ICreateProjectDto) => {
    const response = await axios.post(PROJECT_API, data)
    return response.data
}
