import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scriptRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(scriptRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
        delay: 1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white overflow-hidden"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Villa Pool" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="block text-brand-cyan text-sm font-bold uppercase tracking-[0.4em] mb-8 animate-pulse">
          LEASEHOLD
        </span>
        
        <h2 className="text-3xl md:text-5xl font-medium mb-4 leading-tight">
          LUXURY LIVING WITH STRONG<br />INVESTMENT POTENTIAL IN
        </h2>
        
        <h1 
          ref={scriptRef}
          className="text-8xl md:text-[10rem] font-accent text-brand-cyan leading-none mb-12"
        >
          Canggu
        </h1>

        <div ref={titleRef} className="pt-8 border-t border-white/20">
          <p className="text-lg md:text-xl font-bold uppercase tracking-[0.25em]">
            DESIGNED FOR FAMILIES <span className="text-brand-cyan">|</span> BUILT FOR RETURNS
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-cyan -translate-y-full animate-[scroll-line_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
