
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, Eye, Lock, Heart } from "lucide-react";
import HeaderNavigation from "@/components/HeaderNavigation";

const Landing = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (header) {
        if (scrolled) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
  const logoTextColor = isScrolled ? "text-sacred-sage-green" : "text-white";
  return (
    <div className="min-h-screen bg-sacred-cream overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-5 left-8 right-8 bg-transparent backdrop-blur-none border border-transparent shadow-none z-50 transition-all duration-300 landing-header rounded-full h-16">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-5 h-full">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" alt="Dwelling Place Logo" className="w-8 h-8" />
            <span className={`text-xl font-semibold ${logoTextColor} hidden sm:block transition-colors`}>Dwelling Place</span>
          </div>
          <HeaderNavigation scrolled={isScrolled} />
        </nav>
      </header>

      <main className="w-full px-8 relative pt-0 bg-sacred-cream">
        {/* Hero Section with Video Background */}
        <section className="text-center relative pt-28 -mx-8 px-8 overflow-hidden">
          {/* Video Container with fixed height */}
          <div className="relative w-full h-[70vh] min-h-[500px]">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata" 
              poster="/lovable-uploads/b4353237-f6ca-4d94-9baa-4b0b1aba7708.png"
              className="absolute inset-0 w-full h-full object-cover bg-black"
              style={{ zIndex: 1, objectPosition: 'center' }}
            >
              <source src="/lovable-uploads/0602.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Text Overlay */}
            <div className="absolute bottom-8 right-8" style={{ zIndex: 3 }}>
              <h1 className="text-5xl tracking-tight text-white animate-fade-in px-0 py-[10px] text-right mt-12 my-0 font-thin md:text-6xl">
                Find peace in the everyday.<br />Connect with God anytime, anywhere.
              </h1>
              <p 
                style={{ animationDelay: '0.2s' }} 
                className="w-1/3 ml-auto text-xl text-white mb-6 animate-fade-in px-[19px] text-right font-thin md:text-base"
              >
                The sacred space for your spiritual journey.  
                All your prayers, reflections, and spiritual insights 
                in one beautiful, private sanctuary.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto Section - Part 1 */}
        <section className="py-16 text-center relative -mx-8 px-8 bg-sacred-golden-tan" style={{ zIndex: 2 }}>
          {/* OUR PURPOSE Header */}
          <div className="text-center mb-8 mt-24">
            <p className="text-sm text-sacred-warm-gray uppercase tracking-wider text-center">OUR PURPOSE</p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-sacred-warm-gray leading-relaxed mb-8 text-left md:text-2xl">
              <span className="text-4xl md:text-5xl italic font-light">In</span> a time when every app demands our attention, when notifications steal our peace, when every spiritual moment is measured and shared, we have little space to call our own.
            </p>
            
            <p className="text-lg text-sacred-warm-gray leading-relaxed mb-8 text-left md:text-2xl">
              Our souls have been taken captive—
            </p>
            
            <p className="text-lg text-sacred-warm-gray leading-relaxed mb-12 text-left md:text-2xl">
              by endless scrolling, by comparison culture, by the pressure to perform our faith for others. Our prayers are interrupted by pings, our quiet moments hijacked by the urgent, our connection with God competing with a thousand digital voices. What should have never been lost is now yours again.  

              <span className="font-bold">We promise:</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <div>
              {noItems.map((item, index) => (
                <div key={index} className="text-left mb-4">
                  <span className="text-2xl text-black font-serif italic font-thin md:text-3xl">NO</span>
                  <span className="text-lg md:text-xl text-sacred-warm-gray ml-3">
                    {item.replace('NO ', '')}
                  </span>
                </div>
              ))}
            </div>
            
            <div>
              {yesItems.map((item, index) => (
                <div key={index} className="text-left mb-4">
                  <span className="text-2xl text-black font-serif italic font-thin md:text-3xl">YES</span>
                  <span className="text-lg md:text-xl text-sacred-warm-gray ml-3">
                    {item.replace('YES ', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width Orange Section - Moved after Manifesto */}
        <section className="relative -mx-8" style={{ zIndex: 2 }}>
          <div className="py-[135px] px-8 bg-sacred-golden-tan" style={{ minHeight: '600px' }}>
            <div className="max-w-4xl mx-auto space-y-8 my-[240px]">
              <h3 className="text-2xl text-white my-[53px] font-semibold py-[28px] text-center md:text-5xl italic">Come as you are, pray as you need...  
                ...Dwell in peace.</h3>
              
              <p className="text-lg md:text-xl text-sacred-warm-gray leading-relaxed px-[103px]">
                A place where your prayers are yours alone, where your spiritual journey isn't content for others, where God meets you without an audience. Where technology serves the timeless instead of replacing it.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section style={{ zIndex: 2 }} className="relative py-[121px]">
          <Card className="bg-sacred-custom-brown/30 border-sacred-sage-border/40 rounded-xl shadow-lg">
            <CardContent className="p-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-light mb-6 text-black tracking-tight">
                  Privacy & Trust
                </h2>
                <p className="text-xl text-sacred-warm-gray max-w-2xl mx-auto">
                  Your spiritual journey deserves the highest protection
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                {privacyPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <Card key={index} className="bg-white/90 backdrop-blur-sm border-sacred-sage-border/20 hover:bg-white/95 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-4">
                          <div className="bg-sacred-cream p-3 rounded-full border border-sacred-sage-border/30">
                            <Icon className="w-6 h-6 text-sacred-sage-green" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-sacred-sage-green mb-2">
                              {point.title}
                            </h3>
                            <p className="text-sm text-sacred-warm-gray leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-sacred-cream/40 border-sacred-sage-border/20 max-w-3xl mx-auto">
                <CardContent className="p-8 text-center py-[22px] my-0">
                  <p className="text-lg italic text-sacred-terracotta font-medium leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                    "The Lord your God is with you, the Mighty Warrior who saves. 
                    He will take great delight in you." - Zephaniah 3:17
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 px-8 relative z-10 py-[77px] my-0">
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
    </div>
  );
};

export default Landing;
