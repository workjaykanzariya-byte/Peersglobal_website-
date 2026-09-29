const fs = require('fs');
const path = require('path');

const replacements = [
  // 1. Line indicator replacements (plain blue lines -> brand gradient lines)
  ['<span className="h-0.5 w-6 bg-[#0062D2]" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="h-0.5 w-6 bg-[#1D4ED8]" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-6 h-[1.5px] bg-[#0062D2]" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-6 h-[1.5px] bg-sky-400" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-5 h-[1.5px] bg-[#0062D2]" />', '<span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-6 h-0.5 bg-[#0062D2]" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-6 h-0.5 bg-blue-600" />', '<span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-8 h-0.5 bg-[#0062D2]" />', '<span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],
  ['<span className="w-8 h-0.5 bg-blue-600" />', '<span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />'],

  // 2. Eyebrow text colors with tracking -> brand-gradient-text
  ['text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-[#1D4ED8] text-xs font-bold tracking-[0.25em] uppercase', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.25em] uppercase text-[#0062D2]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.25em] uppercase text-[#1D4ED8]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.2em] uppercase text-[#0062D2]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.2em] uppercase text-[#1D4ED8]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.2em] uppercase text-blue-600', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold tracking-[0.25em] uppercase text-blue-600', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.25em] text-blue-600', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['text-xs font-bold uppercase tracking-[0.2em] text-blue-600', 'text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text'],
  ['tracking-widest text-[#0062D2]', 'tracking-widest brand-gradient-text'],
  ['tracking-widest text-[#1D4ED8]', 'tracking-widest brand-gradient-text'],
  ['tracking-wider text-[#0062D2]', 'tracking-wider brand-gradient-text'],
  ['tracking-wider text-[#1D4ED8]', 'tracking-wider brand-gradient-text'],
  ['tracking-[0.25em] text-[#0062D2]', 'tracking-[0.25em] brand-gradient-text'],
  ['tracking-[0.25em] text-[#1D4ED8]', 'tracking-[0.25em] brand-gradient-text'],
  ['tracking-[0.2em] text-[#0062D2]', 'tracking-[0.2em] brand-gradient-text'],
  ['tracking-[0.2em] text-[#1D4ED8]', 'tracking-[0.2em] brand-gradient-text'],
];

function walk(dir) {
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir);
  let count = 0;
  files.forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      count += walk(fp);
    } else if (fp.endsWith('.tsx') || fp.endsWith('.jsx')) {
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

const c1 = walk(path.join(__dirname, 'components'));
const c2 = walk(path.join(__dirname, 'app'));
console.log(`\nDone! Updated ${c1 + c2} files.`);

