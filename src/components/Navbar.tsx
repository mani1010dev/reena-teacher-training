import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#academy", label: "Eligibility" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Apply" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'h-24 bg-transparent'}`}>
      <div className="container flex items-center justify-between h-full">
        <a href="#top" className="flex items-center gap-3 group">
          <img src="/teacher-logo.png" alt="Logo" className={`transition-all duration-300 ${scrolled ? 'h-9' : 'h-12'} w-auto object-contain`} />
          <div className="leading-tight">
            <div className={`font-serif font-bold transition-all duration-300 ${scrolled ? 'text-base' : 'text-xl'} text-primary`}>Reena's Cocoon</div>
            <div className={`text-[8px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.2em] uppercase font-bold transition-all duration-300 ${scrolled ? 'text-primary/70' : 'text-accent'} block`}>Montessori Training Institute</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href} 
               className={`text-sm transition-all relative py-1 ${activeSection === l.href.slice(1) ? 'text-primary font-semibold' : 'text-primary/60 hover:text-primary font-medium'}`}>
              {l.label}
              {activeSection === l.href.slice(1) && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all">
            Join Institute
          </a>
        </nav>

        <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded bg-secondary border border-border text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[64px] bg-background transition-all duration-500 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="container py-12 flex flex-col items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} 
               className={`text-2xl font-serif ${activeSection === l.href.slice(1) ? 'text-primary' : 'text-muted-foreground'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 px-12 py-4 rounded bg-primary text-primary-foreground font-medium">
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
