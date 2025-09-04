export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  joinDate: string;
  bio?: string;
  location?: string;
  socialLinks?: {
    twitter?: string;
    twitch?: string;
    youtube?: string;
    discord?: string;
  };
  badges: Badge[];
  stats: {
    gamesOwned: number;
    achievements: number;
    friendsCount: number;
    reviewsWritten: number;
    hoursPlayed: number;
  };
  recentActivity: Activity[];
  friends: Friend[];
  gameLibrary: GameLibraryItem[];
  wishlist: WishlistItem[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  earnedDate: string;
}

export interface Activity {
  id: string;
  type: "achievement" | "game_purchase" | "friend_added" | "review_posted" | "level_up" | "tournament_joined";
  title: string;
  description: string;
  timestamp: string;
  game?: {
    id: string;
    name: string;
    image: string;
  };
}

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  level: number;
  status: "online" | "offline" | "in-game" | "away";
  currentGame?: {
    id: string;
    name: string;
  };
  lastOnline?: string;
}

export interface GameLibraryItem {
  id: string;
  name: string;
  image: string;
  hoursPlayed: number;
  lastPlayed?: string;
  achievementsCompleted: number;
  achievementsTotal: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  releaseDate?: string;
  notifyOnSale: boolean;
}

export const currentUser: User = {
  id: "user123",
  username: "Player1",
  email: "player1@example.com",
  avatar: "/avatars/01.png",
  level: 42,
  xp: 8750,
  xpToNextLevel: 10000,
  joinDate: "2021-03-15",
  bio: "Avid gamer with a passion for RPGs and competitive FPS. Always looking for new gaming buddies!",
  location: "New York, USA",
  socialLinks: {
    twitter: "player1gaming",
    twitch: "player1streams",
    discord: "Player1#1234"
  },
  badges: [
    {
      id: "badge1",
      name: "Early Adopter",
      description: "Joined during the platform's beta phase",
      icon: "🌟",
      rarity: "rare",
      earnedDate: "2021-03-15"
    },
    {
      id: "badge2",
      name: "Achievement Hunter",
      description: "Unlocked 1000+ achievements across all games",
      icon: "🏆",
      rarity: "epic",
      earnedDate: "2022-11-20"
    },
    {
      id: "badge3",
      name: "Social Butterfly",
      description: "Connected with 100+ friends",
      icon: "🦋",
      rarity: "uncommon",
      earnedDate: "2022-05-08"
    }
  ],
  stats: {
    gamesOwned: 87,
    achievements: 1243,
    friendsCount: 124,
    reviewsWritten: 32,
    hoursPlayed: 2567
  },
  recentActivity: [
    {
      id: "act1",
      type: "achievement",
      title: "Master Hacker",
      description: "Completed all hacking challenges in Cyberpunk 2077",
      timestamp: "2023-07-12T18:30:00Z",
      game: {
        id: "1",
        name: "Cyberpunk 2077",
        image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    },
    {
      id: "act2",
      type: "game_purchase",
      title: "New Game Added",
      description: "Purchased Baldur's Gate 3",
      timestamp: "2023-07-10T14:15:00Z",
      game: {
        id: "7",
        name: "Baldur's Gate 3",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      }
    },
    {
      id: "act3",
      type: "tournament_joined",
      title: "Tournament Joined",
      description: "Registered for Nexus Championship Series",
      timestamp: "2023-07-08T09:45:00Z"
    },
    {
      id: "act4",
      type: "level_up",
      title: "Level Up!",
      description: "Reached Level 42",
      timestamp: "2023-07-05T21:20:00Z"
    }
  ],
  friends: [
    {
      id: "friend1",
      username: "EldenLord",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      level: 89,
      status: "online",
      currentGame: {
        id: "2",
        name: "Elden Ring"
      }
    },
    {
      id: "friend2",
      username: "CyberWanderer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      level: 42,
      status: "in-game",
      currentGame: {
        id: "1",
        name: "Cyberpunk 2077"
      }
    },
    {
      id: "friend3",
      username: "CosmicVoyager",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      level: 23,
      status: "offline",
      lastOnline: "2023-07-11T20:15:00Z"
    }
  ],
  gameLibrary: [
    {
      id: "1",
      name: "Cyberpunk 2077",
      image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      hoursPlayed: 187,
      lastPlayed: "2023-07-12T18:30:00Z",
      achievementsCompleted: 45,
      achievementsTotal: 60
    },
    {
      id: "2",
      name: "Elden Ring",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      hoursPlayed: 312,
      lastPlayed: "2023-07-09T14:20:00Z",
      achievementsCompleted: 38,
      achievementsTotal: 42
    },
    {
      id: "7",
      name: "Baldur's Gate 3",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      hoursPlayed: 24,
      lastPlayed: "2023-07-11T22:45:00Z",
      achievementsCompleted: 8,
      achievementsTotal: 50
    }
  ],
  wishlist: [
    {
      id: "3",
      name: "Starfield",
      image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: 69.99,
      releaseDate: "2023-09-06",
      notifyOnSale: true
    },
    {
      id: "4",
      name: "God of War Ragnarök",
      image: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      price: 69.99,
      notifyOnSale: true
    }
  ]
};