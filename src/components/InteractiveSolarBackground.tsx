
import { useEffect, useRef } from 'react';

const InteractiveSolarBackground = () => {
  const mouseLightRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isMouseActiveRef = useRef(false);

  useEffect(() => {
    const mouseLight = mouseLightRef.current;
    if (!mouseLight) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isMouseActiveRef.current) {
        isMouseActiveRef.current = true;
        mouseLight.style.opacity = '1';
      }
      
      mouseLight.style.left = e.clientX + 'px';
      mouseLight.style.top = e.clientY + 'px';
    };

    const handleMouseLeave = () => {
      isMouseActiveRef.current = false;
      if (mouseLight) {
        mouseLight.style.opacity = '0';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'fixed w-5 h-5 rounded-full pointer-events-none z-[1000] animate-[solarRipple_2s_ease-out_forwards]';
      ripple.style.cssText = `
        background: radial-gradient(circle, rgba(212, 165, 116, 0.6), rgba(122, 139, 92, 0.3));
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
      `;
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 2000);
    };

    const adjustRayIntensity = () => {
      const hour = new Date().getHours();
      const rays = document.querySelectorAll('.solar-ray');
      let intensity = 0.4;
      
      if (hour >= 6 && hour <= 18) {
        intensity = 0.6;
      } else if (hour >= 19 && hour <= 22) {
        intensity = 0.3;
      } else {
        intensity = 0.2;
      }
      
      rays.forEach((ray) => {
        (ray as HTMLElement).style.opacity = intensity.toString();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);
    
    adjustRayIntensity();
    const intervalId = setInterval(adjustRayIntensity, 60000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      clearInterval(intervalId);
    };
  }, []);

  const rays = Array.from({ length: 12 }, (_, i) => i);
  const particles = Array.from({ length: 5 }, (_, i) => i);

  return (
    <>
      {/* Solar Flare Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-80">
        <div 
          className="w-full h-full animate-gentle-pulse"
          style={{
            background: `radial-gradient(
              ellipse at 30% 20%, 
              rgba(212, 165, 116, 0.3) 0%,
              rgba(193, 150, 96, 0.2) 15%,
              rgba(122, 139, 92, 0.15) 35%,
              rgba(74, 93, 35, 0.1) 55%,
              rgba(85, 107, 91, 0.08) 75%,
              rgba(248, 246, 243, 0.95) 100%
            )`
          }}
        />
      </div>

      {/* Animated Solar Rays */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
        {rays.map((i) => (
          <div
            key={i}
            className="solar-ray absolute w-0.5 h-screen"
            style={{
              background: `linear-gradient(
                to bottom,
                transparent 0%,
                rgba(212, 165, 116, 0.3) 20%,
                rgba(122, 139, 92, 0.2) 50%,
                transparent 100%
              )`,
              transformOrigin: '50% 20%',
              transform: `rotate(${i * 15}deg)`,
              animation: `rotateRays 60s linear infinite`,
              animationDelay: `${-i * 5}s`
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((i) => {
        const particleStyles = [
          { size: 'w-2 h-2', bg: 'rgba(122, 139, 92, 0.4)', position: 'top-[15%] left-[10%]', delay: '0s', duration: '25s' },
          { size: 'w-3 h-3', bg: 'rgba(212, 165, 116, 0.3)', position: 'top-[30%] right-[20%]', delay: '-8s', duration: '30s' },
          { size: 'w-1.5 h-1.5', bg: 'rgba(74, 93, 35, 0.5)', position: 'bottom-[25%] left-[25%]', delay: '-15s', duration: '22s' },
          { size: 'w-2.5 h-2.5', bg: 'rgba(193, 150, 96, 0.4)', position: 'top-[60%] right-[15%]', delay: '-20s', duration: '28s' },
          { size: 'w-3.5 h-3.5', bg: 'rgba(85, 107, 91, 0.3)', position: 'bottom-[40%] left-[60%]', delay: '-12s', duration: '35s' }
        ];

        const style = particleStyles[i];
        return (
          <div
            key={i}
            className={`absolute rounded-full opacity-60 ${style.size} ${style.position}`}
            style={{
              backgroundColor: style.bg,
              animation: `floatParticle ${style.duration} ease-in-out infinite`,
              animationDelay: style.delay
            }}
          />
        );
      })}

      {/* Texture Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #7A8B5C 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #D4A574 1px, transparent 1px),
            radial-gradient(circle at 50% 10%, #4A5D23 1.5px, transparent 1.5px)
          `,
          backgroundSize: '120px 120px, 80px 80px, 160px 160px',
          animation: 'textureShift 120s linear infinite'
        }}
      />

      {/* Mouse Light Effect */}
      <div
        ref={mouseLightRef}
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            circle,
            rgba(212, 165, 116, 0.15) 0%,
            rgba(122, 139, 92, 0.1) 40%,
            transparent 70%
          )`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <style>{`
        @keyframes rotateRays {
          0% { transform: rotate(var(--start-rotation, 0deg)) scaleY(0.8); opacity: 0.2; }
          50% { transform: rotate(calc(var(--start-rotation, 0deg) + 180deg)) scaleY(1.2); opacity: 0.6; }
          100% { transform: rotate(calc(var(--start-rotation, 0deg) + 360deg)) scaleY(0.8); opacity: 0.2; }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-40px) translateX(20px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(-15px) scale(0.9);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-35px) translateX(25px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes textureShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes solarRipple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(15);
            opacity: 0.6;
          }
          100% {
            transform: scale(30);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .solar-ray {
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </>
  );
};

export default InteractiveSolarBackground;
