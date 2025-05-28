
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, MessageSquare, Settings } from "lucide-react";

const PrayerStyleSelection = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const prayerStyles = [
    {
      id: "scripture",
      name: "Scripture-based",
      description: "Prayers rooted in biblical verses and themes",
      icon: Book,
      example: "Grounded in God's Word with relevant verses"
    },
    {
      id: "conversational", 
      name: "Conversational",
      description: "Natural, heartfelt conversations with God",
      icon: MessageSquare,
      example: "Like talking to a trusted friend"
    },
    {
      id: "traditional",
      name: "Traditional",
      description: "Classic Christian prayer structures and language",
      icon: Settings,
      example: "Reverent and time-honored expressions"
    }
  ];

  const handleContinue = () => {
    if (selectedStyle) {
      // Store preference (in real app, would save to user profile)
      localStorage.setItem("prayerStyle", selectedStyle);
      navigate("/privacy");
    }
  };

  return (
    <div className="min-h-screen bg-sacred-gradient p-4">
      <div className="w-full max-w-md mx-auto pt-8 pb-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-sacred-blue">
            Choose Your Prayer Style
          </h1>
          <p className="sacred-text">
            How would you like your prayers to be crafted?
          </p>
        </div>

        {/* Style Options */}
        <div className="space-y-4">
          {prayerStyles.map((style) => {
            const Icon = style.icon;
            return (
              <Card 
                key={style.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle === style.id 
                    ? "border-sacred-gold bg-sacred-gold-light/50 shadow-lg" 
                    : "border-gray-200 hover:border-sacred-gold/50 bg-white/80"
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon className="w-5 h-5 text-sacred-blue" />
                    {style.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sacred-text mb-2">
                    {style.description}
                  </p>
                  <p className="text-xs text-sacred-blue italic">
                    {style.example}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <Button 
            onClick={handleContinue}
            disabled={!selectedStyle}
            className="w-full bg-prayer-gradient hover:opacity-90 text-white font-medium py-6 disabled:opacity-50"
          >
            Continue
          </Button>
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <button 
            onClick={() => navigate("/privacy")}
            className="text-sm text-sacred-stone hover:text-sacred-blue transition-colors"
          >
            I'll choose later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayerStyleSelection;
