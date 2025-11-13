export interface Agency {
  id: string;
  name: string;
  logo?: string;
  description: string;
  safetyRating: number; // 1-5
  hasBeltaSeal: boolean;
  rating: number; // 1-5
  reviewCount: number;
  countries: string[];
  programs: string[];
  safetyFeatures: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  address: {
    city: string;
    state: string;
  };
}

export interface Review {
  id: string;
  agencyId: string;
  userName: string;
  rating: number;
  date: string;
  country: string;
  program: string;
  comment: string;
  safetyRating: number;
}
