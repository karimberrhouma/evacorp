import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const ForumInscription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder URL - will be replaced with actual form link
  const formUrl = "#";

  return (
    <section id="inscription" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
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
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary-foreground/80 tracking-wide uppercase mb-4 px-4 py-1.5 bg-white/10 rounded-full">
              SIAL Canada 2026
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Inscription au{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Pavillon Africain
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour le plus grand événement agroalimentaire au Canada. 
              Réservez votre place au Pavillon Africain et mettez en valeur votre expertise.
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <span className="block text-white/60 text-sm mb-1">{item.label}</span>
                <span className="block text-white font-bold text-lg">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Formulaire d'inscription
              </h3>
              <p className="text-white/70">
                Le formulaire d'inscription sera disponible prochainement. 
                En attendant, vous pouvez nous contacter directement.
              </p>
            </div>

            {/* Placeholder for embedded form */}
            <div className="min-h-[200px] bg-white/5 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center mb-8">
              <div className="text-center text-white/50">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-4 rounded-xl shadow-glow transition-all"
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
