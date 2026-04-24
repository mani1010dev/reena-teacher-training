import { Sparkles } from "lucide-react";
import butterfly from "@/assets/butterfly-cocoon.png";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-hero">
      <img src={butterfly} alt="" aria-hidden className="absolute top-24 right-[8%] w-16 opacity-70 animate-float" />
      <img src={butterfly} alt="" aria-hidden className="absolute bottom-24 left-[6%] w-10 opacity-50 animate-float" style={{ animationDelay: '3s' }} />
      <img src={butterfly} alt="" aria-hidden className="absolute top-[55%] right-[42%] w-8 opacity-40 animate-float" style={{ animationDelay: '6s' }} />

      <img src="/teacher-logo.png" alt="" aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto opacity-[0.1] pointer-events-none select-none" />

      <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-gold animate-shimmer" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-gold animate-shimmer" style={{ animationDelay: '1.5s' }} />

      <div className="container relative flex flex-col items-center text-center">
        <div className="animate-fade-up flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 backdrop-blur border border-gold/40 text-xs uppercase tracking-[0.25em] text-primary">
              <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
              <span>Montessori Teacher Training Academy</span>
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 backdrop-blur border border-primary/20 text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              NSDC Approved
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary text-balance max-w-4xl">
            Become the Teacher
            <span className="block gold-text mt-2">Every Child Deserves</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A premier Montessori training academy shaping confident, certified educators. Learn the
            method that has transformed early childhood education worldwide — guided by mentors who live it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#courses" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-grad text-primary-foreground font-medium shadow-purple hover:scale-[1.03] transition-transform">
              Explore Courses
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-primary font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Apply Now
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div><span className="font-serif text-3xl text-primary">12+</span><div className="text-xs uppercase tracking-wider">Years of Training</div></div>
            <div className="w-px h-10 bg-gold/40" />
            <div><span className="font-serif text-3xl text-primary">500+</span><div className="text-xs uppercase tracking-wider">Certified Teachers</div></div>
            <div className="w-px h-10 bg-gold/40" />
            <div><span className="font-serif text-3xl text-primary">98%</span><div className="text-xs uppercase tracking-wider">Placement Rate</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
