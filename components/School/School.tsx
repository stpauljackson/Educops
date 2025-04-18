import Carousel from "./HeroSection";

const carouselSlides = [
  {
    title: "Manage Your School Effortlessly",
    description: "A complete school management solution for administration, teachers, and students.",
    image: "/placeholder.svg?height=550&width=550",
  },
  {
    title: "Empower Students & Parents",
    description: "Access study resources, track progress, and get career guidance in one place.",
    image: "/placeholder.svg?height=550&width=550",
  },
  {
    title: "Transform Education",
    description: "Bringing technology to education, making learning more engaging and effective.",
    image: "/placeholder.svg?height=550&width=550",
  },
];

const School = () => {
  return (
    <div>
      <Carousel slides={carouselSlides} />
    </div>
  );
};

export default School;
