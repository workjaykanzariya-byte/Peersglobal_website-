const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\a307896b-f58e-4b2e-8792-09a0175cbddd\\auditorium_keynote_hall_1790677775354.jpg';
const dest = path.join(__dirname, 'public', 'images', 'auditorium_keynote_hall.jpg');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied to ' + dest);
} else {
  console.error('Source not found: ' + src);
}
