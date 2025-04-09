"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronLeft, ChevronRight, Facebook, Github, Instagram, Linkedin, Twitter,School, User, Users } from "lucide-react"
import Modal from "./modal"
import { Navbar } from "@/components/navbar"
import FeaturesSection from "@/components/features"
import { UserTypeModal, type UserType } from "@/components/usertypeModal"
import OurImpact from "@/components/impact"
import Footer  from "../components/commons/Footer"
import { useRouter } from "next/navigation";
import { PricingSection } from "@/components/Pricing"

const sections = ["school", "student", "parent", "contact"]

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if user type is stored in localStorage
    const storedUserType = localStorage.getItem("userType") as UserType

    if (storedUserType) {
      setUserType(storedUserType)
    } else {
      // Show modal if no user type is stored
      setShowModal(true)
    }
  }, [])

  const handleModalClose = (selectedType: UserType) => {
    if (selectedType) {
      setUserType(selectedType);
        router.push(`/${selectedType}`);
    }
    setShowModal(false)
  }


  const onClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const observers = sections.map((section) => {
      const target = document.getElementById(section);
      if (!target) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(target);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const carouselSlides = [
    {
      title: "Simplify School Management",
      description:
        "A comprehensive platform to streamline administration, enhance communication, and improve student outcomes.",
      image: "/placeholder.svg?height=550&width=550",
    },
    {
      title: "Enhance Learning & Collaboration",
      description: "Empower students, teachers, and parents with digital tools for better engagement and academic success.",
      image: "/placeholder.svg?height=550&width=550",
    },
    {
      title: "Guiding Students to a Bright Future",
      description: "Access career counseling, study resources, and mentorship to help students make informed decisions.",
      image: "/placeholder.svg?height=550&width=550",
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      {/* UserType Modal */}
      <UserTypeModal isOpen={showModal} onClose={handleModalClose} />
      {/* End UserType Modal */}


      
      {/* Header */}
        <Navbar />
      {/* End Header */}

      <main className="flex-1">
      <Modal isOpen={isModalOpen} onClose={onClose} />
        {/* Hero Section with C
        arousel */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-1 md:px-1">
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
                          Schedule a Free Demo <ChevronRight className="h-4 w-4" />
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
        <FeaturesSection />
        

       <OurImpact />

        {/* Pricing Section */}
        <PricingSection />
        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of teams that use Educops to work smarter and achieve more.
                </p>
              </div>


              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                
                <Button 
                  size="lg" 
                  className="gap-1 shadow-lg hover:shadow-primary/20 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  Schedule a Demo <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function Home() {
  return <LandingPage />
}

