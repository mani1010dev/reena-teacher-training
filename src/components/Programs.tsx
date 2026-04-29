import { useState } from "react";
import { GraduationCap, BookOpen, Award, Sparkles, Clock, Users, X, Calendar, CheckCircle2 } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Diploma in Montessori Teacher Training",
    desc: "Our main foundation course covering full Montessori methodology and child development. This program provides a deep dive into the Montessori philosophy, prepared environments, and the role of the educator in guiding young minds.",
    duration: "1 Year",
    badge: "Foundation",
    highlights: ["Methodology Mastery", "Child Development", "Classroom Prep"]
  },
  {
    icon: Award,
    title: "Advanced Diploma in Montessori Teacher Training",
    desc: "A higher-level specialization designed for those seeking leadership roles. This comprehensive program includes school administration, educational counselling, and advanced teaching methods tailored for higher academic excellence.",
    duration: "1 Year / Specialized",
    badge: "Advanced",
    highlights: ["School Admin", "Advanced Methods", "Counselling"]
  },
  {
    icon: BookOpen,
    title: "Diploma in Early Childhood Education (ECE)",
    desc: "A modern, high-demand course covering nursery, preschool, and kindergarten teaching. It blends contemporary early childhood theories with practical classroom management techniques essential for the modern educator.",
    duration: "1 Year",
    badge: "Modern",
    highlights: ["Nursery Teaching", "Pre-school Logic", "Kindergarten Prep"]
  },
  {
    icon: Sparkles,
    title: "Certificate Course in Montessori Education",
    desc: "A short-term intensive course perfect for beginners, parents, or homemakers looking to start a professional journey in education quickly without compromising on core Montessori principles.",
    duration: "3 to 6 Months",
    badge: "Short-term",
    highlights: ["Core Principles", "Activity Planning", "Quick Certification"]
  },
  {
    icon: Users,
    title: "Certificate in Child Psychology & Development",
    desc: "Focus on understanding child behavior, learning patterns, and emotional development. This course adds immense value to any teaching profile by providing psychological insights into how children learn and grow.",
    duration: "4 Months",
    badge: "Specialized",
    highlights: ["Behavior Analysis", "Learning Patterns", "Emotional Growth"]
  },
  {
    icon: Clock,
    title: "Diploma in Preschool & Nursery Teacher Training",
    desc: "A practical, teaching-focused course emphasizing classroom handling and creative activity planning. Ideal for candidates looking for a hands-on approach to managing preschool environments effectively.",
    duration: "1 Year",
    badge: "Practical",
    highlights: ["Hands-on Training", "Classroom Handling", "Creative Activities"]
  },
];

const Programs = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <section id="courses" className="py-24 lg:py-32 relative bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20" data-reveal="up">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Professional Training</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Training paths for <span>every educator</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Choose your specialization and unlock a global career in Montessori and Early Childhood Education.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((c, i) => (
            <div 
              key={c.title} 
              data-reveal="up" 
              onClick={() => setSelectedCourse(c)}
              className={`group relative rounded-[2rem] p-8 bg-white border border-border/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer stagger-${(i % 3) + 1}`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                  <c.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{c.badge}</span>
              </div>
              <h3 className="font-serif text-2xl text-primary font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                {c.title}
              </h3>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details <span>→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-bold hover:bg-accent hover:text-primary hover:scale-105 transition-all shadow-xl">
            Request Course Brochure & Fees
          </a>
        </div>
      </div>

      {/* Course Detail Popup */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            className="absolute inset-0 bg-primary/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedCourse(null)}
          />
          
          <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-primary transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                  <selectedCourse.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1 block">{selectedCourse.badge} Program</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold leading-tight">{selectedCourse.title}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Description</h4>
                  <p className="text-primary/70 leading-relaxed text-lg">"{selectedCourse.desc}"</p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Programme Details</h4>
                    <div className="flex items-center gap-3 text-primary font-bold">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span>Duration: {selectedCourse.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Course Highlights</h4>
                    <div className="space-y-3">
                      {selectedCourse.highlights.map(h => (
                        <div key={h} className="flex items-center gap-3 text-sm text-primary/80">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-sm text-muted-foreground">Interested in this course? Reach out to our counselor.</div>
                <a 
                  href={`https://wa.me/919840733736?text=I'm interested in the ${selectedCourse.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-primary font-bold hover:bg-primary hover:text-white transition-all text-center"
                >
                  Apply Now via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
