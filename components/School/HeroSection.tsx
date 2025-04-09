import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Define the type for a slide
interface Slide {
  title: string;
  description: string;
  image: string;
}

// Define props for the Carousel component
interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-1 md:px-1">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            {slides.map((slide, index) => (
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
                    alt="Slide Preview"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
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
  );
};

export default Carousel;
