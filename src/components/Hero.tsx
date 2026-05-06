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
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 text-xs uppercase tracking-[0.2em] text-primary font-bold mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Transforming Passion into Profession</span>
              </div>
            
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-6 font-bold tracking-tight">
                Become a <span className="text-accent relative inline-block">
                  Montessori
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                </span> Teacher
                <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground/80 mt-3 font-medium tracking-normal">– No Experience Needed</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Step into a fulfilling career with guidance from <strong className="text-primary">12+ years of real classroom expertise</strong>. Thoughtfully designed for teachers, freshers, and homemakers looking to build a meaningful career.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-12">
                <a href="#contact" className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold text-sm shadow-xl hover:shadow-primary/20 transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
                <a href="#contact" className="px-8 py-4 rounded-full border-2 border-primary/10 text-primary font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all">
                  Book a Free Demo
                </a>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-primary/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="text-sm font-semibold text-primary/80 leading-relaxed">
                  "Guiding you to start and grow a successful teaching journey."
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-reveal="right">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/80 rotate-2 hover:rotate-0 transition-all duration-700">
              <img 
                src="/Materiales Educativos para Maestras.jfif" 
                alt="Montessori Training" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
            
            <div className="absolute bottom-8 -left-8 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl animate-float max-w-[200px] border border-white/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="font-serif font-bold text-primary leading-tight">Recognized<br/>Certification</div>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold leading-relaxed border-t border-border pt-3">
                & Comprehensive Career Support
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -top-8 left-12 z-20 bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-6">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif font-bold text-primary leading-none"><Counter end={12} suffix="+" /></span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground mt-2">Years Exp.</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif font-bold text-primary leading-none"><Counter end={100} suffix="+" /></span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground mt-2">Educators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
