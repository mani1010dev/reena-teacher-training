import { Quote, Star } from "lucide-react";

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
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Voices of Our Graduates</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            Trained here, <span className="gold-text">teaching everywhere</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((t, idx) => (
            <div key={idx} className="relative rounded-3xl bg-card gold-border p-8 shadow-elegant flex flex-col hover:scale-[1.02] transition-transform duration-300">
              <Quote className="absolute -top-4 right-8 w-10 h-10 text-gold/30" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <p className="font-serif text-lg text-primary leading-relaxed italic mb-8 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                <div className="w-12 h-12 rounded-full bg-purple-grad text-gold-soft font-serif text-lg flex items-center justify-center shadow-purple shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-serif text-base text-primary leading-tight">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
