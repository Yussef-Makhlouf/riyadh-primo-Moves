export interface ServiceCard {
  name: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface ServicesData {
  title: string;
  description: string;
  services: ServiceCard[];
}

export interface District {
  title: string;
  areas: string[];
}

export interface DistrictsData {
  north: District;
  east: District;
  west: District;
  south: District;
}

export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQData {
  questions: FAQQuestion[];
}
