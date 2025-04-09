"use client";

import {Navbar} from "@/components/navbar";
import FeaturesSection from "@/components/features";
import OurImpact from "@/components/impact";
import Footer from "@/components/commons/Footer";

export default function School() {
  return (
    <>
      <Navbar />
      <FeaturesSection />
      <OurImpact />
      <Footer />
    </>
  );
}
