export interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
  category: "games" | "dlc" | "hardware" | "merchandise" | "giftcards";
  tags: string[];
  rating: number;
  releaseDate?: string;
  publisher?: string;
  platform?: string[];
  inStock: boolean;
  featured?: boolean;
}

export const storeItems: StoreItem[] = [
  {
    id: "1",
    name: "Cyberpunk 2077",
    description: "An open-world, action-adventure RPG set in the megalopolis of Night City",
    price: 59.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "games",
    tags: ["RPG", "Open World", "Cyberpunk"],
    rating: 4.2,
    releaseDate: "2020-12-10",
    publisher: "CD Projekt",
    platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Phantom Liberty DLC",
    description: "The spy-thriller expansion for Cyberpunk 2077 featuring a new district and storyline",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "dlc",
    tags: ["RPG", "Expansion", "Cyberpunk"],
    rating: 4.7,
    releaseDate: "2023-09-26",
    publisher: "CD Projekt",
    platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
    inStock: true
  },
  {
    id: "3",
    name: "Gaming Headset Pro",
    description: "Premium gaming headset with 7.1 surround sound and noise-cancelling microphone",
    price: 129.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    category: "hardware",
    tags: ["Headset", "Audio", "Accessories"],
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Elden Ring T-Shirt",
    description: "Official Elden Ring t-shirt featuring the Erdtree design",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "merchandise",
    tags: ["Clothing", "Elden Ring", "Apparel"],
    rating: 4.8,
    inStock: true
  },
  {
    id: "5",
    name: "$50 Steam Gift Card",
    description: "Digital gift card for Steam - perfect for gifting games to friends",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
    category: "giftcards",
    tags: ["Gift Card", "Digital", "Steam"],
    rating: 5.0,
    inStock: true
  },
  {
    id: "6",
    name: "Baldur's Gate 3",
    description: "A role-playing video game based on the Dungeons & Dragons tabletop system",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "games",
    tags: ["RPG", "Turn-Based", "Fantasy"],
    rating: 4.8,
    releaseDate: "2023-08-03",
    publisher: "Larian Studios",
    platform: ["PC", "PlayStation 5", "Mac"],
    inStock: true,
    featured: true
  },
  {
    id: "7",
    name: "Mechanical Gaming Keyboard",
    description: "RGB mechanical keyboard with customizable switches and macro keys",
    price: 149.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
    category: "hardware",
    tags: ["Keyboard", "Peripherals", "RGB"],
    rating: 4.6,
    inStock: true
  },
  {
    id: "8",
    name: "Starfield Collector's Edition",
    description: "Limited collector's edition including the game, artbook, steelbook case, and exclusive in-game items",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "games",
    tags: ["RPG", "Collector's Edition", "Sci-Fi"],
    rating: 4.9,
    releaseDate: "2023-09-06",
    publisher: "Bethesda Softworks",
    platform: ["PC", "Xbox Series X/S"],
    inStock: false
  }
];

export const featuredStoreItems = [
  {
    id: "1",
    name: "Cyberpunk 2077",
    price: 59.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "games"
  },
  {
    id: "3",
    name: "Gaming Headset Pro",
    price: 129.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    category: "hardware"
  },
  {
    id: "6",
    name: "Baldur's Gate 3",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "games"
  }
];

export const storeCategories = [
  { name: "Games", count: 1245, icon: "🎮" },
  { name: "DLC & Add-ons", count: 567, icon: "📦" },
  { name: "Hardware", count: 189, icon: "🖱️" },
  { name: "Merchandise", count: 324, icon: "👕" },
  { name: "Gift Cards", count: 42, icon: "🎁" }
];