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
    <section id="curriculum" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal="up">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">The Training Journey</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            A curriculum that unfolds with <span className="italic">intention</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-16">
            {items.map((it, i) => (
              <div key={it.title} 
                   data-reveal={i % 2 ? "left" : "right"}
                   className={`flex flex-col md:flex-row items-start md:items-center gap-8 stagger-${(i % 3) + 1} ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`max-w-sm ${i % 2 ? 'md:mr-auto' : 'md:ml-auto md:text-right'}`}>
                    <div className="flex items-center gap-4 mb-3 md:block">
                      <div className="w-10 h-10 rounded-full bg-white border border-primary flex items-center justify-center shadow-sm md:hidden shrink-0">
                        <it.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs uppercase tracking-[0.25em] text-accent font-bold md:mb-2">{it.time}</div>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">{it.title}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div className="relative shrink-0 z-10 hidden md:block">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md">
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
