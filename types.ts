
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Services = 'services',
  WhyChooseUs = 'why-choose-us',
  HowItWorks = 'how-it-works',
  Testimonials = 'testimonials',
  Contact = 'contact'
}
