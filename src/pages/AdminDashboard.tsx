import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FileText, 
  LogOut, 
  Menu, 
  X,
  Plus,
  Edit3,
  Trash2,
  Save,
  Calendar,
  Eye,
  Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import evaLogo from "@/assets/eva-logo.png";

const SUPER_ADMIN_EMAIL = "j.ferjani@evamanaging.com";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", id: "dashboard" },
  { icon: FileText, label: "Actualités", id: "news" },
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingNews, setEditingNews] = useState<Partial<NewsItem> | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.email !== SUPER_ADMIN_EMAIL) {
        navigate("/admin");
        return;
      }
      fetchNews();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session || session.user.email !== SUPER_ADMIN_EMAIL) {
        navigate("/admin");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchNews = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("news_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      // Only log detailed errors in development mode
      if (import.meta.env.DEV) {
        console.error("Error fetching news:", error);
      }
      toast({
        title: "Erreur",
        description: "Impossible de charger les actualités",
        variant: "destructive",
      });
    } else {
      setNews(data || []);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès",
    });
    navigate("/admin");
  };

  const handleSaveNews = async () => {
    if (!editingNews) return;

    // Validate title
    const title = editingNews.title?.trim();
    if (!title) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir le titre",
        variant: "destructive",
      });
      return;
    }
    if (title.length > 200) {
      toast({
        title: "Erreur",
        description: "Le titre ne peut pas dépasser 200 caractères",
        variant: "destructive",
      });
      return;
    }

    // Validate content
    const content = editingNews.content?.trim();
    if (!content) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir le contenu",
        variant: "destructive",
      });
      return;
    }
    if (content.length > 10000) {
      toast({
        title: "Erreur",
        description: "Le contenu ne peut pas dépasser 10000 caractères",
        variant: "destructive",
      });
      return;
    }

    // Validate image URL if provided
    const imageUrl = editingNews.image_url?.trim() || null;
    if (imageUrl) {
      try {
        const url = new URL(imageUrl);
        if (!['http:', 'https:'].includes(url.protocol)) {
          throw new Error('Invalid protocol');
        }
      } catch {
        toast({
          title: "Erreur",
          description: "L'URL de l'image n'est pas valide",
          variant: "destructive",
        });
        return;
      }
    }

    if (editingNews.id) {
      // Update existing
      const { error } = await supabase
        .from("news_items")
        .update({
          title,
          content,
          image_url: imageUrl,
          published_at: editingNews.published_at,
        })
        .eq("id", editingNews.id);

      if (error) {
        if (import.meta.env.DEV) {
          console.error("Error updating news:", error);
        }
        toast({
          title: "Erreur",
          description: "Impossible de mettre à jour l'actualité",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sauvegardé",
          description: "L'actualité a été mise à jour",
        });
        fetchNews();
        setEditingNews(null);
      }
    } else {
      // Create new
      const { error } = await supabase
        .from("news_items")
        .insert({
          title: editingNews.title,
          content: editingNews.content,
          image_url: editingNews.image_url,
          published_at: editingNews.published_at,
        });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de créer l'actualité",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Créé",
          description: "L'actualité a été créée avec succès",
        });
        fetchNews();
        setEditingNews(null);
      }
    }
  };

  const handleDeleteNews = async (id: string) => {
    const { error } = await supabase
      .from("news_items")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'actualité",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Supprimé",
        description: "L'actualité a été supprimée",
      });
      fetchNews();
    }
  };

  const togglePublish = async (item: NewsItem) => {
    const newPublishedAt = item.published_at ? null : new Date().toISOString();
    const { error } = await supabase
      .from("news_items")
      .update({ published_at: newPublishedAt })
      .eq("id", item.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de modifier le statut",
        variant: "destructive",
      });
    } else {
      fetchNews();
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-foreground">Tableau de bord</h2>
            
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Total actualités", value: news.length },
                { label: "Publiées", value: news.filter(n => n.published_at).length },
                { label: "Brouillons", value: news.filter(n => !n.published_at).length },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border/30 p-6"
                >
                  <div className="text-4xl font-serif text-primary mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">{stat.label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Recent News */}
            <div className="border border-border/30 p-6">
              <h3 className="font-serif text-lg mb-4">Dernières actualités</h3>
              {isLoading ? (
                <p className="text-foreground/60">Chargement...</p>
              ) : news.length === 0 ? (
                <p className="text-foreground/60">Aucune actualité pour le moment</p>
              ) : (
                <div className="space-y-3">
                  {news.slice(0, 5).map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-background/50 border border-border/20">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <span className="text-sm text-foreground/50">
                          {new Date(item.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs ${item.published_at ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground/60'}`}>
                        {item.published_at ? 'Publié' : 'Brouillon'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case "news":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl text-foreground">Gestion des actualités</h2>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEditingNews({ title: "", content: "", image_url: null, published_at: null })}
                className="btn-editorial-filled flex items-center gap-2 text-sm"
              >
                <Plus size={18} />
                Nouvelle actualité
              </motion.button>
            </div>

            {/* Editor */}
            {editingNews && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border/30 p-6"
              >
                <h3 className="font-serif text-lg mb-4">
                  {editingNews.id ? "Modifier l'actualité" : "Nouvelle actualité"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/70 mb-2">Titre</label>
                    <input
                      type="text"
                      value={editingNews.title || ""}
                      onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="Titre de l'actualité"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/70 mb-2">Contenu</label>
                    <textarea
                      value={editingNews.content || ""}
                      onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary resize-none"
                      placeholder="Contenu de l'actualité"
                    />
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/70 mb-2">URL de l'image (optionnel)</label>
                    <input
                      type="url"
                      value={editingNews.image_url || ""}
                      onChange={(e) => setEditingNews({ ...editingNews, image_url: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="https://..."
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={!!editingNews.published_at}
                      onChange={(e) => setEditingNews({ 
                        ...editingNews, 
                        published_at: e.target.checked ? new Date().toISOString() : null 
                      })}
                      className="w-5 h-5"
                    />
                    <label htmlFor="published" className="text-sm">Publier immédiatement</label>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSaveNews}
                      className="btn-editorial-filled flex items-center gap-2"
                    >
                      <Save size={18} />
                      Sauvegarder
                    </motion.button>
                    <button
                      onClick={() => setEditingNews(null)}
                      className="btn-editorial"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* News List */}
            {isLoading ? (
              <p className="text-foreground/60">Chargement...</p>
            ) : news.length === 0 ? (
              <div className="border border-border/30 p-12 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-foreground/30" />
                <p className="text-foreground/60">Aucune actualité pour le moment</p>
              </div>
            ) : (
              <div className="space-y-4">
                {news.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-border/30 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-lg">{item.title}</h3>
                          <span className={`px-2 py-0.5 text-xs ${item.published_at ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground/60'}`}>
                            {item.published_at ? 'Publié' : 'Brouillon'}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/60 mb-2 line-clamp-2">{item.content}</p>
                        <div className="flex items-center gap-2 text-xs text-foreground/40">
                          <Calendar size={14} />
                          {new Date(item.created_at).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePublish(item)}
                          className={`p-2 transition-colors ${item.published_at ? 'text-primary hover:bg-primary/10' : 'hover:bg-foreground/10'}`}
                          title={item.published_at ? "Dépublier" : "Publier"}
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={() => setEditingNews(item)}
                          className="p-2 hover:bg-foreground/10 transition-colors"
                          title="Modifier"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteNews(item.id)}
                          className="p-2 hover:bg-destructive/10 text-destructive transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border/30 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border/30">
            <a href="/" className="flex items-center gap-3">
              <img src={evaLogo} alt="Eva Managing" className="h-10" />
              <div>
                <span className="font-serif block">Eva Admin</span>
                <span className="text-xs text-foreground/50">Panneau de contrôle</span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-background"
                    : "hover:bg-foreground/5"
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border/30">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut size={20} />
              Se déconnecter
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/30 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-foreground/5"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center gap-4 ml-auto">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <Eye size={18} />
                Voir le site
              </a>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {renderContent()}
        </div>
      </main>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
