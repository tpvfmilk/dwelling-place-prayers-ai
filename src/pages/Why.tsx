
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeaderNavigation from "@/components/HeaderNavigation";

const Why = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-sacred-cream overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-5 left-8 right-8 bg-transparent backdrop-blur-none border border-transparent shadow-none z-50 transition-all duration-300 landing-header rounded-full h-16">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-5 h-full">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" alt="Dwelling Place Logo" className="w-8 h-8" />
            <button onClick={() => navigate('/landing')} className="text-xl font-semibold text-sacred-sage-green hidden sm:block">
              Dwelling Place
            </button>
          </div>
          <HeaderNavigation />
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-8 relative pt-0" style={{
        boxShadow: '-30px 0 60px rgba(0, 0, 0, 0.15), 30px 0 60px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#F8F6F3'
      }}>
        {/* Hero Section */}
        <section className="text-center py-16 relative pt-28">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-10 text-sacred-sage-green animate-fade-in">
            Why?
          </h1>
          <p className="text-xl md:text-2xl font-light text-sacred-warm-gray mb-8 animate-fade-in animation-delay-200">
            Everything we do starts with this sacred question.
          </p>
          <p className="text-lg text-sacred-warm-gray leading-relaxed animate-fade-in animation-delay-400">
            Why should Dwelling Place exist? Why should anyone seek to deepen their spiritual connection? Why is sacred space so important to us?
          </p>
        </section>

        {/* Content sections */}
        <div className="my-20 animate-fade-in animation-delay-600">
          <div className="text-lg text-sacred-warm-gray leading-relaxed">
            <p>Eventually, the "why" led us to this sacred calling.</p>
          </div>
        </div>

        <section className="bg-gradient-to-br from-white/70 to-sacred-terracotta/20 rounded-3xl p-16 my-20 text-center relative overflow-hidden border border-sacred-sage-border/20 animate-fade-in animation-delay-800">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-sacred-sage-light to-sacred-golden-tan animate-[spin_40s_linear_infinite]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-sacred-sage-green line-height-tight mb-10">
              Because why not create something sacred?
            </h2>
            <div className="text-lg text-sacred-warm-gray leading-relaxed space-y-6">
              <p className="text-left">We've always approached spiritual technology this way. We look at our current prayer tools and ask ourselves why it's done the way it is. Why do prayer apps have social feeds? Why do we use categories and folders for our deepest conversations with God? Are these patterns serving our spiritual growth or just creating digital noise?</p>
              <p className="text-left">With Dwelling Place we ultimately asked ourselves, why not? Why not find a different way to nurture our relationship with the divine? Why not remove all the distractions that get in the way of true connection? Forget how it's usually done. Why not make it sacred?</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-8 border-sacred-sage-green text-sacred-sage-green hover:bg-sacred-sage-green hover:text-white transition-colors"
            >
              More on Our Sacred Mission
            </Button>
          </div>
        </section>

        <div className="my-20 animate-fade-in animation-delay-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-sacred-sage-green mb-6">
              Because we need better relationships with our spiritual tools.
            </h2>
          </div>
          <div className="text-lg text-sacred-warm-gray leading-relaxed space-y-6">
            <p className="text-left">There was a time when our spiritual tools were just tools. We picked up a prayer book to commune with God, then closed it when we were finished. It was a tool made for one sacred purpose. It had no ulterior motives.</p>
            <p>Fast forward to today, and our digital tools have evolved. They've become smarter, with algorithms, feeds, notifications. They are designed to make us spend as much time with them as possible. We must feed them, manage them, engage with them. Our tools no longer serve our spiritual purpose. We serve theirs.</p>
            <div className="text-xl italic text-sacred-sage-green my-8 pl-8 border-l-4 border-sacred-sage-border/30">
              Could we not use the gift of technology to build something better? Something that truly nurtures our souls, rather than distracting from them. Something designed to foster a sacred relationship with the divine once again. Something that serves a simple, holy purpose.
            </div>
            <p>We decided we could.</p>
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="border-sacred-sage-green text-sacred-sage-green hover:bg-sacred-sage-green hover:text-white transition-colors"
              >
                How We Make Sacred Decisions
              </Button>
            </div>
          </div>
        </div>

        <div className="my-20 animate-fade-in animation-delay-1200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-sacred-sage-green mb-6">
              Because new spiritual beginnings are beautiful.
            </h2>
          </div>
          <div className="text-lg text-sacred-warm-gray leading-relaxed space-y-6">
            <p>There's a reason we encourage fresh starts in your spiritual journey. We like the idea of beginning anew. Not only because faith revolves around rebirth and renewal, but this also requires you to reevaluate your relationship with the sacred. It inspires you to be more conscious, more intentional, more mindful of your prayers and reflections.</p>
            <p>Digital spiritual clutter affects our real minds and hearts, whether we're aware of it or not. We want your dwelling place to be a break from that. It's a clean sanctuary where you can deliberately choose what to save and reflect upon. A spiritual sigh of relief.</p>
          </div>
        </div>

        <section className="bg-gradient-to-br from-white/70 to-sacred-terracotta/20 rounded-3xl p-16 my-20 text-center relative overflow-hidden border border-sacred-sage-border/20 animate-fade-in animation-delay-1400">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-sacred-sage-light to-sacred-golden-tan animate-[spin_40s_linear_infinite]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-sacred-sage-green line-height-tight mb-10">
              Because a spiritual tool is just the means to communion, not the communion itself.
            </h2>
            <div className="text-lg text-sacred-warm-gray leading-relaxed space-y-6">
              <p>We built Dwelling Place for seekers and believers. For people who are busy living their faith and simply need a sacred space to connect with God and remember what matters most.</p>
              <p>Dwelling Place doesn't interfere, doesn't overwhelm, and doesn't ask to be maintained. It's meant to serve you, as an extension of your spiritual life. So you can focus on prayer, reflection, and growth—not the tool itself.</p>
              <p>Because that's all it is: A tool meant to help you achieve something greater. Those who like to organize and categorize their faith will find plenty of other apps to keep them busy. Dwelling Place is for those who would rather pray and reflect and serve and love and worship.</p>
            </div>
          </div>
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
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          
          .animation-delay-800 {
            animation-delay: 0.8s;
          }
          
          .animation-delay-1000 {
            animation-delay: 1.0s;
          }
          
          .animation-delay-1200 {
            animation-delay: 1.2s;
          }
          
          .animation-delay-1400 {
            animation-delay: 1.4s;
          }
        `}
      </style>
    </div>
  );
};

export default Why;
