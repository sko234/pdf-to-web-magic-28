import couchLaptop from "@/assets/couch-laptop.jpg";

const guarantees = [
  {
    title: "SAME DAY RESPONSE",
    description:
      "Call, text, or email me during normal business hours and you'll hear back the same day. Period.",
  },
  {
    title: "WEEKLY STATUS UPDATE",
    description:
      "You'll never have to wonder what's happening with your listing. I'll send you a detailed update every single week, covering showings, feedback, market shifts, and next-step recommendations.",
  },
  {
    title: "REAL TIME COMPETITION",
    description:
      "You'll have real-time insight into the competition. The moment a nearby property hits the market, goes under contract, or closes, you'll get the update I get — straight to your inbox. No delays.",
  },
];

const CommunicationSection = () => {
  return (
    <section id="communication" className="section-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground uppercase">
            COMMUNICATION <span className="font-script capitalize text-3xl md:text-4xl">guarantee</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {guarantees.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-xs font-sans font-semibold tracking-extrawide uppercase text-primary-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-xs font-sans leading-relaxed text-primary-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Background image accent */}
        <div className="mt-16 overflow-hidden">
          <img src={couchLaptop} alt="" className="w-full h-64 object-cover opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
