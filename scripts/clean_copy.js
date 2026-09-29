const fs = require('fs');
const path = require('path');
const srcDir = path.join(process.cwd(), 'src');

function getFiles(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    f = path.join(dir, f);
    if (fs.statSync(f).isDirectory()) r = r.concat(getFiles(f));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(f);
  });
  return r;
}

const reps = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'replacements.json'), 'utf8'));
let total = 0, changed = [];
const files = getFiles(srcDir);
console.log("Found " + files.length + " files to process.");

files.forEach(fp => {
  let c = fs.readFileSync(fp, 'utf8');
  let n = 0;
  reps.forEach(([s, r]) => {
    if (c.includes(s)) {
      const cnt = c.split(s).length - 1;
      c = c.split(s).join(r);
      n += cnt;
    }
  });
  if (n > 0) {
    fs.writeFileSync(fp, c, 'utf8');
    console.log("  > " + path.relative(process.cwd(), fp) + ": " + n + " replacements");
    total += n;
    changed.push(path.relative(process.cwd(), fp));
  }
});
console.log("\nDone! " + total + " total replacements across " + changed.length + " files.");
