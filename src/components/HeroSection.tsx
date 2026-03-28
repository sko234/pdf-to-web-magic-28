import heroHouse from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section id="welcome" className="relative pt-14">
      <div className="relative h-[85vh] min-h-[600px]">
        <img
          src={heroHouse}
          alt="Beautiful farmhouse property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
          <p className="text-xs tracking-superwide font-sans font-light mb-6 uppercase">
            Made Especially For You
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-4">
            MEG <span className="font-script text-4xl md:text-6xl lg:text-7xl">&</span> JOHN JENSON
          </h1>
          <p className="text-sm md:text-base font-sans font-light tracking-wide mb-10">
            1234 Main Street | Lone Tree, CO | 80124
          </p>
          <a href="#connect" className="btn-schedule text-primary-foreground border-primary-foreground">
            Schedule A Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
