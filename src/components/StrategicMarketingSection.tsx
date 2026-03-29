import customWebsite from "@/assets/custom-website.png";
import matterport from "@/assets/matterport.png";
import phoneWoman from "@/assets/phone-woman.jpg";
import laptopWoman from "@/assets/laptop-woman.jpg";

const StrategicMarketingSection = () => {
  return (
    <section id="marketing" className="bg-background">
      {/* Header */}
      <div className="py-16 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground uppercase">
          STRATEGIC <span className="font-script capitalize text-3xl md:text-4xl">Marketing</span>
        </h2>
      </div>

      {/* In Home Staging + Professional Photography */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="overflow-hidden mb-4">
              <img src={phoneWoman} alt="In Home Staging Consult" className="w-full h-64 object-cover" />
            </div>
            <h3 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-foreground">
              In Home Staging Consult
            </h3>
          </div>
          <div className="text-center">
            <div className="overflow-hidden mb-4">
              <img src={laptopWoman} alt="Professional Photography & Media" className="w-full h-64 object-cover" />
            </div>
            <h3 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-foreground">
              Professional Photography & Media
            </h3>
          </div>
        </div>
      </div>

    </section>
  );
};

export default StrategicMarketingSection;
