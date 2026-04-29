import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.42.42 PM.jpeg", category: "Training", span: "md:col-span-2 md:row-span-2" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.42.56 PM.jpeg", category: "Events", span: "md:col-span-2" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.52.33 PM.jpeg", category: "Training", span: "" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.52.58 PM.jpeg", category: "Graduation", span: "" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.53.14 PM.jpeg", category: "Events", span: "md:col-span-2" },
];

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const next = (e: any) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % items.length);
  };

  const prev = (e: any) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + items.length) % items.length);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal="up">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Inside the Institute</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Glimpses from <span>Our Cohorts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {items.map((it, i) => (
            <div 
              key={i} 
              data-reveal="scale"
              className={`group relative rounded-xl overflow-hidden border border-border cursor-zoom-in transition-all duration-500 stagger-${(i % 5) + 1} ${it.span}`}
              onClick={() => setSelectedIdx(i)}
            >
              <img 
                src={it.src} 
                alt="Institute photo" 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-6 py-2 rounded bg-white text-[10px] uppercase tracking-widest text-primary font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Detail
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-primary/95 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-auto cursor-zoom-out"
          onClick={() => setSelectedIdx(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:scale-110 transition-all z-10 p-2 rounded-full bg-white/10">
            <X className="w-8 h-8" />
          </button>
          
          <button onClick={prev} className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-all z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            <img 
              src={items[selectedIdx].src} 
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-500" 
              alt="Expanded Gallery Photo"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button onClick={next} className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-all z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded bg-white text-xs text-primary font-bold">
            {selectedIdx + 1} / {items.length} — {items[selectedIdx].category}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
