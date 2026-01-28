import { useState, useEffect } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import evaLogo from "@/assets/eva-logo.png";

const SUPER_ADMIN_EMAIL = "j.ferjani@evamanaging.com";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session && session.user.email === SUPER_ADMIN_EMAIL) {
        navigate("/admin/dashboard");
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && session.user.email === SUPER_ADMIN_EMAIL) {
        navigate("/admin/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Only allow super admin email
    if (email !== SUPER_ADMIN_EMAIL) {
      setError("Accès réservé au super administrateur");
      setIsLoading(false);
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      if (authError.message === "Invalid login credentials") {
        setError("Email ou mot de passe incorrect");
      } else {
        setError(authError.message);
      }
    } else {
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'espace admin",
      });
      navigate("/admin/dashboard");
    }

    setIsLoading(false);
  };

  const handleSignUp = async () => {
    if (email !== SUPER_ADMIN_EMAIL) {
      setError("Inscription réservée au super administrateur");
      return;
    }
    
    setIsLoading(true);
    setError("");

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      }
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      toast({
        title: "Compte créé",
        description: "Vous pouvez maintenant vous connecter",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="border border-border/30 bg-card/50 backdrop-blur-sm p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src={evaLogo} alt="Eva Managing" className="h-16 mx-auto mb-4" />
            <h1 className="font-serif text-2xl text-foreground">Espace Administrateur</h1>
            <p className="text-sm text-foreground/60 mt-2">
              Connectez-vous pour gérer le contenu du site
            </p>
          </div>

          {/* Credentials notice */}
          <div className="border border-primary/30 p-4 mb-6">
            <p className="text-sm text-center">
              <span className="font-medium text-primary">Super Admin</span><br />
              <span className="text-foreground/60">{SUPER_ADMIN_EMAIL}</span>
            </p>
          </div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-destructive/10 text-destructive p-4 mb-6 flex items-center gap-3"
            >
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-sans uppercase tracking-wider mb-2 text-foreground/70">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary transition-all"
                placeholder="j.ferjani@evamanaging.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-sans uppercase tracking-wider mb-2 text-foreground/70">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 border border-border bg-background focus:outline-none focus:border-primary transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
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
              className="btn-editorial-filled w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={18} />
                  Se connecter
                </>
              )}
            </motion.button>

            <button
              type="button"
              onClick={handleSignUp}
              disabled={isLoading}
              className="w-full text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Première connexion ? Créer le compte admin
            </button>
          </form>

          {/* Back link */}
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              ← Retour au site
            </a>
          </div>
        </div>

        {/* Security note */}
        <p className="text-center text-xs text-foreground/40 mt-4 flex items-center justify-center gap-1">
          <Lock size={12} />
          Connexion sécurisée
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
