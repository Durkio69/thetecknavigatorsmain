import { ServiceCategory, ContactInfo, FAQItem } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "gov-services",
    title: "Government E-Services",
    iconName: "Government",
    description: "Official online portals can be confusing and slow. We handle the applications correctly first time to avoid rejected submissions.",
    items: [
      {
        id: "gov-nira",
        name: "National ID Registration (NIRA)",
        description: "Assisting with fresh applications, replacements, corrections of mistakes, and checking registration status.",
        details: ["NIRA form assistance", "Document validation checklist", "Online status verification", "Guidance to nearest center"]
      },
      {
        id: "gov-passport",
        name: "Passport Applications",
        description: "Step-by-step guidance through the e-passport application portal, fee payment generation, and booking appointment dates.",
        details: ["E-passport portal registration", "PRN generation for payment", "Required document checklist", "Appointment schedule assistance"]
      },
      {
        id: "gov-tin",
        name: "TIN Registration (URA)",
        description: "Apply for Uganda Revenue Authority (URA) Tax Identification Numbers for individuals or businesses.",
        details: ["Personal TIN setup", "Business TIN registrations", "Income tax return guidelines", "PRN support for payments"]
      },
      {
        id: "gov-ursb",
        name: "Business Registration (URSB)",
        description: "Start your company legally with Uganda Registration Services Bureau setup. Name reservation and submission support.",
        details: ["Name clearance requests", "Sole proprietorship registration", "Private limited company filing help", "Certificates printing"]
      },
      {
        id: "gov-nssf",
        name: "NSSF Services",
        description: "Check your Social Security contributions, registration of employees/employers, and benefit claim form submissions.",
        details: ["NSSF member portal setup", "Contribution statements printing", "Employer registry guides", "Claim applications support"]
      },
      {
        id: "gov-driver",
        name: "Driving Permit Applications & Renewals",
        description: "UDLS online portal booking, tax payment registration, and application processing support.",
        details: ["UDLS account creation", "PRN generation for permit fees", "Renewal booking appointments", "Required test-sheet helpers"]
      },
      {
        id: "gov-kcca",
        name: "KCCA Trading License Applications",
        description: "Access Kampala Capital City Authority e-services for trading license assessments and renewals.",
        details: ["License calculations & assessments", "e-KCCA portal setup", "COSA numbers registrations", "Payment slip generation"]
      },
      {
        id: "gov-print",
        name: "Online Applications & Printing",
        description: "Help with any other government portals, scholarship applications, and printing of confirmation slips.",
        details: ["Custom e-service search", "Application review and proofreading", "Instant high-speed printing", "Document preservation advisory"]
      }
    ]
  },
  {
    id: "printing-services",
    title: "Document & Printing Services",
    iconName: "Printer",
    description: "Ultra-crisp high-speed printing, high-resolution scanning, and professional layout editing for your personal files.",
    items: [
      {
        id: "print-photos",
        name: "Passport Photos",
        description: "Instant passport-sized photos with correct background guidelines for embassies, UNEB, and NIRA registrations.",
        details: ["White, Blue, or Red backdrops", "Digital copy via WhatsApp/Email", "Glossy photo paper prints", "Embassy-ready dimensions"]
      },
      {
        id: "print-general",
        name: "Printing, Scanning, Copying & Lamination",
        description: "High-volume black & white or vibrant full-color prints. Scanning to PDF plus heavy-duty lamination.",
        details: ["Clear double-sided document copy", "Fast digital scanning to PDF & USB", "Lamination up to A4 size", "Spiralling & binding services"]
      },
      {
        id: "print-cv",
        name: "CV / Resume Writing & Printing",
        description: "Stand out to employers in Uganda. We format your career achievements into standard recruiter-approved layout templates.",
        details: ["Modern layout & typography", "Proofreading and error check", "Exported as PDF & print", "Tailored to industry standards"]
      },
      {
        id: "print-cover",
        name: "Cover Letter Writing",
        description: "Professionally styled cover letters directed to hiring managers that highlight your top skills.",
        details: ["Custom job post matching", "Formal Ugandan corporate addressing", "Engaging opening hooks", "Digital file transfer"]
      },
      {
        id: "print-results",
        name: "University / UNEB Result Checking & Printing",
        description: "Quick result checks for PLE, UCE, UACE, and Makerere/Kyambogo/MUBS University student portal printouts.",
        details: ["UNEB SMS & online index search", "Portal logins & fee statement printing", "Official transcript scanning", "Interim results copy preparation"]
      }
    ]
  },
  {
    id: "job-support",
    title: "Job & Application Support",
    iconName: "Briefcase",
    description: "Don't let tech barriers stop you from getting hired. Our supportive staff guide you through your career launch steps.",
    items: [
      {
        id: "job-email",
        name: "Email Account Setup",
        description: "Establish a security-verified, professionally named Google Gmail or Outlook account for formal job hunts.",
        details: ["Secure password establishment", "Recovery phone link configuration", "Basic professional formatting tutorial", "Mobile phone email synching"]
      },
      {
        id: "job-portals",
        name: "Job Portal Applications",
        description: "Configuration of profiles on premier employment platforms like BrighterMonday, Fuzu, LinkedIn, and government registries.",
        details: ["Complete profile optimization", "Uploading resumes & credentials", "Alert setting based on skills", "Easy application walk-throughs"]
      },
      {
        id: "job-visas",
        name: "Visa Application Form-Filling",
        description: "Navigating international visa registration steps for work, family, or education, including booking interviews.",
        details: ["Embassy requirements auditing", "Form-filling precision checks", "Payment print guides", "Supporting material compilation"]
      }
    ]
  },
  {
    id: "repairs-tech",
    title: "Phone & Computer Repair",
    iconName: "Repair",
    description: "Hardware and software recovery experts. Get your essential daily communications device running perfectly again today.",
    items: [
      {
        id: "tech-unlock",
        name: "Phone Unlocking & FRP Removal",
        description: "Unlock phones locked to foreign networks or bypass Factory Reset Protection (FRP) safe locks on Android devices.",
        details: ["Bypass Google Account lock", "Network carrier unlocking support", "IMEI checks and safe reset procedures", "Quick turnaround turnaround time"]
      },
      {
        id: "tech-pattern",
        name: "Pattern / Screen Lock Removal",
        description: "Safe lock removal for PIN, fingerprint, lock screen password, or security pattern on major brands.",
        details: ["Bypass forgotten pins", "Fittings for Samsung, Transsion (Infinix, Tecno, Itel), Xiaomi, etc.", "Recovery mode system flushes"]
      },
      {
        id: "tech-software",
        name: "Software Installation & Virus Removal",
        description: "Speed up slow items. Installation of verified Windows / macOS setups, reliable antivirus, and productivity software.",
        details: ["Operating System cleanly installed", "Malware, adware & virus cleanups", "Microsoft Office setups & typing aids", "System speedups & junk cleaners"]
      },
      {
        id: "tech-hardware",
        name: "Hardware Troubleshooting",
        description: "Diagnostics for cracked laptop screens, dead phone batteries, non-charging ports, keyboard failures, and power issues.",
        details: ["Power supply testing", "Replacement part referrals & fits", "Charging port cleaning/fixing", "Keyboard and touchpad repairs"]
      },
      {
        id: "tech-recovery",
        name: "Data Recovery & Backup",
        description: "Recover accidently deleted photos, CV templates, and company tax data from broken phones or corrupt USB drives.",
        details: ["Recovery from formatted drives", "Broken screen phone data transfers", "Cloud storage safety setup (Google Drive)", "External backup configurations"]
      }
    ]
  },
  {
    id: "design-services",
    title: "Design Services & Branding",
    iconName: "Palette",
    description: "Bespoke creative materials that command attention for your personal celebrations or small business marketing.",
    items: [
      {
        id: "design-invites",
        name: "Wedding, Burial & Event Invitations",
        description: "Beautiful, personalized invitations or announcement template layout design matching theme colors.",
        details: ["Elegant fonts & customized graphics", "Digital versions for WhatsApp sharing", "Printed options on textured cards", "Quick templates for urgent announcements"]
      },
      {
        id: "design-bizcard",
        name: "Business Card Design & Printing",
        description: "Professional business cards designed from scratch. High paper stock quality, custom logos, and clear copy.",
        details: ["Premium layout spacing", "High density card stock printing", "QR code links to social pages", "Individual and corporate bundles"]
      },
      {
        id: "design-banners",
        name: "Church & School Banner Design",
        description: "High impact visual banners for crusades, school admissions, sports contests, or special business sales.",
        details: ["Extra vibrant size designs", "Legible fonts readable from distance", "Heavy-duty outdoor canvas design suggestions", "Image placement checks"]
      },
      {
        id: "design-social",
        name: "Social Media Page Setup",
        description: "Help Mbuya businesses register on Google Maps, WhatsApp Business, and Facebook, listing correct hours and maps details.",
        details: ["Google Maps local pin targeting", "WhatsApp Business catalogs setup", "Facebook page cover & info setup", "Basic customer reply guidance"]
      }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phoneNumbers: ["+256 765 507 999", "+256 757 808 474"],
  whatsAppNumbers: ["+256 750 219 301", "+256 757 808 474"],
  email: "azontocrewza@gmail.com",
  location: "Mbuya, Nakawa, Kampala, Uganda",
  hours: "Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: Closed / On Call"
};

export const faqs: FAQItem[] = [
  {
    question: "Do I need to carry original physical papers for Government E-Services?",
    answer: "Yes. For National ID (NIRA) or Passport processes, you will need physical documents like birth certificates, recommendation letters, or parents' IDs. Walk in for a review, and we will tell you exactly which ones are complete."
  },
  {
    question: "How long does a passport booking take?",
    answer: "The registration on the e-passport portal is completed within 30 minutes. Once we generate the Payment Reference Number (PRN) and you pay, we immediately book the earliest slot in Kampala for your interview."
  },
  {
    question: "Can you recover documents from a phone that doesn't switch on?",
    answer: "Very often yes! We carry out software flash diagnostics or retrieve files from the memory card/internal storage partitions using specialized data restoration tools in our kiosk."
  },
  {
    question: "Where exactly are you located in Mbuya?",
    answer: "We are situated in Mbuya, Nakawa Division, Kampala. You can find us right in the trading center, easily accessible to anyone coming from Bugolobi, Nakawa, or Mutungo. We also have a precise route on Google Maps!"
  },
  {
    question: "Can I send you digital files via WhatsApp for instant printing?",
    answer: "Perfectly! You can share your PDF, Word file, or image to our official WhatsApp line (+256 750 219 301). We will print, bind or laminate them and notify you when they are ready for quick pickup."
  }
];
