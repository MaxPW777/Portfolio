import {API_URL} from "@common/utils/constants";
import axios from "@/providers/axios";
import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
import {IExperience} from "@common/types/IExperience";

const EXPERIENCE_URL = `${API_URL}/experience`

export const getExperiences = async () : Promise<IExperience[]> => axios.get(EXPERIENCE_URL)

export const addExperience = async (experience: ICreateExperienceDto) : Promise<IExperience> => {
    const formData = new FormData();
    formData.append('company', experience.company);
    formData.append('content', experience.description);
    formData.append('startDate', experience.startDate.toLocaleString())
    if (experience.endDate) {
        formData.append('endDate', experience.endDate.toLocaleString())
    }
    if (experience.image) {
        formData.append('image', experience.image);
    }


    const response = await axios.post(EXPERIENCE_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    return response.data;
}
