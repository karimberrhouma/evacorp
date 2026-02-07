import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import evaLogo from "@/assets/eva-logo.png";

const footerLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Événements", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            whileHover={{ scale: 1.02 }}
            className="mb-8"
          >
            <img src={evaLogo} alt="Eva Managing" className="h-24" />
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-12">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-editorial underline-editorial py-2"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-20 h-px bg-primary mb-12" />

          {/* Copyright */}
          <p className="font-sans text-xs text-foreground/40 uppercase tracking-[0.2em] mb-8">
            © {new Date().getFullYear()} Eva Managing. Tous droits réservés.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="w-12 h-12 border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
