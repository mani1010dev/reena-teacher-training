import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

const steps = ["Details", "Background", "Course"];

const ApplicationForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", email: "", phone: "", education: "", experience: "Fresher", course: "Diploma in Montessori Method" });

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received", { description: "Our admissions team will reach out within 24 hours." });
    setData({ name: "", email: "", phone: "", education: "", experience: "Fresher", course: "Diploma in Montessori Method" });
    setStep(0);
  };

  return (
    <form onSubmit={submit} className="clean-card p-8">
      <div className="flex items-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all ${i <= step ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-[10px] uppercase tracking-widest font-bold hidden sm:block ${i <= step ? 'text-primary' : 'text-muted-foreground'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-primary' : 'bg-border'}`} />}
          </div>
        ))}
      </div>

      <div className="space-y-6 min-h-[220px]">
        {step === 0 && (
          <>
            <Field label="Full Name" value={data.name} onChange={v => setData({ ...data, name: v })} />
            <Field label="Email Address" value={data.email} onChange={v => setData({ ...data, email: v })} placeholder="you@example.com" />
            <Field label="Phone / WhatsApp" value={data.phone} onChange={v => setData({ ...data, phone: v })} placeholder="+91…" />
          </>
        )}
        {step === 1 && (
          <>
            <Field label="Highest Qualification" value={data.education} onChange={v => setData({ ...data, education: v })} placeholder="e.g. B.A., B.Ed" />
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Teaching Experience</label>
              <select value={data.experience} onChange={e => setData({ ...data, experience: e.target.value })} className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:outline-none text-primary font-medium">
                {["Fresher", "1 – 2 years", "3 – 5 years", "5+ years"].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </>
        )}
        {step === 2 && (
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Course of Interest</label>
            <select value={data.course} onChange={e => setData({ ...data, course: e.target.value })} className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:outline-none text-primary font-medium">
              {["Diploma in Montessori Method", "Foundation Course", "Advanced Practitioner", "Short Certification Modules"].map(p => <option key={p}>{p}</option>)}
            </select>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">A counsellor will share course details, fees and the next cohort start date.</p>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-10">
        <button type="button" onClick={prev} disabled={step === 0} className="px-6 py-2.5 rounded text-primary border border-border font-bold text-xs hover:bg-secondary disabled:opacity-30 transition-all">Back</button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary text-xs">Next Step</button>
        ) : (
          <button type="submit" className="btn-primary text-xs bg-accent border-accent text-primary">Submit Application</button>
        )}
      </div>
    </form>
  );
};

const Field = ({ label, value, onChange, placeholder }: any) => (
  <div>
    <label className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-3">{label}</label>
    <input required value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:outline-none text-primary font-medium placeholder:text-muted-foreground/40" />
  </div>
);

const InquiryForm = () => {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent", { description: "We'll send the brochure to your inbox shortly." });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={submit} className="clean-card p-8 bg-primary text-white">
      <h3 className="font-serif text-3xl mb-2 font-bold">Quick Inquiry</h3>
      <p className="text-sm text-white/60 mb-8">Get the brochure, fee structure & cohort calendar.</p>
      <div className="space-y-5">
        {["Full Name", "Email Address", "Phone Number"].map(l => (
          <input key={l} required placeholder={l} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all" />
        ))}
        <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:border-accent focus:outline-none">
          {["Diploma in Montessori Method", "Foundation Course", "Advanced Practitioner", "Short Certification Modules"].map(p => <option key={p} className="text-primary">{p}</option>)}
        </select>
        <textarea placeholder="Tell us about your background…" rows={3} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:outline-none" />
        <button className="w-full py-4 rounded bg-accent text-primary font-bold shadow-sm hover:opacity-90 transition-all uppercase tracking-widest text-xs">
          Request Brochure
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal="up">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Begin the Journey</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance font-bold">
            Two ways to <span className="italic">get started</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div data-reveal="left">
            <h3 className="font-serif text-2xl text-primary mb-6 font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
              Apply for Admission
            </h3>
            <ApplicationForm />
          </div>
          <div data-reveal="right">
            <h3 className="font-serif text-2xl text-primary mb-6 font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
              Just Browsing?
            </h3>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
