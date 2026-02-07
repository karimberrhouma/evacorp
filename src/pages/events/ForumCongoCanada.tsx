import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Target, Briefcase, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Ambassadors from "@/components/Ambassadors";
const ForumCongoCanada = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const axes = [
    { title: "Investir dans l'avenir", desc: "Financement, partenariats public-privé, fonds d'investissement, climat des affaires" },
    { title: "Innover pour transformer", desc: "Numérique, technologies émergentes, incubation, recherche et développement" },
    { title: "Entrepreneuriat et PME", desc: "Création d'emplois, structuration des entreprises, accès aux marchés" },
    { title: "Industries culturelles et créatives", desc: "Culture comme levier économique, diplomatie culturelle, économie créative" },
    { title: "Jeunesse, talents et leadership", desc: "Formation, employabilité, mobilité des talents" },
    { title: "Diaspora et impact durable", desc: "Transfert de compétences, investissements de la diaspora, impact social" },
  ];

  const formats = [
    "Conférences plénières",
    "Panels thématiques de haut niveau",
    "Ateliers pratiques et sectoriels",
    "Rencontres B2B et B2G",
    "Exposition et stands institutionnels",
    "Sessions de pitch de projets",
    "Activités de réseautage professionnel",
    "Cérémonies protocolaires",
  ];

  const participants = [
    "Délégations gouvernementales et institutionnelles",
    "Investisseurs et fonds d'investissement",
    "Entrepreneurs et dirigeants de PME",
    "Institutions financières et agences de développement",
    "Universités, centres de recherche et incubateurs",
    "Artistes, producteurs et acteurs culturels",
    "Organisations de la société civile",
    "Leaders de la diaspora congolaise",
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
              Forum International
              <br />
              <span className="text-primary italic">Congo-Canada 2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-8">
              Pour une alliance durable entre la RDC et le Canada
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Innover · Investir · Impacter
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
              <h3 className="font-serif text-xl mb-2">Date</h3>
              <p className="text-foreground/70">23 mai 2026</p>
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
              <p className="text-foreground/70">Cégep Gabriel-Roy et UQO</p>
              <p className="text-foreground/70">Gatineau, Québec, Canada</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Participants</h3>
              <p className="text-foreground/70">Décideurs, investisseurs, entrepreneurs</p>
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
              <span className="text-primary">Présentation</span> Générale
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Le Forum International Congo-Canada 2026 est un rendez-vous international de très haut niveau, 
              conçu comme une plateforme stratégique d'influence, d'investissement et d'impact durable entre 
              la République démocratique du Congo (RDC) et le Canada.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Cette édition ambitionne de dépasser le cadre des échanges symboliques pour générer des résultats 
              concrets, mesurables et structurants, tant pour l'économie congolaise que canadienne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Objectifs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-3xl mb-6">Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                Positionner le Forum International Congo-Canada comme la principale plateforme nord-américaine 
                de coopération stratégique avec la RDC, orientée vers l'investissement responsable, 
                l'innovation et l'impact durable.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-3xl mb-6">Objectifs Stratégiques</h2>
              <ul className="space-y-3 text-foreground/80">
                <li>• Structurer une alliance économique durable RDC-Canada</li>
                <li>• Catalyser des investissements privés et institutionnels</li>
                <li>• Accélérer l'innovation et la transformation des écosystèmes entrepreneuriaux</li>
                <li>• Valoriser le rôle de la diaspora comme levier d'investissement</li>
                <li>• Soutenir les industries culturelles comme moteurs économiques</li>
                <li>• Générer des partenariats concrets et protocoles d'entente</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Axes Thématiques */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Axes <span className="text-primary italic">Thématiques</span> 2026
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {axes.map((axe, index) => (
              <motion.div
                key={axe.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-8 hover:border-primary/50 transition-colors"
              >
                <span className="text-primary font-bold text-lg">{index + 1}</span>
                <h3 className="font-serif text-xl mt-2 mb-4">{axe.title}</h3>
                <p className="text-foreground/70 text-sm">{axe.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format & Participants */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl mb-8">Format du Forum</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formats.map((format) => (
                  <div key={format} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{format}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl mb-8">Profils des Participants</h2>
              <div className="space-y-3">
                {participants.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Accès & <span className="text-primary italic">Tarifs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <h3 className="font-serif text-xl mb-4">Passe Internationale</h3>
              <p className="text-4xl font-bold text-primary mb-6">800 $ USD</p>
              <ul className="text-sm text-foreground/70 space-y-2 text-left">
                <li>• Accès à toutes les activités</li>
                <li>• Tous les panels et ateliers</li>
                <li>• Gala de clôture inclus</li>
                <li>• Repas inclus</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border-2 border-primary p-8 text-center"
            >
              <h3 className="font-serif text-xl mb-4">Dîner VIP</h3>
              <p className="text-4xl font-bold text-primary mb-6">200 $ USD</p>
              <ul className="text-sm text-foreground/70 space-y-2 text-left">
                <li>• En supplément du passe</li>
                <li>• Dîner protocolaire VIP</li>
                <li>• Personnalités institutionnelles</li>
                <li>• Réseautage haut niveau</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <h3 className="font-serif text-xl mb-4">Stand Exposition</h3>
              <p className="text-4xl font-bold text-primary mb-6">500 $ USD</p>
              <ul className="text-sm text-foreground/70 space-y-2 text-left">
                <li>• Espace aménagé</li>
                <li>• Visibilité officielle</li>
                <li>• Supports du Forum</li>
                <li>• Réseautage professionnel</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Informations & Inscriptions</h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              <strong>Site officiel :</strong>{" "}
              <a href="https://www.forumCongoCanada.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.forumCongoCanada.com
              </a>
            </p>
            <p className="text-lg">
              <strong>Email :</strong>{" "}
              <a href="mailto:forum@communautecongolaise.com" className="text-primary hover:underline">
                forum@communautecongolaise.com
              </a>
            </p>
            <p className="text-foreground/70">
              +1 819-576-6068 | +216 98 562 161 | +243 824 343 221
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

      <Ambassadors />
      <Footer />
    </div>
  );
};

export default ForumCongoCanada;
