// Academic Events, Design Exhibitions & Masterclass Series
// Presented transparently as seasonal calendar formats and design colloquiums

export const events = [
  {
    id: 'ids-annual-design-showcase',
    title: 'IDS Annual Graduation Design Exhibition',
    category: 'Exhibition',
    badge: 'Flagship Event',
    dateLabel: 'Summer Term Showcase (Annual)',
    duration: '3 Days Public Exhibition',
    location: 'Pune Campus — Main Gallery & Courtyard',
    image: '/images/student-exhibition.webp',
    summary: 'The culminating graduation exhibition featuring original collections, architectural models, visual identities, and interactive digital prototypes from graduating cohorts.',
    fullDescription: 'The Annual Design Showcase brings together design leaders, agency creative directors, architectural studio principals, and prospective students. Across 10,000 square feet of curated gallery space, students present their physical capstone artifacts, interactive software prototypes, and high-fashion capsule collections accompanied by oral design defenses.',
    highlights: [
      'Over 80 curated student capstone projects across all 12 design disciplines',
      'Live runway presentation of graduating fashion collections',
      'Physical architectural model walk-throughs and spatial walkthroughs',
      'One-on-one portfolio review sessions with visiting industry directors'
    ],
    scheduleTimeline: [
      { time: 'Day 1 — 10:00 AM', title: 'Press & Industry Preview VIP Vernissage' },
      { time: 'Day 1 — 05:00 PM', title: 'Graduation Fashion Runway Presentation' },
      { time: 'Day 2 — 11:00 AM', title: 'Spatial Design & Product Innovation Forum' },
      { time: 'Day 3 — 02:00 PM', title: 'Digital Design & UI/UX Live Prototyping Demos' },
      { time: 'Day 3 — 06:00 PM', title: 'Closing Ceremony & Student Excellence Citations' }
    ]
  },
  {
    id: 'sustainable-materials-colloquium',
    title: 'International Sustainable Materials & Bio-Design Colloquium',
    category: 'Workshop',
    badge: 'Research Series',
    dateLabel: 'Autumn Studio Series (Biannual)',
    duration: '2-Day Intensive Hands-on Workshop',
    location: 'Pune Campus — Material Innovation Lab',
    image: '/images/interior-design-workshop.webp',
    summary: 'An experimental hands-on workshop investigating indigenous natural dyes, mycelium composites, and circular packaging design.',
    fullDescription: 'Bringing traditional Indian material knowledge into dialogue with global green manufacturing standards, this workshop immerses students in the chemistry of plant mordants, bio-resins, and cradle-to-cradle product lifecycles.',
    highlights: [
      'Live botanical dye extraction using marigold, indigo, and madder roots',
      'Hands-on formulation of biodegradable packaging films from agricultural waste',
      'Circular design lifecycle auditing for consumer hardware and apparel',
      'Material swatch archiving and documentation techniques'
    ],
    scheduleTimeline: [
      { time: 'Day 1 — 09:30 AM', title: 'Lecture: The Ethics of Material Selection in 2026' },
      { time: 'Day 1 — 01:30 PM', title: 'Bio-Composite Casting & Press Experiments' },
      { time: 'Day 2 — 10:00 AM', title: 'Dye Extraction & Fabric Swatch Finishing' },
      { time: 'Day 2 — 03:30 PM', title: 'Public Material Exhibition & Review' }
    ]
  },
  {
    id: 'global-typography-symposium',
    title: 'Indic & Latin Typographic Identity Masterclass',
    category: 'Masterclass',
    badge: 'Special Session',
    dateLabel: 'Winter Term Workshop',
    duration: 'Weekend Intensive',
    location: 'Hybrid: Pune Studio & Live International Stream',
    image: '/images/graphic-design-team.webp',
    summary: 'A deep exploration into multi-script typography, balancing the expressive ligature dynamics of Devanagari with modern Latin geometric grids.',
    fullDescription: 'Multi-script branding has become the defining frontier of international brand expansion into South Asia. This masterclass trains graphic designers to curate bi-scriptural visual systems where Devanagari and Latin typefaces share weight, harmony, and cultural resonance.',
    highlights: [
      'Anatomy of Devanagari matras, shirorekha, and stroke modulation',
      'Pairing Swiss typographic layouts with fluid Indic letterforms',
      'Variable font technology and responsive web typography parameters',
      'Custom logotype drafting and vector geometry refinement'
    ],
    scheduleTimeline: [
      { time: 'Saturday — 10:00 AM', title: 'Devanagari Calligraphy & Optical Rhythm' },
      { time: 'Saturday — 02:00 PM', title: 'Vector Digitization in Glyphs & FontLab' },
      { time: 'Sunday — 10:30 AM', title: 'Bi-Scriptural Brand System Case Studies' },
      { time: 'Sunday — 03:00 PM', title: 'Student Logotype Critique & Specimen Print' }
    ]
  },
  {
    id: 'ux-spatial-computing-sprint',
    title: 'Spatial UI & Cognitive Ergonomics Design Sprint',
    category: 'Design Sprint',
    badge: 'Hackathon Format',
    dateLabel: 'Spring Term Hackathon',
    duration: '48-Hour Rapid Prototyping Sprint',
    location: 'Pune Digital Experience Lab',
    image: '/images/uiux-design-collaboration.webp',
    summary: 'A 48-hour challenge where students conceptualize spatial user interfaces and gesture interaction models for emerging AR headsets.',
    fullDescription: 'As interfaces transition from two-dimensional glass screens into 3D spatial environments, designers must rethink depth cues, gaze targeting, audio ergonomics, and accessibility. Student teams solve real-world healthcare and spatial navigation briefs.',
    highlights: [
      'Gaze and pinch interaction design heuristics',
      'Spatial UI prototyping using Figma, Bezel, and Unity',
      'Ergonomic testing for eye strain and cognitive fatigue',
      'Live pitch to interactive design studio creative leads'
    ],
    scheduleTimeline: [
      { time: 'Friday — 05:00 PM', title: 'Brief Reveal & Team Formation' },
      { time: 'Saturday — 09:00 AM', title: 'User Journey Mapping & Spatial Wireframing' },
      { time: 'Saturday — 07:00 PM', title: 'Prototype Playtesting & Mentor Checkpoint' },
      { time: 'Sunday — 04:00 PM', title: 'Final 5-Minute Prototype Pitches & Awards' }
    ]
  }
];

export const eventCategories = [
  'All Events',
  'Exhibition',
  'Workshop',
  'Masterclass',
  'Design Sprint'
];
