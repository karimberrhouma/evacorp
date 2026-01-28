import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AfricanTreasures from "@/components/AfricanTreasures";
import FAQ from "@/components/FAQ";
import ForumInscription from "@/components/ForumInscription";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AfricanTreasures />
      <News />
      <ForumInscription />
      <Founder />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
