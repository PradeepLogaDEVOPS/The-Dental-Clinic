export interface Doctor {
  id: string;
  name: string;
  qualifications: string[];
  role: string;
  specialties: string[];
  bio: string;
  image: string;
  experience: string;
  college?: string;
  socials?: {
    website?: string;
    email?: string;
    phone?: string;
  };
}

export interface Treatment {
  id: string;
  title: string;
  category: 'General' | 'Cosmetic' | 'Surgical' | 'Specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  phone: string;
  mapEmbedUrl: string;
  mapDirectionUrl: string;
  hours: string;
  isMain?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Facilities' | 'Modern Equipment' | 'Patient Care' | 'Smile Transformations';
  image: string;
}

export const CLINIC_INFO = {
  name: "The Dental Clinics",
  tagline: "Compassionate, Ethical & Comprehensive Dental Healthcare in Chennai",
  founderInfo: "The dental clinic was established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician.",
  whatsappNumber: "917010260934",
  whatsappFormatted: "+91 70102 60934",
  generalEmail: "contact@thedentalclinics.in",
  emergencyPhone: "+91 70102 60934",
  aboutFull: "The dental clinic was established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician. Continuing this tradition of patient care, our team provides comprehensive, ethical, and advanced dental care across our branches in Chennai.",
  
  historyStory: [
    "Dr. V. M. Nair was a medical physician who established a dedicated medical practice in Chennai, building a foundation of ethical patient care.",
    "The dental clinic was established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician. After graduating from Government Dental College, Thiruvananthapuram, Dr. M. Gopalakrishnan established his practice to serve patients with ethical dental healthcare.",
    "Dr. G. Madhavan (BDS), a graduate of Bapuji Dental College, expanded the family practice by establishing another clinic in Thiru Vi Ka Nagar.",
    "Dr. Sanjay Madhavan (MDS – Oral & Maxillofacial Surgery, Oral Implantology, Fellowship in Oral Cancer Resection) brings advanced surgical expertise, oral implantology, and specialized care.",
    "Dr. Sandra Arun (BDS), a graduate of Pushpagiri College of Dental Sciences, Kerala, contributes to patient care with gentle and comprehensive dentistry.",
    "The healthcare tradition also includes Dr. Lakshmi Madhavan (Physiotherapy), reflecting a holistic approach to patient wellness.",
    "Today, The Dental Clinics continues this practice of clinical excellence, patient trust, and ethical healthcare."
  ],

  mission: "To deliver ethical, painless, and high-quality dental healthcare utilizing state-of-the-art diagnostic technology while prioritizing patient comfort, safety, and oral wellness.",
  vision: "To remain a trusted family dental healthcare institution, blending clinical integrity with modern surgical, cosmetic, and preventive dentistry.",
  values: [
    "Established Healthcare Tradition",
    "Experienced Dental Specialists",
    "Modern Dental Technology",
    "Personalized Patient Care",
    "Ethical Treatment Protocols",
    "Comfortable Clinic Environment",
    "Advanced Surgical Expertise"
  ]
};

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-g-madhavan",
    name: "Dr. G. Madhavan",
    qualifications: ["BDS"],
    role: "Senior Dental Surgeon",
    college: "Bapuji Dental College",
    specialties: ["Senior Dental Surgery", "Geriatric Dental Care", "Preventive Care", "Comprehensive Diagnostics"],
    bio: "Graduated from Bapuji Dental College and expanded the family practice by establishing another clinic in Thiru Vi Ka Nagar. Dedicated to clinical excellence and ethical patient care.",
    image: "",
    experience: "Senior Dental Surgeon",
    socials: {
      phone: "+91 44 2550 5222",
      email: "dr.gmadhavan@thedentalclinics.in"
    }
  },
  {
    id: "dr-sanjay-madhavan",
    name: "Dr. Sanjay Madhavan",
    qualifications: [
      "MDS – Oral & Maxillofacial Surgery",
      "Oral Implantology",
      "Fellowship in Oral Cancer Resection"
    ],
    role: "Oral & Maxillofacial Surgeon, Oral Implantologist",
    college: "MDS - Oral & Maxillofacial Surgery",
    specialties: ["Oral & Maxillofacial Surgery", "Oral Implantology", "Fellowship in Oral Cancer Resection", "Wisdom Tooth Removal"],
    bio: "Dr. Sanjay Madhavan brings advanced surgical expertise, oral implantology, and specialized fellowship training in oral cancer resection for high-precision patient care.",
    image: "/dr_sanjay_madhavan.png",
    experience: "MDS Specialist",
    socials: {
      phone: "+91 70102 60934",
      email: "dr.sanjay@thedentalclinics.in",
      website: "https://thedentalclinics.in"
    }
  },
  {
    id: "dr-sandra-arun",
    name: "Dr. Sandra Arun",
    qualifications: ["BDS"],
    role: "Dental Surgeon",
    college: "Pushpagiri College of Dental Sciences, Kerala",
    specialties: ["Dental Surgery", "Kids Dentistry", "Smile Designing", "Laser Dentistry", "Cosmetic Restorations"],
    bio: "Graduate of Pushpagiri College of Dental Sciences, Kerala, Dr. Sandra Arun provides compassionate patient care and gentle dental management.",
    image: "",
    experience: "Dental Surgeon",
    socials: {
      phone: "+91 70102 60934",
      email: "dr.sandra@thedentalclinics.in"
    }
  }
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    category: "Specialized",
    shortDesc: "Gentle pediatric dentistry focused on painless cavity prevention, habit correction, and positive dental visits for children.",
    fullDesc: "Compassionate dental care for infants, children, and teens. Includes preventive fluoride treatments, pit & fissure sealants, thumb-sucking habit correction, and painless cavity fillings in a welcoming environment.",
    iconName: "Baby",
    benefits: ["Child-friendly approach", "Preventive sealants & fluoride", "Habit correction guidance", "Painless restoration techniques"]
  },
  {
    id: "geriatric-dentistry",
    title: "Geriatric Dentistry",
    category: "Specialized",
    shortDesc: "Tailored oral healthcare for senior citizens focusing on chewing comfort, denture fitting, and gum vitality.",
    fullDesc: "Specialized dental management for elderly patients addressing dry mouth, loose teeth, well-fitted partial or complete dentures, and medication-safe dental procedures.",
    iconName: "HeartPulse",
    benefits: ["Custom lightweight dentures", "Gentle gum therapy", "Medication-aware management", "Restoration of chewing strength"]
  },
  {
    id: "smile-designing",
    title: "Smile Designing",
    category: "Cosmetic",
    shortDesc: "Comprehensive aesthetic smile enhancements with digital planning, porcelain veneers, and tooth reshaping.",
    fullDesc: "Transform your confidence with personalized smile designing, custom ceramic veneers, composite bonding, gap closure, and tooth shade optimization.",
    iconName: "Sparkles",
    benefits: ["Digital smile previews", "Custom porcelain veneers", "Gap & stain correction", "Natural aesthetic symmetry"]
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    category: "Cosmetic",
    shortDesc: "Orthodontic alignment using clear invisible aligners and subtle ceramic braces for kids and adults.",
    fullDesc: "Correct crooked teeth, spacing, and bite irregularities with modern clear aligners or high-precision ceramic braces.",
    iconName: "Smile",
    benefits: ["Nearly invisible aligners", "Bite correction", "Comfortable custom aligner trays", "Faster alignment protocols"]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Surgical",
    shortDesc: "Permanent, natural-looking replacement for missing teeth using medical-grade titanium dental implants.",
    fullDesc: "Advanced oral implantology for single tooth, multi-tooth, or full-mouth restorations designed to look, feel, and function like natural teeth.",
    iconName: "ShieldCheck",
    benefits: ["Lifetime durability", "Preserves jawbone density", "Natural feel & appearance", "Restores 100% chewing function"]
  },
  {
    id: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal",
    category: "Surgical",
    shortDesc: "Precise, painless surgical removal of impacted or painful wisdom teeth by Maxillofacial specialists.",
    fullDesc: "Expert surgical extraction of impacted, painful, or misaligned third molars under local anesthesia for smooth and fast recovery.",
    iconName: "Stethoscope",
    benefits: ["Painless surgical technique", "Prevents crowding & infection", "Fast post-op recovery", "Expert surgeon handling"]
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "General",
    shortDesc: "Single-visit painless root canal therapy to save infected natural teeth and eliminate toothache.",
    fullDesc: "Advanced rotary endodontic treatment to clean, disinfect, and seal infected tooth pulp, preserving your natural tooth structure.",
    iconName: "Activity",
    benefits: ["Single-visit procedure available", "Preserves natural tooth", "Immediate pain relief", "Crown placement integration"]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    shortDesc: "Professional clinic-grade whitening treatments for a dramatically brighter, stain-free smile.",
    fullDesc: "Enamel-safe laser and light-activated whitening therapies that eliminate stubborn coffee, tea, and tobacco stains in less than an hour.",
    iconName: "Sun",
    benefits: ["Up to 8 shades whiter", "Enamel-safe formulation", "Long-lasting brightness", "Quick 45-minute procedure"]
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    category: "General",
    shortDesc: "Deep ultrasonic cleaning to remove plaque, calculus tartar buildup, and eliminate bad breath.",
    fullDesc: "Gentle ultrasonic scaling to remove plaque and tartar above and below gum lines, followed by micro-polishing for fresh, smooth teeth.",
    iconName: "Sparkle",
    benefits: ["Prevents gum bleeding", "Removes stubborn calculus", "Freshens breath", "Recommended biannually"]
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    category: "Specialized",
    shortDesc: "Minimally invasive laser treatments for painless gum sculpting, ulcer relief, and rapid healing.",
    fullDesc: "Advanced dental laser technology for precise soft tissue procedures, gum contouring, apthous ulcer treatment, and bacterial sterilization without stitches.",
    iconName: "Zap",
    benefits: ["No stitches or bleeding", "Faster healing", "Minimal post-op discomfort", "High surgical precision"]
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    category: "Surgical",
    shortDesc: "Specialized maxillofacial surgeries including jaw reconstruction, cyst management, and facial trauma care.",
    fullDesc: "Comprehensive surgical procedures for complex oral conditions, jaw realignment, cyst resections, and bone grafting led by MDS Maxillofacial Surgeons.",
    iconName: "Scissors",
    benefits: ["MDS Maxillofacial Surgeons", "Advanced surgical protocol", "Comprehensive facial bone care", "Maximum patient safety"]
  },
  {
    id: "oral-cancer-screening",
    title: "Oral Cancer Screening",
    category: "Specialized",
    shortDesc: "Early screening and biopsy diagnostic protocols by Oncology Fellowship-trained Maxillofacial experts.",
    fullDesc: "Systematic examination of oral mucosa for early detection of precancerous lesions, leukoplakia, non-healing ulcers, and prompt biopsy diagnostic management.",
    iconName: "SearchCheck",
    benefits: ["Early detection saves lives", "Fellowship-trained specialist evaluation", "Non-invasive initial check", "Prompt diagnostic pathway"]
  }
];

export const BRANCHES_DATA: Branch[] = [
  {
    id: "main-branch",
    name: "Main Branch (Periyar Nagar)",
    address: "No. C/276, Jaganathan Salai, Periyar Nagar",
    landmark: "Opposite Eswari Nursing Home",
    locality: "Periyar Nagar",
    city: "Chennai",
    phone: "+91 44 2550 5222",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.679169622953!2d80.21852!3d13.11666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ab75fb13ad%3A0x4bf2e5b85437890!2sPeriyar%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.google.com/?q=The+Dental+Clinics+Periyar+Nagar+Chennai",
    hours: "Mon - Sat: 9:00 AM - 9:00 PM | Sun: Emergency Only",
    isMain: true
  },
  {
    id: "jawahar-nagar",
    name: "Jawahar Nagar Branch",
    address: "No. 6, 1st Main Road, Jawahar Nagar",
    landmark: "Opposite MAX Clothing",
    locality: "Jawahar Nagar",
    city: "Chennai",
    phone: "+91 44 3153 5314",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6023348127395!2d80.22214!3d13.1215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265007b8b2cf1%3A0x6b801a23861c8a1d!2sJawahar%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.google.com/?q=The+Dental+Clinics+Jawahar+Nagar+Chennai",
    hours: "Mon - Sat: 9:30 AM - 8:30 PM"
  },
  {
    id: "thiru-vi-ka-nagar",
    name: "Thiru Vi Ka Nagar Branch",
    address: "No. 32/A, Old No.84, Koil Street North, Thiru Vi Ka Nagar",
    landmark: "Opposite Federal Bank",
    locality: "Thiru Vi Ka Nagar",
    city: "Chennai",
    phone: "+91 70102 60934",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.55!2d80.226!3d13.125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264fc8a8163f9%3A0xbc4e7d443229b46e!2sThiru%20Vi%20Ka%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.google.com/?q=The+Dental+Clinics+Thiru+Vi+Ka+Nagar+Chennai",
    hours: "Mon - Sat: 9:30 AM - 9:00 PM"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Established Tradition",
    description: "Built on a dedicated family tradition of healthcare service in Chennai."
  },
  {
    icon: "Users",
    title: "Experienced Practice",
    description: "Dedicated dental doctors providing continuous, family-centered care."
  },
  {
    icon: "Stethoscope",
    title: "Experienced Specialists",
    description: "Highly qualified BDS and MDS specialists dedicated to clinical excellence."
  },
  {
    icon: "Cpu",
    title: "Modern Technology",
    description: "State-of-the-art rotary endodontics, laser dentistry, and digital diagnostics."
  },
  {
    icon: "Heart",
    title: "Personalized Care",
    description: "Compassionate, patient-centered treatment tailored for all age groups."
  },
  {
    icon: "ShieldCheck",
    title: "Ethical Treatment",
    description: "Transparent, honest diagnoses without unnecessary procedures."
  },
  {
    icon: "Smile",
    title: "Comfortable Environment",
    description: "Relaxing, hygienic, and child-friendly clinic ambiance."
  },
  {
    icon: "Activity",
    title: "Advanced Surgical Expertise",
    description: "Oral & Maxillofacial Surgery, Implantology, and Oral Cancer Resection fellowship."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Ramesh Sundaram",
    locality: "Periyar Nagar, Chennai",
    rating: 5,
    treatment: "Dental Implants & Crown",
    comment: "Our family has been visiting The Dental Clinics for years. Dr. Sanjay Madhavan performed my implant surgery completely painlessly. Truly an institution of trust!",
    date: "January 2026"
  },
  {
    id: "test-2",
    name: "Priya Rajasekhar",
    locality: "Jawahar Nagar, Chennai",
    rating: 5,
    treatment: "Single-Visit Root Canal",
    comment: "I was terrified of root canals, but Dr. G. Madhavan and Dr. Sandra Arun made me feel completely relaxed. The treatment was seamless and finished in just one sitting.",
    date: "December 2025"
  },
  {
    id: "test-3",
    name: "Karthik Subramanian",
    locality: "Thiru Vi Ka Nagar, Chennai",
    rating: 5,
    treatment: "Kids Dentistry",
    comment: "Brought my 7-year-old daughter for fluoride treatment and cavity repair. Dr. Sandra Arun handled her with so much warmth that my child actually looks forward to dental visits now!",
    date: "February 2026"
  },
  {
    id: "test-4",
    name: "Anandakrishnan N.",
    locality: "Anna Nagar, Chennai",
    rating: 5,
    treatment: "Wisdom Tooth Surgery",
    comment: "Impacted wisdom tooth extraction was performed by Dr. Sanjay Madhavan. Very clear pre-op explanation and recovery was super quick without swelling. Highest standard of care.",
    date: "November 2025"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Sterilization Suite",
    category: "Clinic Facilities",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-2",
    title: "Advanced Dental Operatory",
    category: "Modern Equipment",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-3",
    title: "Digital Smile Designing Consult",
    category: "Patient Care",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-4",
    title: "Complete Aesthetic Smile Transformation",
    category: "Smile Transformations",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-5",
    title: "Pediatric Dental Corner",
    category: "Clinic Facilities",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-6",
    title: "Precision Dental Laser Equipment",
    category: "Modern Equipment",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  }
];
