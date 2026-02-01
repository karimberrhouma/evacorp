import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Target, Package, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
const SialMission = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  const stats = [
    { number: "800+", label: "Exposants canadiens et internationaux" },
    { number: "23 000+", label: "Visiteurs professionnels durant 3 jours" },
    { number: "1 000+", label: "Rencontres d'acheteurs internationaux" },
  ];

  const pavillonPlus = [
    "Facilitation pour lettre d'invitation officielle SIAL avec code IRCC pour visa",
    "Plateforme professionnelle 'Clé en mains' pour promouvoir produits et services",
    "Connexion entreprises africaines avec celles du Canada via la diaspora",
    "Flexibilité des tarifs de participation (badges, stands, etc.)",
    "Rencontres B2B ciblées & Visites de complexes agro-alimentaire",
    "Visibilité renforcée et support logistique de haut niveau",
  ];

  const packages = [
    { name: "Stand Premium", price: "7 680 CAD", space: "9m²", features: ["Badge exposant + VIP", "Comptoir + table + 2 chaises + présentoir", "Accès dîner réseautage Akwaba"] },
    { name: "Stand Standard", price: "5 328 CAD", space: "6m²", features: ["Badge exposant + visiteur", "Comptoir + table + 2 chaises", "Accès dîner réseautage Akwaba"] },
    { name: "Mini Stand", price: "3 720 CAD", space: "3m²", features: ["Badge exposant", "Comptoir + 2 chaises"] },
    { name: "Box Standard", price: "3 000 CAD", space: "1m²", features: ["Badge exposant + visiteur", "Comptoir + 2 chaises"] },
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
              SIAL Canada
              <br />
              <span className="text-primary italic">Pavillon Afrique</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-8">
              L'accélérateur d'affaires agroalimentaires d'Amérique du Nord
            </p>
            
            <p className="text-lg text-primary font-medium">
              INSPIRE FOOD BUSINESS
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
              <p className="text-foreground/70">29 Avril - 1er Mai 2026</p>
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
              <p className="text-foreground/70">Palais des Congrès</p>
              <p className="text-foreground/70">Montréal, Canada</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/30 p-8 text-center"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Coordination</h3>
              <p className="text-foreground/70">Akwaba Community</p>
              <p className="text-foreground/70">Le Hub du Canada</p>
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
              Pourquoi participer au <span className="text-primary italic">SIAL Canada</span> ?
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              SIAL Canada (créé en 2001) est le plus grand salon agroalimentaire en Amérique du Nord.
              Le marché nord-américain de l'agroalimentaire représente plus de 1 200 milliards dollars USD.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.number}
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

      {/* Pavillon Afrique Plus */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Les PLUS du <span className="text-primary italic">Pavillon Afrique</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pavillonPlus.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Montréal */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Pourquoi venir à <span className="text-primary italic">Montréal</span> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Hub agroalimentaire nord-américain",
              "Proximité Québec et Ontario",
              "Fort réseau diaspora africaine",
              "Avantages tarifs Air Canada",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/30 p-6 text-center hover:border-primary/50 transition-colors"
              >
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-foreground/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            <Package className="w-10 h-10 text-primary mx-auto mb-4" />
            Packages <span className="text-primary italic">Exposition</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card p-8 text-center ${index === 0 ? 'border-2 border-primary' : 'border border-border/30'}`}
              >
                <h3 className="font-serif text-xl mb-2">{pkg.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{pkg.space}</p>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="text-sm text-foreground/70 space-y-2 text-left">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card border border-border/30 p-6 text-center">
              <p className="font-serif text-lg mb-2">Badge Visiteur</p>
              <p className="text-2xl font-bold text-primary">120 CAD</p>
            </div>
            <div className="bg-card border border-border/30 p-6 text-center">
              <p className="font-serif text-lg mb-2">Badge VIP</p>
              <p className="text-2xl font-bold text-primary">420 CAD</p>
              <p className="text-xs text-foreground/60">Repas inclus</p>
            </div>
            <div className="bg-card border border-border/30 p-6 text-center">
              <p className="font-serif text-lg mb-2">Box Start-up</p>
              <p className="text-2xl font-bold text-primary">600 CAD</p>
              <p className="text-xs text-foreground/60">½ journée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8">S'inscrire au Pavillon Afrique</h2>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
            AKWABA COMMUNITY et Le HUB du Canada vous invitent à rejoindre le PAVILLON AFRIQUE, 
            une vitrine internationale idéale pour valoriser vos produits, gagner en visibilité 
            et accéder à un marché de plus de 1 200 milliards dollars.
          </p>
          
          <div className="space-y-2 mb-8 text-foreground/70">
            <p>Côte d'Ivoire: +225 01 01 50 30 59</p>
            <p>Mali: +223 66 06 24 94</p>
            <p>Sénégal: +221 77 641 19 59</p>
            <p>Tunisie: +216 98 562 161</p>
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

export default SialMission;
