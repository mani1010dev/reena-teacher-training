import { MapPin, Phone, Clock, Users } from "lucide-react";

const branches = [
  {
    name: "Ramapuram Campus",
    address: "No.5/13 a, Mullai Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
    phone: "+91 98407 33736",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.078475053417!2d80.17739187403384!3d13.030674513582465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d65984bc61%3A0x47e59584096ba7bb!2sMrs%20Reena%27s%20Cocoon%20play%20school%20%7C%20Pre%20school%20Recognised%20by%20Govt!5e0!3m2!1sen!2sin!4v1777463250539!5m2!1sen!2sin",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  {
    name: "Moulivakkam Campus",
    address: "44 A, Sathyanarayana Puram Main Rd, Govindaraj Nagar, Moulivakkam, Chennai, Tamil Nadu 600125",
    phone: "+91 98407 33736",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2070852922266!2d80.13842987403366!3d13.02248071376281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610045111b91%3A0x7de7555a3bb90751!2sMrs%20Reena%27s%20Cocoon%20play%20school%20%7C%20Pre%20school%20Recognised%20by%20Govt!5e0!3m2!1sen!2sin!4v1777463294318!5m2!1sen!2sin",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal="up">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Visit Us</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Our <span>Campuses</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Drop by our Chennai centers to begin your journey.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((b, i) => (
            <div key={b.name} 
                 data-reveal={i === 0 ? "left" : "right"}
                 className="clean-card p-8 flex flex-col md:flex-row gap-8 overflow-hidden group">
              <div className="md:w-1/2 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-primary text-[10px] uppercase tracking-widest mb-6 w-fit font-bold">
                  Physical Campus
                </div>
                <h3 className="font-serif text-3xl text-primary mb-6 font-bold">{b.name}</h3>
                <div className="space-y-4 text-muted-foreground flex-1">
                  <p className="flex gap-3 text-sm leading-relaxed"><MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />{b.address}</p>
                  <p className="flex gap-3 text-sm leading-relaxed"><Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />{b.phone}</p>
                  <p className="flex gap-3 text-sm leading-relaxed"><Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />{b.hours}</p>
                </div>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} 
                   target="_blank" rel="noreferrer" 
                   className="btn-primary mt-8 inline-flex items-center justify-center gap-2">
                  Get Directions
                </a>
              </div>
              
              <div className="md:w-1/2 min-h-[300px] relative rounded-lg overflow-hidden bg-secondary border border-border">
                {b.map ? (
                  <iframe 
                    title={b.name}
                    src={b.map}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary p-8 text-center text-primary-foreground">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-accent" />
                      </div>
                      <p className="font-serif text-lg text-white/90 leading-relaxed">"Connecting aspiring educators from across the globe through our live digital classroom."</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
