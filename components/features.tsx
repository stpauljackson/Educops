import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Student Information Management",
    description: "Easily manage student records, attendance, and performance in one place.",
  },
  {
    title: "Parent-Teacher Communication",
    description: "Enhance collaboration with messaging, notifications, and progress reports.",
  },
  {
    title: "Exam & Result Management",
    description: "Automate exam scheduling, grading, and report generation for efficiency.",
  },
  {
    title: "Career Guidance & Study Resources",
    description: "Provide students with career counseling and access to study materials.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Everything Your School Needs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our platform provides all the tools necessary to manage school operations, enhance communication, and support students.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
           <Card
           key={index}
           className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 h-60 flex flex-col"
         >
           <CardHeader className="pb-2 flex-grow">
             <CardTitle className="text-primary">{feature.title}</CardTitle>
           </CardHeader>
           <CardContent className="flex-grow">
             <p className="text-sm text-muted-foreground">{feature.description}</p>
           </CardContent>
         </Card>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
