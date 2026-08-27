// Om Parkash Namkeens — product catalogue (editable source of truth).
// The page also inlines this data as window.__CATALOGUE.
export const CATEGORIES = [
  {
    "id": "sev-and-bhujia",
    "name": "Sev & Bhujia",
    "order": 1,
    "expectedCount": 8,
    "count": 8,
    "connected": 8
  },
  {
    "id": "signature-mixtures",
    "name": "Signature Mixtures",
    "order": 2,
    "expectedCount": 14,
    "count": 14,
    "connected": 14
  },
  {
    "id": "traditional-crunchies",
    "name": "Traditional Crunchies",
    "order": 3,
    "expectedCount": 10,
    "count": 10,
    "connected": 10
  },
  {
    "id": "dal-peas-and-roasted-snacks",
    "name": "Dal, Peas & Roasted Snacks",
    "order": 4,
    "expectedCount": 9,
    "count": 9,
    "connected": 9
  },
  {
    "id": "boondi",
    "name": "Boondi",
    "order": 5,
    "expectedCount": 2,
    "count": 2,
    "connected": 2
  },
  {
    "id": "chips",
    "name": "Chips",
    "order": 6,
    "expectedCount": 2,
    "count": 2,
    "connected": 2
  }
];

export const PRODUCTS = [
  {
    "id": "aaloo-bhujia",
    "slug": "aaloo-bhujia",
    "name": "Aaloo Bhujia",
    "category": "Sev & Bhujia",
    "imageFilename": "aaloo-bhujia.webp",
    "image": "assets/products/aaloo-bhujia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Fine, spiced potato-and-gram-flour sev with a light, everyday crunch."
  },
  {
    "id": "ajwain-sev",
    "slug": "ajwain-sev",
    "name": "Ajwain Sev",
    "category": "Sev & Bhujia",
    "imageFilename": "ajwain-sev.webp",
    "image": "assets/products/ajwain-sev.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp gram-flour sev seasoned with fragrant ajwain (carom)."
  },
  {
    "id": "bhalla",
    "slug": "bhalla",
    "name": "Bhalla",
    "category": "Traditional Crunchies",
    "imageFilename": "bhalla.webp",
    "image": "assets/products/bhalla.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Traditional deep-fried lentil crunchies \u2014 savoury and crisp."
  },
  {
    "id": "bhojpuri-mix",
    "slug": "bhojpuri-mix",
    "name": "Bhojpuri Mix",
    "category": "Signature Mixtures",
    "imageFilename": "bhojpuri-mix.webp",
    "image": "assets/products/bhojpuri-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A bold, spicy blend of sev, lentils and crunchy bits."
  },
  {
    "id": "bikaneri-bhujia",
    "slug": "bikaneri-bhujia",
    "name": "Bikaneri Bhujia",
    "category": "Sev & Bhujia",
    "imageFilename": "bikaneri-bhujia.webp",
    "image": "assets/products/bikaneri-bhujia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Classic Bikaneri-style bhujia \u2014 thin, crisp and moreish."
  },
  {
    "id": "bombay-mix",
    "slug": "bombay-mix",
    "name": "Bombay Mix",
    "category": "Signature Mixtures",
    "imageFilename": "bombay-mix.webp",
    "image": "assets/products/bombay-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "The all-time favourite mix of sev, nuts and savoury crunchies."
  },
  {
    "id": "chameli-mix",
    "slug": "chameli-mix",
    "name": "Chameli Mix",
    "category": "Signature Mixtures",
    "imageFilename": "chameli-mix.webp",
    "image": "assets/products/chameli-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A light, delicate house blend of sev and savouries."
  },
  {
    "id": "chana-jor",
    "slug": "chana-jor",
    "name": "Chana Jor",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "chana-jor.webp",
    "image": "assets/products/chana-jor.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Flattened, spiced roasted gram with a satisfying crunch."
  },
  {
    "id": "disco-mix",
    "slug": "disco-mix",
    "name": "Disco Mix",
    "category": "Signature Mixtures",
    "imageFilename": "disco-mix.webp",
    "image": "assets/products/disco-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A lively party mix of assorted crunchy namkeen."
  },
  {
    "id": "fafda-mix",
    "slug": "fafda-mix",
    "name": "Fafda Mix",
    "category": "Signature Mixtures",
    "imageFilename": "fafda-mix.webp",
    "image": "assets/products/fafda-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Gujarati fafda pieces tossed through a savoury mix."
  },
  {
    "id": "fafda",
    "slug": "fafda",
    "name": "Fafda",
    "category": "Traditional Crunchies",
    "imageFilename": "fafda.webp",
    "image": "assets/products/fafda.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp, Gujarati-style gram-flour fafda strips."
  },
  {
    "id": "gathia-mix",
    "slug": "gathia-mix",
    "name": "Gathia Mix",
    "category": "Signature Mixtures",
    "imageFilename": "gathia-mix.webp",
    "image": "assets/products/gathia-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Soft-crisp gathia in a moreish namkeen blend."
  },
  {
    "id": "gathia",
    "slug": "gathia",
    "name": "Gathia",
    "category": "Traditional Crunchies",
    "imageFilename": "gathia.webp",
    "image": "assets/products/gathia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Thick, soft-crunch gram-flour gathia."
  },
  {
    "id": "green-moong-dal",
    "slug": "green-moong-dal",
    "name": "Green Moong Dal",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "green-moong-dal.webp",
    "image": "assets/products/green-moong-dal.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp roasted green moong dal, lightly salted."
  },
  {
    "id": "green-pea",
    "slug": "green-pea",
    "name": "Green Pea",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "green-pea.webp",
    "image": "assets/products/green-pea.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crunchy roasted green peas with a hint of spice."
  },
  {
    "id": "kaju",
    "slug": "kaju",
    "name": "Kaju",
    "category": "Traditional Crunchies",
    "imageFilename": "kaju.webp",
    "image": "assets/products/kaju.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A rich, crunchy kaju-style namkeen \u2014 a house favourite."
  },
  {
    "id": "khatha-meetha-bhujia",
    "slug": "khatha-meetha-bhujia",
    "name": "Khatta Meetha Bhujia",
    "category": "Signature Mixtures",
    "imageFilename": "khatha-meetha-bhujia.webp",
    "image": "assets/products/khatha-meetha-bhujia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "The classic sweet, sour and spicy khatta-meetha mixture."
  },
  {
    "id": "kofta",
    "slug": "kofta",
    "name": "Kofta",
    "category": "Traditional Crunchies",
    "imageFilename": "kofta.webp",
    "image": "assets/products/kofta.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Round, savoury fried namkeen bites."
  },
  {
    "id": "laccha-mix",
    "slug": "laccha-mix",
    "name": "Laccha Mix",
    "category": "Signature Mixtures",
    "imageFilename": "laccha-mix.webp",
    "image": "assets/products/laccha-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp laccha strands blended into a savoury mix."
  },
  {
    "id": "laccha",
    "slug": "laccha",
    "name": "Laccha",
    "category": "Traditional Crunchies",
    "imageFilename": "laccha.webp",
    "image": "assets/products/laccha.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp, tangled strands of fried gram-flour laccha."
  },
  {
    "id": "lasan-sev",
    "slug": "lasan-sev",
    "name": "Lasan Sev",
    "category": "Sev & Bhujia",
    "imageFilename": "lasan-sev.webp",
    "image": "assets/products/lasan-sev.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Bold, garlic-flavoured crisp sev."
  },
  {
    "id": "light-mix",
    "slug": "light-mix",
    "name": "Light Mix",
    "category": "Signature Mixtures",
    "imageFilename": "light-mix.webp",
    "image": "assets/products/light-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A lighter, mild everyday namkeen mix."
  },
  {
    "id": "lite-mix",
    "slug": "lite-mix",
    "name": "Lite Mix",
    "category": "Signature Mixtures",
    "imageFilename": "lite-mix.webp",
    "image": "assets/products/lite-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A crisp, easy-going mix for everyday snacking."
  },
  {
    "id": "malai-bhujia",
    "slug": "malai-bhujia",
    "name": "Malai Bhujia",
    "category": "Sev & Bhujia",
    "imageFilename": "malai-bhujia.webp",
    "image": "assets/products/malai-bhujia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Smooth, mild bhujia with a rich, creamy character."
  },
  {
    "id": "masala-channa",
    "slug": "masala-channa",
    "name": "Masala Channa",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "masala-channa.webp",
    "image": "assets/products/masala-channa.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Spiced roasted chana \u2014 protein-rich and moreish."
  },
  {
    "id": "masala-chips",
    "slug": "masala-chips",
    "name": "Masala Chips",
    "category": "Chips",
    "imageFilename": "masala-chips.webp",
    "image": "assets/products/masala-chips.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp potato chips with a bold masala coating."
  },
  {
    "id": "masala-pakooda",
    "slug": "masala-pakooda",
    "name": "Masala Pakooda",
    "category": "Traditional Crunchies",
    "imageFilename": "masala-pakooda.webp",
    "image": "assets/products/masala-pakooda.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Spiced, crunchy gram-flour pakoda bites."
  },
  {
    "id": "methi-sev",
    "slug": "methi-sev",
    "name": "Methi Sev",
    "category": "Sev & Bhujia",
    "imageFilename": "methi-sev.webp",
    "image": "assets/products/methi-sev.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp sev with the gentle bitterness of fenugreek."
  },
  {
    "id": "millet-mix",
    "slug": "millet-mix",
    "name": "Millet Mix",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "millet-mix.webp",
    "image": "assets/products/millet-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A wholesome roasted millet-and-lentil mix."
  },
  {
    "id": "moong-dal",
    "slug": "moong-dal",
    "name": "Moong Dal",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "moong-dal.webp",
    "image": "assets/products/moong-dal.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Classic crisp fried moong dal, lightly salted."
  },
  {
    "id": "moong-jor",
    "slug": "moong-jor",
    "name": "Moong Jor",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "moong-jor.webp",
    "image": "assets/products/moong-jor.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Spiced, flattened moong with a crunchy bite."
  },
  {
    "id": "mota-mix",
    "slug": "mota-mix",
    "name": "Mota Mix",
    "category": "Signature Mixtures",
    "imageFilename": "mota-mix.webp",
    "image": "assets/products/mota-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A hearty mix with bigger, crunchier pieces."
  },
  {
    "id": "nav-rattan",
    "slug": "nav-rattan",
    "name": "Nav Rattan",
    "category": "Signature Mixtures",
    "imageFilename": "nav-rattan.webp",
    "image": "assets/products/nav-rattan.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A nine-treasure blend of assorted premium namkeen."
  },
  {
    "id": "panch-rattan",
    "slug": "panch-rattan",
    "name": "Panch Rattan",
    "category": "Signature Mixtures",
    "imageFilename": "panch-rattan.webp",
    "image": "assets/products/panch-rattan.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A five-treasure mix of assorted savoury delights."
  },
  {
    "id": "paneer-bhujia",
    "slug": "paneer-bhujia",
    "name": "Paneer Bhujia",
    "category": "Sev & Bhujia",
    "imageFilename": "paneer-bhujia.webp",
    "image": "assets/products/paneer-bhujia.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 100,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 200,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 400,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Rich, savoury bhujia with a soft paneer-style flavour."
  },
  {
    "id": "plain-boondi",
    "slug": "plain-boondi",
    "name": "Plain Boondi",
    "category": "Boondi",
    "imageFilename": "plain-boondi.webp",
    "image": "assets/products/plain-boondi.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Fine, crisp gram-flour boondi \u2014 lightly salted."
  },
  {
    "id": "plain-pakooda",
    "slug": "plain-pakooda",
    "name": "Plain Pakooda",
    "category": "Traditional Crunchies",
    "imageFilename": "plain-pakooda.webp",
    "image": "assets/products/plain-pakooda.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Lightly salted, crunchy gram-flour pakoda bites."
  },
  {
    "id": "pudina-boondi",
    "slug": "pudina-boondi",
    "name": "Pudina Boondi",
    "category": "Boondi",
    "imageFilename": "pudina-boondi.webp",
    "image": "assets/products/pudina-boondi.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Crisp boondi with refreshing mint (pudina)."
  },
  {
    "id": "salted-chips",
    "slug": "salted-chips",
    "name": "Salted Chips",
    "category": "Chips",
    "imageFilename": "salted-chips.webp",
    "image": "assets/products/salted-chips.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 100,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 200,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 400,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Classic crisp, lightly salted potato chips."
  },
  {
    "id": "sing-dana",
    "slug": "sing-dana",
    "name": "Sing Dana",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "sing-dana.webp",
    "image": "assets/products/sing-dana.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Roasted, spiced peanuts \u2014 a timeless favourite."
  },
  {
    "id": "soyabean-mix",
    "slug": "soyabean-mix",
    "name": "Soyabean Mix",
    "category": "Dal, Peas & Roasted Snacks",
    "imageFilename": "soyabean-mix.webp",
    "image": "assets/products/soyabean-mix.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A crunchy, protein-rich roasted soya mix."
  },
  {
    "id": "tasty-crunchy-munchy",
    "slug": "tasty-crunchy-munchy",
    "name": "Tasty Crunchy Munchy",
    "category": "Traditional Crunchies",
    "imageFilename": "tasty-crunchy-munchy.webp",
    "image": "assets/products/tasty-crunchy-munchy.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A fun, crunchy everyday munching mix."
  },
  {
    "id": "tiranga",
    "slug": "tiranga",
    "name": "Tiranga",
    "category": "Signature Mixtures",
    "imageFilename": "tiranga.webp",
    "image": "assets/products/tiranga.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "A tricolour medley of assorted crunchy namkeen."
  },
  {
    "id": "zeera-sev",
    "slug": "zeera-sev",
    "name": "Zeera Sev",
    "category": "Sev & Bhujia",
    "imageFilename": "zeera-sev.webp",
    "image": "assets/products/zeera-sev.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Light, crisp sev seasoned with roasted cumin."
  },
  {
    "id": "masala-kaju",
    "slug": "masala-kaju",
    "name": "Masala Kaju",
    "category": "Traditional Crunchies",
    "imageFilename": "masala-kaju.webp",
    "image": "assets/products/masala-kaju.webp",
    "imageConnected": true,
    "price": null,
    "packSizes": [
      {
        "label": "250 g",
        "price": 70,
        "stockStatus": "in-stock"
      },
      {
        "label": "500 g",
        "price": 130,
        "stockStatus": "in-stock"
      },
      {
        "label": "1 kg",
        "price": 250,
        "stockStatus": "in-stock"
      }
    ],
    "stockStatus": "in-stock",
    "featured": false,
    "bestseller": false,
    "ingredients": null,
    "allergens": null,
    "shelfLife": "Approximately 3 months from packing.",
    "shortDescription": "Spiced, crunchy kaju-style namkeen with a masala kick."
  }
];

export const productsByCategory = (name) => PRODUCTS.filter(p => p.category === name);
export const categoryCount = (name) => PRODUCTS.filter(p => p.category === name).length;
export const findProduct = (slug) => PRODUCTS.find(p => p.slug === slug);
export const WHATSAPP = '+91 93568 50599';
