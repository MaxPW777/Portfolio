"use client"
import React, { useEffect, useState } from 'react';
import PostList from '@/components/blog/postList/PostList';
import FocusedPost from '@/components/blog/FocusedPost';
import { useGetPostsQuery } from "@/services/post";
import { IPost } from "@common/types/IPost";
import NewPost from "@/components/blog/NewPost";

function BlogPage() {
    const [isLogged, setIsLogged] = useState(false);
    const query = useGetPostsQuery();
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        setIsLogged(token !== null);
    }, []);

    const handlePostSelect = (post: IPost) => {
        setSelectedPost(post);
    };

    if (query.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isLogged && <NewPost />}
            <div className="h-[calc(100vh-4rem)] mt-16">
                <div className="flex h-full">
                    <PostList posts={query.data} onPostSelect={handlePostSelect} />
                    <FocusedPost post={selectedPost} />
                </div>
            </div>
        </>
    );
}

export default BlogPage;
