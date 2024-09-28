"use client";
import {
  Card, CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useGetHomeItemsQuery } from '@/services/home';

export function HomeItemsComponent() {
  const query = useGetHomeItemsQuery();
  return (
    <div className={'flex flex-col gap-20'}>
      <div>

      <Card>
        <CardHeader>
          <CardTitle>Featured Blog Post</CardTitle>
          <CardDescription>
            A brief description of your latest blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            not chatgpt
          </p>
          <div className="mt-4">
            <Link href="blog" passHref>
              <Button variant="link" asChild>
                Read more
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className={'bg-[rgba(0,0,0,0.05)]'}>
        <CardHeader>
          <CardTitle>Recent Blog Posts</CardTitle>
        </CardHeader>
      </Card>
      </div>
      <div>
      <Card>
        <CardHeader>
          <CardTitle>Featured Project</CardTitle>
          <CardDescription>
            A brief description of your highlighted project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            not chatgpt
          </p>
          <div className="mt-4">
            <Link href="https://github.com/yourusername/your-repo" passHref>
              <Button variant="link" asChild>
                View on GitHub
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className={'bg-[rgba(0,0,0,0.05)]'}>
        <CardHeader>
          <CardTitle>Check out my most recent projects</CardTitle>
        </CardHeader>
      </Card>
      </div>
    </div>
  );
}

export default HomeItemsComponent;
