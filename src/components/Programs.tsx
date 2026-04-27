import { GraduationCap, BookOpen, Award, Sparkles, Clock, Users } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Diploma in advance Montessori teacher training",
    desc: "Our flagship programme — a deep, hands-on study of the Montessori philosophy, materials and practicum across all key learning areas.",
    mode: "Hybrid",
    badge: "Flagship",
  },
  {
    icon: Award,
    title: "Advance diploma in advance Montessori teacher training",
    desc: "For experienced educators ready to lead classrooms, mentor staff and master advanced Montessori pedagogy.",
    mode: "Full-time",
    badge: "Advanced",
  },
];

const Programs = () => {
  return (
    <section id="courses" className="py-24 lg:py-32 relative bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20" data-reveal="up">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Our Courses</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Training paths for <span className="italic">every educator</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">From your first step into Montessori to advanced mastery — we have a programme crafted for your journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((c, i) => (
            <div key={c.title} 
                 data-reveal="up" 
                 className={`group relative rounded p-8 bg-card border border-border hover:shadow-lg transition-all duration-300 stagger-${(i % 2) + 1}`}>
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded bg-primary flex items-center justify-center shadow-sm">
                  <c.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold px-3 py-1 rounded border border-accent/20 bg-accent/5">{c.badge}</span>
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
              <div className="flex items-center gap-5 text-xs text-muted-foreground pt-5 border-t border-gold/20">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-gold-deep" />{c.mode}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-primary font-medium shadow-gold hover:scale-105 transition-transform">
            Request Brochure & Fees →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
