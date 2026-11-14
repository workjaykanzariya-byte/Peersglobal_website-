const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeSplash() {
  const splashPath = path.resolve('public/animations/splash.json');
  console.log('Reading splash.json...');
  const raw = fs.readFileSync(splashPath, 'utf8');
  const originalSizeMB = (Buffer.byteLength(raw) / 1024 / 1024).toFixed(2);
  console.log(`Original splash.json size: ${originalSizeMB} MB`);

  const data = JSON.parse(raw);
  if (!data.assets || !Array.isArray(data.assets)) {
    console.error('No assets found in splash.json');
    return;
  }

  let processed = 0;
  for (const asset of data.assets) {
    if (asset.p && asset.p.startsWith('data:image/webp;base64,')) {
      const b64 = asset.p.replace(/^data:image\/webp;base64,/, '');
      const buf = Buffer.from(b64, 'base64');
      const resizedBuf = await sharp(buf)
        .resize(288, 288, { fit: 'inside' })
        .webp({ quality: 78, effort: 6 })
        .toBuffer();
      asset.p = 'data:image/webp;base64,' + resizedBuf.toString('base64');
      asset.w = 288;
      asset.h = 288;
      processed++;
    }
  }

  const newRaw = JSON.stringify(data);
  // Backup original
  if (!fs.existsSync('public/animations/splash.original.json')) {
    fs.writeFileSync('public/animations/splash.original.json', raw);
  }
  fs.writeFileSync(splashPath, newRaw);
  const newSizeKB = (Buffer.byteLength(newRaw) / 1024).toFixed(1);
  console.log(`Processed ${processed} frames.`);
  console.log(`New splash.json size: ${newSizeKB} KB (was ${originalSizeMB} MB)`);
}

optimizeSplash().catch(console.error);

