import butterfly from "@/assets/butterfly-cocoon.png";

const stages = [
  { title: "The Cocoon", desc: "Every aspiring teacher begins with curiosity, doubt and dreams — held in a space designed for growth." },
  { title: "The Becoming", desc: "Through theory, observation and supervised practice, the Montessori educator quietly takes shape." },
  { title: "The Flight", desc: "Trainees emerge as confident, certified educators — ready to transform classrooms with grace." },
];

const BrandStory = () => {
  return (
    <section id="story" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/30 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl animate-shimmer" />
            <img src={butterfly} alt="Butterfly emerging from cocoon" className="relative w-full h-full object-contain animate-float" width={1024} height={1024} loading="lazy" />
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Our Signature Story</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] text-balance">
            From Cocoon
            <span className="block gold-text">to Confidence</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            The cocoon is not a cage — it is a quiet promise. At Mrs Reena's Cocoon, we believe great
            educators are not born; they are gently shaped, mentored and set free to fly.
          </p>

          <div className="mt-10 space-y-6">
            {stages.map((s, i) => (
              <div key={s.title} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-grad flex items-center justify-center text-gold-soft font-serif shadow-purple group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  {i < stages.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-gold/60 to-transparent mt-2" />}
                </div>
                <div className="pb-6">
                  <h4 className="font-serif text-xl text-primary">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
