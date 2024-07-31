import {API_URL} from "@common/utils/constants";
import axios from "@/providers/axios";
import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
const EXPERIENCE_URL = `${API_URL}/experience`

export const getExperiences = async () => axios.get(EXPERIENCE_URL)

export const addExperience = async (experience : ICreateExperienceDto) => {
    const formData = new FormData();
    formData.append('title', experience.title);
    formData.append('content', experience.description);
    if (experience.image) {
        formData.append('image', experience.image);
    }

    const response = await axios.post(EXPERIENCE_URL, formData , {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    return response.data;
}
