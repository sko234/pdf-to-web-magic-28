import meeting from "@/assets/meeting.jpg";

const WelcomeSection = () => {
  return (
    <section className="section-cream">
      {/* Top intro */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 uppercase tracking-wide">
          Forget Everything You Thought You Knew About Realtors.
        </h2>
        <p className="tracking-superwide text-xs font-sans uppercase text-muted-foreground mt-4 mb-8">
          This Is Real Estate, Reinvented.
        </p>
        <div className="max-w-2xl mx-auto space-y-4 text-sm font-sans leading-relaxed text-muted-foreground">
          <p>
            Let's be honest, most people don't expect much from their first listing appointment. A handshake, a canned presentation, a generic pitch that could've been copied and pasted from the agent down the street.
          </p>
          <p>
            Not here. This is a seller experience built for the modern market, and designed entirely around you. From strategy to staging, pricing to promotion, every move is backed by data, executed with precision, and customized to your home's unique story.
          </p>
          <p>
            We don't just list homes. We launch them. With a plan, with purpose, and with results that speak for themselves.
          </p>
          <p className="italic">Welcome to what selling your home should feel like. Let's get started...</p>
        </div>
      </div>

      {/* Tara intro with image */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={meeting}
              alt="Meeting with Tara"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="font-script text-3xl md:text-4xl text-foreground mb-6">
              Hi! I'm Tara. So nice to meet you.
            </h3>
            <div className="space-y-4 text-sm font-sans leading-relaxed text-muted-foreground">
              <p>
                Before we meet for your listing appointment, I've curated this page to give you a transparent look at how I work, what to expect, and the strategies I use to position your home for maximum impact.
              </p>
              <p>
                Think of this as your pre-game walkthrough...designed to give you clarity and confidence as we begin working together.
              </p>
              <p>
                I'll walk you through everything in detail at our appointment, but reviewing this page in advance means we can focus on your questions, your priorities, and your home — not just the basics.
              </p>
              <p>
                So grab a coffee, take a few minutes to explore, and come ready to collaborate.
              </p>
              <p className="italic">I look forward to meeting you in person soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
