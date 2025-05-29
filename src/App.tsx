
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import PrayerStyleSelection from "./pages/PrayerStyleSelection";
import PrivacyTrust from "./pages/PrivacyTrust";
import Home from "./pages/Home";
import PrayerInput from "./pages/PrayerInput";
import PrayerDisplay from "./pages/PrayerDisplay";
import PrayerJournal from "./pages/PrayerJournal";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";
import Why from "./pages/Why";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/why" element={<Why />} />
          <Route path="/prayer-style" element={<PrayerStyleSelection />} />
          <Route path="/privacy" element={<PrivacyTrust />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prayer-input" element={<PrayerInput />} />
          <Route path="/prayer-display" element={<PrayerDisplay />} />
          <Route path="/journal" element={<PrayerJournal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
