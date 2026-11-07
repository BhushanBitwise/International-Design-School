// Meet Our Team Data — International Design School (IDS)
// Modular Mosaic Grid Art-Directed to Match Reference Layout
// Editorial portraits of creative directors, discipline leads, and studio mentors.
// Authentic representation without invented biographical fictions.

export const TEAM_MOSAIC = {
  heading: 'Meet our Team!',
  subheading: 'Creative minds. Diverse perspectives. One shared vision to shape the future of design.',
  blueTileCopy: 'Creative minds. Diverse perspectives. One shared vision to shape the future of design.',
  
  // Featured Lead (Tall 2-row tile in Column 1 — Full Color)
  featuredLead: {
    id: 'lead-01',
    role: 'Academic Director & Fashion Atelier Lead',
    discipline: 'Fashion & Haute Couture Atelier',
    image: '/images/team/team-01-director.webp',
    isColor: true,
    aspect: 'tall',
    alt: 'Academic Director & Fashion Atelier Lead seated in architectural courtyard'
  },

  // Grid Portraits (Black and White with White Arrow ↗)
  members: [
    {
      id: 'member-02',
      gridArea: 'col-2-row-1',
      role: 'Head of Spatial Architecture',
      discipline: 'Interior & Spatial Design',
      image: '/images/team/team-02-interior.webp',
      isColor: false,
      alt: 'Head of Spatial Architecture editorial portrait'
    },
    {
      id: 'member-03',
      gridArea: 'col-3-row-1',
      role: 'Principal Mentor in Visual Systems',
      discipline: 'Graphic & Typographic Design',
      image: '/images/team/team-03-visual.webp',
      isColor: false,
      alt: 'Principal Mentor in Visual Systems editorial portrait'
    },
    {
      id: 'member-04',
      gridArea: 'col-4-row-1',
      role: 'Director of Digital Experience',
      discipline: 'UI/UX & Interactive Products',
      image: '/images/team/team-04-digital.webp',
      isColor: false,
      alt: 'Director of Digital Experience editorial portrait'
    },
    {
      id: 'member-05',
      gridArea: 'col-1-row-3',
      role: 'Studio Coordinator & Material Lab',
      discipline: 'Material Science & Fabrication',
      image: '/images/team/team-05-materials.webp',
      isColor: false,
      alt: 'Studio Coordinator and Material Lab researcher portrait'
    },
    {
      id: 'member-06',
      gridArea: 'col-2-row-3',
      role: 'Creative Technologist & Prototyping',
      discipline: 'Creative Technology & 3D',
      image: '/images/team/team-06-technologist.webp',
      isColor: false,
      alt: 'Creative Technologist and Prototyping Mentor portrait'
    },
    {
      id: 'member-07',
      gridArea: 'col-3-row-3',
      role: 'Textile Futures & Couture Mentor',
      discipline: 'Sustainable Textile Engineering',
      image: '/images/team/team-07-textiles.webp',
      isColor: false,
      alt: 'Textile Futures and Sustainable Couture Mentor portrait'
    },
    {
      id: 'member-08',
      gridArea: 'col-4-row-2',
      role: 'Lead Mentor in Cognitive Design',
      discipline: 'Interaction & Human Factors',
      image: '/images/team/team-08-interaction.webp',
      isColor: false,
      alt: 'Lead Mentor in Cognitive Design portrait'
    },
    {
      id: 'member-09',
      gridArea: 'col-4-row-3',
      role: 'Principal Industrial Design Mentor',
      discipline: 'Product & Hardware Design',
      image: '/images/team/team-09-product.webp',
      isColor: false,
      alt: 'Principal Industrial Design Mentor portrait'
    }
  ]
};
