
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-sacred-cream overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed top-0 left-0 w-full h-full opacity-80 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-sacred-cream via-white to-sacred-terracotta/20 animate-gentle-pulse"></div>
      </div>

      {/* Floating decorative elements with sacred geometry */}
      <div className="fixed top-[15%] left-[8%] opacity-[0.08] animate-[float_25s_ease-in-out_infinite] -z-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>
      <div className="fixed top-[40%] right-[12%] opacity-[0.08] animate-[float_25s_ease-in-out_infinite_8s] -z-10">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>
      <div className="fixed bottom-[25%] left-[15%] opacity-[0.08] animate-[float_25s_ease-in-out_infinite_16s] -z-10">
        <svg width="70" height="70" viewBox="0 0 70 70">
          <polygon points="35,10 60,55 10,55" fill="none" stroke="#7A8B5C" strokeWidth="1"/>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-5 left-5 right-5 bg-transparent backdrop-blur-none border border-transparent rounded-2xl shadow-none z-50 p-4 transition-all duration-300 why-header">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ef3ce29a-120f-4b0c-8e59-384f0f3de52d.png" 
              alt="Dwelling Place Logo" 
              className="w-8 h-8"
            />
            <button 
              onClick={() => navigate('/landing')}
              className="text-2xl font-semibold text-sacred-sage-green hover:text-sacred-warm-gray transition-colors cursor-pointer"
            >
              Dwelling Place
            </button>
          </div>
          <ul className="hidden md:flex gap-8 list-none">
            <li><button onClick={() => navigate('/landing')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Home</button></li>
            <li><span className="text-sacred-sage-green font-medium">Why</span></li>
            <li><button onClick={() => navigate('/landing#features')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Features</button></li>
            <li><button onClick={() => navigate('/welcome')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Begin</button></li>
          </ul>
        </nav>
      </header>

      <main className="pt-28 max-w-4xl mx-auto px-8 pb-20">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
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
              <p>We've always approached spiritual technology this way. We look at our current prayer tools and ask ourselves why it's done the way it is. Why do prayer apps have social feeds? Why do we use categories and folders for our deepest conversations with God? Are these patterns serving our spiritual growth or just creating digital noise?</p>
              <p>With Dwelling Place we ultimately asked ourselves, why not? Why not find a different way to nurture our relationship with the divine? Why not remove all the distractions that get in the way of true connection? Forget how it's usually done. Why not make it sacred?</p>
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase text-sacred-warm-gray mt-8">
              More on Our Sacred Mission
            </div>
          </div>
        </section>

        <div className="my-20 animate-fade-in animation-delay-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-sacred-sage-green mb-6">
              Because we need better relationships with our spiritual tools.
            </h2>
          </div>
          <div className="text-lg text-sacred-warm-gray leading-relaxed space-y-6">
            <p>There was a time when our spiritual tools were just tools. We picked up a prayer book to commune with God, then closed it when we were finished. It was a tool made for one sacred purpose. It had no ulterior motives.</p>
            <p>Fast forward to today, and our digital tools have evolved. They've become smarter, with algorithms, feeds, notifications. They are designed to make us spend as much time with them as possible. We must feed them, manage them, engage with them. Our tools no longer serve our spiritual purpose. We serve theirs.</p>
            <div className="text-xl italic text-sacred-sage-green my-8 pl-8 border-l-4 border-sacred-sage-border/30">
              Could we not use the gift of technology to build something better? Something that truly nurtures our souls, rather than distracting from them. Something designed to foster a sacred relationship with the divine once again. Something that serves a simple, holy purpose.
            </div>
            <p>We decided we could.</p>
            <div className="text-sm font-semibold tracking-widest uppercase text-sacred-warm-gray mt-8">
              How We Make Sacred Decisions
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

      <style>
        {`
          .why-header.scrolled {
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
