"use client"
import React from 'react';
import {IPost} from "@common/types/IPost";

interface FocusedPostProps {
    post: IPost | null;
}

const FocusedPost: React.FC<FocusedPostProps> = ({ post } : FocusedPostProps) => {
    if (!post) {
        return <div className="w-1/2 p-4">Select a post to read</div>;
    }

    return (
        <div className="w-full h-3/4 p-4 border-l">
            <div className="border p-4 h-full">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="mt-2 h-full">{post.content}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <div>
                <h3 className="text-xl font-semibold">Comments</h3>
                    <a href="#" className="text-blue-500 underline">See all comments</a>
                </div>
                <div className="mt-2 w-full">
                    <textarea className="mt-2 p-2 w-full border rounded" placeholder="Write a comment..."></textarea>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Post</button>
                </div>
            </div>
        </div>
    );
};

export default FocusedPost;
