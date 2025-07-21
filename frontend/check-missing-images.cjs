// check-missing-images.js
// Usage: node check-missing-images.js

const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, 'public', 'mira-images');
const SRC_DIR = path.join(__dirname, 'src');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

// 1. Get all image files in mira-images
const imageFiles = fs.readdirSync(IMAGE_DIR);
const imageBaseNames = new Set(
  imageFiles.map(f => {
    const ext = path.extname(f);
    return f.replace(ext, '');
  })
);

// 2. Recursively scan src/ for getImagePath('...')
function findImageReferences(dir) {
  let refs = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      refs = refs.concat(findImageReferences(fullPath));
    } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const regex = /getImagePath\(['"`]([^'"`]+)['"`]\)/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const ref = match[1].replace(/\.(png|jpg|jpeg)$/i, '');
        refs.push({ ref, file: fullPath });
      }
    }
  }
  return refs;
}

const codeRefs = findImageReferences(SRC_DIR);

// 3. Compare and report
const missing = [];
for (const { ref, file } of codeRefs) {
  if (!imageBaseNames.has(ref)) {
    missing.push({ ref, file });
  }
}

if (missing.length === 0) {
  console.log('✅ All image references have a matching file in public/mira-images.');
} else {
  console.log('❌ Missing or mismatched images:');
  for (const m of missing) {
    console.log(`  - ${m.ref} (referenced in ${m.file})`);
  }
  console.log('\nCheck for typos, case, or extension mismatches.');
} 