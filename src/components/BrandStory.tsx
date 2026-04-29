import butterfly from "@/assets/butterfly-cocoon.png";

const stages = [
  { title: "The Cocoon", desc: "Every aspiring teacher begins with curiosity, doubt and dreams — held in a space designed for growth." },
  { title: "The Becoming", desc: "Through theory, observation and supervised practice, the Montessori educator quietly takes shape." },
  { title: "The Flight", desc: "Trainees emerge as confident, certified educators — ready to transform classrooms with grace." },
];

const BrandStory = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-white">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center" data-reveal="left">
          <div className="relative w-full max-w-sm aspect-square bg-secondary rounded-2xl flex items-center justify-center p-8">
            <img src={butterfly} alt="Butterfly emerging from cocoon" className="relative w-full h-auto object-contain opacity-80" />
          </div>
        </div>

        <div data-reveal="right">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Our Signature Story</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.1] text-balance font-bold">
            From Cocoon to <span>Confidence</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            The cocoon is not a cage — it is a quiet promise. At Mrs Reena's Cocoon, we believe great
            educators are not born; they are gently shaped, mentored and set free to fly.
          </p>

          <div className="mt-12 space-y-8">
            {stages.map((s, i) => (
              <div key={s.title} className={`flex gap-6 group stagger-${i + 1}`}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-serif font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < stages.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <h4 className="font-serif text-xl text-primary font-bold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
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
