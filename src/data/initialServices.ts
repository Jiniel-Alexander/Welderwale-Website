import { Service } from '@/types';

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    name: 'Animal Farm Sheds',
    slug: 'animal-farm-sheds',
    shortDescription: 'Heavy-duty, well-ventilated, weather-resistant structural sheds for poultry, dairy, goat farms, and agricultural facilities.',
    fullDescription: 'Welderwale designs and constructs industrial-grade animal farm sheds tailored for maximum airflow, animal comfort, and extreme durability. Built with corrosion-resistant galvanized iron (GI), heavy mild steel (MS) columns, and weather-proof color-coated roofing sheets to withstand coastal monsoon and extreme heat.',
    featuredImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Agricultural & Industrial',
    isFeatured: false,
    displayOrder: 1,
    seoTitle: 'Animal Farm Shed Fabrication & Installation in Mumbai & Thane | Welderwale',
    seoDescription: 'Custom poultry, dairy, and livestock shed fabrication across Mumbai, Thane, and Bhayandar. Heavy-gauge steel, modular designs, high ventilation.',
    specifications: [
      { label: 'Column Material', value: 'Heavy MS / GI Hollow Sections (IS 4923)' },
      { label: 'Roofing Material', value: '0.45mm – 0.50mm Pre-painted Galvalume Sheets' },
      { label: 'Corrosion Protection', value: 'Epoxy Zinc-Phosphate Primer + Polyurethane Paint / Hot-Dip Galvanizing' },
      { label: 'Ventilation Design', value: 'Ridge-Vent & Open-Side Louver System' },
      { label: 'Lifespan', value: '25+ Years with minimal maintenance' }
    ],
    options: [
      { title: 'Dairy Cattle Barns', description: 'Double-row feeding alley layout with high ceiling heat dissipation.' },
      { title: 'Poultry Broiler / Layer Sheds', description: 'Long-span column-free truss frames with bird-proof mesh netting.' },
      { title: 'Goat & Sheep Farm Sheds', description: 'Elevated slatted floor frame options with anti-skid ramp access.' }
    ],
    process: [
      { step: 1, title: 'Site Inspection & Layout Plan', description: 'Assessment of land topography, wind direction, and animal capacity.' },
      { step: 2, title: 'Engineering & Truss Fabrication', description: 'Precision cutting, jig welding, and stress-tested truss assemblies in our workshop.' },
      { step: 3, title: 'Foundation & Erection', description: 'Anchor bolting, structural column raising, purlin alignment, and roofing sheet fixing.' },
      { step: 4, title: 'Quality QA & Handover', description: 'Welding bead inspection, water-leakage testing, and final protective coating touchup.' }
    ],
    faqs: [
      { question: 'What is the ideal roof height for farm sheds in the Mumbai/Thane climate?', answer: 'We recommend a center height of 14–18 feet to allow hot air to rise and escape through continuous ridge monitors, keeping livestock cool during summer months.' },
      { question: 'Do you provide turnkey foundation and civil civil work?', answer: 'Yes, we handle pedestal casting, anchor bolt setting, structural fabrication, and sheet installation.' }
    ],
    relatedServices: ['metal-sheds', 'roofing-sheets', 'structural-fabrication'],
    serviceAreas: ['Mumbai', 'Thane', 'Bhayandar', 'Mira Road', 'Vasai', 'Kalyan', 'Dombivli']
  },
  {
    id: 'srv-2',
    name: 'Custom Metal Frames & Installation',
    slug: 'custom-metal-frames',
    shortDescription: 'Precision engineered metal frames, signage structures, glass partitions, and bespoke industrial architectural framework.',
    fullDescription: 'Custom architectural and industrial metal framing engineered to exact client blueprints and tolerances. Whether for modern glass-steel interior partitions, solar panel support grids, elevator shafts, or heavy machinery skids, Welderwale provides laser-accurate fabrication and seamless on-site installation.',
    featuredImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Custom',
    isFeatured: true,
    displayOrder: 2,
    seoTitle: 'Custom Metal Frames Fabrication & On-Site Installation | Welderwale',
    seoDescription: 'Bespoke steel, MS, and SS frame fabrication in Mumbai, Thane & Mira Bhayandar. High precision, flawless welds, powder-coated finishes.',
    specifications: [
      { label: 'Available Alloys', value: 'Mild Steel (IS 2062), Stainless Steel (SS 304 / SS 316), Aluminum 6061' },
      { label: 'Welding Processes', value: 'TIG (Argon Arc), MIG (CO2), Shielded Metal Arc Welding (SMAW)' },
      { label: 'Surface Finishes', value: 'Matte Black Powder Coating, Brushed SS PVD, Industrial Duco, Galvanized' },
      { label: 'Tolerance Level', value: '+/- 1.0 mm precision CNC cut and jig assembled' }
    ],
    options: [
      { title: 'Architectural Glass Partitions', description: 'Slimline black powder-coated steel grids for modern offices and luxury homes.' },
      { title: 'Solar Panel Rooftop Frames', description: 'Hot-dip galvanized heavy angle frameworks designed for 150 km/h wind loads.' },
      { title: 'Industrial Equipment Skids', description: 'Heavy channel base frames load-rated for pumps, generators, and compressors.' }
    ],
    process: [
      { step: 1, title: 'CAD Drafting & Blueprint Approval', description: 'Detailed shop drawings based on site measurements or architectural plans.' },
      { step: 2, title: 'Precision Cutting & Prep', description: 'Laser / band-saw cutting, beveling, and surface de-burring.' },
      { step: 3, title: 'Jig Welding & Squareness Check', description: 'Full penetration welds with strict diagonal squareness validation.' },
      { step: 4, title: 'Finishing & On-Site Anchoring', description: 'Electrochemical treatment, powder coat curing, and rigid mechanical anchoring.' }
    ],
    faqs: [
      { question: 'Can you match custom architect RAL color codes for powder coating?', answer: 'Yes, we provide 100+ RAL powder coat shades with matte, satin, glossy, and textured finishes.' }
    ],
    relatedServices: ['metal-furniture', 'window-grill', 'structural-fabrication']
  },
  {
    id: 'srv-3',
    name: 'Garden Pergola',
    slug: 'garden-pergola',
    shortDescription: 'Modern, weather-resistant designer metal pergolas, terrace gazebos, and outdoor leisure canopies.',
    fullDescription: 'Transform terraces, backyard lawns, and restaurant outdoor decks into stunning shaded retreats with Welderwale custom metal pergolas. Crafted from heavy tubular steel, CNC-cut decorative louvers, and rust-proof finishes, our pergolas blend modern aesthetics with 100% weather resilience.',
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Outdoor',
    isFeatured: true,
    displayOrder: 3,
    seoTitle: 'Designer Metal Garden Pergolas & Terrace Canopies | Welderwale Mumbai',
    seoDescription: 'Custom metal garden pergolas, terrace gazebos, and louvers in Mumbai, Thane & Bhayandar. Rust-proof, stylish, premium finishes.',
    specifications: [
      { label: 'Structural Beams', value: '100x50mm / 150x50mm MS / GI Box Sections' },
      { label: 'Roofing Options', value: 'Polycarbonate Multiwall, Laminated Toughened Glass, or WPC Louvers' },
      { label: 'Coating Protection', value: '7-Tank Phosphating + Exterior Grade AkzoNobel Powder Coat' },
      { label: 'Lighting Integration', value: 'Concealed internal electrical conduit routing for LED spotlights' }
    ],
    options: [
      { title: 'Terrace Glass Roof Pergola', description: 'Sleek steel frame with 10mm toughened glass for all-weather skylight ambiance.' },
      { title: 'Bioclimatic Louver Pergola', description: 'Adjustable or fixed steel/aluminum louvers for controllable shade and airflow.' },
      { title: 'WPC & Steel Hybrid Gazebo', description: 'Warm wooden aesthetic of composite louvers combined with steel core strength.' }
    ],
    process: [
      { step: 1, title: '3D Concept & Site Measurement', description: 'Terrace load assessment and 3D architectural mockups.' },
      { step: 2, title: 'Factory Prefabrication', description: 'Complete frame pre-assembly, weld dressing, and anti-corrosion primer application.' },
      { step: 3, title: 'On-Site Bolt Assembly', description: 'Zero-mess installation using concealed high-tensile fasteners and anchors.' },
      { step: 4, title: 'Roof Sheet & Sealing', description: 'EPDM gasket fitting, silicon weatherproofing, and final load test.' }
    ],
    faqs: [
      { question: 'Will a metal pergola rust on a Mumbai sea-facing terrace?', answer: 'We apply a specialized marine-grade anti-corrosive primer followed by high-bake powder coating or polyurethane coating to ensure long-term resistance against salty sea air.' }
    ],
    relatedServices: ['metal-railing', 'roofing-sheets', 'custom-metal-frames']
  },
  {
    id: 'srv-4',
    name: 'Metal/Steel Furniture',
    slug: 'metal-steel-furniture',
    shortDescription: 'Industrial and contemporary bespoke metal furniture, dining tables, display racks, and heavy-duty storage benches.',
    fullDescription: 'Custom handcrafted steel furniture combining raw strength with sophisticated modern lines. Welderwale fabricates custom restaurant dining frames, boutique retail display fixtures, luxury coffee tables, and heavy-duty industrial workbenches.',
    featuredImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Commercial & Residential',
    isFeatured: false,
    displayOrder: 4,
    seoTitle: 'Custom Metal & Steel Furniture Makers in Mumbai & Thane | Welderwale',
    seoDescription: 'Bespoke metal dining tables, retail display racks, industrial workstations, and luxury steel furniture fabricated to order.',
    specifications: [
      { label: 'Materials', value: 'High-grade Mild Steel, Stainless Steel (304), Brass accents' },
      { label: 'Finish Types', value: 'PVD Titanium Gold, Rose Gold, Matte Black Powder Coat, Industrial Clear Coat' },
      { label: 'Joints', value: 'Seamlessly ground, flush TIG welds with zero visible seams' },
      { label: 'Weight Capacity', value: 'Up to 500+ kg for industrial storage workbenches' }
    ],
    options: [
      { title: 'Commercial Retail Display Fixtures', description: 'Modular clothing racks, shelving units, and illuminated showcase frames.' },
      { title: 'Designer Dining & Coffee Table Bases', description: 'Geometric geometric steel spider bases paired with marble or solid wood.' },
      { title: 'Heavy Workshop Workbenches', description: 'All-welded steel benches with tool drawers, vise mounts, and pegboards.' }
    ],
    process: [
      { step: 1, title: 'Design Consultation & Sizing', description: 'Reviewing furniture dimensions, ergonomics, and material selections.' },
      { step: 2, title: 'Precision CNC Mitering', description: 'Laser tube cutting for perfect 45-degree corner joints.' },
      { step: 3, title: 'Seamless Blend TIG Welding', description: 'Welding and multi-stage orbital sanding for invisible, silky-smooth joints.' },
      { step: 4, title: 'Oven-Baked Powder Coating', description: 'Uniform electro-static coating cured in 200°C industrial ovens.' }
    ],
    faqs: [
      { question: 'Do you take bulk commercial orders for cafes and retail chains?', answer: 'Yes, we routinely manufacture batch orders for restaurants, boutique retail stores, and commercial offices.' }
    ],
    relatedServices: ['custom-metal-frames', 'metal-railing']
  },
  {
    id: 'srv-5',
    name: 'Metal Sheds',
    slug: 'metal-sheds',
    shortDescription: 'Industrial factory sheds, warehouse pre-engineered buildings (PEB), rooftop terrace sheds, and parking canopies.',
    fullDescription: 'Welderwale is a trusted leader in heavy metal shed fabrication across the Mumbai Metropolitan Region. We design, fabricate, and erect high-clearance industrial factory sheds, commercial warehouses, terrace waterproof sheds, and automotive parking shelters.',
    featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651554-6691fc9d0903?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Industrial & Commercial',
    isFeatured: true,
    displayOrder: 5,
    seoTitle: 'Industrial Metal Shed & Warehouse PEB Fabrication in Mumbai & Thane | Welderwale',
    seoDescription: 'High-clearance factory sheds, warehouse PEB, rooftop sheds, and car parking sheds in Mumbai, Thane, Mira Bhayandar, and Kalyan.',
    specifications: [
      { label: 'Column Sections', value: 'Heavy ISMB Beams / Built-up Plates / Tubular Columns' },
      { label: 'Truss Configuration', value: 'Pratt / Warren / Tubular Curved Trusses designed for zero leakage' },
      { label: 'Wind Load Rating', value: 'Engineered as per IS 875 Part 3 (up to 44 m/s coastal wind speeds)' },
      { label: 'Roof Cladding', value: 'Color Coated Galvalume (Tata Bluescope / JSW / Jindal 0.50mm)' },
      { label: 'Span Length', value: 'Clear spans from 20 ft up to 100+ ft without intermediate columns' }
    ],
    options: [
      { title: 'Factory & Manufacturing Sheds', description: 'High-bay sheds with provisions for overhead EOT crane gantry girders.' },
      { title: 'Commercial Rooftop Waterproof Sheds', description: 'Lightweight high-strength trusses eliminating monsoon terrace leakage.' },
      { title: 'Tensile & Metal Parking Canopies', description: 'Cantilevered single-side parking canopies for housing societies and commercial malls.' }
    ],
    process: [
      { step: 1, title: 'Structural Load Calculation', description: 'Engineering design based on dead load, live load, and wind pressure.' },
      { step: 2, title: 'Off-Site Precision Fabrication', description: 'Fabrication of columns, rafters, and sag rods with dual-coat anti-rust primer.' },
      { step: 3, title: 'Crane Erection & Alignment', description: 'Hydraulic crane lifting, plumb alignment, torque tightening of structural bolts.' },
      { step: 4, title: 'Sheeting & Gutter Installation', description: 'Continuous self-drilling screw fastening with EPDM washers and large box gutters.' }
    ],
    faqs: [
      { question: 'How quickly can a 2,000 sq ft industrial shed be fabricated and installed?', answer: 'With our streamlined workshop prefabrication, a typical 2,000 sq ft shed is erected on site in 7 to 12 working days.' },
      { question: 'Do you offer warranty against monsoon leakage?', answer: 'Yes, all our roof installations come with certified leak-proof ridge caps, overlap sealants, and a full structural monsoon warranty.' }
    ],
    relatedServices: ['roofing-sheets', 'structural-fabrication', 'animal-farm-sheds']
  },
  {
    id: 'srv-6',
    name: 'Metal Gates',
    slug: 'metal-gates',
    shortDescription: 'High-security sliding gates, modern laser-cut designer gates, motorized automated entrance gates, and compound gates.',
    fullDescription: 'Make a powerful first impression while securing your premises with Welderwale custom metal gates. From ultra-modern CNC laser-cut residential entrance gates to heavy-duty industrial sliding and cantilever gates, we engineer for flawless movement, heavy security, and stunning architectural elegance.',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Security',
    isFeatured: true,
    displayOrder: 6,
    seoTitle: 'Modern Metal Gates & Sliding Gate Fabrication in Mumbai & Thane | Welderwale',
    seoDescription: 'Custom CNC laser-cut gates, motorized sliding entrance gates, society compound gates, and wrought iron gates fabricated by Welderwale.',
    specifications: [
      { label: 'Gate Types', value: 'Sliding, Bi-Folding, Swing, Cantilever, Telescopic' },
      { label: 'Materials', value: 'Heavy MS Hollow Pipes, CNC MS Plates (3mm–6mm), SS 304 Accents, WPC Planks' },
      { label: 'Automation Support', value: 'Compatible with Italian sliding motor automation kits (CAME / BFT / Nice)' },
      { label: 'Hardware', value: 'Heavy-duty steel bearing rollers, ground guide tracks, drop pins, security locks' }
    ],
    options: [
      { title: 'CNC Laser-Cut Geometric Gates', description: 'Intricate custom motifs and modern geometric pattern sheet inserts.' },
      { title: 'Motorized Trackless Cantilever Gates', description: 'Suspended sliding gates requiring zero ground track, ideal for heavy vehicle traffic.' },
      { title: 'Society & Factory Main Compound Gates', description: 'Heavy-gauge steel pipe construction built to withstand decades of continuous daily cycles.' }
    ],
    process: [
      { step: 1, title: 'Pillar Measurement & Leveling', description: 'Laser leveling of gate pillars, swing clearance, and road slope check.' },
      { step: 2, title: 'CAD Pattern & CNC Processing', description: 'CAD modeling of customer pattern and high-speed CNC laser cutting.' },
      { step: 3, title: 'Rigid Frame Tacking & Alignment', description: 'Heavy perimeter frame welding with anti-sag diagonal stiffeners.' },
      { step: 4, title: 'Painting & Hardware Installation', description: 'Zinc undercoat, dual PU topcoat, and smooth silent bearing assembly.' }
    ],
    faqs: [
      { question: 'Can you automate our existing manual sliding gate?', answer: 'Yes, we can retrofit gear racks, motor brackets, and infrared safety sensors to automate existing manual gates.' }
    ],
    relatedServices: ['metal-railing', 'window-grill', 'shutter']
  },
  {
    id: 'srv-7',
    name: 'Metal Railing',
    slug: 'metal-railing',
    shortDescription: 'Modern staircase railings, balcony safety barriers, stainless steel (SS) glass railings, and laser-cut parapet grills.',
    fullDescription: 'Ensure safety and elevate interior/exterior aesthetics with Welderwale bespoke metal railings. We specialize in sleek SS 304/316 glass balustrades, matte black steel staircase handrails, terrace safety railings, and CNC-cut balcony decorative screens.',
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Safety',
    isFeatured: true,
    displayOrder: 7,
    seoTitle: 'Modern Metal & SS Glass Railing Fabrication Mumbai & Thane | Welderwale',
    seoDescription: 'Staircase railings, balcony glass railings, SS 304 balustrades, and laser-cut terrace barriers crafted by Welderwale.',
    specifications: [
      { label: 'Grade Options', value: 'SS 304 / SS 316 (Marine Grade), Mild Steel, Aluminum' },
      { label: 'Glass Specs', value: '12mm / 15mm Toughened Glass with PVB / SentryGuard lamination' },
      { label: 'Handrail Styles', value: 'Round 50mm, Square 40x40mm, Flat Bar 50x10mm, Teakwood top integration' },
      { label: 'Anchor System', value: 'Heavy base spigots / Core drilled anchoring with Hilti Chemical Mortar' }
    ],
    options: [
      { title: 'Frameless Glass Spigot Railing', description: 'Minimalist luxury aesthetic with bottom stainless steel spigot clamps.' },
      { title: 'Matte Black Minimalist MS Railing', description: 'Architect-preferred slim vertical spindles with flush seamless joints.' },
      { title: 'CNC Laser-Cut Balcony Panels', description: 'Custom pattern sheet metal infill panels providing safety and privacy.' }
    ],
    process: [
      { step: 1, title: 'Rake Angle & Step Measurement', description: 'Precision angle calculation for stair treads and level balcony runs.' },
      { step: 2, title: 'In-Shop Welded Sub-Assemblies', description: 'Prefabrication of balusters, handrail bends, and base plates.' },
      { step: 3, title: 'Chemical Anchor Fastening', description: 'Drilling with zero tile cracking and heavy chemical anchoring.' },
      { step: 4, title: 'Mirror/Satin Polish or Powder Coat', description: 'Final high-buffing or scratch-resistant coating application.' }
    ],
    faqs: [
      { question: 'Do you recommend SS 304 or SS 316 for coastal areas like Mumbai and Mira-Bhayandar?', answer: 'For locations within 5-10 km of the coastline or salt pans, we strongly recommend SS 316 or high-bake zinc powder-coated steel to prevent tea-staining and oxidation.' }
    ],
    relatedServices: ['staircase', 'window-grill', 'metal-gates']
  },
  {
    id: 'srv-8',
    name: 'Roofing Sheets',
    slug: 'roofing-sheets',
    shortDescription: 'Supply and installation of Color Coated Galvalume, Polycarbonate, UPVC, and Insulated Sandwich PUF roofing sheets.',
    fullDescription: 'Welderwale offers professional supply, structural framework, and leak-proof installation of advanced roofing sheets for industrial factories, warehouses, commercial canopies, and residential terraces. We partner with top manufacturers like Tata Bluescope, JSW Colouron+, and Jindal.',
    featuredImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651554-6691fc9d0903?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Industrial & Roofing',
    isFeatured: false,
    displayOrder: 8,
    seoTitle: 'Roofing Sheet Installation & Supply Mumbai & Thane | Welderwale',
    seoDescription: 'Pre-painted Galvalume, Polycarbonate, PUF sandwich panel, and UPVC roofing sheet installation across Mumbai, Thane, and Bhayandar.',
    specifications: [
      { label: 'Sheet Thickness', value: '0.40mm, 0.45mm, 0.50mm, 0.60mm (Custom)' },
      { label: 'Substrate Metal', value: 'Al-Zn Alloy Coated Steel (Galvalume AZ-150 / AZ-200)' },
      { label: 'Color Options', value: 'Royal Blue, Off-White, Mist Green, Terracotta Red, Castle Grey' },
      { label: 'Thermal Insulation', value: 'Optional 30mm/50mm PUF / Rockwool insulation sandwiching' },
      { label: 'Fasteners', value: 'Corroshield Class 3 / Class 4 self-drilling screws with EPDM washers' }
    ],
    options: [
      { title: 'Color Coated Galvalume Profile Sheets', description: 'High tensile 550 MPa steel sheets with superior corrosion resistance.' },
      { title: 'Multiwall Polycarbonate Skylights', description: 'UV-stabilized transparent/translucent sheets for natural daylight illumination.' },
      { title: '3-Layer UPVC Anti-Corrosion Sheets', description: 'Acid and chemical resistant roofing ideal for chemical zones, coastal belts, and farm sheds.' }
    ],
    process: [
      { step: 1, title: 'Roof Slope & Purlin Pitch Check', description: 'Ensuring purlin spacing conforms to sheet load-deflection tables.' },
      { step: 2, title: 'Laying Order & Wind Crest Alignment', description: 'Laying opposite to prevailing wind direction for zero water seepage.' },
      { step: 3, title: 'Precision Torque Fastening', description: 'Torque-regulated fastening preventing over-compression of rubber washers.' },
      { step: 4, title: 'Flashings & Ridge Capping', description: 'Bespoke apron flashing, barge boards, and valley gutters sealed with butyl tape.' }
    ],
    faqs: [
      { question: 'What is the advantage of Galvalume over traditional GI sheets?', answer: 'Galvalume contains 55% Aluminum and 43.4% Zinc, providing up to 4x longer rust resistance compared to standard galvanized zinc sheets in coastal environments.' }
    ],
    relatedServices: ['metal-sheds', 'animal-farm-sheds', 'garden-pergola']
  },
  {
    id: 'srv-9',
    name: 'Shutter',
    slug: 'rolling-shutters',
    shortDescription: 'Heavy-duty manual and motorized rolling shutters, perforated shop shutters, grill shutters, and industrial gear shutters.',
    fullDescription: 'Protect your commercial shops, showrooms, warehouses, and factories with Welderwale premium rolling shutters. We manufacture motorized shutters with remote control, perforated view shutters, polycarbonate transparent shutters, and heavy gauge gear-operated industrial shutters.',
    featuredImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Commercial & Security',
    isFeatured: false,
    displayOrder: 9,
    seoTitle: 'Rolling Shutter Manufacturers & Motorized Shutters in Mumbai | Welderwale',
    seoDescription: 'Shop rolling shutters, motorized industrial shutters, perforated and grill shutters manufactured and serviced by Welderwale in Thane & Mumbai.',
    specifications: [
      { label: 'Slat Thickness', value: '18 Gauge (1.2mm), 20 Gauge (0.9mm), 22 Gauge (0.8mm) Cold Rolled Steel' },
      { label: 'Spring Mechanism', value: 'High-carbon oil-tempered flat torsion springs for smooth effortless lifting' },
      { label: 'Side Guide Channels', value: 'Heavy MS channel (65x35mm / 75x40mm) with anti-rattle nylon lining' },
      { label: 'Motor Rating', value: 'Central / Side Motor drives with manual emergency chain override' }
    ],
    options: [
      { title: 'Automatic Motorized Rolling Shutters', description: 'Push-button and remote control operated with silent tubular or side motors.' },
      { title: 'Perforated / See-Through Showroom Shutters', description: 'Tiny micro-perforations allowing nighttime ventilation and display lighting.' },
      { title: 'Heavy Gear-Operated Industrial Shutters', description: 'Mechanical reduction gear box for large factory openings up to 30 ft wide.' }
    ],
    process: [
      { step: 1, title: 'Opening Measurement & Plumb Check', description: 'Verifying lintel clearance and vertical guide wall alignments.' },
      { step: 2, title: 'Slat Interlocking & Drum Assembly', description: 'Precision interlocked steel strips, heavy pipe axle, and calibrated spring tensioning.' },
      { step: 3, title: 'Guide Fixing & Shutter Hoisting', description: 'Rigid anchor fastening of side channels and bracket plates.' },
      { step: 4, title: 'Tension Calibration & Motor Setup', description: 'Spring balancing for one-hand lifting and electrical limit switch setup.' }
    ],
    faqs: [
      { question: 'What happens to motorized shutters during a power outage?', answer: 'All our motorized shutters come equipped with a manual chain release mechanism and optional battery UPS backup.' }
    ],
    relatedServices: ['metal-gates', 'window-grill', 'custom-metal-frames']
  },
  {
    id: 'srv-10',
    name: 'Staircase',
    slug: 'metal-staircase',
    shortDescription: 'Architectural metal staircases, space-saving spiral stairs, industrial steel fire escapes, and cantilevered floating stairs.',
    fullDescription: 'Engineered for structural strength, geometric beauty, and safety. Welderwale designs, fabricates, and installs custom residential floating stairs, industrial fire escapes, curved spiral staircases, and duplex spine-beam staircases.',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Structural',
    isFeatured: true,
    displayOrder: 10,
    seoTitle: 'Modern Metal Staircase & Fire Escape Fabrication Mumbai | Welderwale',
    seoDescription: 'Floating stairs, spiral staircases, mono-stringer duplex stairs, and industrial fire escape staircases in Mumbai, Thane & Bhayandar.',
    specifications: [
      { label: 'Stringer Design', value: 'Mono-Stringer Box Beam (200x100mm), Double C-Channel, Plate Stringer' },
      { label: 'Tread Options', value: 'Chequered Plate Anti-Skid Steel, Hardwood Teak, Toughened Glass' },
      { label: 'Live Load Rating', value: 'Tested for 4.0 kN/m² commercial load capacity as per National Building Code' },
      { label: 'Railing Integration', value: 'Concealed base side-mounted SS Glass / Minimalist steel balusters' }
    ],
    options: [
      { title: 'Cantilever Floating Staircase', description: 'Wall-anchored steel stringer creating the stunning illusion of floating steps.' },
      { title: 'Compact Space-Saving Spiral Staircase', description: 'Central heavy steel column with radial treads, ideal for duplexes and terrace access.' },
      { title: 'External Industrial Fire Escape Staircase', description: 'Heavy galvanized structural steel stairs complying with fire safety regulations.' }
    ],
    process: [
      { step: 1, title: 'Floor-to-Floor Laser Sizing', description: 'Precise calculation of riser height, tread run, and head clearance.' },
      { step: 2, title: 'CAD Stair Geometry & Stringer Cutting', description: 'Plasma/laser profile cutting of stringer notches for 100% level treads.' },
      { step: 3, title: 'Modular Workshop Trial Assembly', description: 'Full pre-fit in factory to guarantee zero on-site geometric deviation.' },
      { step: 4, title: 'Structural Anchor Installation', description: 'Rigid base foundation bolting, landing tie-in, and handrail integration.' }
    ],
    faqs: [
      { question: 'What is the minimum space required for an external spiral staircase?', answer: 'A compact spiral staircase requires a footprint of just 4 ft x 4 ft (1.2m diameter), making it ideal for terrace and mezzanine access.' }
    ],
    relatedServices: ['metal-railing', 'custom-metal-frames', 'structural-fabrication']
  },
  {
    id: 'srv-11',
    name: 'Unipole Structure',
    slug: 'unipole-structure',
    shortDescription: 'Heavy structural single-column billboard unipoles, high-mast highway signage towers, and gantry advertising structures.',
    fullDescription: 'Welderwale fabricates heavy structural steel unipole hoardings and highway advertising signage structures built to withstand extreme wind velocities. Engineered with thick-walled seamless steel tubular shafts, reinforced foundation base rings, and rigid catwalk maintenance platforms.',
    featuredImage: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Industrial & Structural',
    isFeatured: false,
    displayOrder: 11,
    seoTitle: 'Heavy Structural Unipole & Billboard Fabrication Mumbai | Welderwale',
    seoDescription: 'Single column unipole advertising structures, highway hoardings, and gantry towers fabricated with full wind-load engineering in Mumbai & Thane.',
    specifications: [
      { label: 'Shaft Diameter', value: '600mm to 1200mm Heavy Wall ERW / Seamless Pipe (12mm–20mm thick)' },
      { label: 'Display Frame Size', value: '20x10 ft, 30x15 ft, 40x20 ft, 60x20 ft (Custom sizes)' },
      { label: 'Wind Speed Certification', value: 'Wind tunnel rated for up to 160 km/h cyclone resistance' },
      { label: 'Safety Accessories', value: 'Internal climbing ladder with safety cage, 360° perimeter catwalk, floodlight brackets' }
    ],
    options: [
      { title: 'Standard Single-Sided Highway Unipole', description: 'Cantilevered display face optimized for long-distance highway line of sight.' },
      { title: 'Double-Sided V-Shape Unipole', description: 'Angled twin displays capturing traffic from both highway directions.' },
      { title: 'Overhead Highway Gantry Structure', description: 'Span bridge structures crossing multi-lane roadways.' }
    ],
    process: [
      { step: 1, title: 'Soil Report & Foundation Design', description: 'Deep pile / raft foundation anchor cage engineering.' },
      { step: 2, title: 'Heavy Shaft Fabrication & Submerged Arc Welding', description: 'Heavy plate rolling, flange welding, and ultrasonic weld testing.' },
      { step: 3, title: 'Hot-Dip Galvanizing / Epoxy Coating', description: 'Multi-layer marine grade protective coating against weather.' },
      { step: 4, title: 'Hydraulic Heavy Crane Erection', description: 'Precision crane hoisting, torque wrench anchor tightening, and catwalk assembly.' }
    ],
    faqs: [
      { question: 'Do you supply structural stability certificates for municipal approvals?', answer: 'Yes, all our unipole designs are vetted by certified structural engineers with complete load calculation drawings.' }
    ],
    relatedServices: ['structural-fabrication', 'custom-metal-frames']
  },
  {
    id: 'srv-12',
    name: 'Window Grill',
    slug: 'window-grill',
    shortDescription: 'Modern safety window grills, balcony invisible grills, decorative box grills, and heavy wrought iron burglar bars.',
    fullDescription: 'Secure your home and commercial spaces with Welderwale stylish, rust-proof window grills. We craft modern horizontal flat bar grills, laser-cut decorative balcony grills, box extension flower-bed grills, and high-tensile safety barriers.',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Architectural & Security',
    isFeatured: true,
    displayOrder: 12,
    seoTitle: 'Modern Window Grill & Balcony Safety Grill Fabrication | Welderwale Mumbai',
    seoDescription: 'Designer window grills, box grills, balcony safety screens, and wrought iron grills in Mumbai, Thane, Mira Road, and Bhayandar.',
    specifications: [
      { label: 'Bar Sizes', value: '12mm / 16mm Solid Bright Bar, 25x5mm Flat Bar, 20x20mm Square Hollow Pipe' },
      { label: 'Coating Options', value: 'Zinc Electroplating, 7-Tank Powder Coating, Polyurethane Enamel Paint' },
      { label: 'Designs', value: 'Minimalist Horizontal, Diamond Mesh, Geometric Floral, Box Extension' },
      { label: 'Mounting', value: 'Deep concealed tamper-proof concrete wall anchors' }
    ],
    options: [
      { title: 'Extended Balcony Box Grill', description: '1.5 ft to 2.5 ft extension with bottom chequered plate for plant pots and clothes drying.' },
      { title: 'Minimalist Flat Bar Modern Grill', description: 'Architectural sleek horizontal lines maximizing outside view while ensuring safety.' },
      { title: 'CNC Laser-Cut Privacy Window Screen', description: 'Perforated decorative steel screens providing both safety and shading.' }
    ],
    process: [
      { step: 1, title: 'On-Site Window Frame Sizing', description: 'Exact window jamb measurement with plumb tolerance checks.' },
      { step: 2, title: 'In-Shop Precision Jigs & Welding', description: 'Square framing and full perimeter weld bonding.' },
      { step: 3, title: 'Anti-Corrosion Surface Treatment', description: 'Zinc chromate primer and durable bake-finish coating.' },
      { step: 4, title: 'Secure Mechanical Fastening', description: 'Fastening using anti-tamper security fasteners with zero sill damage.' }
    ],
    faqs: [
      { question: 'Can you match housing society standard grill color and patterns?', answer: 'Yes, we customize our designs and paint finishes to strictly comply with individual housing society guidelines.' }
    ],
    relatedServices: ['metal-gates', 'metal-railing', 'custom-metal-frames']
  },
  {
    id: 'srv-13',
    name: 'Structural Fabrication',
    slug: 'structural-fabrication',
    shortDescription: 'Heavy industrial structural steel fabrication, mezzanine floors, factory framework, pipe racks, and crane gantry girders.',
    fullDescription: 'Welderwale is an industrial structural steel fabrication specialist with deep expertise in heavy columns, I-beam frameworks, mezzanine floor construction, pipe rack structures, and industrial platform engineering. We adhere to rigorous Indian Standards (IS 800 / IS 2062) for structural integrity and weld quality.',
    featuredImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Industrial & Heavy Engineering',
    isFeatured: true,
    displayOrder: 13,
    seoTitle: 'Heavy Structural Steel Fabrication & Mezzanine Floors | Welderwale Mumbai',
    seoDescription: 'Industrial structural fabrication, mezzanine floor erection, factory beam frameworks, and gantry girders in Mumbai, Thane, and Bhayandar.',
    specifications: [
      { label: 'Steel Grade', value: 'IS 2062 Grade E250 / E350 Structural Steel (SAIL / TATA / JSW)' },
      { label: 'Welding Standards', value: 'AWS D1.1 / IS 9595 Certified Welders with NDT (DP / Ultrasonic) testing' },
      { label: 'Load Capacities', value: 'Custom engineered up to 1,500 kg/m² for heavy industrial mezzanines' },
      { label: 'Connection Details', value: 'High-Strength Friction Grip (HSFG) bolting & full penetration butt welding' }
    ],
    options: [
      { title: 'Heavy Industrial Mezzanine Floors', description: 'Double your warehouse or workshop usable floor space with high-load steel mezzanines.' },
      { title: 'Overhead Crane Gantry Girders', description: 'Precision aligned crane runways designed for 5-ton to 50-ton EOT cranes.' },
      { title: 'Industrial Utility Pipe Racks', description: 'Multi-tier structural steel bridges supporting industrial piping and cable trays.' }
    ],
    process: [
      { step: 1, title: 'Structural Analysis & GA Drawings', description: 'STAAD.Pro load calculations and detailed shop fabrication drawings.' },
      { step: 2, title: 'Heavy Cutting, Beveling & Fitting', description: 'CNC plate cutting, beam saw processing, and precision fitting.' },
      { step: 3, title: 'Certified Welding & NDT Testing', description: 'Multi-pass SAW and MIG welding with dye penetrant inspection.' },
      { step: 4, title: 'Rigid Site Erection & Torquing', description: 'Systematic erection sequence with calibrated torque wrench bolting.' }
    ],
    faqs: [
      { question: 'What floor finishes are available for mezzanine floors?', answer: 'We offer heavy chequered steel plates, cement fiber boards with vinyl, metal deck with reinforced concrete slab, or grating.' }
    ],
    relatedServices: ['metal-sheds', 'staircase', 'custom-metal-frames', 'unipole-structure']
  }
];
