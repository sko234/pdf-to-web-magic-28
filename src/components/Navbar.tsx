import logo from "@/assets/exp-luxury.png";

const navLinks = [
  { label: "HOME", href: "#welcome" },
  { label: "MARKET ANALYSIS", href: "#market" },
  { label: "COMMUNICATION", href: "#communication" },
  { label: "CONNECT", href: "#connect" },
];

const Navbar = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-dark">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <img src={logo} alt="eXp Luxury" className="h-10" />
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[10px] font-sans font-medium tracking-extrawide text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
