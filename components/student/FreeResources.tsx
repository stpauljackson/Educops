 
const resources = [
  { title: "📚 Study Materials", description: "Download PDFs, video lessons & notes." },
  { title: "📝 Test Series", description: "Practice with mock exams & quizzes." },
  { title: "🎯 Career Guidance", description: "Explore different career paths & expert advice." },
  { title: "🧠 Psychometric Tests", description: "Understand your strengths with free tests.", href: "/student/psychometricTest" },
];

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function FreeResources() {
  const router = useRouter();
  return (
    <div className="py-20 px-8 bg-white text-blue-900">
      <h2 className="text-4xl font-bold text-center mb-12">Free Resources</h2>
      <div className="flex flex-col items-center gap-8 px-4">
        {resources.map((resource, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="w-full max-w-lg px-4"
          >
            <Card
            onClick={() => resource.href && router.push(resource.href)}
              className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-primary">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
