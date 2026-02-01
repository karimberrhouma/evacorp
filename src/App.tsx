import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Investir from "./pages/Investir";
import QuiSommesNous from "./pages/QuiSommesNous";
import ForumCongoCanada from "./pages/events/ForumCongoCanada";
import ForumEconomique from "./pages/events/ForumEconomique";
import SialMission from "./pages/events/SialMission";
import Francophonie from "./pages/events/Francophonie";
import Siitac from "./pages/events/Siitac";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/investir" element={<Investir />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/evenements/forum-congo-canada" element={<ForumCongoCanada />} />
          <Route path="/evenements/forum-economique" element={<ForumEconomique />} />
          <Route path="/evenements/sial-mission" element={<SialMission />} />
          <Route path="/evenements/francophonie" element={<Francophonie />} />
          <Route path="/evenements/siitac" element={<Siitac />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
