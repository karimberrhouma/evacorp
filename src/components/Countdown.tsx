import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  // SIAL Canada 2026: April 29 - May 1, 2026
  const targetDate = new Date("2026-04-29T09:30:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate total days
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    // Calculate months (approximate - 30 days per month)
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
    
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.months, label: "Mois" },
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Secondes" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-px bg-primary mx-auto mb-6"
          />
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-4">
            Prochain Événement
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            SIAL Canada 2026
          </h2>
          <p className="text-foreground/60 text-sm md:text-base">
            29 Avril - 1er Mai 2026 • Montréal, Canada
          </p>
        </motion.div>

        {/* Countdown blocks */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-card border border-border/50 rounded-lg p-4 md:p-6 lg:p-8 min-w-[80px] md:min-w-[100px] lg:min-w-[120px] text-center backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Number */}
                <motion.span
                  key={block.value}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative block font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-medium"
                >
                  {block.value.toString().padStart(2, "0")}
                </motion.span>
                
                {/* Label */}
                <span className="relative block text-xs md:text-sm uppercase tracking-wider text-foreground/60 mt-2">
                  {block.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://formulaires-eva.lovable.app/form/sial-canada-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-filled inline-block"
          >
            Réservez votre place
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
