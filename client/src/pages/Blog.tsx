import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import RichTextRenderer from "../components/RichTextRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { type Post } from "@db/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/posts").then((res) => res.json()),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      {isLoading ? (
        <div>Loading posts...</div>
      ) : (
        <div className="grid gap-6">
          {posts?.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {format(new Date(post.createdAt), "MMMM dd, yyyy")}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <RichTextRenderer content={post.content} truncate />
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
