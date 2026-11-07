import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const artifactDir = 'C:/Users/DELL/.gemini/antigravity/brain/d9b2464f-19ff-4855-9950-e01c89d95c20';
const prevDir = 'C:/Users/DELL/.gemini/antigravity/brain/20a50476-af46-49fb-8432-d03b4d3d97c2';
const uiuxDir = 'C:/Users/DELL/Desktop/project-based-intership/uiuxdesignschool/public/images';

// Helper to create the realistic 3D architectural wall sign SVG
function makeWallSignSvg(studioTitle, width = 460, height = 110, theme = 'light') {
  const isDark = theme === 'dark';
  const plaqueBg = isDark ? '#0F172A' : '#FFFFFF';
  const plaqueOpacity = isDark ? '0.94' : '0.96';
  const borderColor = isDark ? '#38BDF8' : '#D7DCFF';
  const primaryText = isDark ? '#FFFFFF' : '#111111';
  const subText = isDark ? '#38BDF8' : '#2638CC';

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wallShadow3D" x="-15%" y="-15%" width="135%" height="135%">
          <feDropShadow dx="3" dy="5" stdDeviation="5" flood-color="#000000" flood-opacity="0.45"/>
        </filter>
        <linearGradient id="signGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2799" />
          <stop offset="50%" stop-color="#2638CC" />
          <stop offset="100%" stop-color="#3D53E8" />
        </linearGradient>
      </defs>

      <!-- 3D Architectural Plaque Base Mounted on Wall -->
      <rect x="4" y="4" width="${width - 8}" height="${height - 8}" rx="16" fill="${plaqueBg}" fill-opacity="${plaqueOpacity}" stroke="${borderColor}" stroke-width="2" filter="url(#wallShadow3D)"/>

      <!-- Left: Signature 4-Node Squircle Emblem -->
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="62" height="62" rx="16" fill="#EEF2FF" stroke="#C7D2FE" stroke-width="1.5"/>
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="14" height="14" rx="4" fill="#F06445"/>
          <rect x="18" y="0" width="14" height="14" rx="4" fill="url(#signGradBlue)"/>
          <rect x="0" y="18" width="14" height="14" rx="4" fill="#1B2799"/>
          <circle cx="25" cy="25" r="7" fill="url(#signGradBlue)"/>
        </g>
      </g>

      <!-- Prominent Short Monogram "IDS" + Full Name + Studio Discipline -->
      <g transform="translate(100, 22)">
        <!-- Prominent short IDS acronym -->
        <text x="0" y="30" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="900" fill="url(#signGradBlue)" letter-spacing="-0.02em">
          IDS
        </text>
        <!-- Full Brand Name -->
        <text x="64" y="20" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="800" fill="${primaryText}" letter-spacing="-0.01em">
          INTERNATIONAL DESIGN SCHOOL
        </text>
        <!-- Studio Designation Subtitle -->
        <text x="64" y="38" font-family="'Inter', monospace, sans-serif" font-size="9.5" font-weight="700" fill="${subText}" letter-spacing="0.14em">
          ${studioTitle}
        </text>
        <line x1="64" y1="46" x2="${width - 120}" y2="46" stroke="${borderColor}" stroke-width="1.2"/>
        <text x="64" y="58" font-family="'Inter', monospace, sans-serif" font-size="8" font-weight="600" fill="#64748B" letter-spacing="0.12em">
          GLOBAL CREATIVE ACADEMY &#8226; PUNE CAMPUS
        </text>
      </g>
    </svg>
  `;
}

async function compositeAndSave(srcPath, svgString, top, left, destPath, quality = 88) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const svgBuffer = Buffer.from(svgString);
  await sharp(srcPath)
    .composite([{ input: svgBuffer, top: Math.round(top), left: Math.round(left) }])
    .webp({ quality })
    .toFile(destPath);
  console.log(`Saved Branded Photo: ${destPath}`);
}

async function main() {
  console.log('=== STARTING ALL-PHOTO BRANDING & TEAM UNBLUR PIPELINE ===\n');

  // Ensure directories exist
  ['public/images/programs', 'public/images/campus', 'public/images/team'].forEach(d => {
    fs.mkdirSync(d, { recursive: true });
  });

  // =========================================================================
  // PART 1: FIX BLURRY MEET OUR TEAM PORTRAITS (CRYSTAL CLEAR 1024x1024 SOURCES)
  // =========================================================================
  console.log('--- Fixing Team Portraits (Crystal Clear, Sharp, No Blur) ---');

  // Member 01: Lead in Red Suit (896x1200)
  const redSuitSrc = path.join(artifactDir, 'team_lead_red_suit_1794063622120.jpg');
  await sharp(redSuitSrc)
    .resize(800, 1000, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-01-director.webp');
  console.log('Fixed: public/images/team/team-01-director.webp (Sharp Lead in Red Suit)');

  // Member 02: Creative Mentor (896x1200)
  const team01Src = path.join(artifactDir, 'team_01_creative_mentor_1794063729851.jpg');
  await sharp(team01Src)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-02-interior.webp');
  console.log('Fixed: public/images/team/team-02-interior.webp');

  // Member 03: Intellectual Mentor (896x1200)
  const team02Src = path.join(artifactDir, 'team_02_intellectual_mentor_1794063748311.jpg');
  await sharp(team02Src)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-03-visual.webp');
  console.log('Fixed: public/images/team/team-03-visual.webp');

  // Member 04: Digital Experience Lead (896x1200)
  const team03Src = path.join(artifactDir, 'team_03_creative_tech_lead_1794063764748.jpg');
  await sharp(team03Src)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-04-digital.webp');
  console.log('Fixed: public/images/team/team-04-digital.webp');

  // Member 05: Design Researcher (896x1200)
  const team04Src = path.join(artifactDir, 'team_04_design_researcher_1794063778973.jpg');
  await sharp(team04Src)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-05-materials.webp');
  console.log('Fixed: public/images/team/team-05-materials.webp');

  // Members 06, 07, 08, 09: Using 1024x1024 pristine portraits with zero blur!
  const kamalSrc = path.join(uiuxDir, 'students/kamal.jpg');
  const poojaSrc = path.join(uiuxDir, 'students/pooja.jpg');
  const snehalSrc = path.join(uiuxDir, 'students/snehal.jpg');
  const sandipSrc = path.join(uiuxDir, 'students/sandip.jpg');

  // Member 06: Creative Technologist
  await sharp(kamalSrc)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-06-technologist.webp');
  console.log('Fixed (UNBLURRED): public/images/team/team-06-technologist.webp');

  // Member 07: Textile Mentor
  await sharp(poojaSrc)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-07-textiles.webp');
  console.log('Fixed (UNBLURRED): public/images/team/team-07-textiles.webp');

  // Member 08: Cognitive Interaction Lead
  await sharp(snehalSrc)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-08-interaction.webp');
  console.log('Fixed (UNBLURRED): public/images/team/team-08-interaction.webp');

  // Member 09: Industrial Design Mentor
  await sharp(sandipSrc)
    .resize(600, 600, { fit: 'cover', position: 'top', kernel: sharp.kernel.lanczos3 })
    .grayscale()
    .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
    .webp({ quality: 95 })
    .toFile('public/images/team/team-09-product.webp');
  console.log('Fixed (UNBLURRED): public/images/team/team-09-product.webp');

  // =========================================================================
  // PART 2: ALL 12 DISCIPLINE / PROGRAM PHOTOS WITH IDS LOGO ON STUDIO WALL
  // =========================================================================
  console.log('\n--- Generating 12 Branded Discipline / Program Photos ---');

  // 1. Fashion Design
  await compositeAndSave(
    path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg'),
    makeWallSignSvg('COUTURE &amp; APPAREL ATELIER', 470, 115),
    110,
    760,
    'public/images/programs/fashion-design.webp'
  );

  // 2. Interior Design
  await compositeAndSave(
    path.join(artifactDir, 'interior_architecture_studio_1794063863539.jpg'),
    makeWallSignSvg('SPATIAL ARCHITECTURE &amp; INTERIORS', 470, 115),
    110,
    720,
    'public/images/programs/interior-design.webp'
  );

  // 3. Graphic Design
  await compositeAndSave(
    path.join(prevDir, 'graphic_design_team_1793987283216.jpg'),
    makeWallSignSvg('GRAPHIC DESIGN &amp; TYPOGRAPHY LAB', 470, 115),
    90,
    740,
    'public/images/programs/graphic-design.webp'
  );

  // 4. UI/UX Design
  await compositeAndSave(
    path.join(prevDir, 'uiux_design_collaboration_1793987305960.jpg'),
    makeWallSignSvg('UI/UX &amp; DIGITAL PRODUCT SYSTEMS', 470, 115, 'dark'),
    75,
    640,
    'public/images/programs/ui-ux-design.webp'
  );

  // 5. Animation and Motion Design
  await compositeAndSave(
    path.join(uiuxDir, 'studio/uiux_studio_collaboration_1793433398490.jpg'),
    makeWallSignSvg('ANIMATION &amp; KINETIC MOTION LAB', 470, 115, 'dark'),
    80,
    680,
    'public/images/programs/animation.webp'
  );

  // 6. Jewellery Design
  await compositeAndSave(
    path.join(prevDir, 'fashion_design_studio_1793987242251.jpg'),
    makeWallSignSvg('JEWELLERY &amp; PRECIOUS METALS ATELIER', 470, 115),
    95,
    750,
    'public/images/programs/jewellery-design.webp'
  );

  // 7. Textile Design
  await compositeAndSave(
    path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg'),
    makeWallSignSvg('TEXTILE WEAVING &amp; FIBER LAB', 470, 115),
    110,
    180,
    'public/images/programs/textile-design.webp'
  );

  // 8. Product Design
  await compositeAndSave(
    path.join(prevDir, 'germany_design_workshop_1793987403094.jpg'),
    makeWallSignSvg('PRODUCT ERGONOMICS &amp; PROTOTYPING', 470, 115),
    90,
    720,
    'public/images/programs/product-design.webp'
  );

  // 9. Fashion Styling
  await compositeAndSave(
    path.join(uiuxDir, 'studio/uiux_design_critique_1793433437502.jpg'),
    makeWallSignSvg('FASHION STYLING &amp; LOOKBOOK STUDIO', 470, 115),
    90,
    720,
    'public/images/programs/fashion-styling.webp'
  );

  // 10. Luxury Brand Management
  await compositeAndSave(
    path.join(prevDir, 'singapore_creative_studio_1793987330314.jpg'),
    makeWallSignSvg('LUXURY BRAND MANAGEMENT SUITE', 470, 115),
    90,
    740,
    'public/images/programs/luxury-brand-management.webp'
  );

  // 11. Visual Communication
  await compositeAndSave(
    path.join(prevDir, 'uk_design_studio_1793987377574.jpg'),
    makeWallSignSvg('VISUAL COMMUNICATION &amp; PUBLISHING', 470, 115),
    90,
    700,
    'public/images/programs/visual-communication.webp'
  );

  // 12. Digital Design
  await compositeAndSave(
    path.join(prevDir, 'usa_campus_1793987354977.jpg'),
    makeWallSignSvg('DIGITAL MEDIA &amp; INTERACTIVE SYSTEMS', 470, 115),
    90,
    700,
    'public/images/programs/digital-design.webp'
  );

  // =========================================================================
  // PART 3: RE-BRAND ALL ROOT PUBLIC IMAGES WITH VISIBLE 3D IDS WALL SIGN
  // =========================================================================
  console.log('\n--- Re-branding All Root Public Images ---');

  // ids-hero-studio.webp
  await compositeAndSave(
    path.join(prevDir, 'ids_hero_studio_1793987160018.jpg'),
    makeWallSignSvg('COLLABORATIVE DESIGN STUDIOS', 470, 115),
    90,
    660,
    'public/images/ids-hero-studio.webp'
  );

  // fashion-design-studio.webp
  await compositeAndSave(
    path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg'),
    makeWallSignSvg('COUTURE &amp; APPAREL ATELIER', 470, 115),
    110,
    760,
    'public/images/fashion-design-studio.webp'
  );

  // interior-design-workshop.webp
  await compositeAndSave(
    path.join(artifactDir, 'interior_architecture_studio_1794063863539.jpg'),
    makeWallSignSvg('SPATIAL ARCHITECTURE WORKSHOP', 470, 115),
    110,
    720,
    'public/images/interior-design-workshop.webp'
  );

  // graphic-design-team.webp
  await compositeAndSave(
    path.join(prevDir, 'graphic_design_team_1793987283216.jpg'),
    makeWallSignSvg('GRAPHIC DESIGN &amp; BRAND SYSTEMS', 470, 115),
    90,
    740,
    'public/images/graphic-design-team.webp'
  );

  // uiux-design-collaboration.webp
  await compositeAndSave(
    path.join(prevDir, 'uiux_design_collaboration_1793987305960.jpg'),
    makeWallSignSvg('UI/UX &amp; COGNITIVE ERGONOMICS LAB', 470, 115, 'dark'),
    75,
    640,
    'public/images/uiux-design-collaboration.webp'
  );

  // pune-campus.webp
  await compositeAndSave(
    path.join(artifactDir, 'campus_entrance_exterior_1794063735581.jpg'),
    makeWallSignSvg('PUNE FLAGSHIP CAMPUS ENTRANCE', 470, 115, 'dark'),
    350,
    140,
    'public/images/pune-campus.webp'
  );

  // faculty-mentorship.webp
  await compositeAndSave(
    path.join(prevDir, 'faculty_mentorship_1793987496339.jpg'),
    makeWallSignSvg('ACADEMIC MENTORSHIP &amp; JURY SUITE', 470, 115),
    90,
    720,
    'public/images/faculty-mentorship.webp'
  );

  // student-exhibition.webp
  await compositeAndSave(
    path.join(prevDir, 'student_exhibition_1793987466557.jpg'),
    makeWallSignSvg('ANNUAL GRADUATION EXHIBITION', 470, 115, 'dark'),
    100,
    520,
    'public/images/student-exhibition.webp'
  );

  // singapore-creative-studio.webp
  await compositeAndSave(
    path.join(prevDir, 'singapore_creative_studio_1793987330314.jpg'),
    makeWallSignSvg('SINGAPORE CREATIVE HUB', 470, 115),
    90,
    740,
    'public/images/singapore-creative-studio.webp'
  );

  // germany-design-workshop.webp
  await compositeAndSave(
    path.join(prevDir, 'germany_design_workshop_1793987403094.jpg'),
    makeWallSignSvg('BERLIN INDUSTRIAL WORKSHOP', 470, 115),
    90,
    720,
    'public/images/germany-design-workshop.webp'
  );

  // uk-design-studio.webp
  await compositeAndSave(
    path.join(prevDir, 'uk_design_studio_1793987377574.jpg'),
    makeWallSignSvg('LONDON DESIGN STUDIO', 470, 115),
    90,
    700,
    'public/images/uk-design-studio.webp'
  );

  // usa-campus.webp
  await compositeAndSave(
    path.join(prevDir, 'usa_campus_1793987354977.jpg'),
    makeWallSignSvg('US CREATIVE VENTURE LAB', 470, 115),
    90,
    700,
    'public/images/usa-campus.webp'
  );

  console.log('\n=== ALL-PHOTO BRANDING & TEAM UNBLUR PIPELINE COMPLETED SUCCESSFULLY! ===');
}

main().catch(err => {
  console.error('Pipeline error:', err);
  process.exit(1);
});
