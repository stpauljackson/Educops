import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const impactData = [
  {
    title: "Empowering Schools",
    description: "Helping schools streamline administration, reduce workload, and improve efficiency.",
  },
  {
    title: "Enhancing Learning Experience",
    description: "Providing students with better learning tools, digital resources, and career guidance.",
  },
  {
    title: "Bridging the Communication Gap",
    description: "Strengthening collaboration between teachers, students, and parents for better outcomes.",
  },
];

const OurImpact = () => {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Transforming Education for a Brighter Future
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We are committed to revolutionizing the education system by making management seamless, learning more engaging, 
              and communication stronger.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {impactData.map((impact, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-base">{impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
