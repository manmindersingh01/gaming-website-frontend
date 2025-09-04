export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    level: number;
    badges?: string[];
  };
  createdAt: string;
  likes: number;
  comments: number;
  tags: string[];
  game?: string;
  media?: {
    type: "image" | "video" | "gallery";
    urls: string[];
  };
  pinned?: boolean;
  featured?: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    level: number;
  };
  createdAt: string;
  likes: number;
  replies?: Comment[];
}

export const communityPosts: Post[] = [
  {
    id: "1",
    title: "Just discovered this amazing Easter egg in Cyberpunk 2077!",
    content: "I was exploring Night City and found a hidden reference to The Witcher 3. If you go to the abandoned mall in Pacifica, there's a store with a poster that has Geralt's sword and the words 'Steel for humans, silver for monsters.' Has anyone else found this?",
    author: {
      id: "user1",
      name: "CyberWanderer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      level: 42,
      badges: ["Cyberpunk Expert", "Easter Egg Hunter"]
    },
    createdAt: "2023-07-10T14:32:00Z",
    likes: 256,
    comments: 78,
    tags: ["Cyberpunk 2077", "Easter Egg", "The Witcher"],
    game: "Cyberpunk 2077",
    media: {
      type: "image",
      urls: ["https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
    },
    featured: true
  },
  {
    id: "2",
    title: "Elden Ring Boss Guide: How to Beat Malenia",
    content: "After 50+ attempts, I finally beat Malenia! Here's my strategy: Use a bleed build with Rivers of Blood katana, focus on dodging her Waterfowl Dance by running away for the first flurry, then dodging into her for the second and third. In phase 2, be patient and only attack after her Scarlet Aeonia dive attack. Good luck, Tarnished!",
    author: {
      id: "user2",
      name: "EldenLord",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      level: 89,
      badges: ["Elden Ring Master", "Guide Creator"]
    },
    createdAt: "2023-07-08T09:15:00Z",
    likes: 1024,
    comments: 312,
    tags: ["Elden Ring", "Boss Guide", "Malenia"],
    game: "Elden Ring",
    pinned: true
  },
  {
    id: "3",
    title: "My Starfield character creation - going for a space explorer vibe!",
    content: "Just spent 2 hours in the character creator and I'm pretty happy with the result! Going for a Han Solo meets The Expanse kind of vibe. Can't wait to explore the galaxy!",
    author: {
      id: "user3",
      name: "CosmicVoyager",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      level: 23
    },
    createdAt: "2023-07-12T18:45:00Z",
    likes: 189,
    comments: 42,
    tags: ["Starfield", "Character Creation", "Screenshots"],
    game: "Starfield",
    media: {
      type: "image",
      urls: ["https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
    }
  },
  {
    id: "4",
    title: "Valorant Tournament Team Recruitment - Diamond+ Players",
    content: "Looking for Diamond+ players to join our team for the upcoming Nexus Championship Series. We need a dedicated Controller and Sentinel main. Must be able to practice 3-4 times a week in the evenings (EST). DM me if interested!",
    author: {
      id: "user4",
      name: "TacticalAim",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      level: 67,
      badges: ["Tournament Veteran", "Team Captain"]
    },
    createdAt: "2023-07-11T21:20:00Z",
    likes: 45,
    comments: 28,
    tags: ["Valorant", "Tournament", "Team Recruitment"],
    game: "Valorant"
  },
  {
    id: "5",
    title: "The state of healers in Baldur's Gate 3 - are they necessary?",
    content: "I'm on my second playthrough of BG3 and I'm finding that having a dedicated healer isn't as necessary as in other RPGs. With food, potions, and short rests, you can get by without a cleric or druid focusing on healing spells. What do you all think? Are healers overrated in this game?",
    author: {
      id: "user5",
      name: "DnDenthusiast",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      level: 51
    },
    createdAt: "2023-07-09T11:05:00Z",
    likes: 312,
    comments: 94,
    tags: ["Baldur's Gate 3", "Strategy", "Party Composition"],
    game: "Baldur's Gate 3"
  }
];

export const trendingTopics = [
  { name: "Starfield Ship Builds", posts: 1243 },
  { name: "Elden Ring DLC Speculation", posts: 876 },
  { name: "Baldur's Gate 3 Romance Options", posts: 754 },
  { name: "Cyberpunk 2077 Phantom Liberty", posts: 621 },
  { name: "Valorant New Agent", posts: 543 }
];

export const communityGroups = [
  { 
    name: "RPG Enthusiasts", 
    members: 12500, 
    description: "A community for fans of role-playing games to discuss strategies, builds, and stories.",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  },
  { 
    name: "Competitive FPS Squad", 
    members: 8750, 
    description: "Dedicated to improving skills in competitive first-person shooters.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  { 
    name: "Game Developers United", 
    members: 5320, 
    description: "A place for aspiring and professional game developers to share knowledge and resources.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];