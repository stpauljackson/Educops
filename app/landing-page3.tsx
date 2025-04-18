"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronLeft, ChevronRight, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselSlides = [
    {
      title: "Streamline Your Workflow",
      description:
        "The all-in-one platform that helps teams work smarter, not harder. Automate, collaborate, and grow with StreamLine.",
      image: "/placeholder.svg?height=550&width=550",
    },
    {
      title: "Boost Team Productivity",
      description: "Empower your team with powerful tools designed to enhance collaboration and drive results.",
      image: "/placeholder.svg?height=550&width=550",
    },
    {
      title: "Scale Your Business",
      description: "From startups to enterprises, our platform grows with you. Unlock your team's full potential.",
      image: "/placeholder.svg?height=550&width=550",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="StreamLine Logo" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              StreamLine
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline-block">
              Sign In
            </Link>
            <Button className="shadow-lg hover:shadow-primary/20 transition-all">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] transition-opacity duration-500 absolute inset-0 ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{ position: index === currentSlide ? "relative" : "absolute" }}
                  >
                    <div className="flex flex-col justify-center space-y-4 p-6 md:p-8 lg:p-12">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                          {slide.title}
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">{slide.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                        <Button
                          size="lg"
                          className="gap-1 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all"
                        >
                          Start Free Trial <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/5 transition-all"
                        >
                          Watch Demo
                        </Button>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-2">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        width={550}
                        height={550}
                        alt="Dashboard Preview"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 border border-primary/10"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 border border-primary/10"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <span className="sr-only">Go to slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Everything You Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  StreamLine provides all the tools you need to manage your projects, collaborate with your team, and
                  grow your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Task Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, assign, and track tasks with ease. Keep your projects on schedule.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Work together in real-time with comments, file sharing, and integrated chat.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automate repetitive tasks and workflows to save time and reduce errors.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get insights into your team's performance with detailed reports and dashboards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say about StreamLine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-1 bg-gradient-to-r from-primary to-primary/60">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>Marketing Director</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "StreamLine has transformed how our marketing team collaborates. We've reduced meeting time by 50%
                    and increased productivity."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-1 bg-gradient-to-r from-primary to-primary/60">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Michael Chen</CardTitle>
                      <CardDescription>Product Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The automation features have saved us countless hours. Our team can focus on innovation instead of
                    repetitive tasks."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-1 bg-gradient-to-r from-primary to-primary/60">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Emily Rodriguez</CardTitle>
                      <CardDescription>CEO, TechStart</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "As a startup, we needed a solution that could scale with us. StreamLine has been the perfect
                    partner for our growth journey."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                  Choose the plan that's right for you and your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-primary">Starter</CardTitle>
                  <div className="text-3xl font-bold">
                    $9<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>Perfect for individuals and small projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Up to 5 projects
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Basic automation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> 5GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full shadow-lg hover:shadow-primary/20 transition-all">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-to-b from-primary/10 to-background border-primary shadow-2xl relative">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">Pro</CardTitle>
                  <div className="text-3xl font-bold">
                    $29<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>Ideal for growing teams and businesses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Unlimited projects
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Advanced automation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> 50GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Team collaboration
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full shadow-lg hover:shadow-primary/20 transition-all">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-primary">Enterprise</CardTitle>
                  <div className="text-3xl font-bold">
                    $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>For large organizations with complex needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Everything in Pro
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Custom workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Unlimited storage
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> 24/7 dedicated support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Advanced security
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> Custom integrations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full shadow-lg hover:shadow-primary/20 transition-all">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of teams that use StreamLine to work smarter and achieve more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Button size="lg" className="gap-1 shadow-lg hover:shadow-primary/20 transition-all">
                  Start Your Free Trial <ChevronRight className="h-4 w-4" />
                </Button> */}
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 transition-all">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="StreamLine Logo" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  StreamLine
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your workflow and boost productivity with our all-in-one platform.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-primary">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-primary">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-primary">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

