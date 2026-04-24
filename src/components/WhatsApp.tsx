import { MessageCircle } from "lucide-react";

const WhatsApp = () => (
  <a href="https://wa.me/919840733736?text=Hi%20Mrs%20Reena's%20Cocoon%2C%20I'd%20like%20to%20know%20more"
     target="_blank" rel="noreferrer"
     aria-label="Chat on WhatsApp"
     className="fixed bottom-6 right-6 z-40 group">
    <div className="absolute inset-0 rounded-full bg-gold/40 blur-xl group-hover:blur-2xl transition-all animate-shimmer" />
    <div className="relative w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
      <MessageCircle className="w-6 h-6 text-primary" />
    </div>
  </a>
);

export default WhatsApp;
