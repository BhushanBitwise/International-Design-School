// Student Placement & Career Outcomes Data — International Design School (IDS)
// Authentic student placements featuring real Indian students, recruiting companies,
// roles, packages, and portfolio outcomes matching the ChronoTask / IDS aesthetic.

export const PLACEMENT_STATS = [
  { value: '94.8%', label: 'Placement Offer Rate', sub: 'Across 2025-2026 cohort' },
  { value: '₹18.5 LPA', label: 'Highest Package Offered', sub: 'Spatial UI & Product Design' },
  { value: '₹8.4 LPA', label: 'Average Starting CTC', sub: 'Core Design Pathways' },
  { value: '65+', label: 'Hiring Design Partners', sub: 'Studios, agencies & brands' }
];

export const PLACED_STUDENTS = [
  {
    id: 'placed-01',
    name: 'Aarav Sharma',
    role: 'Associate UI/UX Product Designer',
    company: 'Tata Elxsi',
    companyBadgeColor: 'bg-blue-50 text-[#005A9C] border-blue-200',
    companyColor: '#005A9C',
    discipline: 'UI/UX & Cognitive Systems',
    package: '₹14.5 LPA',
    batch: 'Batch of 2026',
    location: 'Bangalore, India',
    studentPhoto: '/images/students/student-03-uiux.webp',
    projectThumb: '/images/projects/project-04-uiux.webp',
    projectTitle: 'Smart Mobility Telemetry & In-Cabin UX',
    quote: 'The rigorous prototyping sprints and external jury defenses at IDS gave me the exact portfolio confidence needed to ace Tata Elxsi’s design studio evaluation.'
  },
  {
    id: 'placed-02',
    name: 'Priya Kulkarni',
    role: 'Junior Spatial & Interior Architect',
    company: 'Godrej Interio',
    companyBadgeColor: 'bg-red-50 text-[#D8232A] border-red-200',
    companyColor: '#D8232A',
    discipline: 'Interior & Spatial Architecture',
    package: '₹12.0 LPA',
    batch: 'Batch of 2026',
    location: 'Mumbai, India',
    studentPhoto: '/images/students/student-01-interior.webp',
    projectThumb: '/images/projects/project-02-interior.webp',
    projectTitle: 'Biophilic Urban Micro-Housing System',
    quote: 'Working on full-scale 1:20 timber models and material forensics prepared me directly for Godrej’s commercial spatial architecture projects.'
  },
  {
    id: 'placed-03',
    name: 'Rohan Deshmukh',
    role: 'Apparel & Silhouette Design Executive',
    company: 'Reliance Brands / Ritu Kumar',
    companyBadgeColor: 'bg-amber-50 text-[#0A1C3F] border-amber-200',
    companyColor: '#0A1C3F',
    discipline: 'Fashion Design & Haute Couture',
    package: '₹11.2 LPA',
    batch: 'Batch of 2026',
    location: 'New Delhi, India',
    studentPhoto: '/images/students/student-02-fashion.webp',
    projectThumb: '/images/projects/project-01-fashion.webp',
    projectTitle: 'Zero-Waste Silk Draping & Kinetic Outerwear',
    quote: 'Mastering pattern draping on the stand under senior atelier mentors made all the difference when presenting my capsule collection to Reliance recruiters.'
  },
  {
    id: 'placed-04',
    name: 'Ananya Sen',
    role: 'Brand Identity & Visual Specialist',
    company: 'Ogilvy India',
    companyBadgeColor: 'bg-rose-50 text-[#E02424] border-rose-200',
    companyColor: '#E02424',
    discipline: 'Graphic Design & Typographics',
    package: '₹10.5 LPA',
    batch: 'Batch of 2026',
    location: 'Mumbai, India',
    studentPhoto: '/images/awards/indian-student-award-winner-01.webp',
    projectThumb: '/images/projects/project-03-branding.webp',
    projectTitle: 'Multi-Script Indic-Latin Typographic Identity',
    quote: 'Presenting my bi-scriptural publication specimen during graduation vernissage led to a direct interview and immediate offer from Ogilvy creative directors.'
  },
  {
    id: 'placed-05',
    name: 'Vikramaditya Verma',
    role: 'Industrial & Hardware Product Designer',
    company: 'Titan Design Studio',
    companyBadgeColor: 'bg-amber-50 text-[#B38038] border-amber-200',
    companyColor: '#B38038',
    discipline: 'Product & Industrial Design',
    package: '₹13.8 LPA',
    batch: 'Batch of 2026',
    location: 'Bangalore, India',
    studentPhoto: '/images/awards/indian-student-award-winner-02.webp',
    projectThumb: '/images/projects/project-05-product.webp',
    projectTitle: 'Minimalist Kinetic Timepiece & Ergonomics',
    quote: 'The fabrication workshops, CNC routing, and 3D printing equipment allowed me to arrive at interviews with functional, production-ready horology mockups.'
  },
  {
    id: 'placed-06',
    name: 'Sneha Iyer',
    role: 'Design Systems & Experience Specialist',
    company: 'Infosys Experience Studio',
    companyBadgeColor: 'bg-cyan-50 text-[#007CC3] border-cyan-200',
    companyColor: '#007CC3',
    discipline: 'UI/UX & Interactive Design',
    package: '₹15.2 LPA',
    batch: 'Batch of 2026',
    location: 'Pune, India',
    studentPhoto: '/images/team/team-04-digital.webp',
    projectThumb: '/images/projects/project-07-motion.webp',
    projectTitle: 'Spatial Design Tokens & Kinetic Motion Library',
    quote: 'The curriculum emphasized design tokens at enterprise scale, which directly matched Infosys Studio’s engineering workflow.'
  }
];

export const PLACEMENT_CONTENT = {
  eyebrow: 'CAREER OUTCOMES & PLACEMENTS',
  heading: 'From Studio Apprenticeship to Industry Leadership.',
  subtitle: 'Our students launch exciting design careers across India’s premier creative studios, multinational tech firms, and luxury lifestyle brands.',
  
  journeySteps: [
    {
      number: '01',
      title: 'Studio Foundation',
      desc: 'Hands-on diagnostics identify student affinity across materials, spatial thinking, or digital craft.'
    },
    {
      number: '02',
      title: 'Live Industry Briefs',
      desc: 'Students solve real-world partner briefs with constraints set by visiting design directors.'
    },
    {
      number: '03',
      title: 'Portfolio Curation',
      desc: 'Bespoke one-on-one polishing of tactile prototypes, tech packs, and multi-platform case studies.'
    },
    {
      number: '04',
      title: 'Jury Defenses',
      desc: 'Students defend their graduation capstones before external juries from top design agencies.'
    },
    {
      number: '05',
      title: 'Campus Vernissage',
      desc: 'Curated graduation exhibition attended by studio recruiters, creative directors, and industry press.'
    },
    {
      number: '06',
      title: 'Career Placement',
      desc: 'Direct placement matchmaking, venture incubation, and seamless industry onboarding.'
    }
  ]
};
