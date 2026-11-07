import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/DELL/.gemini/antigravity/brain/d9b2464f-19ff-4855-9950-e01c89d95c20/';
const outputDir = 'public/images/samples';

fs.mkdirSync(outputDir, { recursive: true });

async function buildSamples() {
  console.log('Generating 3 fresh sample photographs...');

  // Sample 1: Fashion Design Studio
  // From pure fresh AI photograph fashion_design_atelier_1794063772953.jpg
  const fashionSrc = path.join(brainDir, 'fashion_design_atelier_1794063772953.jpg');
  await sharp(fashionSrc)
    .webp({ quality: 92, effort: 6 })
    .toFile(path.join(outputDir, 'ids-fashion-studio-01.webp'));
  console.log('Created: public/images/samples/ids-fashion-studio-01.webp');

  // Sample 2: Interior Design Studio
  // From pure fresh AI photograph interior_architecture_studio_1794063863539.jpg
  const interiorSrc = path.join(brainDir, 'interior_architecture_studio_1794063863539.jpg');
  await sharp(interiorSrc)
    .webp({ quality: 92, effort: 6 })
    .toFile(path.join(outputDir, 'ids-interior-studio-01.webp'));
  console.log('Created: public/images/samples/ids-interior-studio-01.webp');

  // Sample 3: IDS Reception with realistic physical 3D wall signage
  // From pure fresh AI photograph campus_reception_lobby_1794063707376.jpg
  // Wood slat feature wall is located roughly from x=870 to x=1320, y=140 to y=650 (on 1376x768 image)
  // We composite individual 3D architectural letters directly onto the wood slats with realistic depth
  const receptionSrc = path.join(brainDir, 'campus_reception_lobby_1794063707376.jpg');
  
  // Dimensions of receptionSrc: 1376 x 768
  // Wood slat feature wall center is at x=1095, y=340
  const signageSvg = `
    <svg width="1376" height="768" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Realistic 3D architectural shadow from recessed ceiling spotlight above -->
        <filter id="archDropShadow" x="-20%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="2" dy="5" stdDeviation="3.2" flood-color="#050302" flood-opacity="0.75" />
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="#0a0805" flood-opacity="0.55" />
        </filter>
        <filter id="subDropShadow" x="-20%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="1.5" dy="3.5" stdDeviation="2.2" flood-color="#050302" flood-opacity="0.65" />
        </filter>
        <linearGradient id="bronzeLetter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2D2824" />
          <stop offset="50%" stop-color="#1F1A17" />
          <stop offset="100%" stop-color="#120F0D" />
        </linearGradient>
      </defs>

      <!-- Physically mounted individual 3D cutout dimensional letters on fluted oak wall -->
      <!-- Monogram / Acronym "IDS" -->
      <g filter="url(#archDropShadow)">
        <text 
          x="1095" 
          y="310" 
          text-anchor="middle" 
          font-family="system-ui, -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" 
          font-weight="900" 
          font-size="44" 
          letter-spacing="5" 
          fill="url(#bronzeLetter)"
        >IDS</text>
      </g>

      <!-- Institutional full name "INTERNATIONAL DESIGN SCHOOL" in architectural dimensional typography -->
      <g filter="url(#subDropShadow)">
        <text 
          x="1095" 
          y="348" 
          text-anchor="middle" 
          font-family="system-ui, -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" 
          font-weight="700" 
          font-size="13" 
          letter-spacing="3.2" 
          fill="url(#bronzeLetter)"
        >INTERNATIONAL DESIGN SCHOOL</text>
        <text 
          x="1095" 
          y="370" 
          text-anchor="middle" 
          font-family="system-ui, -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" 
          font-weight="600" 
          font-size="9.5" 
          letter-spacing="3" 
          fill="#3A332E"
        >ADMISSIONS &amp; VISITOR ATRIUM</text>
      </g>
    </svg>
  `;

  await sharp(receptionSrc)
    .composite([
      {
        input: Buffer.from(signageSvg),
        top: 0,
        left: 0
      }
    ])
    .webp({ quality: 92, effort: 6 })
    .toFile(path.join(outputDir, 'ids-reception-01.webp'));
  console.log('Created: public/images/samples/ids-reception-01.webp');

  console.log('All 3 fresh sample photographs built successfully!');
}

buildSamples().catch(err => {
  console.error(err);
  process.exit(1);
});
