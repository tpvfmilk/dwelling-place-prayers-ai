import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Book, Settings, MessageSquare, Circle, Play, Star, Sun, Moon, Plus } from "lucide-react";

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
      case "peaceful": return "#4A5D23";
      case "grateful": return "#D4A574";
      case "seeking": return "#7A8B5C";
      case "comforted": return "#D4B5A0";
      default: return "#A8B88A";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchTerm("");
    }
  };

  // Create New Card Component - updated to match prayer card style
  const CreateNewCard = () => (
    <div
      className="cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg mb-5 border border-sacred-sage-border/20"
      style={{
        breakInside: "avoid",
        background: "#FFFFFF",
        minHeight: "200px"
      }}
      onClick={() => navigate("/prayer-input")}
    >
      <div className="p-6">
        {/* Date */}
        <div className="text-xs text-sacred-sage-light mb-2">Ready to write</div>
        
        {/* Title with Dot */}
        <div className="flex items-center mb-3">
          <div 
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: "#A8B88A" }}
          />
          <h3 className="text-lg font-semibold text-sacred-sage-green">ADD A NEW NOTE</h3>
        </div>

        {/* Content */}
        <div className="text-sm leading-relaxed mb-4 text-sacred-warm-gray">
          Start typing here...
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-2 py-1 rounded-xl text-xs bg-sacred-sage-green/10 text-sacred-sage-green">
            New Entry
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-sacred-gradient">
      {/* Sidebar */}
      <div className="bg-white/95 backdrop-blur-sm border-r border-sacred-sage-border/20 flex flex-col items-center py-5 fixed h-full left-0 top-0 z-50 shadow-xl" style={{ width: '55px' }}>
        {/* Logo with top padding to align with search bar bottom */}
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-8 cursor-pointer hover:scale-110 transition-transform overflow-hidden"
          style={{ marginTop: '320px' }}
          onClick={() => navigate("/home")}
        >
          <img 
            src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" 
            alt="Daily Prayer Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Navigation Items */}
        <div className="flex flex-col gap-5 flex-1">
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group p-2 ${
              activeNav === "all" ? "bg-sacred-sage-green/20 text-sacred-sage-green" : "text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green"
            }`}
            onClick={() => setActiveNav("all")}
          >
            <Book className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              All Prayers
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group p-2 ${
              activeNav === "circles" ? "bg-sacred-sage-green/20 text-sacred-sage-green" : "text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green"
            }`}
            onClick={() => setActiveNav("circles")}
          >
            <Circle className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Prayer Circles
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group p-2 ${
              activeNav === "blessing" ? "bg-sacred-sage-green/20 text-sacred-sage-green" : "text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green"
            }`}
            onClick={() => setActiveNav("blessing")}
          >
            <Star className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Daily Blessing
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group p-2 ${
              activeNav === "scripture" ? "bg-sacred-sage-green/20 text-sacred-sage-green" : "text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green"
            }`}
            onClick={() => setActiveNav("scripture")}
          >
            <Book className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Scripture
            </div>
          </div>
          
          <div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group p-2 ${
              activeNav === "reflections" ? "bg-sacred-sage-green/20 text-sacred-sage-green" : "text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green"
            }`}
            onClick={() => setActiveNav("reflections")}
          >
            <MessageSquare className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Reflections
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-4 items-center">
          <button 
            className="w-8 h-8 rounded-full bg-gradient-to-br from-sacred-custom-brown to-sacred-custom-brown-dark flex items-center justify-center transition-transform hover:scale-110 p-1"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
          </button>
          
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all relative group text-sacred-warm-gray hover:bg-sacred-sage-green/10 hover:text-sacred-sage-green p-2"
            onClick={() => navigate("/settings")}
          >
            <Settings className="w-6 h-6" />
            <div className="absolute left-14 bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-8" style={{ marginLeft: '55px' }}>
        {/* Search Bar */}
        <div className="sticky top-0 z-40 mb-10 py-10">
          <div className="max-w-7xl mx-auto relative">
            <div className="relative flex items-center min-h-[300px]">
              <MessageSquare className="absolute left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 text-sacred-sage-light pointer-events-none z-10" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search your heart and prayers..."
                className="w-full pl-20 pr-12 py-12 border-none bg-transparent outline-none placeholder:text-sacred-sage-light focus:ring-0 focus:border-none focus:outline-none hover:ring-0 hover:outline-none shadow-none text-sacred-sage-green focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none font-extralight italic"
                style={{ fontSize: '50px', lineHeight: '1.2' }}
              />
            </div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div 
          className="max-w-7xl mx-auto pb-24 pl-4 pr-8"
          style={{
            columnCount: "4",
            columnGap: "20px",
            columnFill: "balance"
          }}
        >
          {/* Always show Create New Card first */}
          <CreateNewCard />
          
          {filteredPrayers.map((prayer) => (
            <div
              key={prayer.id}
              className="cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg mb-5 border border-sacred-sage-border/20"
              style={{
                breakInside: "avoid",
                background: "#FFFFFF",
                maxHeight: "500px"
              }}
              onClick={() => navigate("/prayer-display", { state: { prayerId: prayer.id } })}
            >
              <div className="p-6">
                {/* Date */}
                <div className="text-xs text-sacred-sage-light mb-2">{prayer.date}</div>
                
                {/* Title with Mood Indicator */}
                <div className="flex items-center mb-3">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getMoodColor(prayer.mood || prayer.type) }}
                  />
                  <h3 className="text-lg font-semibold text-sacred-sage-green">
                    {prayer.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="text-sm leading-relaxed mb-4 text-sacred-warm-gray">
                  {prayer.preview.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                {/* Scripture */}
                {prayer.scripture && (
                  <div className="italic border-l-3 pl-3 my-4 text-sm border-sacred-sage-green/40 text-sacred-sage-green">
                    {prayer.scripture}
                  </div>
                )}

                {/* Reflection */}
                {prayer.reflection && (
                  <div className="my-4">
                    <div className="text-xs text-sacred-sage-green font-medium mb-1">Your Reflection:</div>
                    <div className="text-sm text-sacred-warm-gray italic">"{prayer.reflection}"</div>
                  </div>
                )}

                {/* Audio Button */}
                {prayer.hasAudio && (
                  <Button 
                    className="bg-sacred-custom-brown hover:bg-sacred-custom-brown-dark text-white rounded-full px-4 py-2 text-sm mt-3 flex items-center gap-2"
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
                      className="px-2 py-1 rounded-xl text-xs bg-sacred-sage-green/10 text-sacred-sage-green"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed floating add button */}
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
          .min-h-\\[300px\\] {
            min-height: 180px !important;
          }
          .pl-20 {
            padding-left: 3rem !important;
          }
          .w-6 {
            width: 1.5rem !important;
          }
          .h-6 {
            height: 1.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .max-w-7xl {
            column-count: 1 !important;
          }
          .min-h-\\[300px\\] {
            min-height: 150px !important;
          }
          .pl-20 {
            padding-left: 2.5rem !important;
          }
          .w-6 {
            width: 1.25rem !important;
          }
          .h-6 {
            height: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrayerJournal;
