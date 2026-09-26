const fs = require('fs');
const path = require('path');

const replacements = [
  // Eyebrow patterns: text-[#0062D2] with tracking → brand-gradient-text
  ['tracking-widest text-[#0062D2]', 'tracking-widest brand-gradient-text'],
  ['tracking-wider text-[#0062D2]', 'tracking-wider brand-gradient-text'],
  // Primary CTA buttons: bg-[#0062D2] → gradient
  ['bg-[#0062D2] hover:bg-[#0052B4]', 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95'],
  ['bg-[#0062D2] hover:bg-[#1a42c0]', 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95'],
  // Text link colors
  ['text-[#0062D2] hover:text-[#0052B4]', 'text-[#1D4ED8] hover:text-[#E11D48]'],
  ['text-[#0062D2] hover:text-[#1a42c0]', 'text-[#1D4ED8] hover:text-[#E11D48]'],
  // Icon colors
  ['text-[#0062D2] flex items-center justify-center', 'text-[#1D4ED8] flex items-center justify-center'],
  // Border/bg accent
  ['border-[#0062D2]/20', 'border-blue-200/60'],
  ['bg-[#EFF6FF]', 'bg-blue-50/60'],
  // Single text color for badges/labels (not in tracking context)  
  ['font-semibold text-[#0062D2]', 'font-semibold text-[#1D4ED8]'],
  ['font-medium text-[#0062D2]', 'font-medium text-[#1D4ED8]'],
  ['font-bold text-[#0062D2]', 'font-bold text-[#1D4ED8]'],
  // Shadow patterns
  ["shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)]", "shadow-md hover:shadow-lg"],
  ["shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)]", "shadow-md hover:shadow-lg"],
  ["shadow-[0_4px_14px_rgba(0,98,210,0.25)]", "shadow-md"],
  // Remaining text-[#0062D2] → text-[#1D4ED8]
  ['text-[#0062D2]', 'text-[#1D4ED8]'],
  // Remaining bg-[#0062D2] → gradient
  ['bg-[#0062D2]', 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]'],
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  files.forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      count += walk(fp);
    } else if (fp.endsWith('.tsx')) {
      let content = fs.readFileSync(fp, 'utf8');
      let changed = false;
      replacements.forEach(([search, replace]) => {
        if (content.includes(search)) {
          content = content.split(search).join(replace);
          changed = true;
        }
      });
      if (changed) {
        fs.writeFileSync(fp, content, 'utf8');
        console.log('Updated:', fp);
        count++;
      }
    }
  });
  return count;
}

const total = walk(path.join(__dirname, 'components'));
console.log(`\nDone! Updated ${total} files.`);
