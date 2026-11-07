import fs from 'fs';

let content = fs.readFileSync('src/data/programs.js', 'utf8');

const mapping = {
  'fashion-design': '/images/ids/fashion/ids-fashion-design-studio.webp',
  'interior-design': '/images/ids/interior/ids-interior-design-studio.webp',
  'graphic-design': '/images/ids/graphic/ids-graphic-design-studio.webp',
  'ui-ux-design': '/images/ids/uiux/ids-uiux-design-lab.webp',
  'animation': '/images/ids/digital/ids-animation-motion-lab.webp',
  'jewellery-design': '/images/ids/jewellery/ids-jewellery-design-atelier.webp',
  'textile-design': '/images/ids/textile/ids-textile-design-lab.webp',
  'product-design': '/images/ids/product/ids-product-design-workshop.webp',
  'fashion-styling': '/images/ids/fashion/ids-fashion-styling-studio.webp',
  'luxury-brand-management': '/images/ids/offices/ids-luxury-brand-suite.webp',
  'visual-communication': '/images/ids/graphic/ids-visual-communication-lab.webp',
  'digital-design': '/images/ids/digital/ids-digital-design-systems.webp'
};

for (const [id, newPath] of Object.entries(mapping)) {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?heroImage:\\s*)'[^']+'`);
  content = content.replace(regex, `$1'${newPath}'`);
}

fs.writeFileSync('src/data/programs.js', content, 'utf8');
console.log('Updated programs.js successfully.');
