import {login} from "@/services/user/routes";
import {useMutation} from "react-query";

export const useLoginMutation = () => {
    return useMutation(login)
}
