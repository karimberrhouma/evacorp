import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import evaLogo from "@/assets/eva-logo.png";
import heroImage from "@/assets/hero-image.jpg";
import forumVideo from "@/assets/forum-video.mp4";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust autoplay handling for all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptAutoplay = async () => {
      try {
        // Ensure video is muted (required for autoplay)
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked, retrying...");
        // Retry with user interaction simulation
        video.muted = true;
        video.play().catch(() => {
          console.log("Video autoplay failed");
        });
      }
    };

    // Wait for video to be ready
    if (video.readyState >= 2) {
      attemptAutoplay();
    } else {
      video.addEventListener("loadeddata", attemptAutoplay);
      return () => video.removeEventListener("loadeddata", attemptAutoplay);
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.3 }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage}
          className="w-full h-full object-cover"
        >
          <source src={forumVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/75" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
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

        {/* Logo + Tagline Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <img
            src={evaLogo}
            alt="Eva Managing"
            className="h-56 md:h-72 lg:h-96 w-auto mx-auto"
          />
          <p className="text-xs md:text-sm font-sans tracking-[0.15em] text-primary mt-2">
            Agence d'organisation d'événements
          </p>
        </motion.div>

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

    </section>
  );
};

export default Hero;
