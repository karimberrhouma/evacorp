import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import evaLogo from "@/assets/eva-logo.png";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Nos Services", href: "#services" },
  { name: "Nos Événements", href: "#events" },
  { name: "Investir", href: "https://formulaires-eva.lovable.app/form/sial-canada-2026", isExternal: true },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-border/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Maple Leaf Canadian Touch */}
          <div className="hidden md:flex items-center gap-1">
            <svg viewBox="0 0 512 512" className="w-5 h-5 text-primary/60" fill="currentColor">
              <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3l-26.5 9.9c-6.4 2.4-11.4-1.5-12.4-6.4-.5-3.5 1-8.4 1-8.4s65.6-56.9 65.6-56.9l-31.4-4.9c-9.9-1-10.9-7.9-10.4-12.4.5-4.4 17.5-60.8 17.5-60.8l-25.1 14.9c-8.4 5.9-14.4 0-16.4-4.9l-12.4-39.8-31.4 49.8c-5.9 9.9-14.4 5.9-18.4.5l-32.8-42.8 12.4 73.2c1.5 9.9-5.9 13.4-12.4 11.9l-28.9-8.4 9.9 58.8c1 5.9-4.4 10.4-9.9 10.4H256c-5.5 0-10.9-4.5-9.9-10.4l9.9-58.8-28.9 8.4c-6.5 1.5-13.9-2-12.4-11.9l12.4-73.2-32.8 42.8c-4 5.4-12.5 9.4-18.4-.5L145 59.3l-12.4 39.8c-2 4.9-8 10.8-16.4 4.9l-25.1-14.9s17 56.4 17.5 60.8c.5 4.5-.5 11.4-10.4 12.4l-31.4 4.9s65.6 56.9 65.6 56.9 1.5 4.9 1 8.4c-1 4.9-6 8.8-12.4 6.4l-26.5-9.9s17.7 59.7 20.1 67.3c2.4 5.9 5 12.5-5 17.4L91.5 259.3s102.7 89.9 105.2 92.4c1.9 2.5 4.9 7.4 2.5 12.4-2.5 5-9.4 24.4-9.4 24.4s52.3-25.9 58.3-28.9c5.9-3 10.4.5 11.4 5.4 0 0 5.4 41.8 6.9 50.3.5 4.9 3.5 9.4 10.4 9.4h25.6c6.9 0 9.9-4.5 10.4-9.4 1.5-8.5 6.9-50.3 6.9-50.3 1-4.9 5.5-8.4 11.4-5.4 6 3 58.3 28.9 58.3 28.9s-6.9-19.4-9.4-24.4c-2.4-5 .6-9.9 2.5-12.4z"/>
            </svg>
          </div>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-editorial underline-editorial py-2"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-editorial underline-editorial py-2"
                >
                  {link.name}
                </button>
              )
            ))}
            <a
              href="https://formulaires-eva.lovable.app/form/sial-canada-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 font-sans text-[10px] tracking-wider hover:bg-primary/90 transition-colors"
            >
              Inscription
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                link.isExternal ? (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left nav-editorial py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left nav-editorial py-2"
                  >
                    {link.name}
                  </motion.button>
                )
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="https://formulaires-eva.lovable.app/form/sial-canada-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground px-6 py-2 font-sans text-sm tracking-wider text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inscription
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
