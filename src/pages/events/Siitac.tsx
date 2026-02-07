import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Cpu, Lightbulb, Globe, Rocket, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Ambassadors from "@/components/Ambassadors";
const Siitac = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const themes = [
    { icon: Cpu, title: "Intelligence Artificielle", desc: "Applications IA pour le développement africain" },
    { icon: Lightbulb, title: "Innovation Technologique", desc: "Startups et solutions tech innovantes" },
    { icon: Network, title: "Transformation Digitale", desc: "Digitalisation des entreprises africaines" },
    { icon: Rocket, title: "Entrepreneuriat Tech", desc: "Écosystème startup et incubation" },
  ];

  const objectifs = [
    "Promouvoir l'innovation technologique en Afrique Centrale",
    "Créer des synergies entre startups, investisseurs et institutions",
    "Présenter les dernières avancées technologiques applicables au contexte africain",
    "Faciliter les partenariats technologiques Nord-Sud et Sud-Sud",
    "Mettre en valeur les talents tech de la région",
    "Favoriser le transfert de technologies et de compétences",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Text only */}
      <section className="relative pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#events" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Retour aux événements
            </Link>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              SIITAC
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-4">
              Salon International de l'Innovation
              <br />
              et de la Technologie en Afrique Centrale
            </p>
            
            <p className="text-lg text-primary font-medium">
              Cameroun - Douala
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Dates</h3>
              <p className="text-foreground/70">20 au 22 Novembre 2026</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Lieu</h3>
              <p className="text-foreground/70">Douala</p>
              <p className="text-foreground/70">Cameroun</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Focus</h3>
              <p className="text-foreground/70">Innovation & Technologie</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              <span className="text-primary">À propos</span> du SIITAC
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Le Salon International de l'Innovation et de la Technologie en Afrique Centrale (SIITAC) 
              est le rendez-vous incontournable des acteurs de l'innovation technologique dans la région. 
              Cet événement majeur rassemble startups, investisseurs, grandes entreprises et institutions 
              autour des enjeux de la transformation digitale africaine.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Le SIITAC offre une plateforme unique pour découvrir les dernières innovations, 
              créer des partenariats stratégiques et participer à la révolution technologique 
              qui transforme le continent africain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Thématiques <span className="text-primary italic">Principales</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-8 text-center hover:border-primary/50 transition-colors"
              >
                <theme.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-3">{theme.title}</h3>
                <p className="text-foreground/70 text-sm">{theme.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Objectifs du <span className="text-primary italic">Salon</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {objectifs.map((objectif, index) => (
              <motion.div
                key={objectif}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{objectif}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Au <span className="text-primary italic">Programme</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { day: "Jour 1", title: "Conférences & Panels", items: ["Keynotes d'experts internationaux", "Panels thématiques", "Présentations de solutions tech"] },
              { day: "Jour 2", title: "Innovation & Networking", items: ["Pitch sessions startups", "Rencontres B2B", "Démonstrations technologiques"] },
              { day: "Jour 3", title: "Partenariats & Clôture", items: ["Signature d'accords", "Remise de prix innovation", "Cérémonie de clôture"] },
            ].map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-8"
              >
                <span className="text-primary font-bold text-sm">{item.day}</span>
                <h3 className="font-serif text-xl mt-2 mb-4">{item.title}</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Rejoignez la révolution technologique africaine
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Le SIITAC vous attend à Douala pour trois jours d'innovation, 
              de networking et d'opportunités business dans le secteur tech.
            </p>
            
            <Link
              to="/#inscription"
              className="btn-editorial-filled inline-block"
            >
              S'inscrire maintenant
            </Link>
          </motion.div>
        </div>
      </section>

      <Ambassadors />
      <Footer />
    </div>
  );
};

export default Siitac;
