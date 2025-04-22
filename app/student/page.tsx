"use client";

import {HeroSection}  from "@/components/student/HeroSection";
import { FreeResources } from "@/components/student/FreeResources";
import { HowItWorks } from "@/components/student/HowItWorks";
import Footer from "@/components/commons/Footer";
import { Navbar } from "@/components/navbar";
import PsychometricTest from "@/components/student/Psycho";

export default function StudentsPage() {
  return (
    <div className="bg-white text-blue-900 min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <FreeResources />
      <HowItWorks />
      <Footer />
    </div>
  );
}
