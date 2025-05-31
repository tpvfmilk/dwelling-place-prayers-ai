import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const navigate = useNavigate();
  const totalSteps = 8;

  const stepTexts = [
    "Begin my journey",
    "I love this",
    "Show me more", 
    "Got it",
    "Okay cool!",
    "Let's explore",
    "Choose plan",
    "Enter sanctuary"
  ];

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to home or welcome page on final step
      navigate('/home');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < totalSteps) {
      setCurrentStep(stepIndex);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevStep();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  return (
    <div className="onboarding-container">
      <style>{`
        .onboarding-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f6f3 0%, #e3f2fd 100%);
        }

        .step {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(30px);
          z-index: 1;
        }

        .step.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .step-welcome {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        }

        .step-welcome h1 {
          font-size: 3.5rem;
          font-weight: 300;
          color: #1565c0;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .welcome-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          margin: 2rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(25, 118, 210, 0.2);
        }

        .welcome-circle::before {
          content: '🕊️';
          font-size: 4rem;
        }

        .step-privacy {
          background: linear-gradient(135deg, #e8f5e8 0%, #e3f2fd 100%);
        }

        .step-privacy .logo {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1976d2;
        }

        .step-privacy h2 {
          font-size: 1.5rem;
          color: #1976d2;
          margin-bottom: 1rem;
        }

        .step-privacy .subtitle {
          font-size: 1.8rem;
          color: #1565c0;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .privacy-list {
          list-style: none;
          max-width: 400px;
          margin: 0 auto;
        }

        .privacy-list li {
          font-size: 1.3rem;
          margin: 0.8rem 0;
          color: #1565c0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .privacy-list .no {
          color: #c62828;
          font-weight: 600;
          margin-right: 0.5rem;
        }

        .step-showcase {
          background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
          overflow: hidden;
        }

        .showcase-text h2 {
          font-size: 2.5rem;
          color: #0277bd;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .showcase-text p {
          font-size: 1.2rem;
          color: #01579b;
        }

        .prayer-cards-container {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          margin-top: 3rem;
        }

        .prayer-card {
          position: absolute;
          width: 280px;
          height: 160px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(3, 169, 244, 0.2);
          animation: float-across 20s linear infinite;
          border: 2px solid rgba(100, 181, 246, 0.3);
        }

        .prayer-card h3 {
          font-size: 1rem;
          color: #1976d2;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .prayer-card p {
          font-size: 0.9rem;
          color: #0277bd;
          line-height: 1.4;
        }

        .prayer-card:nth-child(1) {
          top: 20px;
          animation-delay: 0s;
        }

        .prayer-card:nth-child(2) {
          top: 100px;
          animation-delay: -7s;
        }

        .prayer-card:nth-child(3) {
          top: 60px;
          animation-delay: -14s;
        }

        @keyframes float-across {
          0% { left: -300px; }
          100% { left: 100vw; }
        }

        .step-journal {
          background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
        }

        .step-journal h2 {
          font-size: 2.5rem;
          color: #303f9f;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .step-journal p {
          font-size: 1.2rem;
          color: #3f51b5;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .journal-preview {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(63, 81, 181, 0.2);
          border: 2px solid rgba(197, 202, 233, 0.5);
        }

        .journal-preview h3 {
          color: #303f9f;
          margin-bottom: 1rem;
        }

        .journal-preview p {
          color: #3f51b5;
          margin: 0;
        }

        .step-types {
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
        }

        .step-types h2 {
          font-size: 2.5rem;
          color: #6a1b9a;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .card-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .card-type {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(106, 27, 154, 0.15);
          transition: transform 0.3s ease;
          border: 2px solid rgba(225, 190, 231, 0.5);
        }

        .card-type:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(106, 27, 154, 0.25);
        }

        .card-type .icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .card-type h3 {
          color: #6a1b9a;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .card-type p {
          font-size: 0.9rem;
          color: #8e24aa;
        }

        .step-search {
          background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
        }

        .step-search h2 {
          font-size: 2.5rem;
          color: #00695c;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .step-search p {
          font-size: 1.2rem;
          color: #00796b;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .search-demo {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 121, 107, 0.2);
          border: 2px solid rgba(178, 223, 219, 0.5);
        }

        .search-bar {
          background: #f7fafc;
          border: 2px solid #00acc1;
          border-radius: 10px;
          padding: 1rem;
          font-size: 1rem;
          width: 100%;
          margin-bottom: 1rem;
          color: #00695c;
        }

        .search-bar::placeholder {
          color: #00acc1;
        }

        .step-pricing {
          background: linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%);
        }

        .step-pricing h2 {
          font-size: 2.5rem;
          color: #e65100;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(230, 81, 0, 0.15);
          position: relative;
          border: 2px solid rgba(255, 204, 128, 0.5);
          transition: transform 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
        }

        .pricing-card.featured {
          transform: scale(1.05);
          border: 3px solid #e65100;
          box-shadow: 0 15px 40px rgba(230, 81, 0, 0.25);
        }

        .pricing-card h3 {
          color: #e65100;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .price {
          font-size: 2rem;
          font-weight: 600;
          color: #bf360c;
          margin-bottom: 1rem;
        }

        .features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .features li {
          margin: 0.5rem 0;
          color: #d84315;
        }

        .step-final {
          background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
        }

        .step-final h1 {
          font-size: 3rem;
          color: #2e7d32;
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.2;
        }

        .step-final p {
          font-size: 1.3rem;
          color: #388e3c;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .final-logo {
          font-size: 6rem;
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #2e7d32;
        }

        .final-logo .logo-icon {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #4caf50, #2e7d32);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .final-logo .logo-text {
          font-size: 1.5rem;
          font-weight: 300;
          color: #2e7d32;
        }

        .nav-button {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(25, 118, 210, 0.9);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .nav-button:hover {
          background: rgba(25, 118, 210, 1);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(25, 118, 210, 0.3);
        }

        .progress-indicator {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 10;
        }

        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid rgba(25, 118, 210, 0.3);
        }

        .progress-dot:hover {
          background: rgba(25, 118, 210, 0.6);
          transform: scale(1.2);
        }

        .progress-dot.active {
          background: rgba(25, 118, 210, 0.9);
          transform: scale(1.3);
          border-color: rgba(25, 118, 210, 0.8);
        }

        .keyboard-hint {
          margin-left: 1rem;
          font-size: 0.8rem;
          color: rgba(25, 118, 210, 0.8);
          background: rgba(255, 255, 255, 0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          border: 1px solid rgba(25, 118, 210, 0.3);
        }

        .sound-toggle {
          position: absolute;
          top: 2rem;
          left: 2rem;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(25, 118, 210, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: #1976d2;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sound-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(25, 118, 210, 0.5);
        }

        @media (max-width: 768px) {
          .step {
            padding: 1rem;
          }
          
          .step-welcome h1 {
            font-size: 2.5rem;
          }
          
          .pricing-grid,
          .card-types-grid {
            grid-template-columns: 1fr;
          }
          
          .prayer-card {
            width: 240px;
            height: 140px;
          }

          .nav-button,
          .progress-indicator,
          .sound-toggle {
            position: fixed;
          }
        }
      `}</style>

      <button className="sound-toggle" onClick={toggleSound}>
        {soundEnabled ? '🔊' : '🔇'} Sound
      </button>

      {/* Step 1: Welcome */}
      <div className={`step step-welcome ${currentStep === 0 ? 'active' : ''}`}>
        <h1>
          <span>Welcome to</span><br />
          <span>your new</span><br />
          <span>private sanctuary</span>
        </h1>
        <div className="welcome-circle"></div>
      </div>

      {/* Step 2: Privacy & Trust */}
      <div className={`step step-privacy ${currentStep === 1 ? 'active' : ''}`}>
        <div className="logo">🏠 Dwelling Place</div>
        <h2>Rest in Peace</h2>
        <p className="subtitle">Your sanctuary is<br/>completely private:</p>
        
        <ul className="privacy-list">
          <li><span className="no">No</span> ads or distractions</li>
          <li><span className="no">No</span> social pressure</li>
          <li><span className="no">No</span> invasive tracking</li>
          <li><span className="no">No</span> judgment</li>
          <li><span className="no">No</span> guilt or shame</li>
          <li><span className="no">No</span> spiritual performance</li>
        </ul>
      </div>

      {/* Step 3: Prayer Cards Showcase */}
      <div className={`step step-showcase ${currentStep === 2 ? 'active' : ''}`}>
        <div className="showcase-text">
          <h2>Imagine all your prayers...</h2>
          <p>...in one beautiful, sacred space.</p>
        </div>
        
        <div className="prayer-cards-container">
          <div className="prayer-card">
            <h3>Morning Blessing</h3>
            <p>"Lord, as this new day begins, fill my heart with gratitude and my steps with purpose..."</p>
          </div>
          <div className="prayer-card">
            <h3>Comfort Prayer</h3>
            <p>"Heavenly Father, in this moment of anxiety, remind me that You are my refuge and strength..."</p>
          </div>
          <div className="prayer-card">
            <h3>Gratitude Reflection</h3>
            <p>"Thank You, God, for the gift of this day, for Your constant love, and for the hope You give..."</p>
          </div>
        </div>
      </div>

      {/* Step 4: Journal Explanation */}
      <div className={`step step-journal ${currentStep === 3 ? 'active' : ''}`}>
        <h2>One prayer and<br/>it's in your heart.</h2>
        
        <p>Share what's on your heart through voice or text. Receive personalized prayers that speak to your soul. Save and revisit the ones that bring you peace.</p>
        
        <p>Don't overthink it. If you need prayer, just ask. God sees your heart.</p>
        
        <div className="journal-preview">
          <h3>📱 Mobile App</h3>
          <p>Carry your sanctuary wherever you go</p>
        </div>
      </div>

      {/* Step 5: Card Types */}
      <div className={`step step-types ${currentStep === 4 ? 'active' : ''}`}>
        <h2>Every prayer has its place.<br/>All organized for you.</h2>
        
        <div className="card-types-grid">
          <div className="card-type">
            <div className="icon">🙏</div>
            <h3>Personal Prayers</h3>
            <p>AI-generated prayers for your specific needs</p>
          </div>
          <div className="card-type">
            <div className="icon">📖</div>
            <h3>Scripture</h3>
            <p>Bible verses for comfort and guidance</p>
          </div>
          <div className="card-type">
            <div className="icon">💭</div>
            <h3>Reflections</h3>
            <p>Your personal thoughts and God's responses</p>
          </div>
          <div className="card-type">
            <div className="icon">🌅</div>
            <h3>Daily Blessings</h3>
            <p>Morning inspiration to start your day</p>
          </div>
          <div className="card-type">
            <div className="icon">📝</div>
            <h3>Notes</h3>
            <p>Capture spiritual insights and moments</p>
          </div>
        </div>
      </div>

      {/* Step 6: Search */}
      <div className={`step step-search ${currentStep === 5 ? 'active' : ''}`}>
        <h2>To find peace later,<br/>just search for it.</h2>
        
        <p>Search by topic, emotion, scripture, or date – whatever comes to mind first. Your spiritual journey is organized and always accessible.</p>
        
        <div className="search-demo">
          <input type="text" className="search-bar" placeholder="Search for comfort, anxiety, gratitude..." readOnly />
          <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#00796b' }}>
            Recent: comfort prayers • morning blessings • Psalm 23
          </div>
        </div>
      </div>

      {/* Step 7: Pricing */}
      <div className={`step step-pricing ${currentStep === 6 ? 'active' : ''}`}>
        <h2>Choose your spiritual journey</h2>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0/month</div>
            <ul className="features">
              <li>3 prayers per week</li>
              <li>Basic prayer journal</li>
              <li>Daily blessings</li>
              <li>One voice option</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3>Student</h3>
            <div className="price">$5.99/month</div>
            <ul className="features">
              <li>15 prayers per week</li>
              <li>Extended journal</li>
              <li>Multiple voices</li>
              <li>Scripture integration</li>
            </ul>
          </div>
          
          <div className="pricing-card featured">
            <h3>Premium</h3>
            <div className="price">$12.99/month</div>
            <ul className="features">
              <li>Unlimited prayers</li>
              <li>Prayer circles</li>
              <li>Advanced journaling</li>
              <li>Priority support</li>
              <li>Early access features</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 8: Final Welcome */}
      <div className={`step step-final ${currentStep === 7 ? 'active' : ''}`}>
        <h1>Welcome to the Dwelling Place,<br/>the garden of your heart.</h1>
        <div className="final-logo">
          <div className="logo-icon">🏠</div>
          <div className="logo-text">Dwelling Place</div>
        </div>
        <p>Your personal sanctuary for prayer and God's presence is ready. Begin your journey of faith, one prayer at a time.</p>
      </div>

      {/* Navigation */}
      {currentStep < totalSteps - 1 && (
        <button className="nav-button" onClick={nextStep}>
          <span>{stepTexts[currentStep]}</span>
          <span>→</span>
        </button>
      )}

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`progress-dot ${currentStep === i ? 'active' : ''}`}
            onClick={() => goToStep(i)}
          />
        ))}
        
        <div className="keyboard-hint">
          <span>← →</span>
          <span>Use arrow keys</span>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
