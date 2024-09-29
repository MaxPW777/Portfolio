"use client"
import CommentList from "@/components/blog/comments/CommentList";
import CommentForm from "@/components/blog/comments/CommentForm";
import React, {useEffect, useState} from "react";
import { useGetCommentsQuery } from "@/services/comment";
import {IComment} from "@common/types/IComment";
import {IPost, IPostDocument} from "@common/types/IPost";


interface CommentAreaProps {
    post: IPostDocument;
    onToggleExpand: (expand: boolean) => void;
}

function CommentArea({ onToggleExpand, post}: CommentAreaProps) {
    const [comments, setComments] = useState<IComment[]>(post.comments || []);
    // const query = useGetCommentsQuery(postId);

    useEffect(()=>{
       setComments(post.comments)
    },[post])

    const [showComments, setShowComments] = useState(false);
    const toggleShowComments = () => {
        setShowComments(!showComments);
        onToggleExpand(!showComments);
    };

    return (
        <div className="flex flex-col w-full">
            <div>
                <h3 className="text-xl font-semibold">Comments</h3>
                <button onClick={toggleShowComments} className="text-blue-500 underline">
                    {showComments ? 'Hide comments' : 'See all comments'}
                </button>
            </div>
            <CommentForm selectedPost={post} setComments={setComments} />
            {showComments && <CommentList comments={comments} />}
        </div>
    );
}

export default CommentArea;
