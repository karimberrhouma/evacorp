import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users2, Award, ArrowRight } from "lucide-react";
import eventImage from "@/assets/event-conference.jpg";

const services = [
  {
    icon: Users2,
    title: "Partenaire de confiance",
    points: [
      "Evamanaging accompagne les entreprises dans la création d'événements professionnels",
      "Grâce à notre expertise et notre approche personnalisée, nous devenons un véritable partenaire",
      "Chez Evamanaging, nous plaçons la satisfaction client au cœur de notre démarche",
    ],
  },
  {
    icon: Lightbulb,
    title: "Solutions sur mesure",
    points: [
      "Chaque événement est conçu selon vos besoins, vos objectifs et votre identité",
      "Nous proposons une organisation complète, des concepts innovants et une coordination impeccable",
      "Nous établissons une relation de confiance, basée sur l'écoute, la transparence et la réactivité",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            L'événement <span className="text-gradient">incontournable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le Pavillon Africain – SIAL Canada 2026 rassemble les acteurs les plus 
            innovants du secteur agroalimentaire africain. Une vitrine d'excellence, 
            d'inspiration et d'expertise, au cœur d'un événement international majeur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={eventImage}
                alt="Événement professionnel"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>

            {/* CTA overlay */}
            <motion.a
              href="#inscription"
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-5 flex items-center justify-between group cursor-pointer border border-border/50"
            >
              <div>
                <h4 className="font-semibold text-lg">Formulaire d'inscription</h4>
                <p className="text-sm text-muted-foreground">SIAL Canada 2026</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </div>
            </motion.a>
          </motion.div>

          {/* Services Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <h3 className="text-2xl font-bold mb-4">
                Un espace moderne qui célèbre la richesse, la diversité et 
                la créativité du continent africain.
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Mise en valeur de l'expertise, du talent et de l'innovation africains au SIAL Canada</li>
                <li>Le Pavillon Africain offre une plateforme unique où traditions, innovations et talents de tout le continent se rencontrent</li>
                <li>Nous offrons aux entreprises et créateurs africains une visibilité internationale et favorisons les échanges professionnels</li>
              </ul>
            </div>

            {/* Service Cards */}
            <div className="grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-modern p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary text-white shrink-0">
                      <service.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">{service.title}</h4>
                      <ul className="space-y-2">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
