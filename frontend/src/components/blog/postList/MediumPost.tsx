import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelectedPost } from "@/providers/SelectedPostProvider";
import {IPost, IPostDocument} from "@common/types/IPost";
import {cn} from "@/lib/utils";

interface MediumPostProps {
    post: IPostDocument;
}

const MediumPost: React.FC<MediumPostProps> = ({ post }) => {
    const { setSelectedPost, selectedPost } = useSelectedPost();
    return (
        <Card onClick={() => setSelectedPost(post)} className={cn("cursor-pointer mb-4 hover:bg-gray-100 transition-all", selectedPost?._id === post._id && "bg-gray-100")}>
            <CardHeader>
                <CardTitle className={'text-blue-950'}>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3">{post.content}</p>
            </CardContent>
        </Card>
    );
};

export default MediumPost;
