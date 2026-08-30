import { FaqItem } from '@/types';

export const initialFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What areas do you serve and how quickly can you visit our site?',
    answer: 'We serve all areas within an approximate 50 km radius of Bhayandar, including Mumbai (Western & Central suburbs), Thane, Mira Road, Vasai, Virar, Kalyan, and Dombivli. For most locations, our site engineers can visit within 24 to 48 hours for measurement and quotation.',
    category: 'General & Service Area',
    displayOrder: 1
  },
  {
    id: 'faq-2',
    question: 'How do I get an estimate for my metal fabrication requirement?',
    answer: 'You can call us directly, send your project photos/drawings on WhatsApp, or fill out our quick 3-step online enquiry form with your requirements and file attachments. We provide detailed transparent itemized quotations with zero hidden charges.',
    category: 'Quotations & Pricing',
    displayOrder: 2
  },
  {
    id: 'faq-3',
    question: 'Do you offer anti-rust warranties for coastal areas like Mumbai and Bhayandar?',
    answer: 'Yes. For coastal zones with high salinity and heavy monsoons, we use Hot-Dip Galvanized (HDG) steel, SS 316 marine-grade stainless steel, epoxy zinc-phosphate primers, and industrial baked powder coating with long-term anti-rust warranties.',
    category: 'Materials & Quality',
    displayOrder: 3
  },
  {
    id: 'faq-4',
    question: 'Can you manufacture custom designs based on architect drawings?',
    answer: 'Absolutely. We work routinely with architects, interior designers, structural consultants, and contractors to fabricate bespoke frames, laser-cut gates, pergolas, and precision steel furniture to exact millimeter tolerances.',
    category: 'Customization',
    displayOrder: 4
  },
  {
    id: 'faq-5',
    question: 'What welding standards and welder certifications do you maintain?',
    answer: 'Our fabrication workshop employs AWS D1.1 and IS 9595 certified welders trained in TIG (Argon), MIG (CO2), and SMAW processes. For structural projects, we conduct non-destructive testing (NDT) including dye-penetrant and ultrasonic weld tests.',
    category: 'Quality & Safety',
    displayOrder: 5
  }
];
