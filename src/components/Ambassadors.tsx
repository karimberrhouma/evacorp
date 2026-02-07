import { motion } from "framer-motion";
import burundi from "@/assets/ambassadors/burundi.jpg";
import niger from "@/assets/ambassadors/niger.jpg";
import madagascar from "@/assets/ambassadors/madagascar.jpg";
import camerounLandry from "@/assets/ambassadors/cameroun-landry.jpg";
import camerounCarine from "@/assets/ambassadors/cameroun-carine.jpg";
import tchad from "@/assets/ambassadors/tchad.jpg";

const ambassadors = [
  { name: "M. Landry R. Noutchang", country: "Cameroun", image: camerounLandry },
  { name: "Mme. Carine Kamlo", country: "Cameroun", image: camerounCarine },
  { name: "M. Kalembo Liéon", country: "Madagascar", image: madagascar },
  { name: "M. Peter Ami Liéon", country: "Niger", image: niger },
  { name: "M. Chouaib Colibali", country: "Tchad", image: tchad },
  { name: "Ambassadeur", country: "Burundi", image: burundi },
];

const Ambassadors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-primary">
              Ambassadeurs
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Nos <span className="text-primary italic">Ambassadeurs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador.name + ambassador.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border/30 group-hover:border-primary/50 transition-colors">
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-serif text-sm md:text-base text-foreground mb-1">
                {ambassador.name}
              </h3>
              <p className="text-xs text-primary uppercase tracking-wider">
                {ambassador.country}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
