interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-12">
    <div className="inline-block relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/50" />
      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary tracking-wide">
        {title}
      </h2>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/50" />
    </div>
    {subtitle && (
      <p className="mt-8 font-body text-muted-foreground text-sm uppercase tracking-[0.3em]">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
