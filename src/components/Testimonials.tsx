import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const quotes = [
  {
    name: "Ramya Raghu",
    date: "a year ago",
    text: "From the moment I enrolled as a student in Reena's cocoon Montessori teacher training institute I felt supported and encouraged by Mrs. Reena mam . Mam's guidance helped me to gain the skills needed for an effective educator. I highly recommend this institute to the future educators who is passionate about Montessori education.",
    initials: "RR",
    color: "bg-indigo-500",
  },
  {
    name: "kavitha jayaraj",
    date: "a year ago",
    text: "It was an enriching experience and made me wiser. It was easy to follow the course with a formulated course structure. It has enhanced my level of confidence. The trainers were nice and have got suggestions and information that were very helpful.",
    initials: "KJ",
    color: "bg-teal-500",
  },
  {
    name: "Logeswari",
    date: "7 months ago",
    text: "Mrs. Reena’s Cocoon Preschool is very close to my home, and I am a daily witness to how wonderfully they conduct classes and activities. Their playway teaching methodology is simple yet very effective. Now my son is able to recite many things with confidence.",
    initials: "L",
    color: "bg-orange-500",
  },
  {
    name: "Rekha Viji",
    date: "5 months ago",
    text: "Highly recommended school for kids!! My child has been attending this school for over a year now. I have noticed that, from his speech to this ability to engage with other chidren, he has just enhanced in all aspects. Teachers and staffs are very kind.",
    initials: "RV",
    color: "bg-pink-500",
  },
  {
    name: "Kottee Kottee",
    date: "a year ago",
    text: "I am immensely thankful to Mrs. Reena for the wonderful impact she has had on my daughter's education. She attended the Ramapuram branch and is now the topper in her class. The foundation laid here is exceptional.",
    initials: "KK",
    color: "bg-blue-600",
  },
  {
    name: "kannan M",
    date: "3 weeks ago",
    text: "Very dedicated teachers and staff.. Gave specific attention to every kids.. very polite and friendly. My son just now completed U.K.G and he really miss this school. Thank you so much Reena mam.",
    initials: "KM",
    color: "bg-green-500",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20" data-reveal="up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm text-[11px] uppercase tracking-widest text-primary font-bold mb-8 border border-border">
            <GoogleLogo />
            <span>Top Rated Institute in Chennai</span>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />)}
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold mb-6">
            Hear from our <span>Community</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real stories from the educators and parents who shape our journey every day.</p>
        </div>

        <div className="embla px-4" ref={emblaRef}>
          <div className="embla__container flex">
            {quotes.map((t, idx) => (
              <div key={idx} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 py-8">
                <div className="relative h-full bg-white p-6 flex flex-col rounded-[1.5rem] shadow-[0_5px_25px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(197,160,89,0.1)] transition-all duration-500 hover:-translate-y-1 group border border-border/40 hover:border-accent/20">
                  <div className="absolute top-4 right-6 text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                    <svg width="35" height="26" viewBox="0 0 60 45" fill="currentColor">
                      <path d="M13.5 0C6.045 0 0 6.045 0 13.5V45H22.5V13.5H9C9 11.01 11.01 9 13.5 9V0ZM51 0C43.545 0 37.5 6.045 37.5 13.5V45H60V13.5H46.5C46.5 11.01 48.51 9 51 9V0Z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg ${t.color} text-white font-bold text-sm flex items-center justify-center shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm leading-tight">{t.name}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-[#FBBC05] text-[#FBBC05]" />)}
                        </div>
                        <span className="text-[8px] text-muted-foreground uppercase tracking-widest font-bold">• {t.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[12px] text-primary/70 leading-relaxed mb-5 flex-1 relative z-10 line-clamp-5">
                    "{t.text}"
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                    <div className="flex items-center gap-2">
                      <GoogleLogo />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Google Review</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-50 text-[9px] text-green-700 font-bold uppercase tracking-tighter border border-green-100">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Verified Profile
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button onClick={scrollPrev} className="w-14 h-14 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-all bg-white shadow-md hover:shadow-xl group">
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={scrollNext} className="w-14 h-14 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-all bg-white shadow-md hover:shadow-xl group">
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
