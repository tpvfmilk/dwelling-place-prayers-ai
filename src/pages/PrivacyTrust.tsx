
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Heart } from "lucide-react";

const PrivacyTrust = () => {
  const navigate = useNavigate();

  const privacyPoints = [
    {
      icon: Shield,
      title: "Your prayers are private",
      description: "Personal spiritual content stays between you and God"
    },
    {
      icon: Lock,
      title: "Secure & encrypted",
      description: "All data is protected with industry-standard security"
    },
    {
      icon: Eye,
      title: "You're in control",
      description: "Manage, edit, or delete your content anytime"
    },
    {
      icon: Heart,
      title: "Built with love",
      description: "Created by believers, for believers, with reverence"
    }
  ];

  return (
    <div className="min-h-screen bg-sacred-gradient p-4">
      <div className="w-full max-w-md mx-auto pt-8 pb-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-sacred-blue">
            Privacy & Trust
          </h1>
          <p className="sacred-text">
            Your spiritual journey deserves the highest protection
          </p>
        </div>

        {/* Privacy Points */}
        <div className="space-y-4">
          {privacyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-sacred-blue-light p-2 rounded-full">
                      <Icon className="w-4 h-4 text-sacred-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sacred-blue mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm sacred-text">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Scripture */}
        <Card className="bg-sacred-blue-light/30 border-sacred-blue/20">
          <CardContent className="p-4 text-center">
            <p className="scripture-text">
              "The Lord your God is with you, the Mighty Warrior who saves. 
              He will take great delight in you." - Zephaniah 3:17
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button 
            onClick={() => navigate("/home")}
            className="w-full bg-prayer-gradient hover:opacity-90 text-white font-medium py-6"
          >
            Enter Dwelling Place
          </Button>
          <div className="text-center">
            <button className="text-xs text-sacred-stone hover:text-sacred-blue transition-colors underline">
              Read full privacy policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTrust;
