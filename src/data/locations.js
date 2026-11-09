// Global Locations Data for International Design School (IDS)
// Highlighting Pune as primary Indian campus and international locations as planned global creative hubs

export const locations = [
  {
    id: 'pune',
    slug: 'pune',
    name: 'Pune Campus',
    country: 'India',
    flag: '🇮🇳',
    type: 'Primary Operational Campus',
    status: 'Active & Enrolling',
    statusBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tagline: 'The Epicenter of Indian Design Innovation & Creative Craftsmanship',
    heroImage: '/campus/International Design School Entrance.webp',
    address: 'Koregaon Park Annex / Viman Nagar Creative Corridor, Pune, Maharashtra 411014, India',
    isPrimary: true,
    established: 'Primary Design Campus',
    description: 'Serving as the flagship Indian educational hub of International Design School, the Pune campus combines bioclimatic contemporary studio architecture with extensive fabrication laboratories. Situated in Pune—India’s premier student and cultural innovation capital—the campus fosters intensive collaborative studio culture across fashion, interior architecture, visual communication, and digital technology.',
    campusAtmosphere: 'Spanning multiple levels of naturally lit open-plan studios, high-ceiling atelier workshops, and a sun-drenched central courtyard, the Pune campus is designed to dismantle traditional hierarchy and cultivate active peer-to-peer critique.',
    facilities: [
      {
        name: 'Haute Couture & Textile Atelier',
        desc: 'Equipped with industrial Juki sewing machines, professional couture mannequins, cutting tables, and textile dye vats.'
      },
      {
        name: 'Rapid Fabrication & Model Workshop',
        desc: 'Featuring 3-axis CNC routing, laser cutters, 3D resin and FDM printers, and dedicated timber woodworking benches.'
      },
      {
        name: 'Digital Experience & Prototyping Suite',
        desc: 'Color-calibrated 4K multi-screen workstations, VR spatial testing kits, and interactive presentation screens.'
      },
      {
        name: 'Material & Architectural Finishes Library',
        desc: 'Over 2,000 curated physical swatches including local stone, sustainable composites, acoustic felts, and bio-polymers.'
      },
      {
        name: 'White-Cube Exhibition Gallery',
        desc: 'A flexible public-facing gallery space with museum-grade spotlights for student term projects and graduate showcases.'
      },
      {
        name: 'Design Cafeteria & Open Amphitheater',
        desc: 'Lush greenery, artisanal coffee bar, and shaded outdoor seating designed for informal brainstorming and faculty interactions.'
      }
    ],
    programsOffered: [
      'Fashion Design',
      'Interior Design',
      'Graphic Design',
      'UI/UX Design',
      'Animation and Motion Design',
      'Jewellery Design',
      'Product Design',
      'Fashion Styling'
    ],
    contactInfo: {
      phone: '+91 (020) 2615-IDS9 (Enquiry Desk)',
      email: 'pune.admissions@ids-edu.com',
      hours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST'
    }
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore Studio',
    country: 'Singapore',
    flag: '🇸🇬',
    type: 'Planned Global Creative Hub',
    status: 'Planned Global Location / Exchange Center',
    statusBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tagline: 'Asian Biophilic Design, Smart Cities & Strategic Brand Innovation',
    heroImage: '/campus/Modern International Design School Entrance.webp',
    address: 'Marina Bay / Bugis Creative Arts District, Singapore (Proposed Location)',
    isPrimary: false,
    established: 'Global Expansion Initiative',
    description: 'Envisioned as IDS’s gateway to Southeast Asian design excellence, the planned Singapore Hub connects students with the world’s leading biophilic urban architecture, smart mobility ecosystems, and luxury brand headquarters.',
    campusAtmosphere: 'A sleek, hyper-modern biophilic glass environment overlooking Singapore’s iconic skyline, designed for intensive executive workshops, global exchange terms, and international industry design juries.',
    facilities: [
      {
        name: 'Smart Urbanism & Spatial Lab',
        desc: 'Focusing on vertical greenery integration, high-density residential modeling, and sustainable materials.'
      },
      {
        name: 'Asia-Pacific Brand Strategy Suite',
        desc: 'Collaborative rooms for luxury retail forecasting and international brand market entry simulation.'
      },
      {
        name: 'Digital Twin & XR Immersion Lab',
        desc: 'Equipped for spatial computing visualization and real-time interactive architectural walk-throughs.'
      }
    ],
    programsOffered: [
      'UI/UX Design (Global Residency)',
      'Luxury Brand Management',
      'Digital Design & Creative Tech',
      'International Summer Masterclasses'
    ],
    contactInfo: {
      phone: '+65 6789-IDS0 (Singapore Liaison)',
      email: 'singapore.hub@ids-edu.com',
      hours: 'Monday – Friday: 9:00 AM – 5:30 PM SGT'
    }
  },
  {
    id: 'london-uk',
    slug: 'uk',
    name: 'United Kingdom Studio',
    country: 'United Kingdom',
    flag: '🇬🇧',
    type: 'Planned Global Creative Hub',
    status: 'Planned Global Location / Study Hub',
    statusBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tagline: 'Historic Couture Heritage, Radical Typography & Independent Publishing',
    heroImage: '/campus/Modern Design School Reception Lobby (1).webp',
    address: 'Shoreditch / Clerkenwell Creative District, London EC1, United Kingdom (Proposed Location)',
    isPrimary: false,
    established: 'Global Expansion Initiative',
    description: 'Conceived in London’s world-renowned creative epicenter, the planned UK Studio bridges historic British sartorial tailoring, radical independent publishing, and the vanguard of contemporary European visual communication.',
    campusAtmosphere: 'High-ceiling industrial warehouse loft featuring restored Victorian timber trusses, tall Crittall windows, and an extensive archival library of British graphic and textile history.',
    facilities: [
      {
        name: 'Sartorial Tailoring & Draping Atelier',
        desc: 'Traditional bespoke cutting tables and tailoring irons dedicated to British tailoring techniques.'
      },
      {
        name: 'Letterpress & Fine Printmaking Workshop',
        desc: 'Antique Albion relief printing presses, movable lead type, and artisanal bookbinding stations.'
      },
      {
        name: 'Curatorial & Editorial Salon',
        desc: 'A seminar venue hosting visiting European creative directors, museum curators, and fashion critics.'
      }
    ],
    programsOffered: [
      'Fashion Design & Couture Pathway',
      'Graphic Design & Editorial Typographics',
      'Visual Communication',
      'Summer London Design Immersion'
    ],
    contactInfo: {
      phone: '+44 (0) 20 7946-IDS1 (UK Liaison)',
      email: 'london.hub@ids-edu.com',
      hours: 'Monday – Friday: 9:30 AM – 5:00 PM GMT'
    }
  },
  {
    id: 'berlin-germany',
    slug: 'germany',
    name: 'Germany Workshop',
    country: 'Germany',
    flag: '🇩🇪',
    type: 'Planned Global Creative Hub',
    status: 'Planned Global Location / Study Hub',
    statusBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tagline: 'Bauhaus Functionalism, Circular Systems & Precision Industrial Craft',
    heroImage: '/campus/Modern Design School Entrance.webp',
    address: 'Kreuzberg / Mitte Design Quarter, Berlin 10178, Germany (Proposed Location)',
    isPrimary: false,
    established: 'Global Expansion Initiative',
    description: 'Rooted in Germany’s unmatched legacy of Bauhaus functionalism, automotive precision, and green circular engineering, the planned Berlin Workshop grounds students in rigorous problem-solving and sustainable industrial systems.',
    campusAtmosphere: 'A stark, beautifully minimalist concrete workshop flooded with natural diffused northern light, emphasizing honest materiality, modular furniture, and zero-waste fabrication.',
    facilities: [
      {
        name: 'Precision Industrial Modeling Workshop',
        desc: 'Equipped with micro-milling machinery, clay styling rigs, and circular material test benches.'
      },
      {
        name: 'Circular Material Innovation Lab',
        desc: 'Testing mycelium composites, recycled bioplastics, and cradle-to-cradle product lifecycles.'
      },
      {
        name: 'Physical Computing & Mechatronics Bay',
        desc: 'Prototyping sensor-driven physical objects and smart functional appliances.'
      }
    ],
    programsOffered: [
      'Product & Industrial Design',
      'Interior Design & Modular Spaces',
      'Digital Design & Creative Code',
      'Circular Materials Summer Lab'
    ],
    contactInfo: {
      phone: '+49 30 9018-IDS2 (Germany Liaison)',
      email: 'berlin.hub@ids-edu.com',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM CET'
    }
  },
  {
    id: 'usa',
    slug: 'usa',
    name: 'United States Studio',
    country: 'United States',
    flag: '🇺🇸',
    type: 'Planned Global Creative Hub',
    status: 'Planned Global Location / Study Hub',
    statusBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tagline: 'Digital Product Design, Scalable Systems & Creative Entrepreneurship',
    heroImage: '/campus/Modern Design School Reception Lobby (2).webp',
    address: 'Design District / Innovation Hub, San Francisco / New York (Proposed Location)',
    isPrimary: false,
    established: 'Global Expansion Initiative',
    description: 'Designed to plug students directly into the epicenter of global technology platforms, Silicon Valley venture ecosystems, and New York creative agency networks, the planned USA Studio focuses on scalable digital products and creative entrepreneurship.',
    campusAtmosphere: 'Expansive open-plan creative loft with modular whiteboards, standing design pods, and stadium seating for design-sprint critiques and venture investor pitch sessions.',
    facilities: [
      {
        name: 'Enterprise UX Observation Lab',
        desc: 'Advanced telemetry and remote user testing stations for enterprise software workflows.'
      },
      {
        name: 'Creative Venture Incubator',
        desc: 'Dedicated spaces for student-founded design studios, product startups, and IP development.'
      },
      {
        name: 'Interactive Media & Spatial Computing Studio',
        desc: 'Equipped with the latest head-mounted displays and spatial interaction testing rigs.'
      }
    ],
    programsOffered: [
      'UI/UX Design & Product Strategy',
      'Creative Technology & WebGL',
      'Luxury Brand Management',
      'Silicon Valley Design Thinking Residency'
    ],
    contactInfo: {
      phone: '+1 (415) 890-IDS3 (USA Liaison)',
      email: 'usa.hub@ids-edu.com',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM PST'
    }
  }
];
