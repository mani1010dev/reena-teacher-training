import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

const steps = ["You", "Background", "Course"];

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
    <form onSubmit={submit} className="rounded-3xl bg-card gold-border p-8 shadow-elegant">
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${i <= step ? 'bg-gold text-primary' : 'bg-muted text-muted-foreground'}`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs ${i <= step ? 'text-primary' : 'text-muted-foreground'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-gold' : 'bg-border'}`} />}
          </div>
        ))}
      </div>

      <div className="space-y-4 min-h-[200px]">
        {step === 0 && (
          <>
            <Field label="Full Name" value={data.name} onChange={v => setData({ ...data, name: v })} />
            <Field label="Email" value={data.email} onChange={v => setData({ ...data, email: v })} placeholder="you@example.com" />
            <Field label="Phone / WhatsApp" value={data.phone} onChange={v => setData({ ...data, phone: v })} placeholder="+91…" />
          </>
        )}
        {step === 1 && (
          <>
            <Field label="Highest Qualification" value={data.education} onChange={v => setData({ ...data, education: v })} placeholder="e.g. B.A., B.Ed" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-deep mb-2">Teaching Experience</label>
              <select value={data.experience} onChange={e => setData({ ...data, experience: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none text-primary">
                {["Fresher", "1 – 2 years", "3 – 5 years", "5+ years"].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </>
        )}
        {step === 2 && (
          <div>
            <label className="block text-xs uppercase tracking-widest text-gold-deep mb-2">Course of Interest</label>
            <select value={data.course} onChange={e => setData({ ...data, course: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none text-primary">
              {["Diploma in Montessori Method", "Foundation Course", "Advanced Practitioner", "Short Certification Modules"].map(p => <option key={p}>{p}</option>)}
            </select>
            <p className="text-xs text-muted-foreground mt-3">A counsellor will share course details, fees and the next cohort start date.</p>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button type="button" onClick={prev} disabled={step === 0} className="px-5 py-2.5 rounded-full text-primary border border-border disabled:opacity-30">Back</button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="px-6 py-2.5 rounded-full bg-purple-grad text-primary-foreground shadow-purple hover:scale-105 transition-transform">Next →</button>
        ) : (
          <button type="submit" className="px-6 py-2.5 rounded-full bg-gold text-primary shadow-gold hover:scale-105 transition-transform">Submit Application</button>
        )}
      </div>
    </form>
  );
};

const Field = ({ label, value, onChange, placeholder }: any) => (
  <div>
    <label className="block text-xs uppercase tracking-widest text-gold-deep mb-2">{label}</label>
    <input required value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none text-primary placeholder:text-muted-foreground/60" />
  </div>
);

const InquiryForm = () => {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent", { description: "We'll send the brochure to your inbox shortly." });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={submit} className="rounded-3xl bg-purple-grad text-primary-foreground p-8 shadow-purple">
      <h3 className="font-serif text-2xl mb-1">Quick Inquiry</h3>
      <p className="text-sm text-primary-foreground/70 mb-6">Get the brochure, fee structure & cohort calendar.</p>
      <div className="space-y-4">
        {["Full Name", "Email", "Phone"].map(l => (
          <input key={l} required placeholder={l} className="w-full px-4 py-3 rounded-xl bg-background/10 border border-gold-soft/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-gold focus:outline-none" />
        ))}
        <select className="w-full px-4 py-3 rounded-xl bg-background/10 border border-gold-soft/30 text-primary-foreground focus:border-gold focus:outline-none">
          {["Diploma in Montessori Method", "Foundation Course", "Advanced Practitioner", "Short Certification Modules"].map(p => <option key={p} className="text-primary">{p}</option>)}
        </select>
        <textarea placeholder="Tell us about your background…" rows={3} className="w-full px-4 py-3 rounded-xl bg-background/10 border border-gold-soft/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-gold focus:outline-none" />
        <button className="w-full py-3 rounded-full bg-gold text-primary font-medium shadow-gold hover:scale-[1.02] transition-transform">
          Request Brochure
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">Begin the Journey</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
            Two ways to <span className="gold-text">get started</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl text-primary mb-4">Apply for Admission</h3>
            <ApplicationForm />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-primary mb-4">Just Browsing?</h3>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
