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

      {/* Custom Website Section */}
      <div className="section-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-foreground uppercase mb-6">
                Custom Website
              </h3>
              <div className="space-y-4 text-sm font-sans leading-relaxed text-muted-foreground">
                <p>Every listing gets a custom site.</p>
                <p>Why? Because we're a little obsessed with presentation.</p>
                <p>
                  Having direct control of a custom website is the ONLY way to control your home's online narrative. The description, order of photos, which photos are displayed, and more.
                </p>
                <p>
                  The custom website also allows us to capture every buyer's attention, monitor every click and quickly respond to inquiries.
                </p>
                <p>
                  Speaking of inquiries. Every request submitted on your website is handled directly by our team — not sent to an agent who has never seen your home, but paid for the lead.
                </p>
              </div>
              <div className="mt-6">
                <button className="btn-green">Click To See An Example</button>
              </div>
            </div>
            <div>
              <img src={customWebsite} alt="Custom website mockup" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Walking Tour */}
      <div className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground uppercase text-center mb-10">
            Fully Immersive 3D Walking Tour
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={matterport} alt="Matterport 3D Tour" className="w-full rounded shadow-lg" />
            </div>
            <div className="space-y-4 text-sm font-sans leading-relaxed text-muted-foreground">
              <p>
                Every listing includes a full 3D walking tour, allowing buyers to explore your home room by room from the comfort of theirs.
              </p>
              <p>
                They can view different angles, get a feel for the layout, and take their time experiencing the space virtually.
              </p>
              <p>
                It's the next best thing to being there in person; minus opening your cabinets and closets.
              </p>
              <p>
                This tool helps us attract serious out-of-state buyers and cuts down on unnecessary in-person showings. It's a win win for everyone.
              </p>
              <p className="italic text-foreground">
                Click the play button to your left to see an example.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicMarketingSection;
