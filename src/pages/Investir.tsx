import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Investir = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1 }}
              className="h-px bg-primary mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6"
            >
              Devenir Sponsor
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Investir dans le
              <br />
              <span className="italic text-primary">Pavillon Africain</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-foreground/60 max-w-xl mx-auto"
            >
              Rejoignez-nous en tant que sponsor et bénéficiez d'une visibilité 
              exceptionnelle lors du plus grand salon agroalimentaire au Canada.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Embedded Form Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="border border-border/30 bg-background overflow-hidden">
              <iframe
                src="https://formulaires-eva.lovable.app/form/sial-canada-2026"
                className="w-full min-h-[800px] border-0"
                title="Formulaire Sponsor SIAL Canada 2026"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Investir;
