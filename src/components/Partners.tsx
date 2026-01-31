import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import partner logos
import idGatineau from "@/assets/partners/id-gatineau.jpg";
import ccng from "@/assets/partners/ccng.png";
import apcm from "@/assets/partners/apcm.jpeg";
import radioMaweja from "@/assets/partners/radio-maweja.png";
import risq from "@/assets/partners/risq.png";
import conseilArts from "@/assets/partners/conseil-arts.png";
import sme from "@/assets/partners/sme.jpg";

const partnerLogos = [
  { name: "ID Gatineau", logo: idGatineau },
  { name: "CCNG", logo: ccng },
  { name: "APCM", logo: apcm },
  { name: "Radio Maweja", logo: radioMaweja },
  { name: "RISQ", logo: risq },
  { name: "Conseil des arts du Canada", logo: conseilArts },
  { name: "SME", logo: sme },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            Nos <span className="italic text-primary">Partenaires</span>
          </motion.h2>
        </div>

        {/* Infinite scrolling logos - one by one */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex items-center"
            >
              {/* First set of logos */}
              {partnerLogos.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[120px] w-[220px] flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-[90px] max-w-[180px] object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[120px] w-[220px] flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-[90px] max-w-[180px] object-contain"
                    />
                  </div>
                </div>
              ))}
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
