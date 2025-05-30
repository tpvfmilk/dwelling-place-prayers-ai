import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Shield, Eye, Lock, Heart } from "lucide-react";
const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Debug image loading
    const imageUrl = '/lovable-uploads/b4353237-f6ca-4d94-9baa-4b0b1aba7708.png';
    console.log('Attempting to load background image:', imageUrl);
    const img = new Image();
    img.onload = () => {
      console.log('Background image loaded successfully');
    };
    img.onerror = error => {
      console.error('Background image failed to load:', error);
      console.log('Trying alternative path...');

      // Try with public/ prefix
      const altImg = new Image();
      altImg.src = '/public/lovable-uploads/b4353237-f6ca-4d94-9baa-4b0b1aba7708.png';
      altImg.onload = () => console.log('Alternative path worked');
      altImg.onerror = () => console.error('Alternative path also failed');
    };
    img.src = imageUrl;
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const noItems = ["NO social features", "NO vanity metrics", "NO invasive tracking", "NO social pressure", "NO advertisements", "NO performance anxiety"];
  const yesItems = ["YES to sacred silence", "YES to private prayer", "YES to your own pace", "YES to authentic faith", "YES to uninterrupted communion", "YES to dwelling in peace"];
  const privacyPoints = [{
    icon: Shield,
    title: "Your prayers are private",
    description: "Personal spiritual content stays between you and God"
  }, {
    icon: Lock,
    title: "Secure & encrypted",
    description: "All data is protected with industry-standard security"
  }, {
    icon: Eye,
    title: "You're in control",
    description: "Manage, edit, or delete your content anytime"
  }, {
    icon: Heart,
    title: "Built with love",
    description: "Created by believers, for believers, with reverence"
  }];
  return <div className="min-h-screen bg-sacred-cream overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-5 left-5 right-5 bg-transparent backdrop-blur-none border border-transparent shadow-none z-50 p-4 transition-all duration-300 landing-header px-[103px] mx-[139px] rounded-full py-[4px]">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" alt="Dwelling Place Logo" className="w-8 h-8" />
            <span className="text-2xl font-semibold text-sacred-sage-green">Dwelling Place</span>
          </div>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 list-none">
              <li><button onClick={() => navigate('/why')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Why</button></li>
              <li><button onClick={() => navigate('/how')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">How</button></li>
              <li><a href="#features" className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Features</a></li>
            </ul>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-sacred-warm-gray hover:text-sacred-sage-green hover:bg-transparent">
                Login
              </Button>
              <Button onClick={() => navigate('/welcome')} className="bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-8 relative pt-0" style={{
      boxShadow: '-30px 0 60px rgba(0, 0, 0, 0.15), 30px 0 60px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#F8F6F3'
    }}>
        {/* Hero Section */}
        <section className="text-center relative pt-28 pb-[236px] -mx-8 px-8" style={{
        backgroundImage: `url("/lovable-uploads/b4353237-f6ca-4d94-9baa-4b0b1aba7708.png?v=${Date.now()}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F8F6F3',
        zIndex: 2
      }}>
          {/* Enhanced Gradient Overlay with fade starting at 40% and fully gone at 70% */}
          <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(248, 246, 243, 0) 0%, rgba(248, 246, 243, 0) 40%, rgba(248, 246, 243, 1) 70%, rgba(248, 246, 243, 1) 100%)',
          zIndex: 1
        }} />

          <div className="relative" style={{
          zIndex: 2
        }}>
            <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 text-sacred-sage-green animate-fade-in">
              Connect with God.<br />Find your peace.
            </h1>
            <p className="text-xl md:text-3xl font-light text-sacred-warm-gray mb-12 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              The sacred space for your spiritual journey.
            </p>
            <p style={{
            animationDelay: '0.4s'
          }} className="text-lg text-sacred-warm-gray max-w-2xl mx-auto mb-12 animate-fade-in py-0">
              All your prayers, reflections, and spiritual insights in one beautiful, private sanctuary.
            </p>
            <Button onClick={() => navigate('/welcome')} className="bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              Begin Your Journey
            </Button>
          </div>
        </section>

        {/* Manifesto Section - Part 1 */}
        <section className="py-16 text-center relative" style={{
        zIndex: 2
      }}>
          <div className="max-w-5xl mx-auto px-[153px] py-[133px]">
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-sacred-warm-gray leading-relaxed mb-8 text-left md:text-2xl">
                In a time when every app demands our attention, when notifications steal our peace, when every spiritual moment is measured and shared, we have little space to call our own.
              </p>
              
              <p className="text-lg text-sacred-warm-gray leading-relaxed mb-8 text-left md:text-2xl">
                Our souls have been taken captive—
              </p>
              
              <p className="text-lg text-sacred-warm-gray leading-relaxed mb-12 text-left md:text-2xl">by endless scrolling, by comparison culture, by the pressure to perform our faith for others. Our prayers are interrupted by pings, our quiet moments hijacked by the urgent, our connection with God competing with a thousand digital voices.

What should have never been lost is now yours again. We promise:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
              <div>
                {noItems.map((item, index) => <div key={index} className="text-left mb-4">
                    <span className="text-2xl md:text-3xl text-sacred-warm-red font-bold">NO</span>
                    <span className="text-lg md:text-xl text-sacred-warm-gray ml-3">
                      {item.replace('NO ', '')}
                    </span>
                  </div>)}
              </div>
              
              <div>
                {yesItems.map((item, index) => <div key={index} className="text-left mb-4">
                    <span className="text-2xl md:text-3xl font-bold text-sacred-sage-green">YES</span>
                    <span className="text-lg md:text-xl text-sacred-warm-gray ml-3">
                      {item.replace('YES ', '')}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Gray Section */}
        <section className="relative -mx-8" style={{
        zIndex: 2
      }}>
          <div className="py-[135px] px-8 bg-orange-100">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl text-sacred-sage-green my-[53px] font-semibold py-[28px] md:text-5xl">
                This is your sanctuary.
              </h3>
              
              <p className="text-lg md:text-xl text-sacred-warm-gray leading-relaxed">
                A place where your prayers are yours alone, where your spiritual journey isn't content for others, where God meets you without an audience. Where technology serves the timeless instead of replacing it.
              </p>
              
              <p className="text-xl md:text-2xl font-medium text-sacred-sage-green">
                Come as you are. Pray as you need. Dwell in peace.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section className="py-20 relative" style={{
        zIndex: 2
      }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-sacred-sage-green tracking-tight">
              Privacy & Trust
            </h2>
            <p className="text-xl text-sacred-warm-gray max-w-2xl mx-auto">
              Your spiritual journey deserves the highest protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {privacyPoints.map((point, index) => {
            const Icon = point.icon;
            return <Card key={index} className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20 hover:bg-white/95 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-sacred-cream p-3 rounded-full border border-sacred-sage-border/30">
                        <Icon className="w-6 h-6 text-sacred-sage-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-sacred-sage-green mb-2">
                          {point.title}
                        </h3>
                        <p className="text-sacred-warm-gray leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          <Card className="bg-sacred-cream/40 border-sacred-sage-border/20 max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-lg italic text-sacred-terracotta font-medium leading-relaxed" style={{
              fontFamily: 'Crimson Text, serif'
            }}>
                "The Lord your God is with you, the Mighty Warrior who saves. 
                He will take great delight in you." - Zephaniah 3:17
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="py-24 relative" id="features" style={{
        zIndex: 2
      }}>
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

        {/* Additional Features */}
        <section className="py-24 relative" id="journey" style={{
        zIndex: 2
      }}>
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
      <footer className="bg-white/60 py-16 px-8 relative z-10">
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

      <style>
        {`
          .landing-header.scrolled {
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(15px) !important;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08) !important;
          }
        `}
      </style>
    </div>;
};
export default Landing;