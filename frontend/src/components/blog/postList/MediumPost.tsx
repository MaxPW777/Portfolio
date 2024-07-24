import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelectedPost } from "@/providers/SelectedPostProvider";
import { IPost } from "@common/types/IPost";
import {twMerge} from "tailwind-merge";

interface MediumPostProps {
    post: IPost;
}

const MediumPost: React.FC<MediumPostProps> = ({ post }) => {
    const { setSelectedPost, selectedPost } = useSelectedPost();
    return (
        // @ts-ignore
        <Card onClick={() => setSelectedPost(post)} className={twMerge("cursor-pointer mb-4 hover:bg-gray-100 transition-all", selectedPost?._id === post._id && "bg-gray-100")}>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3">{post.content}</p>
            </CardContent>
        </Card>
    );
};

export default MediumPost;
