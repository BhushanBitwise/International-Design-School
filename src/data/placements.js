// Student Placement & Career Outcomes Data — International Design School (IDS)
// Authentic editorial presentation focused on career pathways, portfolio development,
// and industry readiness without fabricated placement statistics or unverified recruiter claims.

export const PLACEMENT_CONTENT = {
  heading: 'From Creative Learning to Professional Careers.',
  subtitle: 'Building skills, developing portfolios, and preparing creative minds for opportunities across the design industry.',
  
  // 6-Stage Professional Journey Timeline
  journeySteps: [
    {
      number: '01',
      title: 'Discover Creative Direction',
      desc: 'Foundational studio diagnostics identify individual creative voice, spatial intuition, and medium affinity.'
    },
    {
      number: '02',
      title: 'Develop Professional Skills',
      desc: 'Mastery of industry-standard toolchains, material fabrication, design thinking, and technical execution.'
    },
    {
      number: '03',
      title: 'Build Your Portfolio',
      desc: 'Curating cohesive, narrative-driven case studies demonstrating problem solving from concept to final prototypes.'
    },
    {
      number: '04',
      title: 'Industry Exposure',
      desc: 'Studio visits, live client briefs, visiting creative director masterclasses, and external term jury reviews.'
    },
    {
      number: '05',
      title: 'Interview Preparation',
      desc: 'Mock technical design juries, communication coaching, portfolio defensibility sessions, and CV tailoring.'
    },
    {
      number: '06',
      title: 'Career Opportunities',
      desc: 'Graduation showcase exhibitions, creative agency connections, venture incubation, and freelance launchpads.'
    }
  ],

  // Creative Industry Categories
  careerCategories: [
    { name: 'Fashion & Couture', roles: 'Apparel Designer, Couturier, Textile Forensics, Costume Stylist' },
    { name: 'Interior & Spatial', roles: 'Spatial Architect, Hospitality Designer, Exhibition Curator, Lighting Consultant' },
    { name: 'UI/UX & Product Systems', roles: 'Product Designer, UX Researcher, Design Systems Architect, Interaction Specialist' },
    { name: 'Visual Communication', roles: 'Brand Identity Designer, Art Director, Typographer, Publication Lead' },
    { name: 'Industrial & Hardware', roles: 'Product Ergonomist, Consumer Electronics Modeler, Sustainable Materials Lead' },
    { name: 'Motion & Animation', roles: 'Motion Graphics Artist, Spatial VFX Designer, Kinetic Brand Animator' }
  ],

  // Student Showcase Cards (Curated Graduation Pathways)
  studentShowcases: [
    {
      id: 'student-01',
      studentName: 'Graduating Designer',
      specialization: 'Spatial Architecture & Interior Systems',
      careerTrack: 'Sustainable Hospitality & Interior Architect',
      studentPhoto: '/images/students/student-01-interior.webp',
      projectThumb: '/images/projects/project-02-interior.webp',
      projectTitle: 'Biophilic Eco-Resort Spatial Pavilion',
      portfolioStatus: 'Graduation Portfolio Spotlight'
    },
    {
      id: 'student-02',
      studentName: 'Creative Fellow',
      specialization: 'Haute Couture & Apparel Atelier',
      careerTrack: 'Contemporary Ready-to-Wear Atelier Lead',
      studentPhoto: '/images/students/student-02-fashion.webp',
      projectThumb: '/images/projects/project-01-fashion.webp',
      projectTitle: 'Zero-Waste Silk Draping & Kinetic Outerwear',
      portfolioStatus: 'Atelier Final Showcase'
    },
    {
      id: 'student-03',
      studentName: 'Digital Scholar',
      specialization: 'UI/UX & Interactive Design Systems',
      careerTrack: 'Enterprise Product Systems Designer',
      studentPhoto: '/images/students/student-03-uiux.webp',
      projectThumb: '/images/projects/project-04-uiux.webp',
      projectTitle: 'Cognitive Financial Health Operating System',
      portfolioStatus: 'Interactive Portfolio Review'
    }
  ]
};
