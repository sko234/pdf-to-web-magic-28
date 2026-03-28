import bedroom from "@/assets/bedroom.jpg";
import playbook from "@/assets/playbook.png";
import kitchen from "@/assets/kitchen.jpg";

const strategies = [
  {
    image: bedroom,
    title: "THE INTELLIGENCE REPORT",
    subtitle: "",
    description:
      "Our strategy starts with research, not gut instinct. We analyze market trends, buyer demand, and neighborhood activity to set the foundation for a smart, customized listing plan.",
  },
  {
    image: playbook,
    title: "THE ULTIMATE SELLER PLAYBOOK",
    subtitle: "",
    description:
      "Your exclusive look at what goes on behind the scenes, from pricing to promotion, to closing day. Our modern, methodical approach to prepping, positioning, and launching your home with purpose.",
  },
  {
    image: kitchen,
    title: "CONCIERGE LEVEL IMPLEMENTATION",
    subtitle: "",
    description:
      "Think of me as your project manager with a real estate license. From carpet cleaning to power washing and everything in between, I'll connect you with trusted vendors so you don't have to lift a finger.",
  },
];

const ListingStrategySection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground uppercase">
            LISTING <span className="font-script capitalize text-3xl md:text-4xl">Strategy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((item, i) => (
            <div key={i} className="text-center">
              <div className="mb-6 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              <h3 className="text-xs font-sans font-semibold tracking-extrawide uppercase mb-4 text-foreground">
                {item.title}
              </h3>
              <p className="text-xs font-sans leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingStrategySection;
