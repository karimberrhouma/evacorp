import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels types d'événements organisez-vous ?",
    answer: "Nous organisons des conférences, séminaires, lancements de produits, salons et événements d'entreprise sur mesure.",
  },
  {
    question: "Travaillez-vous exclusivement en Afrique ?",
    answer: "Non, nous pouvons organiser des événements internationaux selon vos besoins.",
  },
  {
    question: "Comment puis-je obtenir un devis ?",
    answer: "Vous pouvez nous contacter via notre formulaire en ligne ou par téléphone pour une estimation personnalisée.",
  },
  {
    question: "Proposez-vous des solutions clé en main ?",
    answer: "Oui, nous prenons en charge l'organisation complète, de la conception à la coordination sur site.",
  },
  {
    question: "Puis-je personnaliser mon événement ?",
    answer: "Absolument, chaque événement est conçu selon vos objectifs, votre identité et vos contraintes.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-card relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 1 }}
              className="h-px bg-primary mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6"
            >
              Questions
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl md:text-5xl text-foreground"
            >
              Foire aux
              <span className="italic text-primary"> questions</span>
            </motion.h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="border-b border-border/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 font-sans text-sm text-foreground/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
