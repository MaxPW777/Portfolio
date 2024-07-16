import {useMutation, useQuery, useQueryClient} from "react-query";
import {createComment, getCommentsForPost} from "@/services/comment/routes";
import {ICreateComentDto} from "@common/dto/ICreateComentDto";

export const useGetCommentsQuery = (postId: string) => {
    return useQuery(['comments', postId], () => getCommentsForPost(postId));
}

export const useCreateCommentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((data: ICreateComentDto) => createComment(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        }
    });
}
