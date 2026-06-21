export interface ServiceItem {
  id: string;
  name: string;
  description?: string;
  details?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string; // Used to look up the correct Lucide icon
  description: string;
  items: ServiceItem[];
}

export interface ContactInfo {
  phoneNumbers: string[];
  whatsAppNumbers: string[];
  email: string;
  location: string;
  hours: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
