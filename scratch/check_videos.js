const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public/videos').filter(f => f.endsWith('.mp4'));
console.log('Found', files.length, 'MP4 videos.\n');

for (const f of files) {
  const filePath = path.join('public/videos', f);
  let out = '';
  try {
    execSync(`ffmpeg -i "${filePath}"`, { stdio: 'pipe' });
  } catch (err) {
    out = (err.stderr || '').toString();
  }
  const hasAudio = /Stream.*Audio:/.test(out);
  const vMatch = out.match(/Stream.*Video: ([^\n\r]+)/);
  const dMatch = out.match(/Duration: ([^\n\r,]+)/);
  const size = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
  console.log(
    f.padEnd(35),
    (size + ' MB').padStart(10),
    (hasAudio ? 'AUDIO' : 'NO_AUDIO').padEnd(10),
    (dMatch ? dMatch[1] : '?').padEnd(14),
    vMatch ? vMatch[1].trim() : '?'
  );
}

