"use client"
import {SelectedPostProvider} from "@/providers/SelectedPostProvider";
import PostList from "@/components/blog/postList/PostList";
import FocusedPost from "@/components/blog/FocusedPost";
import React from "react";
import {IPostDocument} from "@common/types/IPost";

interface PostAreaProps {
    postData: IPostDocument[];
}
function PostArea({postData}: PostAreaProps) {
    return (
        <SelectedPostProvider>
            <PostList postData={postData}/>
            <FocusedPost/>
        </SelectedPostProvider>
    )
}

export default PostArea
