import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const artifactDir = 'C:/Users/DELL/.gemini/antigravity/brain/d9b2464f-19ff-4855-9950-e01c89d95c20';
const prevDir = 'C:/Users/DELL/.gemini/antigravity/brain/20a50476-af46-49fb-8432-d03b4d3d97c2';
const userUploadsDir = path.join(artifactDir, '.user_uploaded');
const publicDir = './public/images';

// Helper to composite SVG on image
async function compositeSvgOnImage(sourcePath, svgString, top, left, destPath, quality = 88) {
  const svgBuffer = Buffer.from(svgString);
  await sharp(sourcePath)
    .composite([{ input: svgBuffer, top: Math.round(top), left: Math.round(left) }])
    .webp({ quality })
    .toFile(destPath);
  console.log(`Composited &amp; Saved: ${destPath}`);
}

async function processAll() {
  console.log('=== STARTING COMPLETE PHOTOGRAPHY REBRANDING PIPELINE ===');

  // Ensure target directories exist
  const targetDirs = [
    'public/images/brand',
    'public/images/campus',
    'public/images/team',
    'public/images/students',
    'public/images/placements',
    'public/images/projects',
    'public/images/awards',
    'public/images/events'
  ];
  targetDirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

  // =========================================================================
  // 1. TEAM PORTRAITS — Matching Uploaded Reference Composition Exactly
  // =========================================================================
  console.log('\n--- Processing Team Portraits ---');

  // Member 01: Featured Lead in Red Suit (Full color, tall aspect ~4:5)
  const redSuitSrc = path.join(artifactDir, 'team_lead_red_suit_1794063622120.jpg');
  if (fs.existsSync(redSuitSrc)) {
    const meta = await sharp(redSuitSrc).metadata();
    await sharp(redSuitSrc)
      .resize({ width: 800, height: 1000, fit: 'cover', position: 'top' })
      .webp({ quality: 90 })
      .toFile('public/images/team/team-01-director.webp');
    console.log('Saved: public/images/team/team-01-director.webp (Featured Red Suit Leader)');
  }

  // Member 02: Woman smiling warmly (B&W studio portrait)
  const team01Src = path.join(artifactDir, 'team_01_creative_mentor_1794063729851.jpg');
  if (fs.existsSync(team01Src)) {
    await sharp(team01Src)
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-02-interior.webp');
    console.log('Saved: public/images/team/team-02-interior.webp');
  }

  // Member 03: Man with glasses and neat beard (B&W)
  const team02Src = path.join(artifactDir, 'team_02_intellectual_mentor_1794063748311.jpg');
  if (fs.existsSync(team02Src)) {
    await sharp(team02Src)
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-03-visual.webp');
    console.log('Saved: public/images/team/team-03-visual.webp');
  }

  // Member 04: Woman creative tech lead (B&W)
  const team03Src = path.join(artifactDir, 'team_03_creative_tech_lead_1794063764748.jpg');
  if (fs.existsSync(team03Src)) {
    await sharp(team03Src)
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-04-digital.webp');
    console.log('Saved: public/images/team/team-04-digital.webp');
  }

  // Member 05: Young woman design researcher with glasses looking down (B&W)
  const team04Src = path.join(artifactDir, 'team_04_design_researcher_1794063778973.jpg');
  if (fs.existsSync(team04Src)) {
    await sharp(team04Src)
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-05-materials.webp');
    console.log('Saved: public/images/team/team-05-materials.webp');
  }

  // Members 06, 07, 08, 09: Extracted from user-uploaded reference portraits
  const awwwardsSrc = path.join(userUploadsDir, 'media_1794062824748_947b2257.jpg');
  if (fs.existsSync(awwwardsSrc)) {
    // Member 06: Creative Technologist (Joel / Sr. Art Director from Awwwards grid)
    await sharp(awwwardsSrc)
      .extract({ left: 495, top: 110, width: 148, height: 240 })
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-06-technologist.webp');
    console.log('Saved: public/images/team/team-06-technologist.webp');

    // Member 07: Textile Mentor (Francia from Awwwards grid)
    await sharp(awwwardsSrc)
      .extract({ left: 338, top: 480, width: 148, height: 240 })
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-07-textiles.webp');
    console.log('Saved: public/images/team/team-07-textiles.webp');

    // Member 08: Cognitive Design Lead (Luciana from Awwwards grid)
    await sharp(awwwardsSrc)
      .extract({ left: 810, top: 480, width: 148, height: 240 })
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-08-interaction.webp');
    console.log('Saved: public/images/team/team-08-interaction.webp');

    // Member 09: Industrial Design Mentor (Steve from Awwwards grid)
    await sharp(awwwardsSrc)
      .extract({ left: 180, top: 480, width: 148, height: 240 })
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .grayscale()
      .webp({ quality: 88 })
      .toFile('public/images/team/team-09-product.webp');
    console.log('Saved: public/images/team/team-09-product.webp');
  }

  // =========================================================================
  // 2. CAMPUS PHOTOGRAPHY WITH PHYSICALLY COMPOSITED IDS BRANDING
  // =========================================================================
  console.log('\n--- Processing Branded Campus Photographs ---');

  // A. Campus Reception with 3D Architectural IDS Sign
  const receptionSrc = path.join(artifactDir, 'campus_reception_lobby_1794063707376.jpg');
  if (fs.existsSync(receptionSrc)) {
    // Architectural 3D Sign SVG (Monogram + Lettering + Subtext in Cobalt Blue with 3D Drop Shadow)
    const signSvg = `
      <svg width="420" height="110" viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wallShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="3" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.38"/>
          </filter>
          <linearGradient id="signGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1B2799" />
            <stop offset="50%" stop-color="#2638CC" />
            <stop offset="100%" stop-color="#3D53E8" />
          </linearGradient>
        </defs>

        <!-- Backing Plaque -->
        <rect x="0" y="0" width="410" height="98" rx="14" fill="#FFFFFF" fill-opacity="0.94" stroke="#D7DCFF" stroke-width="2" filter="url(#wallShadow)"/>

        <!-- IDS Squircle Emblem -->
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="66" height="66" rx="18" fill="#EEF2FF" stroke="#C7D2FE" stroke-width="1.5"/>
          <g transform="translate(16, 16)">
            <rect x="0" y="0" width="15" height="15" rx="4" fill="#F06445"/>
            <rect x="20" y="0" width="15" height="15" rx="4" fill="url(#signGrad)"/>
            <rect x="0" y="20" width="15" height="15" rx="4" fill="#1B2799"/>
            <circle cx="27.5" cy="27.5" r="7.5" fill="url(#signGrad)"/>
          </g>
        </g>

        <!-- Typography -->
        <g transform="translate(100, 16)">
          <text x="0" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="url(#signGrad)" letter-spacing="-0.02em">
            International Design School
          </text>
          <text x="0" y="52" font-family="'Inter', sans-serif" font-size="10.5" font-weight="700" fill="#64748B" letter-spacing="0.14em">
            PUNE FLAGSHIP CAMPUS &#8226; RECEPTION
          </text>
        </g>
      </svg>
    `;

    // Composite at top-right wall area (top: 140, left: 820 in 1376x768 frame)
    await compositeSvgOnImage(
      receptionSrc,
      signSvg,
      140,
      820,
      'public/images/campus/ids-reception-branded.webp'
    );
  }

  // B. Pune Campus Entrance with Monolithic Architectural Monument Plaque
  const entranceSrc = path.join(artifactDir, 'campus_entrance_exterior_1794063735581.jpg');
  if (fs.existsSync(entranceSrc)) {
    const monumentSvg = `
      <svg width="340" height="90" viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="pylonShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.45"/>
          </filter>
        </defs>
        <!-- Cast Bronze / Dark Architectural Metal Monument Plaque -->
        <rect x="0" y="0" width="330" height="82" rx="10" fill="#0F172A" fill-opacity="0.92" stroke="#2638CC" stroke-width="2.5" filter="url(#pylonShadow)"/>
        
        <g transform="translate(16, 16)">
          <rect x="0" y="0" width="50" height="50" rx="14" fill="#1E293B"/>
          <g transform="translate(12, 12)">
            <rect x="0" y="0" width="11" height="11" rx="3" fill="#F06445"/>
            <rect x="15" y="0" width="11" height="11" rx="3" fill="#38BDF8"/>
            <rect x="0" y="15" width="11" height="11" rx="3" fill="#818CF8"/>
            <circle cx="20.5" cy="20.5" r="5.5" fill="#38BDF8"/>
          </g>
        </g>

        <g transform="translate(78, 16)">
          <text x="0" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" letter-spacing="-0.02em">
            International Design School
          </text>
          <text x="0" y="44" font-family="'Inter', sans-serif" font-size="9.5" font-weight="700" fill="#94A3B8" letter-spacing="0.14em">
            PUNE FLAGSHIP CAMPUS &#8226; ENTRANCE
          </text>
        </g>
      </svg>
    `;

    // Composite onto concrete monument wall (top: 360, left: 160)
    await compositeSvgOnImage(
      entranceSrc,
      monumentSvg,
      360,
      160,
      'public/images/campus/pune-campus-branded.webp'
    );
  }

  // C. Fashion Design Atelier with Wall Signage
  const atelierSrc = path.join(artifactDir, 'fashion_design_atelier_1794063772953.jpg');
  if (fs.existsSync(atelierSrc)) {
    const atelierSignSvg = `
      <svg width="280" height="70" viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="270" height="62" rx="8" fill="#FFFFFF" fill-opacity="0.88" stroke="#E2E8F0" stroke-width="1.5"/>
        <g transform="translate(12, 12)">
          <rect x="0" y="0" width="38" height="38" rx="10" fill="#EEF2FF"/>
          <circle cx="19" cy="19" r="8" fill="#2638CC"/>
        </g>
        <g transform="translate(60, 12)">
          <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#111111" letter-spacing="-0.01em">
            IDS &#8226; COUTURE ATELIER
          </text>
          <text x="0" y="34" font-family="'Inter', sans-serif" font-size="8.5" font-weight="600" fill="#64748B" letter-spacing="0.1em">
            STUDIO 01 &#8226; FASHION DESIGN
          </text>
        </g>
      </svg>
    `;

    await compositeSvgOnImage(
      atelierSrc,
      atelierSignSvg,
      100,
      760,
      'public/images/campus/fashion-couture-studio.webp'
    );
  }

  // D. Interior Architecture Studio with Wall Signage
  const interiorStudioSrc = path.join(artifactDir, 'interior_architecture_studio_1794063863539.jpg');
  if (fs.existsSync(interiorStudioSrc)) {
    const interiorSignSvg = `
      <svg width="300" height="70" viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="290" height="62" rx="8" fill="#FFFFFF" fill-opacity="0.90" stroke="#CBD5E1" stroke-width="1.5"/>
        <g transform="translate(12, 12)">
          <rect x="0" y="0" width="38" height="38" rx="10" fill="#EEF2FF"/>
          <rect x="10" y="10" width="18" height="18" rx="4" fill="#2638CC"/>
        </g>
        <g transform="translate(62, 12)">
          <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#111111" letter-spacing="-0.01em">
            IDS &#8226; SPATIAL ARCHITECTURE
          </text>
          <text x="0" y="34" font-family="'Inter', sans-serif" font-size="8.5" font-weight="600" fill="#64748B" letter-spacing="0.1em">
            STUDIO 03 &#8226; BUILT ENVIRONMENTS
          </text>
        </g>
      </svg>
    `;

    await compositeSvgOnImage(
      interiorStudioSrc,
      interiorSignSvg,
      110,
      720,
      'public/images/campus/interior-architecture-studio.webp'
    );
  }

  // E. Digital Systems Lab
  const digitalLabSrc = path.join(prevDir, 'uiux_design_collaboration_1793987305960.jpg');
  if (fs.existsSync(digitalLabSrc)) {
    const digitalSignSvg = `
      <svg width="290" height="70" viewBox="0 0 290 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="280" height="62" rx="8" fill="#0F172A" fill-opacity="0.88" stroke="#38BDF8" stroke-width="1.5"/>
        <g transform="translate(12, 12)">
          <rect x="0" y="0" width="38" height="38" rx="10" fill="#1E293B"/>
          <circle cx="19" cy="19" r="7" fill="#38BDF8"/>
        </g>
        <g transform="translate(60, 12)">
          <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" letter-spacing="-0.01em">
            IDS &#8226; DIGITAL SYSTEMS LAB
          </text>
          <text x="0" y="34" font-family="'Inter', sans-serif" font-size="8.5" font-weight="600" fill="#94A3B8" letter-spacing="0.1em">
            UI/UX &#8226; COGNITIVE ERGONOMICS
          </text>
        </g>
      </svg>
    `;

    await compositeSvgOnImage(
      digitalLabSrc,
      digitalSignSvg,
      80,
      600,
      'public/images/campus/digital-systems-lab.webp'
    );
  }

  // F. Hero Studio Experience (with integrated wall branding)
  const heroStudioSrc = path.join(prevDir, 'ids_hero_studio_1793987160018.jpg');
  if (fs.existsSync(heroStudioSrc)) {
    const heroWallSvg = `
      <svg width="340" height="80" viewBox="0 0 340 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="330" height="72" rx="12" fill="#FFFFFF" fill-opacity="0.92" stroke="#D7DCFF" stroke-width="2"/>
        <g transform="translate(14, 12)">
          <rect x="0" y="0" width="48" height="48" rx="12" fill="#EEF2FF"/>
          <rect x="8" y="8" width="14" height="14" rx="4" fill="#F06445"/>
          <rect x="26" y="8" width="14" height="14" rx="4" fill="#2638CC"/>
          <rect x="8" y="26" width="14" height="14" rx="4" fill="#1B2799"/>
          <circle cx="33" cy="33" r="7" fill="#3D53E8"/>
        </g>
        <g transform="translate(74, 14)">
          <text x="0" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#2638CC">
            International Design School
          </text>
          <text x="0" y="40" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#64748B" letter-spacing="0.12em">
            COLLABORATIVE DESIGN STUDIOS
          </text>
        </g>
      </svg>
    `;

    await compositeSvgOnImage(
      heroStudioSrc,
      heroWallSvg,
      90,
      640,
      'public/images/campus/ids-hero-studio.webp'
    );
  }

  // =========================================================================
  // 3. STUDENT PROJECTS &amp; PORTFOLIO IMAGES
  // =========================================================================
  console.log('\n--- Processing Student Projects ---');

  // Project 01: Fashion
  const proj01 = path.join(artifactDir, 'student_project_fashion_couture_1794063731570.jpg');
  if (fs.existsSync(proj01)) {
    await sharp(proj01).resize(800, 600, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/projects/project-01-fashion.webp');
    console.log('Saved: public/images/projects/project-01-fashion.webp');
  }

  // Project 02: Interior
  const proj02 = path.join(artifactDir, 'student_project_interior_biophilic_hotel_1794063746011.jpg');
  if (fs.existsSync(proj02)) {
    await sharp(proj02).resize(800, 600, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/projects/project-02-interior.webp');
    console.log('Saved: public/images/projects/project-02-interior.webp');
  }

  // Project 03: Branding
  const proj03 = path.join(artifactDir, 'student_project_branding_perfume_1794063758047.jpg');
  if (fs.existsSync(proj03)) {
    await sharp(proj03).resize(800, 600, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/projects/project-03-branding.webp');
    console.log('Saved: public/images/projects/project-03-branding.webp');
  }

  // Project 04: UI/UX
  const proj04 = path.join(artifactDir, 'student_project_uiux_mobile_app_1794063771598.jpg');
  if (fs.existsSync(proj04)) {
    await sharp(proj04).resize(800, 600, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/projects/project-04-uiux.webp');
    console.log('Saved: public/images/projects/project-04-uiux.webp');
  }

  // Project 05: Product Design Prototype (Sharp generated layout)
  const proj05Svg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgGradP)"/>
      <!-- Grid Lines -->
      <path d="M 0 150 H 800 M 0 300 H 800 M 0 450 H 800 M 200 0 V 600 M 400 0 V 600 M 600 0 V 600" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="4 4"/>
      
      <!-- Central Product Illustration (Ergonomic Ceramic Air Purifier Prototype) -->
      <g transform="translate(400, 300)">
        <ellipse cx="0" cy="120" rx="140" ry="30" fill="#94A3B8" opacity="0.3"/>
        <!-- Main Body -->
        <path d="M -90 -100 C -110 40, -120 80, -90 120 H 90 C 120 80, 110 40, 90 -100 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="3"/>
        <!-- Perforated Air Acoustic Vents -->
        <ellipse cx="0" cy="-100" rx="90" ry="24" fill="#0F172A"/>
        <ellipse cx="0" cy="-100" rx="70" ry="18" fill="#1E293B"/>
        <circle cx="0" cy="-100" r="10" fill="#F06445"/>
        
        <!-- Subtle Acoustic Vents -->
        <g stroke="#94A3B8" stroke-width="2" stroke-linecap="round">
          <line x1="-50" y1="20" x2="50" y2="20"/>
          <line x1="-60" y1="40" x2="60" y2="40"/>
          <line x1="-55" y1="60" x2="55" y2="60"/>
          <line x1="-40" y1="80" x2="40" y2="80"/>
        </g>
      </g>

      <!-- Editorial Typography Header -->
      <g transform="translate(60, 70)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#2638CC" letter-spacing="0.14em">
          STUDENT PROJECT 05 &#8226; PRODUCT DESIGN
        </text>
        <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#0F172A">
          Acoustic Ceramic Air Purifier Prototype
        </text>
        <text x="0" y="52" font-family="'Inter', sans-serif" font-size="13" fill="#64748B">
          Exploration of porous terracotta and CNC recycled aluminum for quiet home air filtration.
        </text>
      </g>

      <!-- Material Swatch Markers -->
      <g transform="translate(60, 520)">
        <rect x="0" y="0" width="20" height="20" rx="4" fill="#C2410C"/>
        <text x="28" y="15" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#334155">Porous Terracotta</text>
        
        <rect x="180" y="0" width="20" height="20" rx="4" fill="#64748B"/>
        <text x="208" y="15" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#334155">Anodized 6061 Aluminum</text>

        <rect x="390" y="0" width="20" height="20" rx="4" fill="#0F172A"/>
        <text x="418" y="15" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#334155">HEPA H13 Carbon Core</text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(proj05Svg)).webp({ quality: 88 }).toFile('public/images/projects/project-05-product.webp');
  console.log('Saved: public/images/projects/project-05-product.webp');

  // Project 06: Fine Jewellery (Sharp generated layout)
  const proj06Svg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#18181B"/>
      <!-- Spotlight -->
      <radialGradient id="jewelLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#3F3F46" />
        <stop offset="100%" stop-color="#18181B" />
      </radialGradient>
      <circle cx="400" cy="300" r="280" fill="url(#jewelLight)"/>

      <!-- Raw Stone Plinth -->
      <polygon points="260,380 540,380 580,440 220,440" fill="#27272A" stroke="#3F3F46"/>

      <!-- Geometric Modular Earring Pair (Gold &amp; Emerald) -->
      <g transform="translate(350, 260)">
        <polygon points="0,-70 45,0 0,70 -45,0" fill="none" stroke="#F59E0B" stroke-width="5"/>
        <polygon points="0,-40 25,0 0,40 -25,0" fill="#10B981" stroke="#059669" stroke-width="2"/>
        <circle cx="0" cy="-70" r="6" fill="#FBBF24"/>
      </g>

      <g transform="translate(450, 260)">
        <polygon points="0,-70 45,0 0,70 -45,0" fill="none" stroke="#F59E0B" stroke-width="5"/>
        <polygon points="0,-40 25,0 0,40 -25,0" fill="#10B981" stroke="#059669" stroke-width="2"/>
        <circle cx="0" cy="-70" r="6" fill="#FBBF24"/>
      </g>

      <!-- Typography -->
      <g transform="translate(60, 70)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#F59E0B" letter-spacing="0.14em">
          STUDENT PROJECT 06 &#8226; JEWELLERY DESIGN
        </text>
        <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#FFFFFF">
          Modular Emerald &amp; Recycled 18K Gold
        </text>
        <text x="0" y="52" font-family="'Inter', sans-serif" font-size="13" fill="#A1A1AA">
          Sacred geometry modular clasps cast in ethical recycled yellow gold with Zambian emeralds.
        </text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(proj06Svg)).webp({ quality: 88 }).toFile('public/images/projects/project-06-jewellery.webp');
  console.log('Saved: public/images/projects/project-06-jewellery.webp');

  // Project 07: Motion Design Poster (Sharp layout)
  const proj07Svg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="motionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2799" />
          <stop offset="50%" stop-color="#2638CC" />
          <stop offset="100%" stop-color="#F06445" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="#090D1A"/>
      
      <!-- Dynamic 3D Ribbon Paths -->
      <path d="M 100 480 C 250 150, 550 500, 700 180" fill="none" stroke="url(#motionGrad)" stroke-width="48" stroke-linecap="round"/>
      <path d="M 150 520 C 300 200, 500 450, 750 240" fill="none" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="12" stroke-linecap="round"/>
      
      <g transform="translate(60, 70)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#F06445" letter-spacing="0.14em">
          STUDENT PROJECT 07 &#8226; ANIMATION &amp; MOTION
        </text>
        <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#FFFFFF">
          Kinematic Typography &amp; Generative Visual Posters
        </text>
        <text x="0" y="52" font-family="'Inter', sans-serif" font-size="13" fill="#94A3B8">
          Sound-reactive 60FPS typographic installations developed for spatial architectural displays.
        </text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(proj07Svg)).webp({ quality: 88 }).toFile('public/images/projects/project-07-motion.webp');
  console.log('Saved: public/images/projects/project-07-motion.webp');

  // Project 08: Editorial Monograph (Sharp layout)
  const proj08Svg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#F1F5F9"/>
      <!-- Hardcover Book with Exposed Swiss Binding -->
      <g transform="translate(240, 160)">
        <!-- Book Shadow -->
        <rect x="15" y="15" width="320" height="400" rx="6" fill="#64748B" opacity="0.25"/>
        <!-- Book Cover -->
        <rect x="0" y="0" width="320" height="400" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
        <!-- Spine Accent -->
        <rect x="0" y="0" width="24" height="400" rx="2" fill="#2638CC"/>
        
        <!-- Book Typography (Devanagari + Latin) -->
        <text x="50" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#0F172A">
          संवाद &#8226; DIALOGUE
        </text>
        <text x="50" y="110" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#64748B" letter-spacing="0.1em">
          DEVANAGARI &amp; LATIN TYPOGRAPHICS
        </text>

        <!-- Monograph Body Sample Lines -->
        <g fill="#94A3B8">
          <rect x="50" y="160" width="220" height="6" rx="2"/>
          <rect x="50" y="180" width="200" height="6" rx="2"/>
          <rect x="50" y="200" width="215" height="6" rx="2"/>
          <rect x="50" y="220" width="180" height="6" rx="2"/>
        </g>
        
        <circle cx="230" cy="320" r="30" fill="#F06445" opacity="0.9"/>
      </g>

      <g transform="translate(60, 70)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#2638CC" letter-spacing="0.14em">
          STUDENT PROJECT 08 &#8226; VISUAL COMMUNICATION
        </text>
        <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#0F172A">
          Devanagari-Latin Dual Script Monograph
        </text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(proj08Svg)).webp({ quality: 88 }).toFile('public/images/projects/project-08-editorial.webp');
  console.log('Saved: public/images/projects/project-08-editorial.webp');

  // =========================================================================
  // 4. AWARDS &amp; RECOGNITION IMAGES
  // =========================================================================
  console.log('\n--- Processing Awards &amp; Recognition Visuals ---');

  // Award 01: Design Excellence Trophy
  const award01Svg = `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="studioSpot" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="40%" stop-color="#94A3B8" />
          <stop offset="70%" stop-color="#475569" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#studioSpot)"/>
      
      <!-- Trophy Pedestal -->
      <polygon points="320,380 480,380 520,440 280,440" fill="#0F172A" stroke="#334155" stroke-width="2"/>
      
      <!-- Sculptural Metallic Trophy -->
      <g transform="translate(400, 230)">
        <!-- Outer Crystal / Metal Ribbon -->
        <path d="M 0 -130 C 70 -80, 80 40, 20 120 H -20 C -80 40, -70 -80, 0 -130 Z" fill="none" stroke="url(#metalGrad)" stroke-width="14"/>
        <!-- Inner Frosted Core with IDS Emblem Glow -->
        <circle cx="0" cy="-10" r="38" fill="#2638CC" fill-opacity="0.85" stroke="#38BDF8" stroke-width="2"/>
        <circle cx="0" cy="-10" r="14" fill="#F06445"/>
      </g>

      <g transform="translate(60, 60)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#38BDF8" letter-spacing="0.14em">
          INSTITUTIONAL BENCHMARK &#8226; AWARDS
        </text>
        <text x="0" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">
          International Design Excellence Standard
        </text>
        <text x="0" y="48" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">
          Studio curriculum benchmarks calibrated to world-class design competitions.
        </text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(award01Svg)).webp({ quality: 88 }).toFile('public/images/awards/award-01-trophy.webp');
  console.log('Saved: public/images/awards/award-01-trophy.webp');

  // Award 02: Architectural Trophy Display
  const award02Svg = `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="galleryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#galleryGrad)"/>
      
      <!-- Architectural Plinth -->
      <rect x="330" y="240" width="140" height="200" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
      <ellipse cx="400" cy="240" rx="70" ry="14" fill="#E2E8F0"/>
      
      <!-- Polished Bronze Sculpture Trophy -->
      <g transform="translate(400, 170)">
        <path d="M -30 60 C -40 -20, 40 -20, 30 60 Z" fill="#B45309" stroke="#D97706" stroke-width="2"/>
        <circle cx="0" cy="-30" r="26" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
      </g>

      <g transform="translate(60, 60)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#2638CC" letter-spacing="0.14em">
          SPATIAL PEDAGOGY &#8226; ACCREDITATION
        </text>
        <text x="0" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#0F172A">
          Architectural &amp; Studio Distinction
        </text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(award02Svg)).webp({ quality: 88 }).toFile('public/images/awards/award-02-display.webp');
  console.log('Saved: public/images/awards/award-02-display.webp');

  // Award 03: Exhibition Hall &amp; Gala Showcase
  const exhibitionSrc = path.join(prevDir, 'student_exhibition_1793987466557.jpg');
  if (fs.existsSync(exhibitionSrc)) {
    const galaSvg = `
      <svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="310" height="72" rx="10" fill="#0F172A" fill-opacity="0.9" stroke="#2638CC" stroke-width="2"/>
        <g transform="translate(14, 14)">
          <circle cx="22" cy="22" r="16" fill="#2638CC"/>
          <text x="22" y="28" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">★</text>
        </g>
        <g transform="translate(64, 16)">
          <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">
            IDS ANNUAL AWARDS
          </text>
          <text x="0" y="36" font-family="'Inter', sans-serif" font-size="9" font-weight="600" fill="#94A3B8">
            GRADUATION EXCELLENCE GALA
          </text>
        </g>
      </svg>
    `;
    await compositeSvgOnImage(
      exhibitionSrc,
      galaSvg,
      120,
      480,
      'public/images/awards/award-03-exhibition.webp'
    );
  }

  // =========================================================================
  // 5. STUDENTS &amp; PLACEMENT PORTRAITS
  // =========================================================================
  console.log('\n--- Processing Student &amp; Placement Profiles ---');

  if (fs.existsSync(team01Src)) {
    await sharp(team01Src).resize(400, 400, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/students/student-01-interior.webp');
    console.log('Saved: public/images/students/student-01-interior.webp');
  }

  if (fs.existsSync(team03Src)) {
    await sharp(team03Src).resize(400, 400, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/students/student-02-fashion.webp');
    console.log('Saved: public/images/students/student-02-fashion.webp');
  }

  if (fs.existsSync(team02Src)) {
    await sharp(team02Src).resize(400, 400, { fit: 'cover' }).webp({ quality: 88 }).toFile('public/images/students/student-03-uiux.webp');
    console.log('Saved: public/images/students/student-03-uiux.webp');
  }

  console.log('\n=== COMPLETE PHOTOGRAPHY REBRANDING PIPELINE FINISHED SUCCESSFULLY! ===');
}

processAll().catch(err => {
  console.error('Fatal error in media processing:', err);
  process.exit(1);
});
