import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const ForumInscription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formUrl = "https://formulaires-eva.lovable.app/form/sial-canada-2026";

  const eventDetails = [
    { icon: Calendar, label: "Date", value: "Avril 2026" },
    { icon: MapPin, label: "Lieu", value: "Montréal, Canada" },
    { icon: Users, label: "Participants", value: "10,000+" },
  ];

  return (
    <section id="inscription" className="section-padding bg-background relative" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
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
              Inscription
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Pavillon
              <br />
              <span className="italic text-primary">Africain</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-foreground/60 max-w-xl mx-auto"
            >
              Rejoignez-nous pour le plus grand événement agroalimentaire au Canada. 
              Réservez votre place.
            </motion.p>
          </div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-8 border border-border/30 hover:border-primary/50 transition-colors duration-500"
              >
                <detail.icon className="w-6 h-6 mx-auto mb-4 text-primary" />
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground/50 mb-2">
                  {detail.label}
                </p>
                <p className="font-serif text-xl text-foreground">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-filled text-lg px-12 py-4"
            >
              S'inscrire
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForumInscription;
