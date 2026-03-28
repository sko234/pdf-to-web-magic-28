import logoElite from "@/assets/logo-elite.png";

const FooterSection = () => {
  return (
    <section id="connect" className="section-dark py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: Name + Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-8 border-b border-primary-foreground/20">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl text-primary-foreground uppercase tracking-wide">
              Your Name Here
            </h3>
            <p className="text-[10px] font-sans text-primary-foreground/60 tracking-extrawide uppercase">
              Realtor DRE #
            </p>
          </div>
          <img src={logoElite} alt="Girls With Grit Elite Coaching" className="h-12" />
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-3">
              Brokerage Office
            </h4>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              123 Anywhere St., Any City ST 12345
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
              123-456-7890
            </p>
            <p className="text-xs font-sans text-primary-foreground/70 leading-relaxed">
              hello@bestrealtorever.com
            </p>
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
