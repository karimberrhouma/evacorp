import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Monitor, Cpu, Shield, Globe, Users, Lightbulb, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Ambassadors from "@/components/Ambassadors";

const MtlConnecte = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const thematiques = [
    { icon: Cpu, title: "Intelligence Artificielle", desc: "Explorer les avancées et impacts de l'IA sur les entreprises et la société" },
    { icon: Lightbulb, title: "Culture & Créativité", desc: "L'intersection entre technologie, art et innovation créative" },
    { icon: Shield, title: "Cybersécurité & Identité numérique", desc: "Protection des données et souveraineté numérique" },
    { icon: Globe, title: "Territoires & Humanités", desc: "Impact des technologies sur les communautés et les territoires" },
  ];

  const activites = [
    "Conférences et panels",
    "Rencontres B2B",
    "La Vitrine MTL connecte : innovations technologiques",
    "Ateliers pratiques",
    "MTL Tech Awards : concours international de l'innovation",
    "Rencontres des Secteurs d'Excellence",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
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
              &lt;MTL&gt; connecte
              <br />
              <span className="text-primary italic">La Semaine numérique de Montréal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-4">
              8e édition
            </p>
            
            <p className="text-lg text-primary font-medium">
              Thème principal : Souveraineté
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
              <p className="text-foreground/70">13 au 16 Octobre 2026</p>
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
              <p className="text-foreground/70">Montréal</p>
              <p className="text-foreground/70">Canada</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Monitor className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Organisateur</h3>
              <p className="text-foreground/70">Printemps Numérique</p>
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
              <span className="text-primary">À propos</span> de MTL connecte
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              MTL connecte est la Semaine numérique de Montréal, un événement majeur qui explore 
              le futur du travail à travers des thématiques clés liées à la révolution numérique. 
              Pour sa 8e édition, l'événement se concentre sur le thème de la <strong>Souveraineté</strong> : 
              comprendre et tirer profit de la révolution numérique.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Cet événement rassemble des milliers de participants autour de conférences, 
              panels, ateliers et rencontres B2B pour explorer l'impact des technologies 
              sur nos sociétés et nos économies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thématiques */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Thématiques <span className="text-primary italic">2026</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thematiques.map((theme, index) => (
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

      {/* Activités */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Les <span className="text-primary italic">Activités</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activites.map((activite, index) => (
              <motion.div
                key={activite}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card border border-border/30 p-6 hover:border-primary/50 transition-colors"
              >
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{activite}</span>
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
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Participez à MTL connecte 2026</h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Rejoignez des milliers de professionnels pour explorer la souveraineté numérique 
              et le futur du travail à Montréal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#inscription"
                className="btn-editorial-filled inline-block"
              >
                S'inscrire via EVA Managing
              </Link>
              
              <a
                href="https://mtlconnecte.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Site officiel <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Ambassadors />
      <Footer />
    </div>
  );
};

export default MtlConnecte;
