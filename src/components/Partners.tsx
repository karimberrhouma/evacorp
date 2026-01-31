import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import partnersImage from "@/assets/partners/nos-partenaires.png";

// Individual partner logos extracted from the image
const partnerLogos = [
  { name: "ID Gatineau", id: 1 },
  { name: "Radio Maweja", id: 2 },
  { name: "Conseil des arts du Canada", id: 3 },
  { name: "RISQ", id: 4 },
  { name: "SME", id: 5 },
  { name: "Infos 243", id: 6 },
  { name: "Congolese Women Network", id: 7 },
  { name: "CCNG", id: 8 },
  { name: "Tourisme Québec", id: 9 },
  { name: "APCM", id: 10 },
  { name: "ABI", id: 11 },
  { name: "RECC", id: 12 },
  { name: "CCRCC", id: 13 },
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
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex items-center"
            >
              {/* First set of logos */}
              {partnerLogos.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center"
                >
                  <div className="bg-foreground/95 rounded-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[180px] h-[100px] flex items-center justify-center">
                    <span className="text-background font-sans font-semibold text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center"
                >
                  <div className="bg-foreground/95 rounded-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[180px] h-[100px] flex items-center justify-center">
                    <span className="text-background font-sans font-semibold text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Alternative: Show actual partner image with individual crop simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <img 
            src={partnersImage} 
            alt="Nos partenaires" 
            className="max-w-full h-auto object-contain opacity-90"
            style={{ maxHeight: '200px' }}
          />
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
