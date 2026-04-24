import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#story", label: "Our Story" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Voices" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-gold/20">
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src="/teacher-logo.png" alt="Mrs Reena's Cocoon Logo" className="h-14 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary">Mrs Reena's Cocoon</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Montessori Training Academy</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-gold text-primary text-sm font-medium shadow-gold hover:scale-105 transition-transform">
            Apply Now
          </a>
        </nav>
        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background/95">
          <div className="container py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
