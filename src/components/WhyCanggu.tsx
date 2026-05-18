import React from 'react';
import { ShoppingBag, Palmtree, Flower2, TrendingUp } from 'lucide-react';

export default function WhyCanggu() {
  const reasons = [
    {
      icon: ShoppingBag,
      text: "Canggu offers a premium lifestyle, with everything from boutique shopping and global cuisine to fitness centers and family-friendly cafés—all within walking distance."
    },
    {
      icon: Palmtree,
      text: "Petitenget and Double Six beaches are famous for vibrant beach clubs, stunning sunsets, and surf-ready waves—ideal for both families and vacationers."
    },
    {
      icon: Flower2,
      text: "With numerous yoga studios, spas, international schools, and a welcoming expat scene, Canggu is perfect for long-term family living or holiday retreats."
    },
    {
      icon: TrendingUp,
      text: "With high tourist demand and limited villa inventory in central Canggu, this area promises strong rental yields and long-term value appreciation."
    }
  ];

  return (
    <section id="roi" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-brand-cyan tracking-[0.4em] uppercase">The Neighborhood</h2>
          <div className="flex items-center justify-center gap-6">
            <h3 className="text-5xl font-bold text-brand-navy">WHY </h3>
            <span className="text-7xl font-accent text-brand-cyan">Canggu?</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl border border-slate-200 group hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-8 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-colors">
                <reason.icon className="w-8 h-8 text-brand-cyan" strokeWidth={1} />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
