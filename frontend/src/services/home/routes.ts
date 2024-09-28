import {API_URL} from "@common/utils/constants";
import {ICreateCommentDto} from "@common/dto/ICreateCommentDto";

const HOME_API = API_URL + "/home";

export const getHomeItems = async () => {
  const response = await fetch(HOME_API);
  return response.json();
};

