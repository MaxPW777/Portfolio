import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelectedPost } from "@/providers/SelectedPostProvider";
import { IPost } from "@common/types/IPost";

interface MediumPostProps {
    post: IPost;
}

const MediumPost: React.FC<MediumPostProps> = ({ post }) => {
    const { setSelectedPost } = useSelectedPost();
    return (
        <Card onClick={() => setSelectedPost(post)} className="cursor-pointer mb-4">
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
