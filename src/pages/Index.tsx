import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Services from "@/components/Services";
import AfricanTreasures from "@/components/AfricanTreasures";
import FAQ from "@/components/FAQ";
import ForumInscription from "@/components/ForumInscription";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import News from "@/components/News";
import Footer from "@/components/Footer";
import QuiSommesNousSection from "@/components/QuiSommesNousSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <Services />
      <AfricanTreasures />
      <News />
      <ForumInscription />
      <Founder />
      <QuiSommesNousSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
