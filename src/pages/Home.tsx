
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Home as HomeIcon, MessageSquare, Settings } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Friend"; // In real app, would come from user data

  // Mock recent prayers
  const recentPrayers = [
    {
      id: 1,
      title: "Morning Gratitude",
      preview: "Thank you, Lord, for this new day and the breath in my lungs...",
      time: "This morning"
    },
    {
      id: 2,
      title: "Peace in Uncertainty",
      preview: "Father, I come to you with a heart full of questions...",
      time: "Yesterday"
    }
  ];

  return (
    <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-sage-border/20 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="text-lg font-semibold text-sacred-sage-green">
              Welcome home, {userName}
            </h1>
            <p className="text-sm text-sacred-sage-green">Grace and peace to you</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/settings")}
            className="text-sacred-sage-green hover:text-sacred-sage-green/80"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Daily Blessing */}
        <Card className="bg-prayer-gradient border-sacred-golden-tan shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-white mb-2">
              Today's Blessing
            </h2>
            <p className="text-white/90 text-sm mb-4">
              "May the Lord bless you and keep you; may the Lord make his face shine on you 
              and be gracious to you."
            </p>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Listen to Audio
            </Button>
          </CardContent>
        </Card>

        {/* Main Prayer Action */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20 shadow-xl">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-sacred-cream rounded-full flex items-center justify-center border border-sacred-sage-border/30">
              <MessageSquare className="w-8 h-8 text-sacred-sage-green" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-sacred-sage-green mb-2">
                What's on your heart today?
              </h2>
              <p className="sacred-text text-sm">
                Share your joys, concerns, or simply rest in God's presence
              </p>
            </div>
            <Button 
              onClick={() => navigate("/prayer-input")}
              className="w-full bg-prayer-gradient hover:bg-sacred-golden-tan-dark text-white font-medium py-4 text-lg"
            >
              Share your heart with God
            </Button>
          </CardContent>
        </Card>

        {/* Recent Prayers */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-sacred-sage-green">Recent Prayers</h3>
          {recentPrayers.length > 0 ? (
            <div className="space-y-3">
              {recentPrayers.map((prayer) => (
                <Card 
                  key={prayer.id} 
                  className="bg-white/80 hover:bg-white/90 cursor-pointer transition-all border-sacred-sage-border/20"
                  onClick={() => navigate("/prayer-display", { state: { prayerId: prayer.id } })}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sacred-sage-green">{prayer.title}</h4>
                      <span className="text-xs text-sacred-sage-green">{prayer.time}</span>
                    </div>
                    <p className="text-sm sacred-text line-clamp-2">
                      {prayer.preview}
                    </p>
                  </CardContent>
                </Card>
              ))}
              <Button 
                onClick={() => navigate("/journal")}
                className="w-full bg-prayer-gradient hover:bg-sacred-golden-tan-dark text-white font-medium"
              >
                View All Prayers
              </Button>
            </div>
          ) : (
            <Card className="bg-white/80 border-sacred-sage-border/20">
              <CardContent className="p-6 text-center">
                <Book className="w-12 h-12 mx-auto text-sacred-sage-green/50 mb-3" />
                <p className="sacred-text">
                  Your prayer journey begins here. Share what's on your heart to create your first prayer.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sacred-sage-border/20 p-4">
        <div className="flex justify-center space-x-8 max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-sacred-sage-green"
          >
            <HomeIcon className="w-5 h-5" />
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
  );
};

export default Home;
