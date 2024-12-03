import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center space-y-12 text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Crafting Digital
            <br />
            Experiences
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto max-w-[700px] text-xl text-muted-foreground"
        >
          Full-stack developer specializing in building exceptional digital experiences.
          <br />
          Turning ideas into elegant, functional solutions.
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4"
      >
        <Link href="/portfolio">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
            View My Work
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="backdrop-blur-sm">
            Get in Touch
          </Button>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group rounded-lg border bg-card/50 p-8 text-card-foreground shadow-lg transition-colors hover:bg-accent backdrop-blur-sm"
        >
          <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">Frontend Development</h3>
          <p className="text-sm text-muted-foreground">
            Creating responsive, intuitive user interfaces with modern technologies.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group rounded-lg border bg-card/50 p-8 text-card-foreground shadow-lg transition-colors hover:bg-accent backdrop-blur-sm"
        >
          <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">Backend Solutions</h3>
          <p className="text-sm text-muted-foreground">
            Building robust, scalable server-side applications and APIs.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group rounded-lg border bg-card/50 p-8 text-card-foreground shadow-lg transition-colors hover:bg-accent backdrop-blur-sm"
        >
          <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">Database Design</h3>
          <p className="text-sm text-muted-foreground">
            Designing efficient database schemas and optimizing queries.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
