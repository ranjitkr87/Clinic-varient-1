export interface Doctor {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  experience: string;
  almaMater: string;
  languages: string[];
  schedule: string;
  fee: number;
  bio: string;
  image: string;
  altText: string;
  isAvailableToday: boolean;
  nextAvailable: string;
}

export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  assignedDoctors: string;
  features: string[];
}

export interface Appointment {
  id: string;
  tokenNumber: number;
  patientName: string;
  phone: string;
  doctorId: string;
  doctorName: string;
  purpose: string;
  date: string;
  timeSlot: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'In Consultation' | 'Completed';
}

export interface LabPackage {
  id: string;
  name: string;
  category: 'Routine' | 'Chronic Care' | 'Comprehensive';
  testsCount: number;
  testsList: string[];
  fastingRequired: boolean;
  tatHours: number;
  originalPrice: number;
  price: number;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
