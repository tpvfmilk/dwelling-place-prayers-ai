
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sacred-cream overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed top-0 left-0 w-full h-full opacity-80 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-sacred-cream via-white to-sacred-terracotta/20 animate-gentle-pulse"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-[10%] left-[10%] opacity-10 animate-[float_20s_ease-in-out_infinite] -z-10">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>
      <div className="fixed top-[30%] right-[15%] opacity-10 animate-[float_20s_ease-in-out_infinite_5s] -z-10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="10" y="10" width="20" height="20" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>
      <div className="fixed bottom-[20%] left-[20%] opacity-10 animate-[float_20s_ease-in-out_infinite_10s] -z-10">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <polygon points="25,5 45,40 5,40" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-5 left-5 right-5 bg-white/90 backdrop-blur-sm border border-sacred-sage-border/20 rounded-2xl shadow-lg z-50 p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" 
              alt="Dwelling Place Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-semibold text-sacred-sage-green">Dwelling Place</span>
          </div>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#features" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Features</a></li>
            <li><a href="#manifesto" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Manifesto</a></li>
            <li><a href="#journey" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Journey</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-28 max-w-6xl mx-auto px-8">
        {/* Hero Section */}
        <section className="text-center py-20 relative">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 text-sacred-sage-green animate-fade-in">
            Connect with God.<br />Find your peace.
          </h1>
          <p className="text-xl md:text-3xl font-light text-sacred-warm-gray mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            The sacred space for your spiritual journey.
          </p>
          <p className="text-lg text-sacred-warm-gray max-w-2xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            All your prayers, reflections, and spiritual insights in one beautiful, private sanctuary.
          </p>
          <Button 
            onClick={() => navigate('/welcome')}
            className="bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
            style={{animationDelay: '0.6s'}}
          >
            Begin Your Journey
          </Button>
        </section>

        {/* Features Section */}
        <section className="py-24" id="features">
          <h2 className="text-4xl md:text-6xl font-light text-center mb-16 text-sacred-sage-green tracking-tight">
            One sacred place for your spiritual life.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">IT JUST FLOWS</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  Capture your prayers and thoughts naturally. Our AI understands your spiritual language and remembers what matters most.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">NO DISTRACTION</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  Find your prayers instantly. Search by feeling, scripture, or theme – however your heart remembers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">YOUR SACRED SPACE</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  A treasure of faith, prayers & reflections. All your spiritual content in one private, sacred place.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-20 my-20" id="manifesto">
          <div className="bg-gradient-to-br from-white/90 to-sacred-terracotta/20 rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-sacred-sage-light to-sacred-golden-tan animate-[spin_30s_linear_infinite]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-sacred-warm-gray mb-8">
                Our Sacred Mission
              </h2>
              <p className="text-2xl md:text-4xl font-light leading-relaxed text-sacred-sage-green italic">
                "In a world of endless noise and distraction, we believe everyone deserves a sacred space to connect with the divine, to find peace, and to nurture their spiritual growth."
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-24" id="journey">
          <h2 className="text-4xl md:text-6xl font-light text-center mb-16 text-sacred-sage-green tracking-tight">
            For every heart seeking God.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">FOR THE FAITHFUL</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  Deepen your prayer life with guided reflections.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">FOR THE SEEKING</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  Explore faith through meaningful conversations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white/50 hover:bg-white/80 transition-all hover:-translate-y-2 hover:shadow-xl border-sacred-sage-border/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-5 text-sacred-sage-green">FOR EVERYONE</h3>
                <p className="text-sacred-warm-gray leading-relaxed">
                  A place for every spiritual moment worth remembering.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 mt-20 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <h4 className="text-lg font-semibold mb-5 text-sacred-sage-green">Dwelling Place</h4>
              <p className="text-sacred-warm-gray leading-relaxed max-w-sm">
                Your sacred space for spiritual growth. Connect with God, find peace, and nurture your faith.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-5 text-sacred-sage-green">Features</h4>
              <ul className="space-y-3 list-none">
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Prayer Journal</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Spiritual Guidance</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-5 text-sacred-sage-green">Community</h4>
              <ul className="space-y-3 list-none">
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">About</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Manifesto</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Stories</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-5 text-sacred-sage-green">Connect</h4>
              <ul className="space-y-3 list-none">
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Blog</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Community</a></li>
                <li><a href="#" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-sacred-sage-border/20 text-center">
            <p className="text-sacred-warm-gray text-sm">
              © 2025 Dwelling Place. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
