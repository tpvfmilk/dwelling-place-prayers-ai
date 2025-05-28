
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, ArrowUp, Home, Book } from "lucide-react";

const PrayerDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reflection, setReflection] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  // Mock generated prayer (in real app, would come from AI generation)
  const generatedPrayer = {
    title: "Prayer for Peace and Strength",
    content: `Heavenly Father,

Thank you for this moment of quiet with You. I come before You with a heart that seeks Your peace and presence. You know the thoughts that weigh on my mind and the concerns that fill my heart.

Lord, I trust in Your perfect timing and Your unfailing love. When anxiety tries to overwhelm me, remind me that You are my refuge and strength, an ever-present help in times of trouble.

Grant me the wisdom to know what I can change and the grace to accept what I cannot. Fill me with Your peace that surpasses all understanding, and help me to rest in the knowledge that You are working all things together for good.

Thank you for Your faithfulness, for Your mercy that is new every morning, and for the hope I have in You.

In Jesus' name, Amen.`,
    scripture: "Philippians 4:6-7",
    scriptureText: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
  };

  const handleSavePrayer = () => {
    // In real app, would save to database
    setIsSaved(true);
    // Could also save the reflection
  };

  return (
    <div className="min-h-screen bg-sacred-gradient">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sacred-gold/20 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/home")}
            className="text-sacred-stone hover:text-sacred-blue"
          >
            <Home className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-sacred-blue">Your Prayer</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto pb-24">
        {/* Generated Prayer */}
        <Card className="bg-white/95 backdrop-blur-sm border-sacred-gold/20 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-sacred-blue text-center">
              {generatedPrayer.title}
            </h2>
            
            <div className="prayer-text text-sacred-stone whitespace-pre-line leading-relaxed">
              {generatedPrayer.content}
            </div>

            {/* Audio Player Placeholder */}
            <div className="bg-sacred-blue-light/50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-sacred-blue rounded-full animate-gentle-pulse"></div>
                <span className="text-sm text-sacred-blue font-medium">Audio Prayer Ready</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="border-sacred-blue text-sacred-blue hover:bg-sacred-blue hover:text-white"
              >
                Play Prayer Audio
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Scripture Reference */}
        <Card className="bg-sacred-blue-light/30 border-sacred-blue/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-sacred-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sacred-blue mb-2">
                  {generatedPrayer.scripture}
                </h3>
                <p className="scripture-text text-sm">
                  {generatedPrayer.scriptureText}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Reflection */}
        <Card className="bg-white/90 backdrop-blur-sm border-sacred-gold/20">
          <CardContent className="p-4 space-y-3">
            <h3 className="text-sm font-medium text-sacred-blue">Add Your Reflection</h3>
            <Textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="How does this prayer speak to your heart? What is God showing you?"
              className="min-h-[80px] border-sacred-gold/30 focus:border-sacred-gold resize-none"
            />
            <p className="text-xs text-sacred-stone">
              Optional - capture how God is speaking to you through this prayer
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSavePrayer}
            disabled={isSaved}
            className="w-full bg-prayer-gradient hover:opacity-90 text-white font-medium py-4"
          >
            <Book className="w-5 h-5 mr-2" />
            {isSaved ? "Saved to Journal" : "Save to Prayer Journal"}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate("/prayer-input")}
            className="w-full border-sacred-gold text-sacred-blue hover:bg-sacred-gold-light"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Create Another Prayer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrayerDisplay;
