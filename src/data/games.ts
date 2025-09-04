export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  genre: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  price: number;
  discount?: number;
  rating: number;
  platforms: string[];
  tags: string[];
  features: string[];
  screenshots: string[];
  videos?: string[];
  systemRequirements?: SystemRequirements;
  dlc?: DLC[];
  achievements?: Achievement[];
  reviews?: Review[];
  playerCount?: {
    online: number;
    trending: boolean;
  };
}

export interface SystemRequirements {
  minimum: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  recommended: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

export interface DLC {
  id: string;
  name: string;
  description: string;
  price: number;
  releaseDate: string;
  coverImage: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  unlockPercentage: number;
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

export const games: Game[] = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
    coverImage: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    genre: ["RPG", "Action", "Open World"],
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    price: 59.99,
    discount: 33,
    rating: 4.2,
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    tags: ["Cyberpunk", "Futuristic", "First-Person", "Story Rich"],
    features: ["Single-player", "Ray Tracing", "Controller Support", "HDR"],
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    playerCount: {
      online: 45678,
      trending: true
    }
  },
  {
    id: "2",
    title: "Elden Ring",
    description: "Elden Ring is an action RPG that takes place in the Lands Between, a realm ruled by demigods who possess fragments of the shattered Elden Ring.",
    coverImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    genre: ["Action RPG", "Open World", "Souls-like"],
    releaseDate: "2022-02-25",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    price: 59.99,
    rating: 4.8,
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    tags: ["Dark Fantasy", "Difficult", "Atmospheric", "Exploration"],
    features: ["Single-player", "Online Co-op", "Online PvP", "Controller Support"],
    screenshots: [
      "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    playerCount: {
      online: 89432,
      trending: true
    }
  },
  {
    id: "3",
    title: "Starfield",
    description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
    coverImage: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    genre: ["RPG", "Open World", "Sci-Fi"],
    releaseDate: "2023-09-06",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    price: 69.99,
    rating: 4.5,
    platforms: ["PC", "Xbox Series X/S"],
    tags: ["Space", "Exploration", "Futuristic", "Sandbox"],
    features: ["Single-player", "Character Customization", "Base Building", "Crafting"],
    screenshots: [
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    playerCount: {
      online: 67890,
      trending: true
    }
  },
  {
    id: "4",
    title: "God of War Ragnarök",
    description: "God of War Ragnarök is an action-adventure game that continues the story of Kratos and his son Atreus as they face the impending Ragnarök.",
    coverImage: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    genre: ["Action-Adventure", "Hack and Slash"],
    releaseDate: "2022-11-09",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    price: 69.99,
    rating: 4.9,
    platforms: ["PlayStation 5", "PlayStation 4"],
    tags: ["Norse Mythology", "Story Rich", "Third-Person", "Action"],
    features: ["Single-player", "HDR", "Controller Support", "4K Support"],
    screenshots: [
      "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    playerCount: {
      online: 34567,
      trending: false
    }
  },
  {
    id: "5",
    title: "Hogwarts Legacy",
    description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books.",
    coverImage: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    genre: ["Action RPG", "Open World", "Fantasy"],
    releaseDate: "2023-02-10",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    price: 59.99,
    discount: 15,
    rating: 4.4,
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    tags: ["Magic", "Wizarding World", "Adventure", "Fantasy"],
    features: ["Single-player", "Character Customization", "Exploration", "Magic System"],
    screenshots: [
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    ],
    playerCount: {
      online: 56789,
      trending: true
    }
  },
  {
    id: "6",
    title: "The Legend of Zelda: Tears of the Kingdom",
    description: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild, taking place in an expanded version of Hyrule.",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    genre: ["Action-Adventure", "Open World"],
    releaseDate: "2023-05-12",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    price: 69.99,
    rating: 4.9,
    platforms: ["Nintendo Switch"],
    tags: ["Fantasy", "Exploration", "Puzzle", "Adventure"],
    features: ["Single-player", "Physics-Based Gameplay", "Crafting", "Paragliding"],
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    ],
    playerCount: {
      online: 78901,
      trending: true
    }
  },
  {
    id: "7",
    title: "Baldur's Gate 3",
    description: "Baldur's Gate 3 is a role-playing video game that is the third main installment in the Baldur's Gate series, based on the Dungeons & Dragons tabletop role-playing system.",
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    genre: ["RPG", "Turn-Based", "Fantasy"],
    releaseDate: "2023-08-03",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    price: 59.99,
    rating: 4.8,
    platforms: ["PC", "PlayStation 5", "Mac"],
    tags: ["D&D", "Party-Based", "Turn-Based Combat", "Character Customization"],
    features: ["Single-player", "Online Co-op", "Character Creation", "Choices Matter"],
    screenshots: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    playerCount: {
      online: 123456,
      trending: true
    }
  },
  {
    id: "8",
    title: "Final Fantasy XVI",
    description: "Final Fantasy XVI is an action role-playing game set in the fantasy world of Valisthea, a land blessed with Mothercrystals that grant magic and power to the realms around them.",
    coverImage: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    genre: ["Action RPG", "Fantasy"],
    releaseDate: "2023-06-22",
    developer: "Square Enix",
    publisher: "Square Enix",
    price: 69.99,
    rating: 4.6,
    platforms: ["PlayStation 5"],
    tags: ["Fantasy", "Action Combat", "Story Rich", "Cinematic"],
    features: ["Single-player", "HDR", "4K Support", "DualSense Support"],
    screenshots: [
      "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    playerCount: {
      online: 45678,
      trending: false
    }
  }
];

export const featuredGames = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    description: "An open-world, action-adventure RPG set in the megalopolis of Night City",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    discount: 33,
    price: 59.99,
    tags: ["RPG", "Open World", "Cyberpunk"]
  },
  {
    id: "2",
    title: "Elden Ring",
    description: "An action RPG that takes place in the Lands Between, a realm ruled by demigods",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 59.99,
    tags: ["Action RPG", "Open World", "Souls-like"]
  },
  {
    id: "7",
    title: "Baldur's Gate 3",
    description: "A role-playing video game based on the Dungeons & Dragons tabletop system",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 59.99,
    tags: ["RPG", "Turn-Based", "Fantasy"]
  }
];

export const upcomingGames = [
  {
    id: "101",
    title: "Dragon Age: The Veilguard",
    releaseDate: "2024-10-31",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    developer: "BioWare",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"]
  },
  {
    id: "102",
    title: "Star Wars Outlaws",
    releaseDate: "2024-08-30",
    image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    developer: "Massive Entertainment",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"]
  },
  {
    id: "103",
    title: "Fable",
    releaseDate: "2025-01-15",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    developer: "Playground Games",
    platforms: ["PC", "Xbox Series X/S"]
  }
];

export const popularGenres = [
  { name: "Action RPG", count: 245, icon: "⚔️" },
  { name: "First-Person Shooter", count: 189, icon: "🔫" },
  { name: "Open World", count: 167, icon: "🌍" },
  { name: "Strategy", count: 132, icon: "♟️" },
  { name: "Survival", count: 98, icon: "🏕️" },
  { name: "Horror", count: 87, icon: "👻" },
  { name: "Racing", count: 76, icon: "🏎️" },
  { name: "Simulation", count: 65, icon: "🧪" }
];