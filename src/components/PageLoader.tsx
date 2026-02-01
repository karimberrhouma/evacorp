import { motion } from "framer-motion";
import evaLogo from "@/assets/eva-logo.png";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.img
          src={evaLogo}
          alt="EVA Managing"
          className="h-24 w-auto"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="w-48 h-1 bg-muted rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
