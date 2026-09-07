export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Welderwale',
    description:
      'Precision metal fabrication, structural welding, motorized steel gates, factory sheds, and window safety grills across Mumbai and Thane.',
    url: 'https://welderwale.com',
    telephone: '+919876543210',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhayandar East',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.3000',
      longitude: '72.8500',
    },
    areaServed: [
      'Mumbai',
      'Thane',
      'Bhayandar',
      'Mira Road',
      'Borivali',
      'Kandivali',
      'Vasai',
      'Kalyan',
      'Dombivli',
    ],
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
        ],
        opens: '08:30',
        closes: '20:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
