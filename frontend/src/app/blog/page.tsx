"use client"
import React, {useState} from 'react';
import PostList from '@/components/blog/PostList';
import FocusedPost from '@/components/blog/FocusedPost';
import {useGetPostsQuery} from "@/services/post";
import {IPost} from "@common/types/IPost";

interface BlogPageProps {
    posts: IPost[];
}

const BlogPage: React.FC<BlogPageProps> = () => {
    const query = useGetPostsQuery();
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

    const handlePostSelect = (post: IPost) => {
        setSelectedPost(post);
    };

    if (query.isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="h-[calc(100vh-4rem)] mt-16">
                <div className="flex h-full">
                    <PostList posts={query.data}
                              onPostSelect={handlePostSelect}/>
                    <FocusedPost post={selectedPost}/>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
