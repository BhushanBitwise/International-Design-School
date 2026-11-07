import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = 'C:/Users/DELL/.gemini/antigravity/brain/20a50476-af46-49fb-8432-d03b4d3d97c2';
const targetDir = './public/images';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map base name patterns to final webp file names
const imageMapping = {
  'ids_hero_studio': 'ids-hero-studio.webp',
  'fashion_design_studio': 'fashion-design-studio.webp',
  'interior_design_workshop': 'interior-design-workshop.webp',
  'graphic_design_team': 'graphic-design-team.webp',
  'uiux_design_collaboration': 'uiux-design-collaboration.webp',
  'singapore_creative_studio': 'singapore-creative-studio.webp',
  'usa_campus': 'usa-campus.webp',
  'uk_design_studio': 'uk-design-studio.webp',
  'germany_design_workshop': 'germany-design-workshop.webp',
  'pune_campus': 'pune-campus.webp',
  'student_exhibition': 'student-exhibition.webp',
  'faculty_mentorship': 'faculty-mentorship.webp'
};

async function processAll() {
  const files = fs.readdirSync(sourceDir);
  console.log('Total files in source dir:', files.length);

  for (const [key, targetName] of Object.entries(imageMapping)) {
    const match = files.find(f => f.startsWith(key) && f.endsWith('.jpg'));
    const destPath = path.join(targetDir, targetName);

    if (match) {
      const srcPath = path.join(sourceDir, match);
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`Converted: ${match} -> ${targetName}`);
    } else {
      console.log(`Pending / not yet found: ${key}`);
    }
  }
}

processAll().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
