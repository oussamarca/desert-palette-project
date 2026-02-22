import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import DishCard from "@/components/DishCard";
import MenuDivider from "@/components/MenuDivider";
import { menuSections } from "@/data/menuData";
import patternBg from "@/assets/pattern-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <div className="relative">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-20">
          {menuSections.map((section, idx) => (
            <section key={section.title} className="mb-16 last:mb-0">
              {idx > 0 && <MenuDivider />}
              <div className="mt-8">
                <SectionHeader title={section.title} subtitle={section.subtitle} />
                <div>
                  {section.dishes.map((dish) => (
                    <DishCard key={dish.name} {...dish} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Reserve a Table Section */}
        <section className="border-t border-border/30 py-16 px-6">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-3">Reserve a Table</h2>
                <p className="font-body text-muted-foreground mb-8">
                  Tell us your preferred time — we'll confirm quickly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+212600000000"
                    className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground font-body text-sm px-6 py-3 hover:bg-secondary/90 transition-colors"
                  >
                    Book for tonight
                  </a>
                  <a
                    href="tel:+212600000000"
                    className="inline-flex items-center justify-center rounded-full border border-border font-body text-sm px-6 py-3 text-foreground hover:bg-accent transition-colors"
                  >
                    Call the restaurant
                  </a>
                </div>
              </div>
              <div className="space-y-0">
                {[
                  { label: "Hours", value: "Daily · 06:30 – 00:00" },
                  { label: "Phone", value: "0661767466" },
                  { label: "Address", value: "Ouarzazate, Morocco" },
                  { label: "Dress", value: "Desert chic" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-4 border-b border-border/30 last:border-b-0">
                    <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-body text-sm text-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground/50 mb-4">
            <span className="h-px w-8 bg-primary/20" />
            <span className="text-primary/40 text-xs">◆</span>
            <span className="h-px w-8 bg-primary/20" />
          </div>
          <p className="font-heading text-2xl text-secondary mb-1">La Datte d'Or</p>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            Ouarzazate, Morocco
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
