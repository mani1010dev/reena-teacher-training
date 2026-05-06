import { Sparkles, Award } from "lucide-react";
import Counter from "./ui/Counter";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Background Logo perfectly centered behind the text */}
            <img src="/teacher-logo.png" alt="" aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-auto opacity-[0.12] pointer-events-none select-none blur-[2px] z-0" />
            
            <div className="animate-fade-up flex flex-col items-start text-left relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-white border border-border text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-bold mb-8 shadow-sm">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Reena’s Cocoon Montessori Training Institute</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-6 font-bold">
              Start Your Career as a <span className="text-accent">Montessori Teacher</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 font-medium">– No Experience Needed</span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              Learn from 12+ years of real classroom experience. Perfect for Teachers, Freshers & Homemakers looking to build a meaningful career.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="px-10 py-4 rounded bg-primary text-white font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Enroll Now</a>
              <a href="#contact" className="px-10 py-4 rounded border border-primary/20 text-primary font-bold text-sm hover:bg-white transition-all shadow-sm">Book Free Demo</a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-primary/10">
              <div className="text-sm font-bold text-primary/80 leading-relaxed max-w-md italic">
                "With 12+ Years of Experience, We Help You Start and Grow a Successful Montessori Teaching Career"
              </div>
            </div>
          </div>
          </div>

          <div className="relative" data-reveal="right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white/50 rotate-2 hover:rotate-0 transition-all duration-700">
              <img 
                src="/Materiales Educativos para Maestras.jfif" 
                alt="Montessori Training" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
            
            <div className="absolute bottom-8 -left-8 z-20 bg-white p-6 rounded shadow-xl animate-float max-w-[220px] border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-serif font-bold text-primary">100%</div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">Global Certification & Career Support</div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -top-8 left-12 z-20 bg-white px-6 py-4 rounded shadow-lg border border-border flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-primary leading-none"><Counter end={12} suffix="+" /></span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground mt-1">Years</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-primary leading-none"><Counter end={100} suffix="+" /></span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground mt-1">Teachers Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
