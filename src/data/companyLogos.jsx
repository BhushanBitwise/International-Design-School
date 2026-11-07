// Global Creative Industry Ecosystem — Authentic Brand SVG Marks
// Categorized by Creative Software, Digital Platforms, and Design Ecosystems
// Credibility Notice: Represents the industry-standard software tools, platforms,
// and digital ecosystems taught in IDS curriculum and shaping modern design.

export const ECOSYSTEM_CATEGORIES = {
  software: 'Creative & 3D Software',
  technology: 'Digital & Tech Platforms',
  ecosystem: 'Design & Product Ecosystem'
};

export const companyLogosRow1 = [
  {
    name: 'Figma',
    category: 'Design & Prototyping',
    brandColor: '#F24E1E',
    svg: (
      <svg viewBox="0 0 38 57" className="w-6 h-9 fill-current" aria-label="Figma">
        <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#A259FF" d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z"/>
        <path fill="#1ABCFE" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
        <path fill="#0ACF83" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path fill="#FF7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      </svg>
    ),
    monoPath: (
      <svg viewBox="0 0 38 57" className="w-5 h-7.5" fill="currentColor">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      </svg>
    )
  },
  {
    name: 'Adobe',
    category: 'Creative Cloud Suite',
    brandColor: '#FF0000',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.96 3H24v18.06h-5.06l-4.98-11.78zm-3.92 0L0 21.06h5.06l4.98-11.78zM12 9.47l3.66 8.66h-2.91l-1.07-2.61h-3.41L12 9.47z"/>
      </svg>
    )
  },
  {
    name: 'Apple',
    category: 'Spatial Design & Hardware',
    brandColor: '#000000',
    monoPath: (
      <svg viewBox="0 0 170 170" className="w-6 h-6" fill="currentColor">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.8-11.89-14.28-5.55-8.59-9.97-18.42-13.26-29.47-3.29-11.06-4.93-21.49-4.93-31.29 0-14.15 3.5-26.04 10.51-35.68 7.01-9.64 16.03-14.54 27.06-14.71 4.58 0 9.8 1.19 15.66 3.56 5.86 2.37 9.8 3.63 11.82 3.78 1.9.06 6.07-1.32 12.51-4.14 6.44-2.82 12.06-4.08 16.86-3.79 12.63 1.04 22.8 5.79 30.5 14.24-11.05 6.72-16.44 15.82-16.18 27.31.26 8.94 3.75 16.48 10.47 22.61 6.72 6.13 14.62 9.69 23.71 10.68-2.37 7.23-5.2 14.42-8.5 21.57zm-29.84-106.12c0 6.64-2.47 12.83-7.41 18.57-5.74 6.64-12.87 10.54-21.39 10.54-.26-.88-.39-1.87-.39-2.97 0-6.42 2.6-12.84 7.8-19.26 5.2-6.42 12.33-10.23 21.39-11.43z"/>
      </svg>
    )
  },
  {
    name: 'Autodesk',
    category: '3D Architecture & CAD',
    brandColor: '#0696D7',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M2.25 19.5L10.5 4.5h3L5.25 19.5h-3zm11.25 0l5.25-9.75h3L16.5 19.5h-3zm-3-4.5l3.75-6.75h2.25L12.75 15h-2.25z"/>
      </svg>
    )
  },
  {
    name: 'Canva',
    category: 'Visual Design Suite',
    brandColor: '#00C4CC',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 14.8c-2.4 0-4.2-1.7-4.2-4.5 0-3 2.1-5.1 4.7-5.1 1.7 0 2.9.8 3.5 1.9l-1.6 1.1c-.4-.7-1.1-1.1-1.9-1.1-1.6 0-2.8 1.4-2.8 3.2 0 1.7 1.1 2.8 2.5 2.8 1.1 0 1.8-.5 2.2-1.3l1.6 1c-.8 1.3-2.1 2-4 2z"/>
      </svg>
    )
  },
  {
    name: 'Blender',
    category: '3D Modeling & Animation',
    brandColor: '#F5792A',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12.5 8.5a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm-7.6 1.8L1.6 7.6a1 1 0 0 1 .4-1.4l4.2-2.3a1 1 0 0 1 1.4.4l2.1 3.8a6.9 6.9 0 0 0-4.8 2.2zm14.2 0a6.9 6.9 0 0 0-4.8-2.2l2.1-3.8a1 1 0 0 1 1.4-.4l4.2 2.3a1 1 0 0 1 .4 1.4zm-6.6 9.7a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>
      </svg>
    )
  },
  {
    name: 'Google',
    category: 'Material Design & Tech',
    brandColor: '#4285F4',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    )
  },
  {
    name: 'Sketch',
    category: 'Vector Interface Design',
    brandColor: '#F7B500',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 1.5l10.5 5.5-3.5 13.5L12 22.5 5 20.5 1.5 7 12 1.5zm0 3.2L4.6 7.6 12 19.8l7.4-12.2-7.4-2.9z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    category: 'Fluent Design System',
    brandColor: '#00A4EF',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1zM13 13h10v10H13z"/>
      </svg>
    )
  }
];

export const companyLogosRow2 = [
  {
    name: 'Behance',
    category: 'Global Creative Portfolios',
    brandColor: '#053EFF',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M6.9 11.2c1.2-.2 2.1-.9 2.1-2.2 0-1.8-1.4-2.5-3.5-2.5H0v11h5.8c2.4 0 4-1 4-2.8 0-1.6-1.1-2.6-2.9-2.8v-.2c1-.3 1.9-1.1 1.9-2.3v-.2zm-4.4-3.1h2.8c1.1 0 1.9.4 1.9 1.4 0 1-.8 1.4-1.9 1.4H2.5V8.1zm3 7.3H2.5v-3.1h3.1c1.2 0 2.1.4 2.1 1.5 0 1.2-.8 1.6-2.2 1.6zm13.1-6.1c-3.1 0-5.1 2.2-5.1 5.3s2 5.4 5.2 5.4c2.5 0 4.1-1.3 4.8-3.3h-2.3c-.4.8-1.2 1.3-2.5 1.3-1.6 0-2.7-1-2.8-2.6h7.7c.1-.3.1-.7.1-1 0-3-1.9-5.1-5.1-5.1zm-2.7 4.1c.2-1.3 1.1-2.2 2.6-2.2s2.4.9 2.5 2.2h-5.1zm1.1-6.2h3.3v1.1h-3.3z"/>
      </svg>
    )
  },
  {
    name: 'Dribbble',
    category: 'Design Community & Inspiration',
    brandColor: '#EA4C89',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.9 9.3c-1.3-.2-3.8-.4-6.8.5 1.2 3.3 1.8 6.6 2 7.8 2.8-1.8 4.5-4.8 4.8-8.3zm-6.7 9.8c-.2-1.1-.8-4.3-1.9-7.5-5.3 1.6-7.8 5.1-8.3 5.9 1.9 2.1 4.7 3.4 7.8 3.4 1.1 0 2.2-.2 3.1-.5.7-.4 1.6-1.1 2.3-1.8zm-11.8-4c.4-.7 2.7-4 7.7-5.5.3-.6.6-1.3.8-2-3.7-1.1-7.2-.3-8.1 0-.6 1.4-1 3-1 4.7 0 1 .2 1.9.6 2.8zm1.8-8.5c.8-.3 4.1-1 7.7.1 1.7-2.3 3.2-4.2 3.5-4.6-2.1-1.3-4.6-2.1-7.3-2.1-1.7 0-3.3.4-4.8 1.2.3.4.6.8.9 1.4zm13.1-3.1c-.3.4-1.8 2.3-3.6 4.6 2.8-.8 5.1-.7 6.4-.5-.4-1.7-1.4-3.1-2.8-4.1z"/>
      </svg>
    )
  },
  {
    name: 'Framer',
    category: 'Interactive Web & Motion',
    brandColor: '#0055FF',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    )
  },
  {
    name: 'Webflow',
    category: 'Visual Web Development',
    brandColor: '#146EF5',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M16.5 16.5l3.8-8.5h3.7L18.4 20h-3.8l-2.6-7.1-2.6 7.1H5.6L0 8h3.7l3.8 8.5 2.6-7.1h3.8z"/>
      </svg>
    )
  },
  {
    name: 'Notion',
    category: 'Design Systems & Knowledge',
    brandColor: '#000000',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.46 3.82c.4-.33 1.02-.6 1.77-.6h11.96c.86 0 1.34.42 1.6.89.28.52.28 1.17.28 1.77v12.44c0 .87-.36 1.5-1.04 1.88-.49.27-1.12.33-1.68.33H5.35c-.86 0-1.45-.33-1.84-.89-.38-.54-.45-1.19-.45-1.81V5.7c0-.75.3-1.4.92-1.88zm3.07 3.51v8.8h2.09V9.82l4.89 6.31h2.27V7.33h-2.09v6.31L9.8 7.33H7.53z"/>
      </svg>
    )
  },
  {
    name: 'Miro',
    category: 'Visual Collaboration Canvas',
    brandColor: '#FFD02F',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.8 3H16l-3.6 7.3L8.8 3H6L2 21h2.8l2.6-11.7L11 21h2.7l3.6-11.7L20 21h2.8z"/>
      </svg>
    )
  },
  {
    name: 'Atlassian',
    category: 'Agile Product Management',
    brandColor: '#0052CC',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M11.64 8.79a5.94 5.94 0 0 0-4.63 7.82l3.41 4.79a.78.78 0 0 0 1.22 0l3.41-4.79a5.94 5.94 0 0 0-3.41-7.82zm-4.32 8.72A7.37 7.37 0 0 1 12 2.6a.78.78 0 0 0 .61 1.25L9.2 8.64a7.37 7.37 0 0 0-1.88 8.87z"/>
      </svg>
    )
  },
  {
    name: 'Meta',
    category: 'Spatial Design & Horizons',
    brandColor: '#0668E1',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 8.24c-1.39-1.92-3.15-3.04-5.07-3.04-3.8 0-6.93 3.65-6.93 7.9 0 4.14 3.03 7.7 6.64 7.7 2.21 0 4.14-1.25 5.36-3.23 1.22 1.98 3.15 3.23 5.36 3.23 3.61 0 6.64-3.56 6.64-7.7 0-4.25-3.13-7.9-6.93-7.9-1.92 0-3.68 1.12-5.07 3.04zm-5.07 9.87c-2.47 0-4.47-2.61-4.47-5.91 0-3.38 2.08-6.11 4.47-6.11 1.5 0 2.94.97 3.97 2.67-1.57 2.67-2.88 5.75-3.97 9.35zm6.17-5.91c.78-2.58 1.77-4.8 2.87-6.11 1.03-1.7 2.47-2.67 3.97-2.67 2.39 0 4.47 2.73 4.47 6.11 0 3.3-2 5.91-4.47 5.91-1.09-3.6-2.4-6.68-3.97-9.35-.9 1.49-1.75 3.51-2.4 6.11h-.47z"/>
      </svg>
    )
  },
  {
    name: 'IBM',
    category: 'Carbon Design System',
    brandColor: '#054ADA',
    monoPath: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M1 4h5v1H1zm7 0h3v1H8zm5 0h8v1h-8zM1 7h5v1H1zm7 0h3v1H8zm5 0h8v1h-8zM1 10h5v1H1zm7 0h3v1H8zm5 0h8v1h-8zM1 13h5v1H1zm7 0h3v1H8zm5 0h8v1h-8zM1 16h5v1H1zm7 0h3v1H8zm5 0h8v1h-8zM1 19h5v1H1zm7 0h3v1H8zm5 0h8v1h-8z"/>
      </svg>
    )
  }
];
