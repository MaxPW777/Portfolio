import React from 'react';
import MediumPost from './MediumPost';
import { IPost } from "@common/types/IPost";

interface PostListProps {
    posts: IPost[] | null;
}

function PostList({ posts }: PostListProps) {
    return (
        <div className="w-1/3 p-4 overflow-y-auto">
            {posts && posts.map((post: IPost, index: number) => (
                <div key={index} className="cursor-pointer mb-4">
                    <MediumPost post={post}/>
                </div>
            ))}
        </div>
    );
}

export default PostList;
