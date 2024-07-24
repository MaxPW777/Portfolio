"use client"
import React from 'react';
import PostList from '@/components/blog/postList/PostList';
import FocusedPost from '@/components/blog/FocusedPost';
import {useGetPostsQuery} from "@/services/post";
import NewPost from "@/components/blog/NewPost";
import {useAuth} from "@/providers/auth-context";
import {SelectedPostProvider} from "@/providers/SelectedPostProvider";

function BlogPage() {
    const {isAuthenticated} = useAuth();
    const query = useGetPostsQuery();

    if (query.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SelectedPostProvider>
                {isAuthenticated && <NewPost/>}
                <div className="h-[calc(100vh-4rem)] mt-16">
                    <div className="flex h-full">
                        <PostList posts={query.data}/>
                        <FocusedPost/>
                    </div>
                </div>
            </SelectedPostProvider>
        </>
    );
}

export default BlogPage;
