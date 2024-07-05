"use client"
import CommentList from "@/components/blog/comments/CommentList";
import CommentForm from "@/components/blog/comments/CommentForm";
import React, { useState } from "react";
import { useGetCommentsQuery } from "@/services/comment";

interface CommentAreaProps {
    postId: string;
    onToggleExpand: (expand: boolean) => void;
}

function CommentArea({ postId, onToggleExpand }: CommentAreaProps) {
    const query = useGetCommentsQuery(postId);
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
            <CommentForm postId={postId} />
            {showComments && <CommentList comments={query.data} />}
        </div>
    );
}

export default CommentArea;
