"use client"
import React, { useState } from 'react';
import { IPost } from "@common/types/IPost";
import CommentArea from "@/components/blog/CommentArea";

interface FocusedPostProps {
    post: IPost | null;
}

const FocusedPost: React.FC<FocusedPostProps> = ({ post }) => {
    const [expandComments, setExpandComments] = useState(false);

    if (!post) {
        return <div className="w-1/2 p-4">Select a post to read</div>;
    }

    return (
        <div className="w-full h-full p-4 border-l flex flex-col">
            <div className={`border p-4 ${expandComments ? 'h-1/2' : 'h-3/4'}`}>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="mt-2">{post.content}</p>
            </div>
            <div className={`mt-4 flex gap-3 ${expandComments ? 'h-1/2' : 'h-1/4'}`}>
                {/*// @ts-ignore*/}
                <CommentArea postId={post._id} onToggleExpand={setExpandComments} />
            </div>
        </div>
    );
};

export default FocusedPost;
