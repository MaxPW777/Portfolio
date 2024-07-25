"use client"
import React, {useState} from 'react';
import CommentArea from "@/components/blog/comments/CommentArea";
import DOMPurify from 'dompurify';
import DeletePostButton from "@/components/blog/DeletePostButton";
import Image from "next/image";
import {useSelectedPost} from "@/providers/SelectedPostProvider";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {useAuth} from "@/providers/auth-context";


function FocusedPost() {
    const [expandComments, setExpandComments] = useState(false);
    const {selectedPost} = useSelectedPost();
    const {isAuthenticated} = useAuth();

    if (!selectedPost) {
        return <div className="w-1/2 p-4">Select a post to read</div>;
    }

    const sanitizedContent = DOMPurify.sanitize(selectedPost.content.replace(/\n/g, '<br />'));

    return (
        <div
            className="w-full h-[calc(100% - 2rem)] p-4 border-l flex flex-col transition-all duration-500">
            <Card
                className={`relative ${expandComments ? 'h-1/4' : 'h-3/4'} flex flex-col transition-all duration-500`}>
                {/*// @ts-ignore type contains _id*/}
                {isAuthenticated && <DeletePostButton postId={selectedPost._id}/>}
                <CardHeader
                    className="text-2xl font-bold">{selectedPost.title}</CardHeader>
                <CardContent className={'overflow-y-auto mt-2'}>
                    {selectedPost.image &&
                        <div className="relative h-auto w-full max-w-[600px]">
                            <div
                                className="relative pb-[75%]"> {/* Maintain aspect ratio */}
                                <Image
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{objectFit: 'contain'}} // Preserve image resolution and aspect ratio
                                />
                            </div>
                        </div>
                    }
                    <p className="mt-2 h-fit"
                       dangerouslySetInnerHTML={{__html: sanitizedContent}}/>
                </CardContent>
            </Card>
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
