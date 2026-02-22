import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 text-center px-6 animate-fade-in">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="h-px w-16 bg-primary/60" />
        <span className="font-body text-xs uppercase tracking-[0.4em] text-primary animate-glow-pulse">
          Ouarzazate, Morocco
        </span>
        <span className="h-px w-16 bg-primary/60" />
      </div>
      <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-primary-foreground tracking-wide">
        La Datte d'Or
      </h1>
      <p className="mt-6 font-heading text-lg md:text-xl italic text-primary-foreground/80 tracking-wide">
        Gateway to Saharan Luxury
      </p>
      <div className="mt-10 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary/40" />
        <span className="text-primary text-sm">◆</span>
        <span className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          Authentic Moroccan Fine Dining
        </span>
        <span className="text-primary text-sm">◆</span>
        <span className="h-px w-8 bg-primary/40" />
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
      <div className="w-5 h-8 border border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
        <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-glow-pulse" />
      </div>
    </div>
  </section>
);

export default HeroSection;
