"use client"
import React, {useState} from 'react';
import {IPost} from "@common/types/IPost";
import CommentArea from "@/components/blog/comments/CommentArea";
import DOMPurify from 'dompurify';
import DeletePostButton from "@/components/blog/DeletePostButton";
import Image from "next/image";
import {useSelectedPost} from "@/providers/SelectedPostProvider";


function FocusedPost() {
    const [expandComments, setExpandComments] = useState(false);
    const {selectedPost} = useSelectedPost();

    if (!selectedPost) {
        return <div className="w-1/2 p-4">Select a post to read</div>;
    }

    const sanitizedContent = DOMPurify.sanitize(selectedPost.content.replace(/\n/g, '<br />'));

    return (
        <div
            className="w-full h-[calc(100% - 1rem)] p-4 border-l flex flex-col transition-all overflow-y-auto duration-500">
            <div
                className={`relative border p-4 ${expandComments ? 'h-1/4' : 'h-3/4'} flex flex-col transition-all duration-500`}>
                {/*// @ts-ignore type contains _id*/}
                <DeletePostButton postId={selectedPost._id}/>
                <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                {selectedPost.image && <div className={'relative w-auto h-auto'}>
                    <Image src={selectedPost.image} alt={selectedPost.title} fill={true}/>
                </div>
                }
                <p className="mt-2 h-fit overflow-x-auto"
                   dangerouslySetInnerHTML={{__html: sanitizedContent}}/>
            </div>
            <div
                className={`mt-4 flex gap-3 ${expandComments ? 'h-3/4' : 'h-1/4'} transition-all duration-500`}>
                {/*@ts-ignore*/}
                <CommentArea postId={selectedPost._id}
                             onToggleExpand={setExpandComments}/>
            </div>
        </div>
    );
}

export default FocusedPost;
