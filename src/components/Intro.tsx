import React from "react";
import {
  Home,
  Maximize,
  BedDouble,
  Bath,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Intro() {
  const specs = [
    { label: "Land Size", value: "780m²", icon: Maximize },
    { label: "Building Size", value: "540m²", icon: Home },
    { label: "Bedrooms", value: "4 (Ensuite)", icon: BedDouble },
    { label: "Bathrooms", value: "5 Modern", icon: Bath },
    { label: "Private Pools", value: "2 Swimming Pools", icon: CheckCircle2 },
    { label: "Security", value: "24/7 Gated", icon: ShieldCheck },
  ];

  return (
    <section id="introduction" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-cyan font-bold uppercase tracking-widest text-sm block">
                Welcome to Villa Tiga
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight uppercase tracking-tight">
                TOP-SHELF 4-BEDROOM FAMILY VILLA WITH SCENIC VIEWS
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg italic">
              "A Smart Investment in the Peaceful Village Of Kayu Tulang"
            </p>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Located in one of Bali's most desirable neighborhoods, this
                beautifully designed 4-bedroom villa in Canggu blends luxury,
                lifestyle, and investment appeal. Whether you're searching for a
                home to share unforgettable family moments or a profitable
                addition to your property portfolio, this villa ticks every box.
              </p>
              <p>
                Built to **European Standards**, the villa boasts luxurious
                finishes, ample storage, and stunning views of Uluwatu. With 4
                ensuite bedrooms and a 'Foodie's' kitchen, it's a perfect family
                home or high-yield rental investment in a rapidly developing
                area.
              </p>
            </div>

            <div className="pt-6">
              <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    Indicative Price
                  </p>
                  <p className="text-3xl font-bold text-brand-cyan">
                    IDR 24,500,000,000
                  </p>
                </div>
                <div className="h-px md:h-12 w-full md:w-px bg-white/20"></div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    Tenure
                  </p>
                  <p className="text-xl font-medium">30 Years + Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Spec Grid */}
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
              >
                <spec.icon
                  className="w-8 h-8 text-brand-cyan"
                  strokeWidth={1.5}
                />
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold text-brand-navy">
                    {spec.value}
                  </p>
                </div>
              </div>
            ))}
            <div className="col-span-2 relative h-64 mt-4 overflow-hidden rounded-xl">
              <img src="/tria-1.jpg" />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
