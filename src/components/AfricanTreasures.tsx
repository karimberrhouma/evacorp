import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import agricultureImage from "@/assets/african-agriculture.jpg";
import craftsImage from "@/assets/african-crafts.jpg";
import cuisineImage from "@/assets/african-cuisine.jpg";

const treasures = [
  {
    title: "Terroirs",
    subtitle: "Trésors agricoles",
    image: agricultureImage,
    description: "Diversité exceptionnelle des produits locaux et savoir-faire ancestral.",
  },
  {
    title: "Métiers",
    subtitle: "Artisanat d'excellence",
    image: craftsImage,
    description: "Savoir-faire traditionnel et création artisanale du continent.",
  },
  {
    title: "Saveurs",
    subtitle: "Gastronomie africaine",
    image: cuisineImage,
    description: "Richesse culinaire aux saveurs authentiques et ancestrales.",
  },
];

const AfricanTreasures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding bg-card relative" ref={ref}>
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
            Patrimoine
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Trésors culturels
            <br />
            <span className="italic text-primary">de l'Afrique</span>
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {treasures.map((treasure, index) => (
            <motion.div
              key={treasure.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6">
                <motion.img
                  src={treasure.image}
                  alt={treasure.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                
                {/* Hover overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center">
                    <span className="text-primary text-2xl">+</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-primary mb-2">
                  {treasure.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {treasure.title}
                </h3>
                <p className="font-sans text-sm text-foreground/60">
                  {treasure.description}
                </p>
                <div className="h-px w-0 group-hover:w-12 bg-primary mx-auto mt-4 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfricanTreasures;
