const Footer = () => (
  <footer className="bg-purple-grad text-primary-foreground pt-20 pb-10">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/teacher-logo.png" alt="" className="h-12 w-auto object-contain brightness-0 invert" />
            <div className="font-serif text-2xl">Mrs Reena's Cocoon</div>
          </div>
          <p className="text-primary-foreground/70 max-w-md">Where children blossom and educators take flight. Crafted with care since 2012.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[10px] uppercase tracking-widest text-gold-soft border border-white/5">
            NSDC Approved Training Center
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold-soft mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#programs" className="hover:text-gold-soft">Programs</a></li>
            <li><a href="#story" className="hover:text-gold-soft">Our Story</a></li>
            <li><a href="#gallery" className="hover:text-gold-soft">Gallery</a></li>
            <li><a href="#contact" className="hover:text-gold-soft">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold-soft mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>+91 98407 33736</li>
            <li>No.5/13 a, Mullai Nagar, Ramapuram, Chennai - 600089</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gold-soft/20 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Mrs Reena's Cocoon. Crafted with intention.
      </div>
    </div>
  </footer>
);

export default Footer;
