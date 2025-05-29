import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InteractiveSolarBackground from "@/components/InteractiveSolarBackground";

const How = () => {
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
      {/* Interactive Solar Background */}
      <InteractiveSolarBackground />

      {/* Header */}
      <header className="fixed top-5 left-5 right-5 bg-transparent backdrop-blur-none border border-transparent rounded-2xl shadow-none z-50 p-4 transition-all duration-300 how-header">
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
            <li><button onClick={() => navigate('/why')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Why</button></li>
            <li><span className="text-sacred-sage-green font-medium">How</span></li>
            <li><button onClick={() => navigate('/landing#features')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Features</button></li>
            <li><button onClick={() => navigate('/welcome')} className="text-sacred-warm-gray hover:text-sacred-sage-green transition-colors">Begin</button></li>
          </ul>
        </nav>
      </header>

      <main className="pt-28 max-w-4xl mx-auto px-8 pb-20">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-10 text-sacred-sage-green animate-fade-in">
            How?
          </h1>
          <p className="text-xl md:text-2xl font-light text-sacred-warm-gray mb-8 animate-fade-in animation-delay-200 italic">
            There's a lot of grace and divine guidance, but let's keep it simple for now...
          </p>
          <p className="text-lg md:text-xl font-light text-sacred-warm-gray mb-6 animate-fade-in animation-delay-400">
            Every time you find something sacred you want to remember, you simply save it to your dwelling place.
          </p>
          <p className="text-lg text-sacred-warm-gray leading-relaxed animate-fade-in animation-delay-600">
            Yes! No need to waste time categorizing or organizing. Your spiritual companion understands and remembers what matters to your heart.
          </p>
        </section>

        {/* Subtitle */}
        <div className="text-center my-16 animate-fade-in animation-delay-800">
          <p className="text-lg text-sacred-warm-gray font-medium">
            Made for seekers, believers, contemplatives & sacred hearts of all kinds.
          </p>
        </div>

        {/* Use cases grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-1000">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                Your prayer journal & spiritual reflections
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Believers use Dwelling Place to capture prayers, save meaningful scriptures, and create sacred spaces for reflection and communion with God.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why believers love it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Capture prayers and divine moments instantly
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Search by feeling, scripture, or spiritual theme
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Save and recall meaningful verses
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Beautiful focused writing for contemplation
              </li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-1200">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                Contemplative practice & meditation
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Contemplatives use Dwelling Place for lectio divina, meditation notes, and capturing insights from their spiritual practice and silent prayer.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why contemplatives love it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Distraction-free space for meditation notes
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Record divine inspirations and insights
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Track spiritual growth patterns
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Save quotes and spiritual reading highlights
              </li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-1400">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                Scripture study & biblical reflection
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Students of scripture use Dwelling Place to collect biblical insights, save commentary notes, and track their journey through God's word.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why bible students love it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Quick capture of biblical insights
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Save commentary and study resources
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Cross-reference spiritual connections
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Track spiritual questions and revelations
              </li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-1600">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                Spiritual direction & pastoral care
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Spiritual directors use Dwelling Place to prepare for sessions, track directees' growth, and collect wisdom for guiding others on their spiritual path.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why spiritual directors love it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Collect wisdom and resources for guidance
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Track spiritual patterns and growth
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Save meaningful quotes and teachings
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Prepare thoughtfully for sacred conversations
              </li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-1800">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                Seekers & spiritual exploration
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Those exploring faith use Dwelling Place to collect spiritual questions, save inspiring content, and track their journey of discovery and growth.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why seekers love it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Explore spiritual questions safely
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Save inspiring spiritual content
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Track spiritual growth and insights
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Find unexpected spiritual connections
              </li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:shadow-xl border border-sacred-sage-border/20 animate-fade-in animation-delay-2000">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-sacred-sage-green leading-tight">
                A sanctuary for your soul
              </h3>
              <p className="text-sacred-warm-gray leading-relaxed mb-6">
                Use it for your gratitude lists. Your spiritual insights. Your sacred dreams. Your prayer requests. Your faith journey. There are no rules. It's your dwelling place, and you can use it as your heart leads.
              </p>
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-sacred-warm-gray mb-5">
              Why everyone loves it
            </div>
            <ul className="space-y-2 list-none">
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Every spiritual journey is unique and sacred
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Simple design adapts to your spiritual needs
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Technology stays out of your sacred way
              </li>
              <li className="text-sacred-warm-gray text-sm relative pl-4">
                <span className="absolute left-0 text-sacred-sage-green">→</span>
                Focus on God, not on managing software
              </li>
            </ul>
          </div>
        </section>

        {/* Design principles section */}
        <section className="my-24 text-center animate-fade-in animation-delay-2200">
          <div className="max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-sacred-sage-green tracking-tight">
              Our 3 sacred principles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="text-center animate-fade-in animation-delay-2400">
              <h3 className="text-2xl font-medium mb-5 text-sacred-sage-green">Sacred is functional.</h3>
              <p className="text-sacred-warm-gray leading-relaxed">
                If we strive to make it sacred, we automatically make it useful. Design that honors the divine serves the soul. Our spirits are beautifully complex. Instead of interfering, we embrace this sacred mystery.
              </p>
            </div>
            
            <div className="text-center animate-fade-in animation-delay-2600">
              <h3 className="text-2xl font-medium mb-5 text-sacred-sage-green">Make it invisible.</h3>
              <p className="text-sacred-warm-gray leading-relaxed">
                The less you think about Dwelling Place, the better. We believe in clutter-free spiritual experiences without distractions. Your sacred space should be a place of rest, prayer, and divine inspiration.
              </p>
            </div>
            
            <div className="text-center animate-fade-in animation-delay-2800">
              <h3 className="text-2xl font-medium mb-5 text-sacred-sage-green">Less features, more grace.</h3>
              <p className="text-sacred-warm-gray leading-relaxed">
                We're not concerned with churning out features. Your spiritual companion just works. It doesn't matter how. It serves your soul's journey, not the other way around.
              </p>
            </div>
          </div>
        </section>

        {/* Final section */}
        <section className="bg-gradient-to-br from-white/70 to-sacred-terracotta/20 rounded-3xl p-16 my-20 text-center relative overflow-hidden border border-sacred-sage-border/20 animate-fade-in animation-delay-3000">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-sacred-sage-light to-sacred-golden-tan animate-[spin_40s_linear_infinite]"></div>
          </div>
          <div className="relative z-10">
            <div className="text-sm font-semibold tracking-widest uppercase text-sacred-warm-gray mb-6">
              The Grace
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-sacred-sage-green line-height-tight">
              We believe technology should serve the sacred
            </h2>
            <p className="text-lg text-sacred-warm-gray leading-relaxed mb-6">
              Every spiritual journey looks and works differently. But the gentle nature of Dwelling Place makes it adapt to your unique path with God.
            </p>
            <p className="text-lg text-sacred-warm-gray leading-relaxed">
              Your dwelling place might look different from someone else's, and that's beautifully sacred.
            </p>
          </div>
        </section>
      </main>

      <style>
        {`
          .how-header.scrolled {
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
          
          .animation-delay-1600 {
            animation-delay: 1.6s;
          }
          
          .animation-delay-1800 {
            animation-delay: 1.8s;
          }
          
          .animation-delay-2000 {
            animation-delay: 2.0s;
          }
          
          .animation-delay-2200 {
            animation-delay: 2.2s;
          }
          
          .animation-delay-2400 {
            animation-delay: 2.4s;
          }
          
          .animation-delay-2600 {
            animation-delay: 2.6s;
          }
          
          .animation-delay-2800 {
            animation-delay: 2.8s;
          }
          
          .animation-delay-3000 {
            animation-delay: 3.0s;
          }
        `}
      </style>
    </div>
  );
};

export default How;
