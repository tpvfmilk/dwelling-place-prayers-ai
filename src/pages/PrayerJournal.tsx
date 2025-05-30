import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Book, Settings, MessageSquare, Circle, Play, Star, Sun, Moon } from "lucide-react";

const PrayerJournal = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeNav, setActiveNav] = useState("all");
  const userName = "Friend";

  // Mock saved prayers with enhanced data
  const savedPrayers = [
    {
      id: 1,
      title: "Morning Surrender",
      date: "Today, 7:30 AM",
      preview: "Lord, I come before You this morning with a heart full of gratitude. Help me to trust in Your perfect timing and walk in Your peace today.",
      scripture: "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
      reflection: "",
      type: "prayer",
      mood: "peaceful",
      tags: ["Morning", "Trust", "Gratitude"],
      audioDuration: "0:45",
      hasAudio: true
    },
    {
      id: 2,
      title: "Evening Gratitude",
      date: "Yesterday, 9:15 PM",
      preview: "Today was challenging, but I felt God's presence in the small moments - the sunset, a friend's text, and the peace that came during my lunch break prayer.",
      reflection: "I'm learning that God speaks in whispers, not just in thunderous moments.",
      type: "reflection",
      mood: "peaceful",
      tags: ["Gratitude", "Presence"],
      hasAudio: false
    },
    {
      id: 3,
      title: "Isaiah 41:10",
      date: "2 days ago",
      preview: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      type: "verse",
      tags: ["Fear", "Strength", "Comfort"],
      hasAudio: false
    },
    {
      id: 4,
      title: "Prayer Requests",
      date: "3 days ago",
      preview: "• Healing for mom's back pain\n• Wisdom for the job decision\n• Peace for Sarah during exams\n• Grateful for answered prayer about housing!",
      type: "note",
      mood: "seeking",
      tags: ["Family", "Decisions", "Answered Prayer"],
      hasAudio: false
    },
    {
      id: 5,
      title: "Midday Reset",
      date: "4 days ago, 12:30 PM",
      preview: "Father, this day feels overwhelming. I need Your strength and clarity. Help me remember that You are in control.",
      type: "prayer",
      mood: "comforted",
      tags: ["Stress", "Strength", "Midday"],
      audioDuration: "1:12",
      hasAudio: true
    },
    {
      id: 6,
      title: "Sunday Service Thoughts",
      date: "1 week ago",
      preview: "Pastor John spoke about being still and knowing God. I realized how rarely I actually sit in silence with the Lord. This week I want to practice just being present with Him, without words or requests.",
      scripture: "Be still, and know that I am God - Psalm 46:10",
      reflection: "Silence isn't empty - it's full of answers.",
      type: "reflection",
      mood: "grateful",
      tags: ["Stillness", "Sunday", "Presence"],
      hasAudio: false
    }
  ];

  const filteredPrayers = savedPrayers.filter(prayer => {
    const matchesSearch = prayer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prayer.preview.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "peaceful": return "#48bb78";
      case "grateful": return "#ed8936";
      case "seeking": return "#4299e1";
      case "comforted": return "#9f7aea";
      default: return "#a0aec0";
    }
  };

  const getCardGradient = (type: string) => {
    switch (type) {
      case "prayer": return "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
      case "reflection": return "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)";
      case "verse": return "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)";
      case "note": return "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)";
      default: return "rgba(255, 255, 255, 0.95)";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchTerm("");
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      {/* Sidebar */}
      <div className="w-20 bg-white/95 backdrop-blur-sm border-r border-white/20 flex flex-col items-center py-5 fixed h-full left-0 top-0 z-50 shadow-2xl">
        {/* Logo */}
        <div 
          className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white font-semibold text-lg mb-8 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => navigate("/home")}
        >
          DP
        </div>
        
        {/* Navigation Items */}
        <div className="flex flex-col gap-5 flex-1">
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group ${
              activeNav === "all" ? "bg-purple-100 text-purple-600" : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => setActiveNav("all")}
          >
            <Book className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              All Prayers
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group ${
              activeNav === "circles" ? "bg-purple-100 text-purple-600" : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => setActiveNav("circles")}
          >
            <Circle className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Prayer Circles
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group ${
              activeNav === "blessing" ? "bg-purple-100 text-purple-600" : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => setActiveNav("blessing")}
          >
            <Star className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Daily Blessing
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group ${
              activeNav === "scripture" ? "bg-purple-100 text-purple-600" : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => setActiveNav("scripture")}
          >
            <Book className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Scripture
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group ${
              activeNav === "reflections" ? "bg-purple-100 text-purple-600" : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => setActiveNav("reflections")}
          >
            <MessageSquare className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Reflections
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-4 items-center">
          <button 
            className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center transition-transform hover:scale-110"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
          </button>
          
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => navigate("/settings")}
          >
            <Settings className="w-5 h-5" />
            <div className="absolute left-16 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20 flex-1 p-5">
        {/* Search Bar */}
        <div className="sticky top-0 z-40 mb-10 py-10">
          <div className="max-w-7xl mx-auto relative">
            <div className="relative flex items-center min-h-[104px]">
              <MessageSquare className="absolute left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 text-gray-400 pointer-events-none z-10" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search your heart and prayers..."
                className="w-full pl-24 pr-60 py-8 text-3xl border-none bg-transparent outline-none placeholder:text-gray-400 focus:ring-0 focus:border-none shadow-none"
              />
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 flex items-center gap-2 pointer-events-none">
                Press <strong className="text-gray-600 font-semibold">ESC</strong> to reset search
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div 
          className="max-w-7xl mx-auto pb-24"
          style={{
            columnCount: "4",
            columnGap: "20px",
            columnFill: "balance"
          }}
        >
          {filteredPrayers.map((prayer) => (
            <div
              key={prayer.id}
              className="cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg mb-5"
              style={{
                breakInside: "avoid",
                background: getCardGradient(prayer.type),
                maxHeight: "500px"
              }}
              onClick={() => navigate("/prayer-display", { state: { prayerId: prayer.id } })}
            >
              {/* Card Type Badge */}
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-xl text-xs font-medium text-gray-600 z-10">
                {prayer.type.charAt(0).toUpperCase() + prayer.type.slice(1)}
              </div>

              <div className="p-5">
                {/* Date */}
                <div className="text-xs text-gray-500 mb-2">{prayer.date}</div>
                
                {/* Title with Mood Indicator */}
                <div className="flex items-center mb-3">
                  {prayer.mood && (
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: getMoodColor(prayer.mood) }}
                    />
                  )}
                  <h3 className={`text-lg font-semibold ${prayer.type === 'verse' ? 'text-white' : 'text-gray-800'}`}>
                    {prayer.title}
                  </h3>
                </div>

                {/* Content */}
                <div className={`text-sm leading-relaxed mb-4 ${prayer.type === 'verse' ? 'text-white' : 'text-gray-600'}`}>
                  {prayer.preview.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                {/* Scripture */}
                {prayer.scripture && (
                  <div className={`italic border-l-3 pl-3 my-4 text-sm ${
                    prayer.type === 'verse' 
                      ? 'border-white/40 text-white/90' 
                      : 'border-purple-300 text-purple-700'
                  }`}>
                    {prayer.scripture}
                  </div>
                )}

                {/* Reflection */}
                {prayer.reflection && (
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg my-4">
                    <div className="text-xs text-gray-600 font-medium mb-1">Your Reflection:</div>
                    <div className="text-sm text-gray-700 italic">"{prayer.reflection}"</div>
                  </div>
                )}

                {/* Audio Button */}
                {prayer.hasAudio && (
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white rounded-full px-4 py-2 text-sm mt-3 flex items-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Playing audio for:', prayer.title);
                    }}
                  >
                    <Play className="w-4 h-4" />
                    Listen ({prayer.audioDuration})
                  </Button>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {prayer.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-xl text-xs ${
                        prayer.type === 'verse'
                          ? 'bg-white/20 text-white'
                          : 'bg-black/10 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <Button
          className="fixed bottom-8 right-8 w-15 h-15 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-2xl text-2xl transition-transform hover:scale-110 z-50"
          onClick={() => navigate("/prayer-input")}
        >
          +
        </Button>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .max-w-7xl {
            column-count: 3 !important;
          }
        }
        @media (max-width: 768px) {
          .max-w-7xl {
            column-count: 2 !important;
          }
        }
        @media (max-width: 480px) {
          .max-w-7xl {
            column-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrayerJournal;
