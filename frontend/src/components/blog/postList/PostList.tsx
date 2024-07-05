import React from 'react';
import MediumPost from './MediumPost';
import { IPost } from "@common/types/IPost";

interface PostListProps {
    posts: IPost[] | null;
    onPostSelect: (post: IPost) => void;
}

function PostList({ posts, onPostSelect }: PostListProps) {
    return (
        <div className="w-1/3 p-4 overflow-y-auto">
            {posts && posts.map((post: IPost, index: number) => (
                <div key={index} onClick={() => onPostSelect(post)} className="cursor-pointer mb-4">
                    <MediumPost title={post.title} content={post.content} />
                </div>
            ))}
        </div>
    );
}

export default PostList;
