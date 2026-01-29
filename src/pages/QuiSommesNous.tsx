import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Plane, Megaphone } from "lucide-react";

const QuiSommesNous = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    {
      name: "EVA MANAGING",
      subtitle: "Agence d'organisation d'événements",
      icon: Calendar,
      description: "Spécialisée dans l'organisation d'événements internationaux de grande envergure, Eva Managing accompagne ses clients dans la conception et la réalisation de forums, salons professionnels et conférences d'exception. Notre expertise s'étend de la logistique événementielle à la coordination des partenariats stratégiques.",
      services: [
        "Organisation de forums internationaux",
        "Salons agroalimentaires",
        "Conférences d'affaires",
        "Pavillons nationaux"
      ]
    },
    {
      name: "EVA TOUR",
      subtitle: "Agence de voyage",
      icon: Plane,
      description: "Eva Tour est votre partenaire de confiance pour tous vos déplacements professionnels et touristiques. Nous proposons des services sur mesure pour les voyages d'affaires, les circuits découverte et l'organisation de séjours pour les délégations internationales.",
      services: [
        "Voyages d'affaires",
        "Circuits touristiques",
        "Billetterie aérienne",
        "Réservations hôtelières"
      ]
    },
    {
      name: "EVA COMMUNICATION",
      subtitle: "Agence de communication",
      icon: Megaphone,
      description: "Eva Communication accompagne les entreprises et institutions dans leur stratégie de communication globale. De la création graphique à la gestion des relations publiques, nous mettons notre créativité au service de votre image de marque.",
      services: [
        "Stratégie de communication",
        "Création graphique",
        "Relations publiques",
        "Marketing digital"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1 }}
            className="h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-sans uppercase tracking-[0.3em] text-primary text-center mb-4"
          >
            À propos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-6"
          >
            Qui sommes-nous ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/70 text-center max-w-2xl mx-auto"
          >
            Un groupe de sociétés au service de l'excellence événementielle, 
            du voyage et de la communication.
          </motion.p>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card border border-border rounded-lg p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <company.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                      {company.name}
                    </h2>
                    <p className="text-primary text-sm uppercase tracking-wider mb-6">
                      {company.subtitle}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {company.description}
                    </p>
                    
                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {company.services.map((service) => (
                        <div 
                          key={service}
                          className="flex items-center gap-2 text-foreground/60"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl text-foreground mb-6"
          >
            Travaillons ensemble
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 mb-8 max-w-xl mx-auto"
          >
            Contactez-nous pour discuter de vos projets et découvrir 
            comment nos expertises peuvent vous accompagner.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            href="/#contact"
            className="btn-editorial-filled inline-block"
          >
            Nous contacter
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;
