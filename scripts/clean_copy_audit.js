const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(srcDir);
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replacements for simple, elegant, high-professional English
  content = content.replace(/Plug-and-Play Hub/g, 'Ready-to-Use Enterprise Hub');
  content = content.replace(/plug-and-play/gi, 'ready-to-use');
  content = content.replace(/plug and play/gi, 'ready-to-use');
  content = content.replace(/plug & play/gi, 'ready-to-use');
  content = content.replace(/Plug & Play/g, 'Ready to Use');
  content = content.replace(/Plug and Play/g, 'Ready to Use');

  content = content.replace(/turnkey incubation corridor/gi, 'fully managed incubation corridor');
  content = content.replace(/turnkey capability/gi, 'core capability');
  content = content.replace(/turnkey capabilities/gi, 'core capabilities');
  content = content.replace(/turnkey/gi, 'fully managed');

  content = content.replace(/exploratory satellite memberships/gi, 'flexible exploratory memberships');
  content = content.replace(/satellite arrangements/gi, 'flexible arrangements');

  content = content.replace(/frictionless/gi, 'smooth and efficient');
  content = content.replace(/hyper-scalable/gi, 'highly scalable');
  content = content.replace(/hyper scalable/gi, 'highly scalable');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log('Updated:', path.relative(process.cwd(), file));
  }
});

console.log('Total files updated:', changedCount);
