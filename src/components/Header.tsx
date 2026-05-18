import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={cn("text-2xl font-bold tracking-tight", scrolled ? "text-brand-navy" : "text-white")}>
            Harcourts
          </span>
          <span className="text-brand-cyan text-2xl font-light">Purba Bali</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Introduction', 'Lifestyle', 'ROI', 'Location', 'Gallery'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest hover:text-brand-cyan transition-colors",
                scrolled ? "text-slate-600" : "text-white/80"
              )}
            >
              {item}
            </a>
          ))}
          <button className={cn(
            "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
            scrolled 
              ? "bg-brand-navy text-white hover:bg-brand-cyan" 
              : "bg-white text-brand-navy hover:bg-brand-cyan hover:text-white"
          )}>
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
}
