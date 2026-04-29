import { Award, Users, BookCheck } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "100% Placement Assistance",
    desc: "Strong support and guidance to help students secure jobs in reputed institutions.",
  },
  {
    icon: Users,
    title: "Internship Opportunities",
    desc: "Hands-on internship programs to give real classroom experience during training.",
  },
  {
    icon: BookCheck,
    title: "Practical Mastery",
    desc: "Activity-based learning with a focus on classroom handling and methodology.",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-[hsl(var(--highlight))] border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
