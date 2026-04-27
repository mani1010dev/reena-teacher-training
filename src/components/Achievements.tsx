import { ShieldCheck, Award, Users, BookCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "NSDC and NSDVE Approved",
    desc: "A government-recognized training partner ensuring national standards.",
  },
  {
    icon: Award,
    title: "Global Certification",
    desc: "Valid in over 120 countries for Montessori teaching careers.",
  },
  {
    icon: BookCheck,
    title: "Practical Mastery",
    desc: "Hands-on experience with original Montessori materials and setups.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    desc: "Guided by Mrs. Reena and industry veterans with 20+ years of experience.",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-[hsl(var(--highlight))] border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <div key={it.title} 
                 data-reveal="up" 
                 className={`clean-card p-8 flex flex-col items-start stagger-${(i % 4) + 1}`}>
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
