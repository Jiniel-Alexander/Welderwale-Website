import React from 'react';
import { CompanySettings, Service, FaqItem, ServiceFaq } from '@/types';

interface StructuredDataProps {
  company: CompanySettings;
  service?: Service;
  faqs?: (FaqItem | ServiceFaq | { question: string; answer: string })[];
  canonicalUrl?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  company,
  service,
  faqs,
  canonicalUrl = 'https://welderwale.com',
}) => {
  // LocalBusiness & Organization Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://welderwale.com/#business',
    name: company.companyName,
    description: company.tagline,
    url: canonicalUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressLocality: 'Bhayandar, Thane / Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: company.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.3005856',
      longitude: '72.83984365',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:30',
      },
    ],
    areaServed: [
      'Mumbai',
      'Thane',
      'Bhayandar',
      'Mira Road',
      'Borivali',
      'Kandivali',
      'Vasai',
      'Virar',
      'Kalyan',
      'Dombivli',
    ],
    priceRange: '₹₹',
  };

  // Service Schema (when on service page)
  const serviceSchema = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.shortDescription,
        provider: {
          '@id': 'https://welderwale.com/#business',
        },
        areaServed: service.serviceAreas || ['Mumbai', 'Thane', 'Bhayandar', 'Mira Road'],
      }
    : null;

  // FAQ Schema (when FAQs exist)
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};
