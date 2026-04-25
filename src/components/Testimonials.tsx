import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const quotes = [
  {
    name: "Manopriya Sri",
    role: "B.Ed Graduate · Professional Trainee",
    text: "I had already completed my B.Ed, but joining Mrs. Reena’s Cocoon opened an entirely new way of learning for me. I discovered fresh, practical methods that were never covered in my previous studies.",
    initials: "MS",
  },
  {
    name: "Vinu Bamaa",
    role: "Aspiring Educator",
    text: "Truly the best place for aspiring educators. The hands-on practical sessions and exams give us the confidence to manage real classrooms with ease.",
    initials: "VB",
  },
  {
    name: "Rajendiran Chandrakeerthy",
    role: "Course Graduate",
    text: "Anyone interested in a Montessori career should consider this school. I'm amazed by the attention paid to child psychology and innovative teaching techniques.",
    initials: "RC",
  },
  {
    name: "Anita Kumari Behera",
    role: "Student Graduate",
    text: "Offers an exceptional learning experience. Mrs. Reena Mam is highly knowledgeable and supportive, and the fees are very reasonable for students.",
    initials: "AB",
  },
  {
    name: "Saranya Jerin",
    role: "Montessori Educator",
    text: "One of the best in Chennai. The teaching method is excellent and the principal is very friendly and kind-natured. They truly celebrate every child.",
    initials: "SJ",
  },
  {
    name: "Prabhu Nandhini",
    role: "Professional Trainee",
    text: "The best Montessori academy in Ramapuram. Quality education, experienced instructors, and a supportive environment that truly emphasizes the Montessori philosophy.",
    initials: "PN",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[hsl(var(--highlight))] overflow-hidden border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal="up">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Voices of Our Graduates</div>
            <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
              Trained here, <span className="italic">Teaching Everywhere</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-all bg-white shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-all bg-white shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {quotes.map((t, idx) => (
              <div key={idx} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                <div className="relative h-full clean-card p-8 flex flex-col group">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-lg text-primary/80 leading-relaxed italic mb-8 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-12 h-12 rounded bg-primary text-white font-serif text-lg flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-primary leading-tight">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center" data-reveal="up">
          <p className="text-sm text-muted-foreground mb-6">Join our community of certified Montessori educators.</p>
          <a href="https://wa.me/919840733736" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2">
            Chat with Alumni Mentors →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
