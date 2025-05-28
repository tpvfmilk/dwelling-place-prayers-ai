
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, Book, MessageSquare, Settings as SettingsIcon, User, Home, Circle } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [selectedPrayerStyle, setSelectedPrayerStyle] = useState(
    localStorage.getItem("prayerStyle") || "conversational"
  );

  const prayerStyles = [
    { id: "scripture", name: "Scripture-based", icon: Book },
    { id: "conversational", name: "Conversational", icon: MessageSquare },
    { id: "traditional", name: "Traditional", icon: SettingsIcon }
  ];

  const handleStyleChange = (styleId: string) => {
    setSelectedPrayerStyle(styleId);
    localStorage.setItem("prayerStyle", styleId);
  };

  return (
    <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-sage-border/20 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" 
              alt="Dwelling Place Logo" 
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold text-sacred-sage-green">
              Dwelling Place
            </h1>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-sacred-sage-green">Settings</h2>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate("/home")}
            className="text-sacred-sage-green hover:text-sacred-sage-green/80"
          >
            <ArrowUp className="w-5 h-5 rotate-180" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Profile Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-sacred-sage-green">
              <User className="w-5 h-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sacred-sage-green">Name</span>
              <span className="text-sacred-sage-green font-medium">Friend</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full text-white border-none"
              style={{ backgroundColor: '#d2b48c' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c19a6b'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d2b48c'}
            >
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Prayer Preferences */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20">
          <CardHeader>
            <CardTitle className="text-sacred-sage-green">Prayer Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-sacred-sage-green mb-3 block">
                Default Prayer Style
              </label>
              <div className="space-y-2">
                {prayerStyles.map((style) => {
                  const Icon = style.icon;
                  return (
                    <button
                      key={style.id}
                      onClick={() => handleStyleChange(style.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                        selectedPrayerStyle === style.id
                          ? "border-sacred-golden-tan bg-sacred-cream text-sacred-sage-green"
                          : "border-sacred-sage-border bg-white hover:bg-sacred-cream hover:border-sacred-golden-tan/50 text-sacred-sage-green"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{style.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20">
          <CardHeader>
            <CardTitle className="text-sacred-sage-green">Daily Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sacred-sage-green">Morning Blessing</span>
                <p className="text-sm text-sacred-sage-green">Start your day with encouragement</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-none"
                style={{ backgroundColor: '#d2b48c' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c19a6b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d2b48c'}
              >
                Set Time
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sacred-sage-green">Evening Reflection</span>
                <p className="text-sm text-sacred-sage-green">End your day in gratitude</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-none"
                style={{ backgroundColor: '#d2b48c' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c19a6b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d2b48c'}
              >
                Set Time
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20">
          <CardHeader>
            <CardTitle className="text-sacred-sage-green">Support & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-sacred-sage-green hover:text-sacred-sage-green/80">
              Crisis Resources
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sacred-sage-green hover:text-sacred-sage-green/80">
              Contact Support
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sacred-sage-green hover:text-sacred-sage-green/80">
              Privacy Policy
            </Button>
          </CardContent>
        </Card>

        {/* Scripture for Encouragement */}
        <Card className="bg-sacred-cream/30 border-sacred-sage-border/20">
          <CardContent className="p-4 text-center">
            <p className="scripture-text text-sm">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you 
              and not to harm you, to give you hope and a future." - Jeremiah 29:11
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sacred-sage-border/20 p-4">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="flex justify-between items-center w-full max-w-md">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/home")} 
              className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </Button>
            <div className="flex items-center gap-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/journal")}
                className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
              >
                <Book className="w-5 h-5" />
                <span className="text-xs">Journal</span>
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/circles")}
                className="flex flex-col items-center gap-1 text-sacred-sage-green hover:text-sacred-sage-green/80"
              >
                <Circle className="w-5 h-5" />
                <span className="text-xs">Circles</span>
              </Button>
            </div>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 text-sacred-sage-green"
            >
              <SettingsIcon className="w-5 h-5" />
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
