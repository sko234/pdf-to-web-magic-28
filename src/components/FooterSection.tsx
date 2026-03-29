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
        <div className="text-center">
          <h4 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-3">
            Let's Connect
          </h4>
          <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
            milena.nelson@exprealty.com
          </p>
          <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed mt-1">
            1-404-428-7361
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Linkedin className="w-4 h-4 text-primary-foreground/70" />
            <Facebook className="w-4 h-4 text-primary-foreground/70" />
            <Instagram className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-xs font-sans text-primary-foreground/70">@MilenaNelsonRealtor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
