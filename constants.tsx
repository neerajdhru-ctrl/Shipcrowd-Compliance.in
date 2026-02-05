
import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Leaf, 
  Building2, 
  Utensils, 
  ScrollText, 
  RefreshCw, 
  Lightbulb,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Service, NavItem, Testimonial } from './types';

export const BRAND_NAME = 'Shipcrowd Compliance';
export const CONTACT_EMAIL = 'compliance@shipcrowd.in';
export const CONTACT_PHONES = ['+91 78386 57648', '+91 80530 44612'];
export const WHATSAPP_NUMBER = '917838657648';

// Branding Logo (PNG with transparency)
export const LOGO_URL = 'https://img.sanishtech.com/u/6f9d3207cca425caf2ac28499dcf87d1.png';

// Trust and Reliability Image (JPG professional visual)
export const RELIABILITY_IMAGE_URL = 'https://img.sanishtech.com/u/82e9be1eb1230f8eb0439a501c366f7d.jpg';

// Why Choose Us Section Image
export const TRUST_PARTNERS_IMAGE_URL = 'https://img.sanishtech.com/u/cb8224f3a9f46cc877b86458142beae3.jpg';

// Indian Professional for Testimonials Counter Section
export const INDIAN_PROFESSIONAL_IMAGE_URL = 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1000&auto=format&fit=crop';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'bis',
    title: 'BIS Certification Assistance',
    description: 'Complete support for obtaining Bureau of Indian Standards (BIS) approvals for domestic and international manufacturers.',
    icon: 'ShieldCheck'
  },
  {
    id: 'iso',
    title: 'ISO Certification Support',
    description: 'Expert guidance for ISO 9001, 14001, 27001, and other industry-standard certifications to enhance global credibility.',
    icon: 'FileCheck'
  },
  {
    id: 'epr',
    title: 'Environmental Compliance',
    description: 'Dedicated help with Extended Producer Responsibility (EPR) compliance, pollution control filings, and green audits.',
    icon: 'Leaf'
  },
  {
    id: 'gov',
    title: 'Government Filings',
    description: 'Seamless assistance with MSME Registration, GST compliance (filings, registration, and audits) for your business.',
    icon: 'Building2'
  },
  {
    id: 'fssai',
    title: 'FSSAI License Support',
    description: 'End-to-end assistance with FSSAI / Food License applications, modifications, and timely renewals.',
    icon: 'Utensils'
  },
  {
    id: 'docs',
    title: 'Documentation & Manuals',
    description: 'Professional preparation of compliance documents, SOPs, policies, and manuals required for audits.',
    icon: 'ScrollText'
  },
  {
    id: 'audit',
    title: 'Renewals & Audit Support',
    description: 'Comprehensive management of certification maintenance, including periodic renewals and third-party audit readiness.',
    icon: 'RefreshCw'
  },
  {
    id: 'advisory',
    title: 'Consultation & Advisory',
    description: 'Strategic risk assessments and personalized compliance roadmaps tailored to your industry legal framework.',
    icon: 'Lightbulb'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'CEO, Technova Solutions',
    content: 'Shipcrowd simplified our complex BIS certification process. Their team is knowledgeable and professional throughout the journey.',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali Gupta',
    role: 'Operations Head, GreenEarthy Foods',
    content: 'The FSSAI and ISO support we received was top-notch. They handled everything from documentation to final approval seamlessly.',
    rating: 5
  },
  {
    id: '3',
    name: 'Vikram Mehta',
    role: 'Managing Director, VM Logistics',
    content: 'Highly recommend for EPR compliance. They understand the regulatory landscape better than anyone else in the market.',
    rating: 4
  }
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'Initial Consultation', description: 'Discuss your business needs and regulatory requirements with our experts.' },
  { step: 2, title: 'Requirement Assessment', description: 'We identify the specific certifications and filings applicable to your industry.' },
  { step: 3, title: 'Documentation Preparation', description: 'Our team prepares all necessary technical files, manuals, and applications.' },
  { step: 4, title: 'Submission & Follow-Up', description: 'We handle the submission to government bodies and coordinate with officials.' },
  { step: 5, title: 'Certification & Closure', description: 'Receive your approvals and certificates with continuous maintenance support.' }
];

export const WHY_CHOOSE_US = [
  'Trusted compliance expertise with years of industry experience',
  'End-to-end support from documentation to final certification',
  'Tailored solutions designed specifically for your business model',
  'Fast turnaround time to ensure your operations never stop'
];
