import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const stats = [
    { label: "Countries", value: "11" },
    { label: "Offices", value: "879" },
    { label: "Sales Consultants", value: "6,670+" },
    { label: "Assets Managed", value: "$72.6B" },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold tracking-tight">
                  Harcourts
                </span>
                <span className="text-brand-cyan text-3xl font-light">
                  Purba Bali
                </span>
              </div>
              <p className="text-white/50 max-w-md leading-relaxed">
                Harcourts Purba Bali, as part of the global Harcourts network,
                takes pride in being the premier real estate agency for those
                investing in the beautiful island of Bali.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl font-bold text-brand-cyan">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              The Visionary
            </h4>
            <div className="flex items-center gap-6 group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
                <img
                  src="https://harcourtspurbabali.com/wp-content/webp-express/webp-images/uploads/2023/09/bu-siti--150x150.jpg.webp?q=80&w=2576&auto=format&fit=crop"
                  alt="Siti Salmah Purba"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold">Siti Salmah Purba, S.H.</p>
                <p className="text-white/50 text-xs mt-1">
                  Director Harcourts Purba Bali
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Contact Global
            </h4>
            <ul className="space-y-6">
              {[
                {
                  icon: MapPin,
                  text: "Jl. Pemelisan Agung No.22, Tibubeneng, Bali",
                },
                { icon: Phone, text: "+62 878 6282 2002" },
                { icon: Mail, text: "info@harcourtspurbabali.com" },
                { icon: Globe, text: "www.harcourtspurbabali.com" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <item.icon
                    className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 HARCOURTS PURBA BALI. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-8">
            <Facebook className="w-4 h-4 text-white/40 hover:text-brand-cyan cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 text-white/40 hover:text-brand-cyan cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 text-white/40 hover:text-brand-cyan cursor-pointer transition-colors" />
          </div>

          {/* <div className="flex items-center gap-2">
            <span className="text-white/40 text-[10px] uppercase tracking-widest"></span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
