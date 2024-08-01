"use client"
import {SelectedPostProvider} from "@/providers/SelectedPostProvider";
import PostList from "@/components/blog/postList/PostList";
import FocusedPost from "@/components/blog/FocusedPost";
import React from "react";

function PostArea(){
    return (
        <SelectedPostProvider>
            <PostList/>
            <FocusedPost/>
        </SelectedPostProvider>
    )
}

export default PostArea
