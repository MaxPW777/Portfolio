import React from 'react';
import MediumPost from './MediumPost';
import { IPost } from "@common/types/IPost";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useGetPostsQuery} from "@/services/post";


function PostList() {
    const query = useGetPostsQuery()
    if (query.isLoading){
        return <p>Loading...</p>
    }


    if (query.isError){
        return <p>ERROR FETCHING DATA</p>
    }

    return (
        <ScrollArea className={'w-1/3 p-4 '}>
            {query.data && query.data.map((post: IPost, index: number) => (
                <div key={index} className="cursor-pointer mb-4">
                    <MediumPost post={post}/>
                </div>
            ))}
        </ScrollArea>
    );
}

export default PostList;
