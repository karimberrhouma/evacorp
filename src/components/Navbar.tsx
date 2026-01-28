import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import evaLogo from "@/assets/eva-logo.png";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos Services", href: "#services" },
  { name: "Nos Événements", href: "#events" },
  { 
    name: "Investir", 
    href: "#invest",
    subLinks: [
      { name: "Pavillon Africain", href: "#pavilion" },
      { name: "SIAL Canada 2026", href: "#sial" },
    ]
  },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={evaLogo}
              alt="Eva Managing"
              className="h-12 md:h-14 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="hidden md:flex flex-col">
              <span className="font-space font-bold text-xl text-gradient">
                Eva Managing
              </span>
              <span className="text-xs text-muted-foreground">
                Agence d'organisation d'événements
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link flex items-center gap-1 py-2"
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-xl shadow-lg border border-border/50 p-2 min-w-[200px]">
                        {link.subLinks.map((subLink) => (
                          <button
                            key={subLink.name}
                            onClick={() => scrollToSection(subLink.href)}
                            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm hover:bg-muted transition-colors duration-200"
                          >
                            {subLink.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/admin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#inscription")}
              className="btn-primary text-sm"
            >
              Inscription SIAL
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-2 font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                  {link.subLinks && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <button
                          key={subLink.name}
                          onClick={() => scrollToSection(subLink.href)}
                          className="block w-full text-left py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Link
                  to="/admin"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
                <button
                  onClick={() => scrollToSection("#inscription")}
                  className="btn-primary w-full text-center text-sm"
                >
                  Inscription SIAL
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
