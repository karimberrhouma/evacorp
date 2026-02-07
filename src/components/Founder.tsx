import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import founderPhoto from "@/assets/founder-photo.jpg";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card relative" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
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
            Le Fondateur
          </motion.p>

          {/* Photo in circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img
                src={founderPhoto}
                alt="Jamel Ferjani - Fondateur d'Eva Managing"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-2xl md:text-3xl text-foreground mb-2"
          >
            Jamel Ferjani
          </motion.h3>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-sans uppercase tracking-[0.2em] text-primary mb-8"
          >
            Fondateur & Directeur Général
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Fort d'une expertise de plus de 20 ans dans l'organisation d'événements 
            internationaux, Jamel Ferjani a fondé Eva Managing avec une vision claire : 
            créer des ponts entre l'Afrique et le monde à travers des événements 
            d'exception. Sa passion pour l'excellence et son engagement envers 
            l'authenticité africaine font d'Eva Managing une référence dans le secteur.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-primary mx-auto mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;
