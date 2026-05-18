import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationGrid() {
  const locations = [
    { name: "Echo Beach", distance: "1.2 km" },
    { name: "Montessori School Bali", distance: "5.7 km" },
    { name: "The Medical Canggu", distance: "1.1 km" },
    { name: "Pepito Market", distance: "1.2 km" },
    { name: "La Brisa Bali", distance: "1.5 km" },
    { name: "Deus Ex Machina", distance: "1.2 km" },
  ];

  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand-cyan tracking-[0.3em] uppercase">Prime Location</h2>
              <h3 className="text-5xl font-bold text-brand-navy leading-tight uppercase tracking-tight">
                CLOSE TO EVERYTHING <br />THAT MATTERS
              </h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Situated in the peaceful village of Kayu Tulang, Villa Tiga offers the perfect balance 
              of serenity and accessibility. Just minutes from world-class amenities, schools, 
              and the legendary Canggu surf breaks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-xl bg-slate-50 border border-slate-100 group hover:border-brand-cyan transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">{loc.name}</p>
                    <p className="text-brand-cyan text-sm font-medium tracking-wider">{loc.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=2574&auto=format&fit=crop" 
              alt="Bali Satellite View" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-brand-navy/30 mix-blend-overlay"></div>
            
            {/* Pulsing Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan rounded-full animate-ping opacity-75"></div>
                <div className="relative w-12 h-12 bg-white rounded-full p-2.5 shadow-xl">
                  <MapPin className="w-full h-full text-brand-navy" />
                </div>
              </div>
              <div className="mt-4 bg-brand-navy/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-white/20 whitespace-nowrap">
                Villa Area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
