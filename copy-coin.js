const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\565f9187-1041-476a-8f10-9f8797258ee6\\.user_uploaded\\media_1791439643257.jpg';
const dest = path.join(__dirname, 'public', 'images', 'peers-coin-gold.png');
const destJpg = path.join(__dirname, 'public', 'images', 'peers-coin-gold.jpg');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  fs.copyFileSync(src, destJpg);
  console.log('Successfully copied to ' + dest);
} else {
  console.error('Source not found: ' + src);
}
