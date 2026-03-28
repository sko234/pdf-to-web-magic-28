import marketBg from "@/assets/market-bg.jpg";
import hills from "@/assets/hills.jpg";

const MarketAnalysisSection = () => {
  return (
    <section id="market">
      {/* Dark background with data visualization */}
      <div className="relative">
        <img src={marketBg} alt="" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-charcoal/70 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light uppercase mb-2">
              MARKET <span className="font-script capitalize text-3xl md:text-4xl">Analysis</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Green hills divider */}
      <div className="relative">
        <img src={hills} alt="" className="w-full h-32 md:h-48 object-cover" />
      </div>

      {/* Content */}
      <div className="section-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-2xl md:text-3xl font-light tracking-extrawide text-foreground mb-8 uppercase">
            1234 Main Street
          </h3>
          <div className="space-y-4 text-sm font-sans leading-relaxed text-muted-foreground max-w-2xl">
            <p>Real estate is hyperlocal and hyper-current.</p>
            <p>
              What your neighbor's home sold for last year (or what you paid years ago) isn't what sets your home's value today.
            </p>
            <p>
              We've already done the deep dive into your neighborhood's market trends and online footprint.
            </p>
            <p>
              The next step is touring your home in person so we can price and position it with precision, not guesswork.
            </p>
          </div>
          <div className="mt-8">
            <button className="btn-green">
              Click Here To See Your Home Value Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysisSection;
