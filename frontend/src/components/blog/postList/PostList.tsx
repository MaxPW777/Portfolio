import React from 'react';
import MediumPost from './MediumPost';
import { IPost } from "@common/types/IPost";
import {ScrollArea} from "@/components/ui/scroll-area";

interface PostListProps {
    posts: IPost[] | null;
}

function PostList({ posts }: PostListProps) {
    return (
        <ScrollArea className={'w-1/3 p-4 '}>
            {posts && posts.map((post: IPost, index: number) => (
                <div key={index} className="cursor-pointer mb-4">
                    <MediumPost post={post}/>
                </div>
            ))}
        </ScrollArea>
    );
}

export default PostList;
