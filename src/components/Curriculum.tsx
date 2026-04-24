import { Brain, BookOpen, Hand, Sparkles, Users, Award } from "lucide-react";

const items = [
  { time: "Module 01", icon: Brain, title: "Montessori Philosophy", desc: "Foundations, history & the prepared mind of the educator." },
  { time: "Module 02", icon: Hand, title: "Sensorial & EPL", desc: "Mastering exercises of practical life and sensorial materials." },
  { time: "Module 03", icon: BookOpen, title: "Language & Phonics", desc: "Structured language curriculum & reading foundations." },
  { time: "Module 04", icon: Sparkles, title: "Mathematics & Culture", desc: "Concrete-to-abstract math, geography & the natural world." },
  { time: "Module 05", icon: Users, title: "Child Observation", desc: "Supervised practicum in real Montessori environments." },
  { time: "Module 06", icon: Award, title: "Certification & Placement", desc: "Final assessment, portfolio & career mentorship." },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">The Training Journey</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            A curriculum that <span className="gold-text">unfolds with intention</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <div key={it.title} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`max-w-sm ${i % 2 ? 'md:mr-auto' : 'md:ml-auto md:text-right'}`}>
                    <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-2">{it.time}</div>
                    <h3 className="font-serif text-2xl text-primary">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full bg-card gold-border flex items-center justify-center shadow-elegant glow-on-hover">
                    <it.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
