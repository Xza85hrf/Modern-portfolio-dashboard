import { useQuery } from "@tanstack/react-query";
import SkillsChart from "../components/SkillsChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { data: skills, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: () => fetch("/api/skills").then((res) => res.json()),
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground mb-4">
            I'm a passionate full-stack developer with experience in building modern web applications.
            I specialize in React, Node.js, and database technologies.
          </p>
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          {isLoading ? (
            <div>Loading skills...</div>
          ) : (
            <SkillsChart skills={skills} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
