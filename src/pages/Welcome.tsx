
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sacred-gradient flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-8 animate-fade-in">
        {/* Logo and Welcome */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-prayer-gradient rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">DP</span>
          </div>
          <h1 className="text-3xl font-bold text-sacred-sage-green">
            Welcome to Dwelling Place
          </h1>
          <p className="scripture-text text-center px-4">
            "Be still, and know that I am God" - Psalm 46:10
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-white/80 backdrop-blur-sm border-sacred-sage-border/20 shadow-xl">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold text-sacred-sage-green">
              Your Personal Sanctuary
            </h2>
            <p className="sacred-text">
              Dwelling Place is your spiritual compass reset - a peaceful sanctuary where you can 
              share what's on your heart and receive personalized prayers tailored to your current 
              spiritual state.
            </p>
            <div className="bg-sacred-cream p-4 rounded-lg border border-sacred-sage-border/30">
              <p className="text-sm text-sacred-sage-green font-medium">
                Grace over guilt. Connection over obligation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/prayer-style")}
            className="w-full bg-prayer-gradient hover:bg-sacred-golden-tan-dark text-white font-medium py-6 text-lg shadow-lg"
          >
            Begin Your Journey
          </Button>
          <p className="text-center text-sm text-sacred-sage-green">
            Join thousands finding peace in prayer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
