import React from 'react';

const lifestyleItems = [
  { count: "11", label: "Beach Clubs", img: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=2670&auto=format&fit=crop" },
  { count: "50", label: "Restaurants & Cafes", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2674&auto=format&fit=crop" },
  { count: "10", label: "Gyms", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" },
  { count: "30", label: "Spas", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2670&auto=format&fit=crop" },
  { count: "5", label: "Yoga Studios", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2670&auto=format&fit=crop" },
  { count: "20", label: "Retail Outlets", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop" },
  { count: "2", label: "International Schools", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop" },
  { count: "5", label: "Medical Centers", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2670&auto=format&fit=crop" },
];

export default function LifestyleGrid() {
  return (
    <section id="lifestyle" className="bg-brand-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <h3 className="text-4xl font-bold text-white uppercase tracking-tighter">YOUR</h3>
          <span className="text-6xl font-accent text-brand-cyan">Lifestyle</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {lifestyleItems.map((item, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <img 
                src={item.img} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                alt={item.label}
              />
              <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-4xl font-bold text-brand-cyan mb-1">{item.count}</p>
                <p className="text-white text-xs font-bold uppercase tracking-widest leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
