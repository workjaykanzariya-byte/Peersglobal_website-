const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\a307896b-f58e-4b2e-8792-09a0175cbddd';
const targetAvatarDir = path.join(__dirname, 'public', 'images', 'peers-avatars');
const targetImagesDir = path.join(__dirname, 'public', 'images');

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const srcFile = path.join(srcDir, file);
      // Clean name (strip timestamp)
      const cleanName = file.replace(/_\d{10,}\.(jpg|png)$/, '.$1');
      if (file.startsWith('avatar_')) {
        const dest = path.join(targetAvatarDir, cleanName);
        fs.copyFileSync(srcFile, dest);
        console.log('Copied avatar:', cleanName);
      } else {
        const dest = path.join(targetImagesDir, cleanName);
        fs.copyFileSync(srcFile, dest);
        console.log('Copied image:', cleanName);
      }
    }
  });
}
console.log('Finished copying images!');

