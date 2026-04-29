import { GraduationCap, BookOpen, Award, Sparkles, Clock, Users } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Diploma in Montessori Teacher Training",
    desc: "Your main foundation course covering full Montessori methodology and child development over a comprehensive year.",
    mode: "1 Year",
    badge: "Foundation",
  },
  {
    icon: Award,
    title: "Advanced Diploma in Montessori Teacher Training",
    desc: "Higher-level specialization including school administration, counselling, and advanced teaching methods.",
    mode: "Specialization",
    badge: "Advanced",
  },
  {
    icon: BookOpen,
    title: "Diploma in Early Childhood Education (ECE)",
    desc: "A modern course covering nursery, preschool, and kindergarten teaching. Essential for the modern educator.",
    mode: "Professional",
    badge: "Modern",
  },
  {
    icon: Sparkles,
    title: "Certificate Course in Montessori Education",
    desc: "Short-term intensive course ideal for beginners and homemakers looking for a professional start.",
    mode: "3 to 6 Months",
    badge: "Short-term",
  },
  {
    icon: Users,
    title: "Certificate in Child Psychology & Development",
    desc: "Focus on child behavior, learning patterns, and emotional development to add strong value to your career.",
    mode: "Specialized",
    badge: "High Value",
  },
  {
    icon: Clock,
    title: "Diploma in Preschool & Nursery Teacher Training",
    desc: "Practical teaching-focused course including classroom management and creative activity planning.",
    mode: "Career Ready",
    badge: "Practical",
  },
];

const Programs = () => {
  return (
    <section id="courses" className="py-24 lg:py-32 relative bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20" data-reveal="up">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Our Core Courses</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Training paths for <span className="italic">every educator</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">From foundation to specialization — choose the programme crafted for your professional journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((c, i) => (
            <div key={c.title} 
                 data-reveal="up" 
                 className={`group relative rounded p-8 bg-card border border-border hover:shadow-lg transition-all duration-300 stagger-${(i % 3) + 1}`}>
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded bg-primary flex items-center justify-center shadow-sm">
                  <c.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold px-3 py-1 rounded border border-accent/20 bg-accent/5">{c.badge}</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-3 min-h-[56px] leading-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{c.desc}</p>
              <div className="flex items-center gap-5 text-xs text-muted-foreground pt-5 border-t border-gold/20">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-accent" />{c.mode}</span>
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
