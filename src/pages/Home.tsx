import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Home as HomeIcon, MessageSquare, Settings, Circle, Play } from "lucide-react";
const Home = () => {
  const navigate = useNavigate();
  const userName = "Friend"; // In real app, would come from user data

  // Mock recent prayers
  const recentPrayers = [{
    id: 1,
    title: "Morning Gratitude",
    preview: "Thank you, Lord, for this new day and the breath in my lungs...",
    time: "This morning",
    date: "2024-01-15",
    reflection: "Felt a deep sense of peace this morning",
    style: "conversational"
  }, {
    id: 2,
    title: "Peace in Uncertainty",
    preview: "Father, I come to you with a heart full of questions...",
    time: "Yesterday",
    date: "2024-01-14",
    reflection: "God reminded me of His faithfulness",
    style: "scripture"
  }];
  return <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-sage-border/20 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" alt="Dwelling Place Logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold text-sacred-sage-green">
              Dwelling Place
            </h1>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-sacred-sage-green">
              Welcome home, {userName}
            </h2>
            <p className="text-sm text-sacred-sage-green">Grace and peace to you</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-7xl mx-auto">
        {/* Daily Blessing */}
        <Card className="bg-[#d2b48c] border-sacred-golden-tan shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-white mb-2">
              Today's Blessing
            </h2>
            <p className="text-white/90 text-sm mb-4">
              "May the Lord bless you and keep you; may the Lord make his face shine on you 
              and be gracious to you."
            </p>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Listen to Audio
            </Button>
          </CardContent>
        </Card>

        {/* Main Prayer Action */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20 shadow-xl">
          <CardContent className="p-6 text-center space-y-4 my-[39px] py-[48px]">
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
            <Button onClick={() => navigate("/prayer-input")} className="w-full bg-[#d2b48c] hover:bg-[#c19660] text-white font-medium py-4 text-lg">
              Share your heart with God
            </Button>
          </CardContent>
        </Card>

        {/* Recent Prayers */}
        <div className="space-y-4 my-[29px]">
          <h3 className="text-lg font-semibold text-sacred-sage-green">Recent Prayers</h3>
          {recentPrayers.length > 0 ? <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPrayers.map(prayer => <Card key={prayer.id} className="bg-white/90 hover:bg-white/95 cursor-pointer transition-all border-sacred-golden-tan/20 hover:border-sacred-golden-tan h-full flex flex-col" onClick={() => navigate("/prayer-display", {
              state: {
                prayerId: prayer.id
              }
            })}>
                    <CardContent className="p-4 flex flex-col justify-between h-full">
                      <div className="space-y-3 flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-sacred-sage-green">{prayer.title}</h4>
                          <span className="text-xs text-sacred-sage-green">
                            {new Date(prayer.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <p className="text-sm sacred-text line-clamp-2">
                          {prayer.preview}
                        </p>
                        
                        {prayer.reflection && <div className="bg-sacred-golden-tan/30 p-3 rounded-lg">
                            <p className="text-xs text-sacred-sage-green font-medium mb-1">Your Reflection:</p>
                            <p className="text-sm sacred-text italic">"{prayer.reflection}"</p>
                          </div>}
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-sacred-golden-tan/20">
                        <span className="text-xs font-medium text-gray-500">
                          {prayer.style.charAt(0).toUpperCase() + prayer.style.slice(1)} style
                        </span>
                        <Button variant="ghost" size="sm" className="text-white border-none bg-[#d2b48c] hover:bg-[#c19660]" onClick={e => {
                    e.stopPropagation();
                    navigate("/prayer-display", {
                      state: {
                        prayerId: prayer.id
                      }
                    });
                  }}>
                          <Play className="w-4 h-4 mr-1" />
                          Play
                        </Button>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
              <div className="flex justify-center">
                <Button onClick={() => navigate("/journal")} className="w-1/4 mx-auto bg-[#d2b48c] hover:bg-[#c19660] text-white font-medium py-0 my-[27px]">
                  View All Prayers
                </Button>
              </div>
            </div> : <div className="grid grid-cols-1">
              <Card className="bg-white/80 border-sacred-sage-border/20">
                <CardContent className="p-6 text-center">
                  <Book className="w-12 h-12 mx-auto text-sacred-sage-green/50 mb-3" />
                  <p className="sacred-text">
                    Your prayer journey begins here. Share what's on your heart to create your first prayer.
                  </p>
                </CardContent>
              </Card>
            </div>}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sacred-sage-border/20 p-4">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="flex justify-between items-center w-full max-w-md">
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-sacred-sage-green hover:bg-sacred-cream/50 hover:text-sacred-sage-green/80">
              <HomeIcon className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </Button>
            <div className="flex items-center gap-8">
              <Button variant="ghost" onClick={() => navigate("/journal")} className="flex flex-col items-center gap-1 text-sacred-sage-green hover:bg-sacred-cream/50 hover:text-sacred-sage-green/80">
                <Book className="w-5 h-5" />
                <span className="text-xs">Journal</span>
              </Button>
              <Button variant="ghost" onClick={() => navigate("/circles")} className="flex flex-col items-center gap-1 text-sacred-sage-green hover:bg-sacred-cream/50 hover:text-sacred-sage-green/80">
                <Circle className="w-5 h-5" />
                <span className="text-xs">Circles</span>
              </Button>
            </div>
            <Button variant="ghost" onClick={() => navigate("/settings")} className="flex flex-col items-center gap-1 text-sacred-sage-green hover:bg-sacred-cream/50 hover:text-sacred-sage-green/80">
              <Settings className="w-5 h-5" />
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Home;