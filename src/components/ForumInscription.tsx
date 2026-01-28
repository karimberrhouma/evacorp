import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, ExternalLink, FileText } from "lucide-react";

const ForumInscription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder URL - will be replaced with actual form link
  const formUrl = "#";

  return (
    <section id="inscription" className="section-padding relative overflow-hidden">
      {/* Background with intense glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-[200px]" />
      </div>

      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">SIAL Canada 2026</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Inscription au{" "}
              <span className="text-gradient">Pavillon Africain</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour le plus grand événement agroalimentaire au Canada. 
              Réservez votre place au Pavillon Africain.
            </p>
          </motion.div>

          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Calendar, label: "Date", value: "Avril 2026" },
              { icon: MapPin, label: "Lieu", value: "Montréal, Canada" },
              { icon: Users, label: "Participants", value: "10,000+" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-glow p-6"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="block text-muted-foreground text-sm mb-1">{item.label}</span>
                <span className="block font-bold text-lg">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glow p-8 md:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">
                Formulaire d'inscription
              </h3>
              <p className="text-muted-foreground">
                Le formulaire d'inscription sera disponible prochainement. 
                En attendant, vous pouvez nous contacter directement.
              </p>
            </div>

            {/* Placeholder for embedded form */}
            <div className="min-h-[200px] glass rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center mb-8">
              <div className="text-center text-muted-foreground">
                <ExternalLink className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Le formulaire sera intégré ici</p>
              </div>
            </div>

            <motion.a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Accéder au formulaire
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForumInscription;
