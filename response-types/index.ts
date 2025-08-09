export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  company?: string;
  title?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'entrepreneur' | 'mentor' | 'investor' | 'talent' | 'partner';

export interface Startup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  stage: StartupStage;
  location: string;
  employees: string;
  funding: string;
  founded: string;
  website: string;
  logo: string;
  tags: string[];
  founderId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type StartupStage = 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Growth';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  attendees: number;
  price: string;
  status: EventStatus;
  image?: string;
  organizerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type EventType = 'Networking' | 'Conference' | 'Workshop' | 'Hackathon' | 'Pitch Event';
export type EventStatus = 'Open' | 'Filling Fast' | 'Sold Out' | 'Cancelled';

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  rating: number;
}