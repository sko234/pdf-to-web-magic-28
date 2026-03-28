const testimonials = [
  {
    quote:
      "I hired her to sell my house. I didn't expect a full-blown marketing campaign, a personal therapist, and someone who responds to texts faster than my own kids. 10/10 would panic-sell with her again.",
    author: "BRITANY S.",
  },
  {
    quote:
      "I thought I was just hiring a realtor. Turns out I hired a strategist, a negotiator, a hype woman, and someone who somehow knew what buyers wanted before they even walked in the door. Honestly? I wasn't emotionally prepared for how smooth this was.",
    author: "J. LOPEZ",
  },
  {
    quote: "I don't know what kind of magic she's working, but I'm not asking questions.",
    author: "TAY TAY SWIFT",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-cream py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground uppercase">
            WHAT MY CLIENTS
          </h2>
          <p className="font-script text-3xl md:text-4xl text-foreground -mt-1">
            are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-border p-6 text-center bg-background"
            >
              <p className="text-xs font-sans leading-relaxed text-muted-foreground italic mb-6">
                "{t.quote}"
              </p>
              <p className="text-xs font-sans font-semibold tracking-extrawide text-foreground">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-green">
            Click To See Over 50 Additional Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
