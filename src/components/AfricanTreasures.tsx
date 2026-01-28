import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import agricultureImage from "@/assets/african-agriculture.jpg";
import craftsImage from "@/assets/african-crafts.jpg";
import cuisineImage from "@/assets/african-cuisine.jpg";

const treasures = [
  {
    id: "terroirs",
    title: "Terroirs",
    subtitle: "Les trésors agricoles de l'Afrique",
    description: "Les Trésors Agricoles et Artisanaux de l'Afrique",
    image: agricultureImage,
    points: [
      "Diversité agricole exceptionnelle",
      "Produits locaux de qualité",
      "Savoir-faire artisanal ancestral",
      "Créativité et innovation",
      "Impact économique et culturel",
    ],
  },
  {
    id: "metiers",
    title: "Métiers",
    subtitle: "L'artisanat traditionnel mis en lumière",
    description: "Les Métiers d'Excellence du Continent",
    image: craftsImage,
    points: [
      "Savoir-faire ancestral",
      "Artisanat diversifié",
      "Création et innovation",
      "Impact économique local",
      "Transmission et formation",
    ],
  },
  {
    id: "terres",
    title: "Terres Africaines",
    subtitle: "Les saveurs des terres africaines",
    description: "Découvrez la richesse culinaire de l'Afrique",
    image: cuisineImage,
    points: [
      "Diversité culinaire exceptionnelle",
      "Produits locaux de qualité",
      "Recettes traditionnelles",
      "Innovation et modernité",
      "Un patrimoine à découvrir",
    ],
  },
];

const AfricanTreasures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Patrimoine Africain
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trésors culturels et artisanaux{" "}
            <span className="text-gradient">de l'Afrique</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            L'Afrique regorge de trésors uniques : artisanat traditionnel, traditions 
            artisanales authentiques et cuisine aux saveurs ancestrales. Chaque création 
            et chaque plat racontent l'histoire, la culture et la créativité de ses terres.
          </p>
        </motion.div>

        {/* Treasures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treasures.map((treasure, index) => (
            <motion.div
              key={treasure.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="card-modern overflow-hidden h-full">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={treasure.image}
                    alt={treasure.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full mb-2">
                      {treasure.title}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {treasure.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {treasure.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {treasure.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfricanTreasures;
