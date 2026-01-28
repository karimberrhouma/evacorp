import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import evaLogo from "@/assets/eva-logo.png";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.5 }}
      >
        <img
          src={heroImage}
          alt="Eva Managing Event"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-px bg-primary mx-auto mb-12"
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <img
            src={evaLogo}
            alt="Eva Managing"
            className="h-44 md:h-60 lg:h-80 w-auto mx-auto"
          />
        </motion.div>

        {/* Tagline - Below logo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-primary mb-12"
        >
          Agence d'organisation d'événements
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground mb-6"
        >
          Événements
          <br />
          <span className="italic text-primary">sur mesure</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-sm md:text-base text-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Une vitrine d'excellence, d'inspiration et d'expertise au cœur
          d'un événement international majeur.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("#services")}
            className="btn-editorial"
          >
            Découvrir
          </button>
          <a
            href="https://formulaires-eva.lovable.app/form/sial-canada-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-filled"
          >
            Inscription
          </a>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="h-px bg-primary mx-auto mt-16"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-foreground/50">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
