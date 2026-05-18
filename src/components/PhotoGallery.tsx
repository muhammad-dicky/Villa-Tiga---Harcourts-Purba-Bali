import React from "react";

const images = [
  {
    url: "/tria-pool.jpg",
    title: "The Main Pool",
    span: "col-span-2 row-span-2",
  },
  {
    url: "/tria-kitchen.jpg",
    title: "European Kitchen",
    span: "col-span-1 row-span-1",
  },
  {
    url: "/tria-master.jpg",
    title: "Master Ensuite",
    span: "col-span-1 row-span-1",
  },
  {
    url: "/tria-living.jpg",
    title: "Living Spaces",
    span: "col-span-2 row-span-1",
  },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-brand-cyan tracking-[0.4em] uppercase">
            Visual Journey
          </h2>
          <h3 className="text-5xl font-bold text-brand-navy uppercase tracking-tight">
            EXPERIENCE VILLA TIGA
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6 h-[800px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group rounded-2xl shadow-lg ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                  {img.title}
                </p>
                <p className="text-white text-xl font-medium">
                  Breathtaking Architecture
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
