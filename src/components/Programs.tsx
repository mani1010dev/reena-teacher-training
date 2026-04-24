import { GraduationCap, BookOpen, Award, Sparkles, Clock, Users } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Diploma in Montessori Method",
    desc: "Our flagship programme — a deep, hands-on study of the Montessori philosophy, materials and practicum across all key learning areas.",
    duration: "9 Months",
    mode: "Hybrid",
    badge: "Flagship",
  },
  {
    icon: BookOpen,
    title: "Foundation Course",
    desc: "An immersive introduction to Montessori principles, child psychology and the prepared environment. Perfect for beginners.",
    duration: "6 Months",
    mode: "Online + Workshops",
    badge: "Beginner",
  },
  {
    icon: Award,
    title: "Advanced Practitioner",
    desc: "For experienced educators ready to lead classrooms, mentor staff and master advanced Montessori pedagogy.",
    duration: "12 Months",
    mode: "Full-time",
    badge: "Advanced",
  },
  {
    icon: Sparkles,
    title: "Short Certification Modules",
    desc: "Phonics, sensorial learning, EPL, classroom management & storytelling — focused certificates for working teachers.",
    duration: "4 – 8 Weeks",
    mode: "Weekend",
    badge: "Specialist",
  },
];

const Programs = () => {
  return (
    <section id="courses" className="py-24 lg:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Our Courses</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            Training paths for <span className="gold-text">every educator</span>
          </h2>
          <p className="mt-4 text-muted-foreground">From your first step into Montessori to advanced mastery — we have a programme crafted for your journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map(c => (
            <div key={c.title} className="group relative rounded-3xl p-8 bg-card gold-border glow-on-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-grad flex items-center justify-center shadow-purple">
                  <c.icon className="w-6 h-6 text-gold-soft" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-deep px-3 py-1 rounded-full border border-gold/40">{c.badge}</span>
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
              <div className="flex items-center gap-5 text-xs text-muted-foreground pt-5 border-t border-gold/20">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-deep" />{c.duration}</span>
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
