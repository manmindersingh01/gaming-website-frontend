export interface Tournament {
  id: string;
  title: string;
  game: string;
  gameImage: string;
  startDate: string;
  endDate: string;
  prizePool: number;
  status: "upcoming" | "ongoing" | "completed";
  participants: {
    current: number;
    max: number;
  };
  format: string;
  description: string;
  rules?: string[];
  organizer: {
    name: string;
    logo: string;
  };
  location?: string;
  streamLink?: string;
  brackets?: Bracket[];
  sponsors?: Sponsor[];
  featured?: boolean;
}

export interface Bracket {
  round: number;
  matches: Match[];
}

export interface Match {
  id: string;
  team1: {
    name: string;
    logo: string;
    score?: number;
  };
  team2: {
    name: string;
    logo: string;
    score?: number;
  };
  status: "scheduled" | "live" | "completed";
  winner?: "team1" | "team2" | "draw";
  scheduledTime?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
}

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "Nexus Championship Series",
    game: "Valorant",
    gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    startDate: "2023-07-15",
    endDate: "2023-07-17",
    prizePool: 100000,
    status: "ongoing",
    participants: {
      current: 16,
      max: 16
    },
    format: "Double Elimination",
    description: "The premier Valorant tournament featuring the top 16 teams from around the world competing for glory and a massive prize pool.",
    organizer: {
      name: "Nexus Esports",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    streamLink: "https://twitch.tv/nexusesports",
    featured: true
  },
  {
    id: "2",
    title: "Cyber League Season 5",
    game: "League of Legends",
    gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    startDate: "2023-08-01",
    endDate: "2023-08-15",
    prizePool: 250000,
    status: "upcoming",
    participants: {
      current: 12,
      max: 12
    },
    format: "Round Robin + Playoffs",
    description: "The fifth season of the prestigious Cyber League featuring the best League of Legends teams competing in a round-robin format followed by playoffs.",
    organizer: {
      name: "Cyber Esports",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    streamLink: "https://twitch.tv/cyberesports"
  },
  {
    id: "3",
    title: "Battle Royale Showdown",
    game: "Fortnite",
    gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    startDate: "2023-06-10",
    endDate: "2023-06-12",
    prizePool: 75000,
    status: "completed",
    participants: {
      current: 100,
      max: 100
    },
    format: "Battle Royale",
    description: "100 of the best Fortnite players battle it out in a series of matches to determine the ultimate Battle Royale champion.",
    organizer: {
      name: "Epic Gaming",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    streamLink: "https://twitch.tv/epicgaming"
  },
  {
    id: "4",
    title: "Pro Circuit Masters",
    game: "Dota 2",
    gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    startDate: "2023-09-05",
    endDate: "2023-09-10",
    prizePool: 500000,
    status: "upcoming",
    participants: {
      current: 16,
      max: 16
    },
    format: "Group Stage + Single Elimination",
    description: "A prestigious Dota 2 tournament featuring the world's best teams competing for a massive prize pool and glory.",
    organizer: {
      name: "Valve",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    streamLink: "https://twitch.tv/dota2ti",
    featured: true
  },
  {
    id: "5",
    title: "FPS Masters",
    game: "Counter-Strike 2",
    gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    startDate: "2023-07-20",
    endDate: "2023-07-23",
    prizePool: 150000,
    status: "ongoing",
    participants: {
      current: 8,
      max: 8
    },
    format: "Double Elimination",
    description: "The ultimate test of skill for Counter-Strike 2 teams, featuring intense tactical gameplay and high-stakes matches.",
    organizer: {
      name: "ESL",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    streamLink: "https://twitch.tv/esl_csgo"
  }
];

export const featuredTournaments = [
  {
    id: "1",
    title: "Nexus Championship Series",
    game: "Valorant",
    prizePool: 100000,
    startDate: "2023-07-15",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "ongoing"
  },
  {
    id: "4",
    title: "Pro Circuit Masters",
    game: "Dota 2",
    prizePool: 500000,
    startDate: "2023-09-05",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "upcoming"
  }
];