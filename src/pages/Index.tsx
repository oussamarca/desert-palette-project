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

        {/* Footer */}
        <footer className="border-t border-border/30 py-16 text-center">
          <p className="font-heading text-3xl text-secondary mb-2">La Datte d'Or</p>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Ouarzazate, Morocco
          </p>
          <div className="flex items-center justify-center gap-3 text-muted-foreground/50">
            <span className="h-px w-8 bg-primary/20" />
            <span className="text-primary/40 text-xs">◆</span>
            <span className="h-px w-8 bg-primary/20" />
          </div>
          <p className="mt-6 font-body text-xs text-muted-foreground/60">
            Reservations: +212 524 000 000 · info@ladattedor.ma
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
