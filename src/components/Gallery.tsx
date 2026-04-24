const items = [
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.42.42 PM.jpeg", span: "md:col-span-2 md:row-span-2" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.42.56 PM.jpeg", span: "md:col-span-2" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.52.33 PM.jpeg", span: "" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.52.58 PM.jpeg", span: "" },
  { src: "/New folder/WhatsApp Image 2026-04-24 at 4.53.14 PM.jpeg", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Inside the Academy</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            Glimpses from <span className="italic gold-text">our cohorts</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {items.map((it, i) => (
            <div key={i} className={`group relative rounded-2xl overflow-hidden gold-border shadow-elegant ${it.span}`}>
              <img src={it.src} alt="Gallery Photo" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
