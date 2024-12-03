import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import RichTextRenderer from "../components/RichTextRenderer";
import Comments from "../components/Comments";
import { type Post } from "@db/schema";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const [location, setLocation] = useLocation();
  const slug = location.split("/").pop();

  const { data: post, isLoading } = useQuery<Post>({
    queryKey: ["post", slug],
    queryFn: () => fetch(`/api/posts/${slug}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading post...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="space-y-8">
      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => setLocation("/blog")}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {format(new Date(post.createdAt), "MMMM dd, yyyy")}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <RichTextRenderer content={post.content} />
          </div>
        </CardContent>
      </Card>

      <Comments postId={post.id} />
    </div>
  );
}
