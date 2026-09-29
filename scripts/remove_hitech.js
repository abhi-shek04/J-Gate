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

  // Specific phrases first
  content = content.replace(/HITEC City,\s*Hyderabad,\s*India/gi, 'Hyderabad, India');
  content = content.replace(/Phase 2,\s*Hitech City,\s*Hyderabad/gi, 'Phase 2, Hyderabad');
  content = content.replace(/Phase 2 of Hitech City,\s*Hyderabad/gi, 'Phase 2, Hyderabad');
  content = content.replace(/Hitech City Phase 2/gi, 'Phase 2');
  content = content.replace(/HITEC City Phase 2/gi, 'Phase 2');
  content = content.replace(/HITEC City Metro Station/gi, 'Metro Station');
  content = content.replace(/Hitech City Metro Station/gi, 'Metro Station');
  content = content.replace(/HITEC City Enterprise Base/gi, 'Hyderabad Enterprise Base');
  content = content.replace(/Hitech City, Madhapur, Hyderabad/gi, 'Madhapur, Hyderabad');
  content = content.replace(/HITEC City, Madhapur, Hyderabad/gi, 'Madhapur, Hyderabad');
  content = content.replace(/HITEC City, Hyderabad/gi, 'Hyderabad');
  content = content.replace(/Hitech City, Hyderabad/gi, 'Hyderabad');
  content = content.replace(/in HITEC City/gi, 'in Hyderabad');
  content = content.replace(/in Hitech City/gi, 'in Hyderabad');
  content = content.replace(/at HITEC City/gi, 'in Hyderabad');
  content = content.replace(/at Hitech City/gi, 'in Hyderabad');
  content = content.replace(/HITEC City/g, 'Hyderabad');
  content = content.replace(/Hitech City/g, 'Hyderabad');
  content = content.replace(/hitec\+city/gi, 'hyderabad');
  content = content.replace(/Hitec\+City/gi, 'Hyderabad');

  // Japanese
  content = content.replace(/ハイテックシティ・ハイデラバード/g, 'ハイデラバード');
  content = content.replace(/ハイテックシティ/g, 'ハイデラバード');
  content = content.replace(/ハイデラバード・ハイデラバード/g, 'ハイデラバード');

  // Fix any duplicate words generated
  content = content.replace(/Hyderabad,\s*Hyderabad/gi, 'Hyderabad');
  content = content.replace(/Hyderabad\s+Hyderabad/gi, 'Hyderabad');
  content = content.replace(/ハイデラバード・ハイデラバード/g, 'ハイデラバード');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log('Updated:', path.relative(process.cwd(), file));
  }
});

console.log('Total files changed:', changedCount);
