import { motion } from "framer-motion";
import { Building2, Plane, MessageSquare, User } from "lucide-react";

const entities = [
  {
    name: "EVA MANAGING",
    icon: Building2,
    description: "Agence d'organisation d'événements professionnels. Nous créons des expériences uniques pour vos salons, forums et conférences internationales.",
  },
  {
    name: "EVA TOUR",
    icon: Plane,
    description: "Agence de voyage spécialisée dans l'organisation de voyages d'affaires et de tourisme entre le Canada et l'Afrique.",
  },
  {
    name: "EVA COMMUNICATION",
    icon: MessageSquare,
    description: "Agence de communication et de marketing digital. Nous développons votre visibilité et votre image de marque à l'échelle internationale.",
  },
];

const teamMembers = [
  { name: "Membre 1", role: "À définir" },
  { name: "Membre 2", role: "À définir" },
  { name: "Membre 3", role: "À définir" },
  { name: "Membre 4", role: "À définir" },
  { name: "Membre 5", role: "À définir" },
];

const QuiSommesNousSection = () => {
  return (
    <section id="qui-sommes-nous" className="section-padding bg-card relative overflow-hidden">
      {/* Canadian Maple Leaf Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="currentColor"
            className="text-primary"
            d="M100 10L85 50H50L70 80L55 120L100 95L145 120L130 80L150 50H115L100 10Z"
            transform="translate(0, 50)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
              <path d="M12 2L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 2Z"/>
            </svg>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Qui <span className="italic text-primary">sommes-nous</span>
          </h2>
          <p className="font-sans text-sm text-foreground/60 max-w-2xl mx-auto">
            Un groupe canadien dédié à l'excellence dans l'événementiel, le voyage et la communication
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-12">
            Notre <span className="italic text-primary">Équipe</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-full border-2 border-border/30 group-hover:border-primary/50 transition-colors bg-muted/50 flex items-center justify-center overflow-hidden">
                  <User className="w-12 h-12 text-foreground/20" />
                </div>
                <h4 className="font-serif text-sm md:text-base text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Entities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {entities.map((entity, index) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elegant p-8 text-center group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <entity.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {entity.name}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                {entity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Canadian Touch - Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/40" fill="currentColor">
            <path d="M12 2L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 2Z"/>
          </svg>
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/40">
            Groupe Canadien
          </span>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/40" fill="currentColor">
            <path d="M12 2L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 2Z"/>
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default QuiSommesNousSection;
