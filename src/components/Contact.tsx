import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    label: "Email",
    value: "j.ferjani@evamanaging.com",
    href: "mailto:j.ferjani@evamanaging.com",
  },
  {
    label: "Téléphone Tunisie",
    value: "+216 98 562 161",
  },
  {
    label: "Téléphone Canada",
    value: "+1 819 576 3134",
  },
  {
    label: "Bureaux",
    value: "Québec & Tunis",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background relative" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
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
            Contact
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground"
          >
            Parlons de votre
            <br />
            <span className="italic text-primary">projet</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="font-sans text-foreground/60 leading-relaxed">
              Vous avez une question ou un projet ? Nous serions ravis 
              de vous accompagner dans la réalisation de vos événements.
            </p>

            <div className="space-y-6 pt-8 border-t border-border/30">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground/40 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href} className="font-serif text-lg text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-serif text-lg text-foreground">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-sans uppercase tracking-[0.2em] text-foreground/40 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border/50 focus:border-primary focus:outline-none font-sans text-foreground transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-sans uppercase tracking-[0.2em] text-foreground/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border/50 focus:border-primary focus:outline-none font-sans text-foreground transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-sans uppercase tracking-[0.2em] text-foreground/40 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border/50 focus:border-primary focus:outline-none font-sans text-foreground transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-editorial-filled w-full flex items-center justify-center gap-2 mt-8"
              >
                Envoyer
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
