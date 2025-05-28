
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, Book, MessageSquare, Settings as SettingsIcon, User } from "lucide-react";

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
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-gold/20 p-4">
        <div className="max-w-md mx-auto flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/home")}
            className="text-sacred-stone hover:text-sacred-blue mr-3"
          >
            <ArrowUp className="w-5 h-5 rotate-180" />
          </Button>
          <h1 className="text-xl font-semibold text-sacred-blue">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Profile Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-sacred-blue">
              <User className="w-5 h-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="sacred-text">Name</span>
              <span className="text-sacred-blue font-medium">Friend</span>
            </div>
            <Button variant="outline" size="sm" className="w-full border-sacred-gold text-sacred-blue">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Prayer Preferences */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
          <CardHeader>
            <CardTitle className="text-sacred-blue">Prayer Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-sacred-blue mb-3 block">
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
                          ? "border-sacred-gold bg-sacred-gold-light text-sacred-blue"
                          : "border-gray-200 bg-white hover:border-sacred-gold/50"
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
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
          <CardHeader>
            <CardTitle className="text-sacred-blue">Daily Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sacred-blue">Morning Blessing</span>
                <p className="text-sm sacred-text">Start your day with encouragement</p>
              </div>
              <Button variant="outline" size="sm">
                Set Time
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sacred-blue">Evening Reflection</span>
                <p className="text-sm sacred-text">End your day in gratitude</p>
              </div>
              <Button variant="outline" size="sm">
                Set Time
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
          <CardHeader>
            <CardTitle className="text-sacred-blue">Support & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-sacred-stone hover:text-sacred-blue">
              Crisis Resources
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sacred-stone hover:text-sacred-blue">
              Contact Support
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sacred-stone hover:text-sacred-blue">
              Privacy Policy
            </Button>
          </CardContent>
        </Card>

        {/* Scripture for Encouragement */}
        <Card className="bg-sacred-blue-light/30 border-sacred-blue/20">
          <CardContent className="p-4 text-center">
            <p className="scripture-text text-sm">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you 
              and not to harm you, to give you hope and a future." - Jeremiah 29:11
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
