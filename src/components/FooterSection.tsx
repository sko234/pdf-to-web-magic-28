import logoElite from "@/assets/exp-luxury.png";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <section id="connect" className="section-dark py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: Name + Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-8 border-b border-primary-foreground/20">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl text-primary-foreground uppercase tracking-wide">
              Milena Nelson
            </h3>
            <p className="text-[10px] font-sans text-primary-foreground/60 tracking-extrawide uppercase">
              Loyalty | Professionalism | Trust
            </p>
          </div>
          <img src={logoElite} alt="eXp Luxury" className="h-12" />
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-3">
              Brokerage Office
            </h4>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              888.959.9461
            </p>
          </div>
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-3">
              Office Hours
            </h4>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              Monday to Friday 9:00 am to 6:00 pm
            </p>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              Saturday 9:00 am to 12:00 noon
            </p>
          </div>
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-3">
              Let's Connect
            </h4>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              milena.nelson@exprealty.com
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <Linkedin className="w-4 h-4 text-primary-foreground/70" />
              <Facebook className="w-4 h-4 text-primary-foreground/70" />
              <Instagram className="w-4 h-4 text-primary-foreground/70" />
              <span className="text-xs font-sans text-primary-foreground/70">@MilenaNelsonRealtor</span>
            </div>
            <p className="text-[10px] font-sans text-primary-foreground/50 mt-2 uppercase tracking-wide">
              After Hours & Weekends By Appt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
