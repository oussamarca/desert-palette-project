export interface Dish {
  name: string;
  frenchName?: string;
  price: string;
  description: string;
  tags?: string[];
  note?: string;
}

export interface MenuSection {
  title: string;
  subtitle: string;
  dishes: Dish[];
}

export const menuSections: MenuSection[] = [
  {
    title: "Starters",
    subtitle: "Les Entrées",
    dishes: [
      {
        name: "Moroccan Salad",
        frenchName: "Salade Marocaine",
        price: "85 MAD",
        description:
          "Ripe tomatoes, crisp cucumbers, and bell peppers from the Ouarzazate region, dressed in extra virgin olive oil, fresh lemon juice, and chopped parsley. Served on mixed greens with a whisper of cumin and green olive garnish.",
        tags: ["V", "GF"],
      },
      {
        name: "Harira Soup",
        frenchName: "Soupe Harira",
        price: "75 MAD",
        description:
          "The beloved soup of Ramadan—a rich tomato-based broth simmered for hours with lamb, chickpeas, lentils, cinnamon, and fresh ginger. Served with a wedge of lemon and traditional khobz bread.",
      },
      {
        name: "Briouates",
        frenchName: "Triangles Feuilletés",
        price: "95 MAD",
        description:
          "Elegant phyllo triangles concealing spiced minced lamb, almonds, and fresh herbs, fried to a perfect golden crunch. Drizzled with honey and sesame seeds.",
      },
      {
        name: "Zaalouk",
        frenchName: "Salade d'Aubergines",
        price: "70 MAD",
        description:
          "Fire-roasted eggplant mashed with tomatoes, garlic, olive oil, cumin, and fresh coriander. Finished with a luxurious drizzle of argan oil.",
        tags: ["V", "GF"],
      },
      {
        name: "Hummus Royale",
        price: "80 MAD",
        description:
          "Creamy chickpea hummus elevated with roasted red peppers, smoked paprika, and tahini enriched with argan oil. Served with warm khobz and seasonal crudités.",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Tajines",
    subtitle: "Les Tajines — Slow-Cooked in Clay",
    dishes: [
      {
        name: "Chicken with Preserved Lemons & Olives",
        frenchName: "Poulet aux Citrons Confits et Olives",
        price: "165 MAD",
        description:
          "Free-range chicken slowly braised until the meat falls from the bone, absorbing the complex flavors of preserved lemons, green olives, ginger, turmeric, and fresh coriander. Served in its traditional clay tajine.",
        note: "Slow-cooked for 3 hours",
      },
      {
        name: "Lamb with Prunes & Almonds",
        frenchName: "Agneau aux Pruneaux et Amandes",
        price: "195 MAD",
        description:
          "Tender lamb shoulder braised with honey-plumped prunes, toasted almonds, cinnamon, and ginger. A dark, glossy sauce of caramelized natural sugars, garnished with sesame seeds and fresh cilantro.",
        note: "Slow-cooked for 4 hours",
      },
      {
        name: "Beef with Figs & Honey",
        frenchName: "Bœuf aux Figues et Miel",
        price: "185 MAD",
        description:
          "Deeply seared beef simmered with dried figs, saffron, orange blossom honey, and fresh ginger. Toasted pine nuts add textural contrast while fresh thyme provides an aromatic lift.",
        note: "Slow-cooked for 4 hours",
      },
      {
        name: "Vegetable Tajine",
        frenchName: "Tajine aux Légumes",
        price: "130 MAD",
        description:
          "A celebration of seasonal vegetables—artichoke hearts, sweet carrots, turnips, and zucchini—gently braised with saffron, preserved lemons, and a bouquet of fresh herbs. Finished with argan oil.",
        tags: ["V", "GF"],
        note: "Slow-cooked for 2 hours",
      },
    ],
  },
  {
    title: "Couscous",
    subtitle: "Le Couscous — Hand-Rolled & Steamed",
    dishes: [
      {
        name: "Royal Couscous",
        frenchName: "Couscous Royal",
        price: "210 MAD",
        description:
          "The crown jewel of our menu—hand-rolled semolina steamed three times to impossible lightness, served with lamb, chicken, merguez, and a fragrant vegetable broth rich with turnips, chickpeas, and zucchini.",
        note: "Serves 1–2 guests",
      },
      {
        name: "Lamb Couscous",
        frenchName: "Couscous à l'Agneau",
        price: "175 MAD",
        description:
          "Tender slow-braised lamb shank atop fluffy steamed couscous, bathed in a golden broth perfumed with saffron, caramelized onions, and sweet raisins.",
      },
      {
        name: "Seven-Vegetable Couscous",
        frenchName: "Couscous aux Sept Légumes",
        price: "140 MAD",
        description:
          "The traditional Friday dish—seven seasonal vegetables steamed to tender perfection, served over light couscous with a fragrant broth, fresh herbs, and a side of spicy harissa.",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Chef's Specialties",
    subtitle: "Les Spécialités du Chef",
    dishes: [
      {
        name: "Mechoui",
        frenchName: "Agneau Rôti",
        price: "350 MAD",
        description:
          "Whole lamb shoulder slow-roasted for six hours with cumin, butter, and salt until the meat yields to the gentlest touch. Served with cumin salt and fresh bread. A feast meant to be shared.",
        note: "For 2 guests — please allow 6 hours advance notice",
      },
      {
        name: "Pastilla Royale",
        frenchName: "Pastilla au Pigeon",
        price: "220 MAD",
        description:
          "The legendary Moroccan pie—layers of warqa pastry encasing spiced pigeon, toasted almonds, eggs scented with cinnamon and orange blossom water. Dusted with powdered sugar and cinnamon.",
      },
      {
        name: "Grilled Atlas Lamb Chops",
        frenchName: "Côtelettes d'Agneau Grillées",
        price: "240 MAD",
        description:
          "Premium lamb chops from Atlas Mountain flocks, marinated in chermoula with fresh herbs, cumin, and paprika, grilled over charcoal to a perfect medium-rare. Served with roasted vegetables and argan oil.",
        tags: ["GF"],
      },
    ],
  },
  {
    title: "Desserts",
    subtitle: "Les Desserts & Pâtisseries",
    dishes: [
      {
        name: "Pastilla au Lait",
        frenchName: "Pastilla Sucrée",
        price: "85 MAD",
        description:
          "Delicate warqa pastry layered with almond cream, toasted almonds, and a light custard scented with orange blossom water. Dusted with cinnamon and powdered sugar.",
      },
      {
        name: "Moroccan Orange Salad",
        frenchName: "Salade d'Oranges",
        price: "60 MAD",
        description:
          "Sliced oranges arranged with fresh dates, toasted almonds, and a drizzle of orange blossom water, dusted with cinnamon. Simple, refreshing, and perfect.",
        tags: ["V", "GF"],
      },
      {
        name: "Assortment of Moroccan Pastries",
        frenchName: "Plateau de Pâtisseries",
        price: "95 MAD",
        description:
          "A curated selection of traditional pastries—cornes de gazelle, chebakia, ghriba, and makrout—each handcrafted with almonds, honey, and orange blossom water.",
      },
      {
        name: "Mint Tea Service",
        frenchName: "Thé à la Menthe",
        price: "40 MAD",
        description:
          "Chinese gunpowder green tea brewed with generous bunches of fresh spearmint and sugar, poured from height in the traditional ceremony. The soul of Moroccan hospitality.",
        tags: ["V", "GF"],
      },
    ],
  },
];
