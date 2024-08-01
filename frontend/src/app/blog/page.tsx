import React from 'react';
import NewPost from "@/components/blog/NewPost";
import PostArea from "@/components/blog/PostArea";

function BlogPage() {
    return (
        <>
            <NewPost/>
            <div className="h-[calc(100vh-4rem)] mt-16">
                <div className="flex h-full">
                    <PostArea/>
                </div>
            </div>
        </>
    );
}

export default BlogPage;
