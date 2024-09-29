import React, {useEffect} from 'react';
import MediumPost from './MediumPost';
import {IPost, IPostDocument} from "@common/types/IPost";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useGetPostsQuery} from "@/services/post";
import {IComment} from "@common/types/IComment";

interface PostListProps {
    postData: IPostDocument[];
}
function PostList({ postData }: PostListProps) {
    // const query = useGetPostsQuery()
    useEffect(() => {
        console.log('postData', postData)
    }, [postData])
    return (
        <ScrollArea className={'w-1/3 p-4 '}>
            {postData.map((post: IPostDocument, index: number) => (
                <div key={index} className="cursor-pointer mb-4">
                    <MediumPost post={post}/>
                </div>
            ))}
        </ScrollArea>
    );
}

export default PostList;
