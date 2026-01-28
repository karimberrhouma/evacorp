import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

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
  {
    question: "Comment garantissez-vous la qualité de vos services ?",
    answer: "Grâce à notre expertise, notre équipe expérimentée et notre suivi rigoureux à chaque étape de l'événement.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Questions{" "}
              <span className="text-gradient">fréquemment posées</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Retrouvez les réponses aux questions les plus courantes sur nos services 
              et notre approche.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 p-4 bg-gradient-primary text-white rounded-2xl"
            >
              <HelpCircle size={24} />
              <div>
                <span className="block font-semibold">Autres questions ?</span>
                <span className="text-sm opacity-90">Contactez-nous directement</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-modern overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <h4 className="font-semibold pr-4">{faq.question}</h4>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                  >
                    <ChevronDown size={18} />
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
                  <p className="px-5 pb-5 text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
