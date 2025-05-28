
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Book, MessageSquare, Settings, Home } from "lucide-react";

const PrayerInput = () => {
  const navigate = useNavigate();
  const [heartShare, setHeartShare] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(localStorage.getItem("prayerStyle") || "conversational");

  const prayerStyles = [
    { id: "scripture", name: "Scripture-based", icon: Book },
    { id: "conversational", name: "Conversational", icon: MessageSquare },
    { id: "traditional", name: "Traditional", icon: Settings }
  ];

  const handleCreatePrayer = () => {
    if (heartShare.trim()) {
      // In real app, would call API to generate prayer
      navigate("/prayer-display", { 
        state: { 
          heartShare, 
          prayerStyle: selectedStyle 
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-sage-border/20 p-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-sacred-sage-green text-center">
            What's on your heart today?
          </h1>
          <p className="text-sm text-sacred-sage-light text-center mt-1">
            Share freely - God already knows
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto pb-24">
        {/* Main Input */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-sacred-sage-green">
                Share with God
              </label>
              <Textarea
                value={heartShare}
                onChange={(e) => setHeartShare(e.target.value)}
                placeholder="I'm feeling grateful for... I'm worried about... I need strength for... I want to thank God for..."
                className="min-h-[120px] border-sacred-sage-border/30 focus:border-sacred-golden-tan resize-none text-base bg-white"
              />
            </div>
            <div className="text-xs text-sacred-sage-light">
              Express your heart freely - there's no wrong way to pray
            </div>
          </CardContent>
        </Card>

        {/* Prayer Style Customization */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20">
          <CardContent className="p-4 space-y-3">
            <h3 className="text-sm font-medium text-sacred-sage-green">Prayer Style</h3>
            <div className="grid grid-cols-3 gap-2">
              {prayerStyles.map((style) => {
                const Icon = style.icon;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedStyle === style.id
                        ? "border-sacred-golden-tan bg-sacred-cream text-sacred-sage-green"
                        : "border-sacred-sage-border bg-white hover:border-sacred-golden-tan/50"
                    }`}
                  >
                    <Icon className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs">{style.name}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Encouraging Scripture */}
        <Card className="bg-sacred-cream/30 border-sacred-sage-border/20">
          <CardContent className="p-4 text-center">
            <p className="scripture-text text-sm">
              "Cast all your anxiety on him because he cares for you." - 1 Peter 5:7
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sacred-sage-border/20 p-4">
        <div className="max-w-md mx-auto space-y-3">
          <Button 
            onClick={handleCreatePrayer}
            disabled={!heartShare.trim()}
            className="w-full bg-prayer-gradient hover:bg-sacred-golden-tan-dark text-white font-medium py-4 text-lg disabled:opacity-50"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Create My Prayer
          </Button>
          
          {/* Bottom Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/settings")}
              className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
            >
              <Settings className="w-5 h-5" />
              <span className="text-xs">Settings</span>
            </Button>
            <div className="flex space-x-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/home")} 
                className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
              >
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/journal")}
                className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
              >
                <Book className="w-5 h-5" />
                <span className="text-xs">Journal</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerInput;
