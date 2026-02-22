interface DishCardProps {
  name: string;
  frenchName?: string;
  price: string;
  description: string;
  tags?: string[];
  note?: string;
}

const DishCard = ({ name, frenchName, price, description, tags, note }: DishCardProps) => (
  <div className="group py-6 border-b border-border/50 last:border-b-0">
    <div className="flex items-baseline justify-between gap-4 mb-2">
      <div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-secondary">
          {name}
        </h3>
        {frenchName && (
          <span className="font-heading text-sm italic text-muted-foreground">
            {frenchName}
          </span>
        )}
      </div>
      <span className="font-body text-lg font-light text-accent whitespace-nowrap">
        {price}
      </span>
    </div>
    <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl">
      {description}
    </p>
    {note && (
      <p className="font-body text-xs italic text-copper mt-2">{note}</p>
    )}
    {tags && tags.length > 0 && (
      <div className="flex gap-2 mt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[10px] uppercase tracking-widest text-sage border border-sage/30 rounded-sm px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default DishCard;
