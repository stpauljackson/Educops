import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹799",
    duration: "/month",
    description: "Ideal for small schools and coaching centers.",
    features: [
      "Up to 200 students",
      "Basic attendance & grading",
      "5GB storage for documents",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,499",
    duration: "/month",
    description: "Perfect for growing institutions with advanced needs.",
    features: [
      "Up to 1000 students",
      "Automated attendance & reports",
      "50GB storage for documents",
      "Mobile app access",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹6,999",
    duration: "/month",
    description: "For large institutions with custom requirements.",
    features: [
      "Unlimited students",
      "AI-powered analytics & insights",
      "Unlimited storage",
      "24/7 dedicated support",
      "Advanced security & compliance",
      "Custom integrations & APIs",
    ],
    popular: false,
  },
];

function PricingCard({ name, price, duration, description, features, popular }: any) {
  return (
    <Card className={`relative bg-background/50 border-primary/10 shadow-xl backdrop-blur-sm ${popular ? "bg-gradient-to-b from-primary/10 to-background shadow-2xl" : ""}`}>
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-primary">{name}</CardTitle>
        <div className="text-3xl font-bold">
          {price}
          <span className="text-sm font-normal text-muted-foreground">{duration}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 text-sm">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button className="w-full shadow-lg hover:shadow-primary/20 transition-all">
          {name === "Enterprise" ? "Contact Sales" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Choose the plan that’s right for your school. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
