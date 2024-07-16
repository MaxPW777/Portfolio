"use client"
import React, {useState} from 'react';
import {IPost} from "@common/types/IPost";
import CommentArea from "@/components/blog/comments/CommentArea";
import DOMPurify from 'dompurify';
import DeletePostButton from "@/components/blog/DeletePostButton";
import Image from "next/image";

interface FocusedPostProps {
    post: IPost | null;
}

function FocusedPost({post}: FocusedPostProps) {
    const [expandComments, setExpandComments] = useState(false);

    if (!post) {
        return <div className="w-1/2 p-4">Select a post to read</div>;
    }

    const sanitizedContent = DOMPurify.sanitize(post.content.replace(/\n/g, '<br />'));

    return (
        <div
            className="w-full h-[calc(100% - 1rem)] p-4 border-l flex flex-col transition-all overflow-y-auto duration-500">
            <div
                className={`relative border p-4 ${expandComments ? 'h-1/4' : 'h-3/4'} flex flex-col transition-all duration-500`}>
                {/*// @ts-ignore type contains _id*/}
                <DeletePostButton postId={post._id}/>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                {post.image && <Image src={post.image} alt={post.title}
                      className="w-full h-1/2 object-cover" width={'500'} height={'400'}/>}
                <p className="mt-2 h-fit overflow-x-auto"
                   dangerouslySetInnerHTML={{__html: sanitizedContent}}/>
            </div>
            <div
                className={`mt-4 flex gap-3 ${expandComments ? 'h-3/4' : 'h-1/4'} transition-all duration-500`}>
                {/*@ts-ignore*/}
                <CommentArea postId={post._id}
                             onToggleExpand={setExpandComments}/>
            </div>
        </div>
    );
}

export default FocusedPost;
