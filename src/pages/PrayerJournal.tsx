
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Book, Settings, MessageSquare } from "lucide-react";

const PrayerJournal = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock saved prayers
  const savedPrayers = [
    {
      id: 1,
      title: "Morning Gratitude",
      date: "2024-01-15",
      preview: "Thank you, Lord, for this new day and the breath in my lungs...",
      reflection: "Felt a deep sense of peace this morning",
      style: "conversational"
    },
    {
      id: 2,
      title: "Peace in Uncertainty",
      date: "2024-01-14",
      preview: "Father, I come to you with a heart full of questions...",
      reflection: "God reminded me of His faithfulness",
      style: "scripture"
    },
    {
      id: 3,
      title: "Strength for the Day",
      date: "2024-01-13",
      preview: "Almighty God, source of all strength and comfort...",
      reflection: "",
      style: "traditional"
    }
  ];

  const filteredPrayers = savedPrayers.filter(prayer =>
    prayer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prayer.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStyleColor = (style: string) => {
    switch (style) {
      case "scripture": return "text-sacred-blue";
      case "conversational": return "text-sacred-gold-dark";
      case "traditional": return "text-sacred-stone";
      default: return "text-sacred-stone";
    }
  };

  return (
    <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-golden-tan/20 p-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-sacred-sage-green text-center mb-1">
            Your Prayer Journal
          </h1>
          <p className="text-sm text-sacred-warm-gray text-center">
            "Store up these words of mine in your hearts" - Deuteronomy 11:18
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto pb-24">
        {/* Encouragement */}
        <Card className="bg-sacred-sage-light/30 border-sacred-sage-green/20">
          <CardContent className="p-4 text-center">
            <h2 className="font-semibold text-sacred-sage-green mb-2">
              Your Spiritual Journey
            </h2>
            <p className="text-sm sacred-text">
              Each prayer is a step closer to God. Look back and see how He has been faithful.
            </p>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="space-y-3">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your prayers..."
            className="border-sacred-golden-tan/30 focus:border-sacred-golden-tan bg-white"
          />
        </div>

        {/* Prayers List */}
        <div className="space-y-4">
          {filteredPrayers.length > 0 ? (
            filteredPrayers.map((prayer) => (
              <Card 
                key={prayer.id}
                className="bg-white/90 hover:bg-white/95 cursor-pointer transition-all border-sacred-golden-tan/20 hover:border-sacred-golden-tan"
                onClick={() => navigate("/prayer-display", { state: { prayerId: prayer.id } })}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-sacred-sage-green">{prayer.title}</h3>
                    <span className="text-xs text-sacred-warm-gray">
                      {new Date(prayer.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <p className="text-sm sacred-text line-clamp-2">
                    {prayer.preview}
                  </p>
                  
                  {prayer.reflection && (
                    <div className="bg-sacred-golden-tan/30 p-3 rounded-lg">
                      <p className="text-xs text-sacred-sage-green font-medium mb-1">Your Reflection:</p>
                      <p className="text-sm sacred-text italic">"{prayer.reflection}"</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-medium ${getStyleColor(prayer.style)}`}>
                      {prayer.style.charAt(0).toUpperCase() + prayer.style.slice(1)} style
                    </span>
                    <Button variant="ghost" size="sm" className="text-sacred-warm-gray hover:text-sacred-sage-green">
                      View Prayer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-white/90">
              <CardContent className="p-8 text-center">
                <Book className="w-16 h-16 mx-auto text-sacred-warm-gray/50 mb-4" />
                <h3 className="font-semibold text-sacred-sage-green mb-2">
                  {searchTerm ? "No prayers found" : "Start your prayer journey"}
                </h3>
                <p className="sacred-text text-sm mb-4">
                  {searchTerm 
                    ? "Try a different search term or create a new prayer"
                    : "Your saved prayers will appear here as you create them"
                  }
                </p>
                <Button 
                  onClick={() => navigate("/prayer-input")}
                  className="bg-prayer-gradient hover:opacity-90 text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Create Prayer
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sacred-golden-tan/20 p-4">
        <div className="flex justify-center space-x-8 max-w-md mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/home")}
            className="flex flex-col items-center gap-1 text-sacred-warm-gray hover:text-sacred-sage-green"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-sacred-sage-green"
          >
            <Book className="w-5 h-5" />
            <span className="text-xs">Journal</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrayerJournal;
