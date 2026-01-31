import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import partnersImage from "@/assets/partners/nos-partenaires.png";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            Collaborations
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            Nos <span className="italic text-primary">Partenaires</span>
          </motion.h2>
        </div>

        {/* Infinite scrolling logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-8"
            >
              {/* Duplicate images for seamless loop */}
              <img 
                src={partnersImage} 
                alt="Nos partenaires" 
                className="h-24 md:h-32 object-contain flex-shrink-0"
              />
              <img 
                src={partnersImage} 
                alt="Nos partenaires" 
                className="h-24 md:h-32 object-contain flex-shrink-0"
              />
              <img 
                src={partnersImage} 
                alt="Nos partenaires" 
                className="h-24 md:h-32 object-contain flex-shrink-0"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px bg-primary mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default Partners;
