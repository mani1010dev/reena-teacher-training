import { Instagram, Facebook, Youtube, Linkedin, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pt-24 pb-12 bg-primary text-white relative">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20" data-reveal="up">
          <div className="space-y-8">
            <a href="#top" className="flex items-center gap-3">
              <img src="/teacher-logo.png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
              <div className="font-serif text-2xl font-bold">Mrs Reena's Cocoon</div>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Dedicated to the authentic Montessori method, shaping the next generation of compassionate and skilled educators.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#courses" className="hover:text-accent transition-colors">Training Programs</a></li>
              <li><a href="#story" className="hover:text-accent transition-colors">Our Philosophy</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Academy Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Graduate Stories</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-accent shrink-0" /> No.5/13 a, Ramapuram, Chennai</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-accent shrink-0" /> +91 98407 33736</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-accent shrink-0" /> admissions@reenascocoon.in</li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-sm text-white/70 mb-6">Stay updated with our latest workshops and intake dates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/20 rounded py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded bg-accent text-primary text-xs font-bold hover:opacity-90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
            © {new Date().getFullYear()} Mrs Reena's Cocoon Montessori Academy.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors font-bold group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
