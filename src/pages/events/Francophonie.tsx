import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Globe, Building2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
const Francophonie = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const secteurs = [
    "Technologies et Innovation",
    "Agroalimentaire",
    "Énergie et Ressources naturelles",
    "Commerce et Distribution",
    "Services financiers",
    "Tourisme et Culture",
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
              Rendez-vous d'affaires
              <br />
              <span className="text-primary italic">de la Francophonie</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-8">
              Canada - Québec Ville
            </p>
            
            <p className="text-lg text-primary font-medium">
              Tous secteurs confondus
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
              <p className="text-foreground/70">20 et 21 Mai 2026</p>
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
              <p className="text-foreground/70">Québec Ville</p>
              <p className="text-foreground/70">Canada</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Partenaire</h3>
              <p className="text-foreground/70">Québec International</p>
              <p className="text-foreground/70">Développement économique</p>
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
              <span className="text-primary">À propos</span> de l'événement
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Le Rendez-vous d'affaires de la Francophonie est une plateforme unique de rencontres 
              entre les acteurs économiques de l'espace francophone. Organisé en partenariat avec 
              Québec International, cet événement réunit des entrepreneurs, investisseurs et 
              décideurs de la francophonie mondiale.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Cet événement exclusif offre une opportunité exceptionnelle de développer votre réseau 
              d'affaires, d'explorer de nouveaux marchés et de créer des partenariats stratégiques 
              avec des acteurs clés de l'économie francophone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Secteurs <span className="text-primary italic">Représentés</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {secteurs.map((secteur, index) => (
              <motion.div
                key={secteur}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-8 text-center hover:border-primary/50 transition-colors"
              >
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-serif text-lg">{secteur}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-3xl mb-6">Pourquoi participer ?</h2>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Développer votre réseau d'affaires francophone
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Rencontrer des partenaires potentiels
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Explorer les opportunités au Canada
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Participer à des sessions de maillage B2B
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Accéder à des conférences sectorielles
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-3xl mb-6">Profils attendus</h2>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Chefs d'entreprises et entrepreneurs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Investisseurs et fonds de capital
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Représentants institutionnels
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Chambres de commerce
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  Agences de développement économique
                </li>
              </ul>
            </motion.div>
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
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Rejoignez-nous à Québec</h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Ne manquez pas cette opportunité unique de participer au Rendez-vous d'affaires 
              de la Francophonie et de développer votre réseau à l'international.
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

      <Footer />
    </div>
  );
};

export default Francophonie;
