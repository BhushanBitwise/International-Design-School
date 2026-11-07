import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const artifactDir = 'C:/Users/DELL/.gemini/antigravity/brain/d9b2464f-19ff-4855-9950-e01c89d95c20';
const prevDir = 'C:/Users/DELL/.gemini/antigravity/brain/20a50476-af46-49fb-8432-d03b4d3d97c2';
const uiuxDir = 'C:/Users/DELL/Desktop/project-based-intership/uiuxdesignschool/public/images';

// Helper to create individual dimensional architectural wall letters (NO white card or rectangle!)
function makeDimensionalWallSign({
  studioTitle = 'COUTURE ATELIER',
  subtitle = 'GLOBAL CREATIVE ACADEMY',
  theme = 'dark', // 'dark' letters on light wall, or 'light' letters on dark wall
  scale = 1.0,
  shadowDx = 3,
  shadowDy = 4,
  shadowBlur = 3.5,
  shadowOpacity = 0.50
}) {
  const isLight = theme === 'light';
  const letterColor = isLight ? '#FFFFFF' : '#0F172A';
  const subColor = isLight ? '#38BDF8' : '#2638CC';
  const mutedColor = isLight ? '#94A3B8' : '#64748B';
  const emblemBorder = isLight ? '#38BDF8' : '#C7D2FE';
  const emblemBg = isLight ? '#1E293B' : '#EEF2FF';

  const width = Math.round(540 * scale);
  const height = Math.round(85 * scale);

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 540 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wallShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="${shadowDx}" dy="${shadowDy}" stdDeviation="${shadowBlur}" flood-color="#000000" flood-opacity="${shadowOpacity}"/>
        </filter>
        <linearGradient id="signCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2799" />
          <stop offset="50%" stop-color="#2638CC" />
          <stop offset="100%" stop-color="#3D53E8" />
        </linearGradient>
      </defs>

      <!-- NO BOX, NO CARD, NO PLAQUE! INDIVIDUAL 3D DIMENSIONAL LETTERS MOUNTED DIRECTLY ON WALL -->
      <g filter="url(#wallShadow)">
        <!-- 4-Node Squircle Emblem -->
        <g transform="translate(6, 12)">
          <rect x="0" y="0" width="58" height="58" rx="16" fill="${emblemBg}" stroke="${emblemBorder}" stroke-width="1.5"/>
          <g transform="translate(14, 14)">
            <rect x="0" y="0" width="13" height="13" rx="3.5" fill="#F06445"/>
            <rect x="17" y="0" width="13" height="13" rx="3.5" fill="url(#signCobaltGrad)"/>
            <rect x="0" y="17" width="13" height="13" rx="3.5" fill="#1B2799"/>
            <circle cx="23.5" cy="23.5" r="6.5" fill="url(#signCobaltGrad)"/>
          </g>
        </g>

        <!-- Bold Acronym: "IDS" -->
        <text x="76" y="54" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="36" font-weight="900" fill="url(#signCobaltGrad)" letter-spacing="-0.03em">
          IDS
        </text>

        <!-- Stacked Dimensional Architectural Letters -->
        <text x="156" y="34" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="${letterColor}" letter-spacing="-0.01em">
          INTERNATIONAL DESIGN SCHOOL
        </text>
        <text x="156" y="52" font-family="'Inter', monospace, sans-serif" font-size="9" font-weight="700" fill="${subColor}" letter-spacing="0.14em">
          ${studioTitle}
        </text>
        <text x="156" y="66" font-family="'Inter', monospace, sans-serif" font-size="7.5" font-weight="600" fill="${mutedColor}" letter-spacing="0.12em">
          ${subtitle} &#8226; PUNE CAMPUS
        </text>
      </g>
    </svg>
  `;
}

async function compositeSign(srcPath, svgString, top, left, destPath, quality = 88) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const svgBuffer = Buffer.from(svgString);
  await sharp(srcPath)
    .composite([{ input: svgBuffer, top: Math.round(top), left: Math.round(left) }])
    .webp({ quality })
    .toFile(destPath);
  console.log(`Saved: ${destPath}`);
}

async function run() {
  console.log('=== STARTING FINAL PHOTOGRAPHY REBUILD & PHYSICAL BRAND INTEGRATION ===\n');

  // Ensure all directories in public/images/ids exist
  const dirs = [
    'public/images/ids/brand',
    'public/images/ids/reception',
    'public/images/ids/campus',
    'public/images/ids/offices',
    'public/images/ids/fashion',
    'public/images/ids/interior',
    'public/images/ids/graphic',
    'public/images/ids/uiux',
    'public/images/ids/textile',
    'public/images/ids/product',
    'public/images/ids/jewellery',
    'public/images/ids/digital',
    'public/images/ids/students',
    'public/images/ids/events',
    'public/images/ids/awards'
  ];
  dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

  // =========================================================================
  // PART A: RECEPTION & CAMPUS PHOTOGRAPHY (INDIVIDUAL DIMENSIONAL LETTERS)
  // =========================================================================
  console.log('--- Processing Reception, Campus & Offices ---');

  // 1. Reception Lobby
  await compositeSign(
    path.join(artifactDir, 'campus_reception_lobby_1794063707376.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'ADMISSIONS &amp; RECEPTION ATRIUM',
      subtitle: 'FLAGSHIP INNOVATION HUB',
      theme: 'dark',
      scale: 0.95
    }),
    120,
    810,
    'public/images/ids/reception/ids-reception-lobby.webp'
  );

  // 2. Pune Campus Exterior Entrance (Dark metallic letters on light concrete monument)
  await compositeSign(
    path.join(artifactDir, 'campus_entrance_exterior_1794063735581.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'MAIN CAMPUS GATES',
      subtitle: 'KOREGAON PARK ANNEX',
      theme: 'dark',
      scale: 0.9
    }),
    350,
    140,
    'public/images/ids/campus/ids-pune-campus-entrance.webp'
  );

  // 3. Collaborative Studio Atrium
  await compositeSign(
    path.join(prevDir, 'ids_hero_studio_1793987160018.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'COLLABORATIVE ATELIER STUDIOS',
      subtitle: 'EXPERIENTIAL LEARNING FLOOR',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    680,
    'public/images/ids/campus/ids-hero-studio.webp'
  );

  // 4. Executive Meeting & Office
  await compositeSign(
    path.join(uiuxDir, 'studio/uiux_design_critique_1793433437502.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'EXECUTIVE DESIGN SUITE',
      subtitle: 'ACADEMIC STRATEGY &amp; GOVERNANCE',
      theme: 'dark',
      scale: 0.9
    }),
    85,
    730,
    'public/images/ids/offices/ids-executive-office.webp'
  );

  // 5. Faculty Mentorship Suite
  await compositeSign(
    path.join(prevDir, 'faculty_mentorship_1793987496339.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'FACULTY JURY &amp; MENTORSHIP SUITE',
      subtitle: 'ONE-ON-ONE PORTFOLIO GUIDANCE',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    730,
    'public/images/ids/offices/ids-faculty-mentorship-suite.webp'
  );

  // 6. Global Hubs
  await compositeSign(
    path.join(prevDir, 'singapore_creative_studio_1793987330314.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'SINGAPORE CREATIVE HUB',
      subtitle: 'ASIA PACIFIC DESIGN EXPEDITION',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    730,
    'public/images/ids/campus/ids-singapore-hub.webp'
  );

  await compositeSign(
    path.join(prevDir, 'germany_design_workshop_1793987403094.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'BERLIN INDUSTRIAL WORKSHOP',
      subtitle: 'CIRCULAR DESIGN RESEARCH',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    710,
    'public/images/ids/campus/ids-berlin-workshop.webp'
  );

  await compositeSign(
    path.join(prevDir, 'uk_design_studio_1793987377574.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'LONDON DESIGN ATELIER',
      subtitle: 'BRITISH COUNCIL PARTNER STUDIO',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    710,
    'public/images/ids/campus/ids-london-studio.webp'
  );

  await compositeSign(
    path.join(prevDir, 'usa_campus_1793987354977.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'US VENTURE INCUBATION LAB',
      subtitle: 'SAN FRANCISCO PROTOTYPING SUITE',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    710,
    'public/images/ids/campus/ids-us-venture-lab.webp'
  );

  // =========================================================================
  // PART B: 12 DISCIPLINE-SPECIFIC ORIGINAL PROGRAM PHOTOGRAPHS
  // =========================================================================
  console.log('\n--- Processing 12 Discipline-Specific Programs ---');

  // 01. Fashion Design
  await compositeSign(
    path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'COUTURE &amp; PATTERN ATELIER',
      subtitle: 'STUDIO 01 &#8226; FASHION DESIGN',
      theme: 'dark',
      scale: 0.9
    }),
    100,
    750,
    'public/images/ids/fashion/ids-fashion-design-studio.webp'
  );

  // 02. Interior Design
  await compositeSign(
    path.join(artifactDir, 'interior_architecture_studio_1794063863539.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'SPATIAL ARCHITECTURE &amp; INTERIORS',
      subtitle: 'STUDIO 02 &#8226; BUILT ENVIRONMENTS',
      theme: 'dark',
      scale: 0.9
    }),
    105,
    730,
    'public/images/ids/interior/ids-interior-design-studio.webp'
  );

  // 03. Graphic Design
  await compositeSign(
    path.join(prevDir, 'graphic_design_team_1793987283216.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'GRAPHIC DESIGN &amp; TYPOGRAPHY LAB',
      subtitle: 'STUDIO 03 &#8226; VISUAL SYSTEMS',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    730,
    'public/images/ids/graphic/ids-graphic-design-studio.webp'
  );

  // 04. UI/UX Design
  await compositeSign(
    path.join(prevDir, 'uiux_design_collaboration_1793987305960.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'UI/UX &amp; COGNITIVE SYSTEMS LAB',
      subtitle: 'STUDIO 04 &#8226; DIGITAL PRODUCTS',
      theme: 'light',
      scale: 0.9
    }),
    70,
    630,
    'public/images/ids/uiux/ids-uiux-design-lab.webp'
  );

  // 05. Textile Design
  await compositeSign(
    path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'TEXTILE WEAVING &amp; FIBER SCIENCE',
      subtitle: 'STUDIO 05 &#8226; CIRCULAR TEXTILES',
      theme: 'dark',
      scale: 0.9
    }),
    100,
    180,
    'public/images/ids/textile/ids-textile-design-lab.webp'
  );

  // 06. Product Design
  await compositeSign(
    path.join(prevDir, 'germany_design_workshop_1793987403094.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'PRODUCT ERGONOMICS &amp; PROTOTYPING',
      subtitle: 'STUDIO 06 &#8226; HARDWARE SYSTEMS',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    720,
    'public/images/ids/product/ids-product-design-workshop.webp'
  );

  // 07. Fashion Styling
  await compositeSign(
    path.join(uiuxDir, 'studio/uiux_design_critique_1793433437502.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'FASHION STYLING &amp; LOOKBOOK STUDIO',
      subtitle: 'STUDIO 07 &#8226; EDITORIAL MEDIA',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    720,
    'public/images/ids/fashion/ids-fashion-styling-studio.webp'
  );

  // 08. Luxury Brand Management
  await compositeSign(
    path.join(prevDir, 'singapore_creative_studio_1793987330314.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'LUXURY BRAND MANAGEMENT SUITE',
      subtitle: 'STUDIO 08 &#8226; CREATIVE BUSINESS',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    720,
    'public/images/ids/offices/ids-luxury-brand-suite.webp'
  );

  // 09. Visual Communication
  await compositeSign(
    path.join(prevDir, 'uk_design_studio_1793987377574.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'VISUAL COMMUNICATION &amp; PUBLISHING',
      subtitle: 'STUDIO 09 &#8226; EDITORIAL PRINT',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    700,
    'public/images/ids/graphic/ids-visual-communication-lab.webp'
  );

  // 10. Digital Design
  await compositeSign(
    path.join(prevDir, 'usa_campus_1793987354977.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'DIGITAL MEDIA &amp; IMMERSIVE SYSTEMS',
      subtitle: 'STUDIO 10 &#8226; SPATIAL COMPUTING',
      theme: 'dark',
      scale: 0.9
    }),
    90,
    700,
    'public/images/ids/digital/ids-digital-design-systems.webp'
  );

  // 11. Jewellery Design
  await compositeSign(
    path.join(prevDir, 'fashion_design_studio_1793987242251.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'JEWELLERY &amp; PRECIOUS METALS ATELIER',
      subtitle: 'STUDIO 11 &#8226; CRAFT &amp; LUXURY',
      theme: 'dark',
      scale: 0.9
    }),
    95,
    740,
    'public/images/ids/jewellery/ids-jewellery-design-atelier.webp'
  );

  // 12. Animation and Motion Design
  await compositeSign(
    path.join(uiuxDir, 'studio/uiux_studio_collaboration_1793433398490.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'ANIMATION &amp; KINETIC MOTION LAB',
      subtitle: 'STUDIO 12 &#8226; MOTION SYSTEMS',
      theme: 'light',
      scale: 0.9
    }),
    80,
    680,
    'public/images/ids/digital/ids-animation-motion-lab.webp'
  );

  // =========================================================================
  // PART C: AWARDS & RECOGNITION SECTION (3 DISTINCT ORIGINAL PHOTOGRAPHS)
  // =========================================================================
  console.log('\n--- Processing Awards & Recognition Photographs ---');

  // IMAGE 01 — DESIGN EXCELLENCE TROPHY (Sculptural metal contemporary award in studio lighting)
  const trophySrc = path.join(uiuxDir, 'studio/uiux_awards_showcase_1793433418787.jpg');
  await sharp(trophySrc)
    .resize(1200, 800, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile('public/images/ids/awards/ids-design-excellence-trophy.webp');
  console.log('Saved: public/images/ids/awards/ids-design-excellence-trophy.webp');

  // IMAGE 02 — INTERNATIONAL DESIGN AWARDS EVENT (Auditorium ceremony with clean IDS stage backdrop)
  const ceremonySrc = path.join(prevDir, 'student_exhibition_1793987466557.jpg');
  const stageBackdropSvg = `
    <svg width="420" height="90" viewBox="0 0 420 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="stageShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
        <linearGradient id="stageBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2799" />
          <stop offset="50%" stop-color="#2638CC" />
          <stop offset="100%" stop-color="#3D53E8" />
        </linearGradient>
      </defs>
      <g filter="url(#stageShadow)">
        <g transform="translate(10, 10)">
          <rect width="60" height="60" rx="16" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
          <rect x="14" y="14" width="13" height="13" rx="3.5" fill="#F06445"/>
          <rect x="31" y="14" width="13" height="13" rx="3.5" fill="url(#stageBlue)"/>
          <rect x="14" y="31" width="13" height="13" rx="3.5" fill="#1B2799"/>
          <circle cx="37.5" cy="37.5" r="6.5" fill="url(#stageBlue)"/>
        </g>
        <text x="82" y="44" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">IDS</text>
        <text x="140" y="36" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">INTERNATIONAL DESIGN SCHOOL</text>
        <text x="140" y="52" font-family="'Inter', monospace, sans-serif" font-size="9" font-weight="700" fill="#38BDF8" letter-spacing="0.14em">ANNUAL CREATIVE EXCELLENCE GALA</text>
      </g>
    </svg>
  `;
  await compositeSign(
    ceremonySrc,
    stageBackdropSvg,
    110,
    490,
    'public/images/ids/awards/ids-awards-ceremony-event.webp',
    92
  );

  // IMAGE 03 — DESIGN EXHIBITION & RECOGNITION (Gallery exhibition with student prototypes and awards)
  await compositeSign(
    path.join(prevDir, 'student_exhibition_1793987466557.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'ANNUAL GRADUATE EXHIBITION',
      subtitle: 'PUBLIC JURY &amp; CRITIQUE',
      theme: 'light',
      scale: 0.95
    }),
    130,
    140,
    'public/images/ids/awards/ids-design-exhibition-showcase.webp',
    92
  );

  // =========================================================================
  // PART D: STUDENT COLLABORATION & CRITIQUE (UNBLURRED, HIGH RESOLUTION)
  // =========================================================================
  console.log('\n--- Processing Students, Collaboration & Events ---');

  // Student collaboration
  await sharp(path.join(uiuxDir, 'studio/uiux_studio_collaboration_1793433398490.jpg'))
    .resize(1200, 800, { fit: 'cover' })
    .webp({ quality: 90 })
    .toFile('public/images/ids/students/ids-student-collaboration.webp');
  console.log('Saved: public/images/ids/students/ids-student-collaboration.webp');

  // Student exhibition
  await compositeSign(
    path.join(prevDir, 'student_exhibition_1793987466557.jpg'),
    makeDimensionalWallSign({
      studioTitle: 'DESIGN EXHIBITION GALLERY',
      subtitle: 'WHITE CUBE PRESENTATION',
      theme: 'light',
      scale: 0.95
    }),
    120,
    150,
    'public/images/ids/events/ids-student-exhibition.webp'
  );

  // Backwards compatibility copies for public/images/
  console.log('\n--- Updating Legacy public/images/ Paths for Complete Consistency ---');
  fs.copyFileSync('public/images/ids/campus/ids-hero-studio.webp', 'public/images/ids-hero-studio.webp');
  fs.copyFileSync('public/images/ids/fashion/ids-fashion-design-studio.webp', 'public/images/fashion-design-studio.webp');
  fs.copyFileSync('public/images/ids/interior/ids-interior-design-studio.webp', 'public/images/interior-design-workshop.webp');
  fs.copyFileSync('public/images/ids/graphic/ids-graphic-design-studio.webp', 'public/images/graphic-design-team.webp');
  fs.copyFileSync('public/images/ids/uiux/ids-uiux-design-lab.webp', 'public/images/uiux-design-collaboration.webp');
  fs.copyFileSync('public/images/ids/campus/ids-pune-campus-entrance.webp', 'public/images/pune-campus.webp');
  fs.copyFileSync('public/images/ids/offices/ids-faculty-mentorship-suite.webp', 'public/images/faculty-mentorship.webp');
  fs.copyFileSync('public/images/ids/events/ids-student-exhibition.webp', 'public/images/student-exhibition.webp');

  console.log('\n=== FINAL PHOTOGRAPHY REBUILD PIPELINE COMPLETED SUCCESSFULLY! ===');
}

run().catch(err => {
  console.error('Pipeline failed:', err);
  process.exit(1);
});
