import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import eventImage from "@/assets/event-conference.jpg";

const features = [
  {
    number: "01",
    title: "Partenaire de confiance",
    description: "Evamanaging accompagne les entreprises dans la création d'événements professionnels avec une approche personnalisée.",
  },
  {
    number: "02",
    title: "Solutions sur mesure",
    description: "Chaque événement est conçu selon vos besoins, vos objectifs et votre identité avec une coordination impeccable.",
  },
  {
    number: "03",
    title: "Excellence africaine",
    description: "Mise en valeur de l'expertise, du talent et de l'innovation africains sur la scène internationale.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1 }}
            className="h-px bg-primary mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6"
          >
            Nos Services
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            L'événement
            <br />
            <span className="italic text-primary">incontournable</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-foreground/60 max-w-2xl mx-auto"
          >
            Le Pavillon Africain – SIAL Canada 2026 rassemble les acteurs les plus 
            innovants du secteur agroalimentaire africain.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={eventImage}
                alt="Événement professionnel"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary" />
          </motion.div>

          {/* Features */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="group"
              >
                <div className="flex gap-6">
                  <span className="font-serif text-5xl text-primary/30 group-hover:text-primary transition-colors duration-500">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="h-px w-0 group-hover:w-full bg-primary mt-4 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
