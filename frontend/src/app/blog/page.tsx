"use client"
import React, {useState} from 'react';
import PostList from '@/components/blog/PostList';
import FocusedPost from '@/components/blog/FocusedPost';
import {useGetPostsQuery} from "@/services/post";
import {IPost} from "@common/types/IPost";
import NewPost from "@/components/blog/NewPost";

interface BlogPageProps {
    posts: IPost[];
}

const BlogPage: React.FC<BlogPageProps> = () => {
    const isLogged = localStorage.getItem('access_token') !== null;
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
            {isLogged && <NewPost/>}
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
