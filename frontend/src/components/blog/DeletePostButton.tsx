"use client"
import {useDeletePostMutation} from "@/services/post";
import { RiDeleteBinLine } from "react-icons/ri";

interface DeletePostButtonProps {
    postId: string;
}

function DeletePostButton({postId}: DeletePostButtonProps){
    const deletePostMutation = useDeletePostMutation();

    const handleDeletePost = async () => {
        await deletePostMutation.mutateAsync(postId);
    }

    return (
        <RiDeleteBinLine onClick={handleDeletePost} className={'absolute top-3 right-3 w-6 h-auto cursor-pointer'}/>
    )
}

export default DeletePostButton;
