import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OGCreators from "./pages/OGCreators";
import QuestWinners from "./pages/QuestWinners";
import ViralMoments from "./pages/ViralMoments";
import MemeGallery from "./pages/MemeGallery";
import WeeklyTimeline from "./pages/WeeklyTimeline";
import CommunityStats from "./pages/CommunityStats";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/og-creators" element={<OGCreators />} />
          <Route path="/quest-winners" element={<QuestWinners />} />
          <Route path="/viral-moments" element={<ViralMoments />} />
          <Route path="/meme-gallery" element={<MemeGallery />} />
          <Route path="/weekly-timeline" element={<WeeklyTimeline />} />
          <Route path="/community-stats" element={<CommunityStats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
