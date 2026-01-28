import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  AlertCircle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import evaLogo from "@/assets/eva-logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Temporary hardcoded credentials for demo
  // In production, this should use proper authentication via Lovable Cloud
  const DEMO_EMAIL = "admin@evamanaging.com";
  const DEMO_PASSWORD = "admin123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Store auth state in sessionStorage
      sessionStorage.setItem("eva_admin_auth", "true");
      
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'espace admin",
      });
      
      navigate("/admin/dashboard");
    } else {
      setError("Email ou mot de passe incorrect");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="card-modern p-8 shadow-xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src={evaLogo} alt="Eva Managing" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Espace Administrateur</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Connectez-vous pour gérer le contenu du site
            </p>
          </div>

          {/* Demo credentials notice */}
          <div className="bg-primary/10 rounded-xl p-4 mb-6">
            <p className="text-sm text-center">
              <span className="font-medium">Identifiants de démonstration :</span><br />
              Email: admin@evamanaging.com<br />
              Mot de passe: admin123
            </p>
          </div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-destructive/10 text-destructive rounded-xl p-4 mb-6 flex items-center gap-3"
            >
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="admin@evamanaging.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={18} />
                  Se connecter
                </>
              )}
            </motion.button>
          </form>

          {/* Back link */}
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Retour au site
            </a>
          </div>
        </div>

        {/* Security note */}
        <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
          <Lock size={12} />
          Connexion sécurisée
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
