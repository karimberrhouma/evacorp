import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Brain, Globe, Users, Sparkles, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Ambassadors from "@/components/Ambassadors";

const AllInAi = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const highlights = [
    { icon: Users, number: "6 500+", label: "Participants de 40 pays" },
    { icon: Brain, number: "200+", label: "Conférenciers et experts IA" },
    { icon: TrendingUp, number: "2", label: "Jours d'événements intensifs" },
  ];

  const themes = [
    { icon: Brain, title: "IA Générative", desc: "Les dernières avancées en intelligence artificielle générative et leurs applications business" },
    { icon: Sparkles, title: "IA & Économie", desc: "Construire une économie propulsée par l'intelligence artificielle" },
    { icon: Globe, title: "IA Responsable", desc: "Éthique, gouvernance et régulation de l'intelligence artificielle" },
    { icon: TrendingUp, title: "IA & Innovation", desc: "Startups, recherche et transformation des industries par l'IA" },
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
              ALL IN
              <br />
              <span className="text-primary italic">AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-4">
              Un rendez-vous à ne pas manquer
            </p>
            
            <p className="text-lg text-primary font-medium">
              Building an AI-Powered Economy
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
              <p className="text-foreground/70">16 et 17 Septembre 2026</p>
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
              <Brain className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Focus</h3>
              <p className="text-foreground/70">Intelligence Artificielle</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              L'événement IA <span className="text-primary italic">le plus important</span> au Canada
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              ALL IN est l'événement dédié à l'écosystème canadien de l'intelligence artificielle, 
              rassemblant décideurs d'affaires et experts IA du monde entier pour façonner 
              l'innovation et la collaboration dans ce secteur stratégique.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold text-primary mb-4">{stat.number}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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

      {/* À quoi s'attendre */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              À quoi <span className="text-primary italic">s'attendre</span> ?
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Après une édition marquante ayant réuni plus de 6 500 passionnés d'IA, 
              ALL IN revient ! Cette édition vise à catalyser l'innovation et à unir 
              les acteurs clés autour d'un objectif commun : construire une économie 
              propulsée par l'intelligence artificielle.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              L'événement réunit des conférenciers de renommée mondiale issus de NVIDIA, Cohere, 
              AI Now Institute et d'autres organisations leaders dans le domaine de l'IA, 
              pour des keynotes, panels, et sessions de networking exclusives.
            </p>
          </motion.div>
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
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Participez à ALL IN 2026</h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Rejoignez l'écosystème canadien et international de l'IA à Montréal 
              les 16 et 17 septembre 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#inscription"
                className="btn-editorial-filled inline-block"
              >
                S'inscrire via EVA Managing
              </Link>
              
              <a
                href="https://allinevent.ai/fr"
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

export default AllInAi;
