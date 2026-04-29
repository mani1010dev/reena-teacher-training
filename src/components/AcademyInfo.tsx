import { CheckCircle2, Briefcase, GraduationCap, Award } from "lucide-react";

const AcademyInfo = () => {
  return (
    <section id="academy" className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Eligibility Section */}
          <div data-reveal="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-primary text-[10px] uppercase tracking-widest mb-6 font-bold">
              Requirements
            </div>
            <h2 className="font-serif text-4xl text-primary mb-8 font-bold">Course <span className="italic">Eligibility</span></h2>
            
            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-border bg-secondary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl">Diploma Courses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Minimum Qualification: 10th / 12th Pass
                  </li>
                  <li className="flex gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Suitable for beginners entering the teaching field
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-secondary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl">Advanced Diploma Programs</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Minimum Qualification: Any Degree (UG/PG)
                  </li>
                  <li className="flex gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Ideal for candidates seeking higher-level teaching and administrative roles
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Section */}
          <div data-reveal="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-primary text-[10px] uppercase tracking-widest mb-6 font-bold">
              Future Prospects
            </div>
            <h2 className="font-serif text-4xl text-primary mb-8 font-bold">Career <span className="italic">Opportunities</span></h2>
            <p className="text-muted-foreground mb-8">After completing our courses, students can work in various roles in reputed preschools and institutions:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Montessori Teacher",
                "Preschool Teacher",
                "Kindergarten Teacher",
                "Assistant Teacher",
                "School Coordinator"
              ].map((role) => (
                <div key={role} className="flex items-center gap-4 p-4 rounded border border-border hover:border-accent transition-colors group">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary">{role}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-xl bg-primary text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold mb-2">Ready to start?</h4>
                <p className="text-white/70 text-sm mb-6">Our admissions are open for the next batch. Connect with us to secure your seat.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all">
                  Contact Admissions →
                </a>
              </div>
              <Briefcase className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyInfo;
