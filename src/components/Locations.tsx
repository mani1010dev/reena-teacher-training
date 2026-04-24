import { MapPin, Phone, Mail } from "lucide-react";

const branches = [
  {
    name: "Chennai Campus",
    address: "No.5/13 a, Mullai Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
    phone: "+91 98407 33736",
    email: "admissions@reenascocoon.in",
  },
  {
    name: "Online Learning Hub",
    address: "Live virtual classrooms · Open to learners globally",
    phone: "+91 98407 33736",
    email: "online@reenascocoon.in",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Visit Us</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            Our <span className="italic gold-text">campuses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map(b => (
            <div key={b.name} className="rounded-3xl bg-card gold-border p-8 shadow-elegant glow-on-hover flex flex-col">
              <div className="aspect-[4/3] rounded-2xl bg-purple-grad/90 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 70% 70%, hsl(var(--gold)) 0%, transparent 50%)' }} />
                <MapPin className="absolute inset-0 m-auto w-10 h-10 text-gold-soft" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">{b.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground flex-1">
                <p className="flex gap-2"><MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />{b.address}</p>
                <p className="flex gap-2"><Phone className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />{b.phone}</p>
                <p className="flex gap-2"><Mail className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />{b.email}</p>
              </div>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-gold/50 text-primary hover:bg-gold hover:text-primary transition-colors text-sm">
                Open in Maps →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
