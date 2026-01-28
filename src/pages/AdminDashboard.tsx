import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Plus,
  Edit3,
  Trash2,
  Save,
  Calendar,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import evaLogo from "@/assets/eva-logo.png";

// Mock data for news/actualités
const initialNews = [
  {
    id: 1,
    title: "Lancement du Pavillon Africain au SIAL 2026",
    content: "Le Pavillon Africain sera présent au SIAL Canada 2026 pour mettre en valeur l'excellence africaine.",
    date: "2025-01-15",
    published: true,
  },
  {
    id: 2,
    title: "Nouvelle collaboration avec les artisans",
    content: "Eva Managing annonce un partenariat stratégique avec les artisans africains pour le SIAL.",
    date: "2025-01-10",
    published: true,
  },
  {
    id: 3,
    title: "Inscriptions ouvertes pour les exposants",
    content: "Les inscriptions pour le Pavillon Africain sont maintenant ouvertes. Réservez votre place !",
    date: "2025-01-05",
    published: false,
  },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", id: "dashboard" },
  { icon: FileText, label: "Actualités", id: "news" },
  { icon: Image, label: "Médias", id: "media" },
  { icon: Settings, label: "Paramètres", id: "settings" },
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [news, setNews] = useState(initialNews);
  const [editingNews, setEditingNews] = useState<typeof initialNews[0] | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check authentication
  useEffect(() => {
    const isAuth = sessionStorage.getItem("eva_admin_auth");
    if (!isAuth) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("eva_admin_auth");
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès",
    });
    navigate("/admin");
  };

  const handleSaveNews = () => {
    if (editingNews) {
      if (editingNews.id) {
        setNews(news.map(n => n.id === editingNews.id ? editingNews : n));
      } else {
        setNews([...news, { ...editingNews, id: Date.now() }]);
      }
      setEditingNews(null);
      toast({
        title: "Sauvegardé",
        description: "L'actualité a été sauvegardée avec succès",
      });
    }
  };

  const handleDeleteNews = (id: number) => {
    setNews(news.filter(n => n.id !== id));
    toast({
      title: "Supprimé",
      description: "L'actualité a été supprimée",
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tableau de bord</h2>
            
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Actualités", value: news.length, color: "from-primary to-secondary" },
                { label: "Publiées", value: news.filter(n => n.published).length, color: "from-green-500 to-emerald-500" },
                { label: "Brouillons", value: news.filter(n => !n.published).length, color: "from-amber-500 to-orange-500" },
                { label: "Ce mois", value: news.filter(n => new Date(n.date).getMonth() === new Date().getMonth()).length, color: "from-blue-500 to-cyan-500" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-modern p-6"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {stat.value}
                  </div>
                  <h3 className="font-medium text-muted-foreground">{stat.label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Recent News */}
            <div className="card-modern p-6">
              <h3 className="font-semibold mb-4">Dernières actualités</h3>
              <div className="space-y-3">
                {news.slice(0, 3).map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${item.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {item.published ? 'Publié' : 'Brouillon'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "news":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gestion des actualités</h2>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEditingNews({ id: 0, title: "", content: "", date: new Date().toISOString().split('T')[0], published: false })}
                className="btn-primary flex items-center gap-2 text-sm"
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
                className="card-modern p-6"
              >
                <h3 className="font-semibold mb-4">
                  {editingNews.id ? "Modifier l'actualité" : "Nouvelle actualité"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Titre</label>
                    <input
                      type="text"
                      value={editingNews.title}
                      onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Titre de l'actualité"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Contenu</label>
                    <textarea
                      value={editingNews.content}
                      onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Contenu de l'actualité"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Date</label>
                      <input
                        type="date"
                        value={editingNews.date}
                        onChange={(e) => setEditingNews({ ...editingNews, date: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2 pt-7">
                      <input
                        type="checkbox"
                        id="published"
                        checked={editingNews.published}
                        onChange={(e) => setEditingNews({ ...editingNews, published: e.target.checked })}
                        className="w-5 h-5 rounded border-border"
                      />
                      <label htmlFor="published" className="text-sm font-medium">Publier immédiatement</label>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSaveNews}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Save size={18} />
                      Sauvegarder
                    </motion.button>
                    <button
                      onClick={() => setEditingNews(null)}
                      className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* News List */}
            <div className="space-y-4">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-modern p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${item.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {item.published ? 'Publié' : 'Brouillon'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingNews(item)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        title="Modifier"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "media":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Gestion des médias</h2>
            <div className="card-modern p-12 text-center">
              <Image className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Bibliothèque de médias</h3>
              <p className="text-muted-foreground mb-6">
                Téléchargez et gérez les images et documents du site.
              </p>
              <p className="text-sm text-muted-foreground">
                Cette fonctionnalité nécessite l'activation de Lovable Cloud pour le stockage.
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Paramètres</h2>
            <div className="card-modern p-6">
              <h3 className="font-semibold mb-4">Informations du site</h3>
              <p className="text-muted-foreground">
                Les paramètres avancés seront disponibles après l'activation de Lovable Cloud.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <a href="/" className="flex items-center gap-3">
              <img src={evaLogo} alt="Eva Managing" className="h-10" />
              <div>
                <span className="font-space font-bold block">Eva Admin</span>
                <span className="text-xs text-muted-foreground">Panneau de contrôle</span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeSection === item.id
                    ? "bg-gradient-primary text-white"
                    : "hover:bg-muted"
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors"
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
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
