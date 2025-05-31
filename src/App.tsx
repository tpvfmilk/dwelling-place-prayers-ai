
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import What from "./pages/What";
import Why from "./pages/Why";
import How from "./pages/How";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import PrayerInput from "./pages/PrayerInput";
import PrayerDisplay from "./pages/PrayerDisplay";
import PrayerJournal from "./pages/PrayerJournal";
import PrayerStyleSelection from "./pages/PrayerStyleSelection";
import Settings from "./pages/Settings";
import PrivacyTrust from "./pages/PrivacyTrust";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/what" element={<What />} />
          <Route path="/why" element={<Why />} />
          <Route path="/how" element={<How />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prayer-input" element={<PrayerInput />} />
          <Route path="/prayer-display" element={<PrayerDisplay />} />
          <Route path="/prayer-journal" element={<PrayerJournal />} />
          <Route path="/prayer-style-selection" element={<PrayerStyleSelection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy-trust" element={<PrivacyTrust />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
