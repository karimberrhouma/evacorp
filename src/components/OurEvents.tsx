import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import forumCongoCanada from "@/assets/events/forum-congo-canada.jpg";
import forumEconomique from "@/assets/events/forum-economique.jpg";
import sialMission from "@/assets/events/sial-mission.jpg";

const events = [
  {
    title: "Forum Congo Canada",
    image: forumCongoCanada,
    pdfUrl: "/pdfs/forum-congo-canada.pdf",
  },
  {
    title: "Forum Économique Afrique Centrale",
    image: forumEconomique,
    pdfUrl: "/pdfs/forum-economique.pdf",
  },
  {
    title: "Mission Tunisie Canada - SIAL",
    image: sialMission,
    pdfUrl: "/pdfs/sial-mission.pptx",
  },
];

const OurEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEventClick = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section id="events" className="section-padding bg-background relative" ref={ref}>
      {/* Darker background overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            Événements
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Nos
            <br />
            <span className="italic text-primary">Événements</span>
          </motion.h2>
        </div>

        {/* Events Grid - 3 affiches côte à côte avec même taille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              onClick={() => handleEventClick(event.pdfUrl)}
              className="group cursor-pointer flex"
            >
              {/* Image Container - Fixed height, object-contain for full image display */}
              <div className="relative overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 w-full bg-muted/50 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 max-h-[500px]"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-500 pointer-events-none" />
                
                {/* Hover overlay - click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-16 h-16 border-2 border-primary bg-background/80 flex items-center justify-center">
                    <span className="text-primary font-serif text-sm uppercase tracking-wider">Voir</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-primary mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default OurEvents;
