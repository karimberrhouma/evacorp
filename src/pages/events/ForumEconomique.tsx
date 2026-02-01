import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Building2, TrendingUp, Handshake, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import forumImage from "@/assets/events/forum-economique.jpg";

const ForumEconomique = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const pourquoiParticiper = [
    { title: "Se positionner", desc: "Comme un acteur majeur de développement de l'économie de la sous-région" },
    { title: "Réduire", desc: "Le déficit d'information sur la panoplie d'opportunités qu'offre l'Afrique centrale" },
    { title: "Rencontrer", desc: "Des investisseurs susceptibles de porter votre projet et trouver des financements" },
    { title: "Découvrir", desc: "Les opportunités d'affaires en zone CEMAC/CEEAC dans l'agribusiness, le digital, les énergies renouvelables" },
  ];

  const avantages = [
    "Magazine du Forum : page de publicité + logo partenaires",
    "Rapport final : pleine page de publicité",
    "Bannière publicitaire sur site web et réseaux sociaux",
    "Logo sur affiches, spots TV et web, banderoles",
    "Prise de parole comme speaker pendant les plénières",
    "Spot vidéo diffusé pendant la cérémonie d'ouverture",
    "Stands d'exposition pour présenter vos produits",
    "Roll-up dans la salle et logo sur mur de marques",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={forumImage} alt="Forum Économique Afrique Centrale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#events" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Retour aux événements
            </Link>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Forum Économique
              <br />
              <span className="text-primary italic">Afrique Centrale</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-8">
              Central Africa Business Forum
            </p>
            
            <p className="text-lg md:text-xl text-primary font-medium">
              Afrique Centrale, un marché émergent dans la ZLECAf
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
              <p className="text-foreground/70">24 - 26 Juin 2026</p>
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
              <p className="text-foreground/70">Douala, Cameroun</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Organisateur</h3>
              <p className="text-foreground/70">CABC - Central Africa Business Council</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thème */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              <span className="text-primary">Thème</span> du Forum
            </h2>
            
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/90 border-l-4 border-primary pl-8 text-left">
              "Afrique Centrale, un marché émergent dans la ZLECAf : Opportunités et défis pour les entreprises"
            </blockquote>
            
            <p className="text-lg text-foreground/80 leading-relaxed mt-8">
              Le CABC (Central Africa Business Council) est une organisation à but non lucratif ayant pour but 
              la promotion de la compétitivité des PMEs, l'appui et le conseil des entreprises qui souhaitent 
              faire des affaires en Afrique Centrale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Participer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Pourquoi <span className="text-primary italic">Participer</span> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pourquoiParticiper.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-8 hover:border-primary/50 transition-colors"
              >
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunités Clés */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Opportunités <span className="text-primary italic">Clés</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Agribusiness", "Digital & Tech", "Énergies Renouvelables", "Transport & Logistique"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/10 border border-primary/30 p-6 text-center"
              >
                <p className="font-serif text-lg text-primary">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Partenaires */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Devenir <span className="text-primary italic">Partenaire</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {avantages.map((avantage, index) => (
              <motion.div
                key={avantage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <Handshake className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{avantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Contact & Inscription</h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-foreground/70">
              Tel: +237 699 03 56 45 / +237 651 41 39 39
            </p>
            <p className="text-lg font-serif italic text-foreground/80">
              "Ensemble, réinventons la PME en Afrique centrale"
            </p>
          </div>
          
          <Link
            to="/#inscription"
            className="btn-editorial-filled inline-block"
          >
            S'inscrire maintenant
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForumEconomique;
