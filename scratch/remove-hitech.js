const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      files = files.concat(walk(p));
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      files.push(p);
    }
  });
  return files;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replacements for Hitech / HITEC City variants
  content = content.replace(/HITEC City, Hyderabad, India/g, 'Hyderabad, India');
  content = content.replace(/HITEC City, Hyderabad/g, 'Hyderabad, India');
  content = content.replace(/Hitech City, Hyderabad/g, 'Hyderabad, India');
  content = content.replace(/Hitech City/g, 'Hyderabad');
  content = content.replace(/HITEC City/g, 'Hyderabad');
  content = content.replace(/hitec city/g, 'hyderabad');
  content = content.replace(/hitech city/g, 'hyderabad');
  content = content.replace(/HITEC CITY HYDERABAD/g, 'HYDERABAD INDIA');
  content = content.replace(/ハイテックシティ・ハイデラバード/g, 'ハイデラバード');
  content = content.replace(/ハイデラバード・ハイテックシティ/g, 'ハイデラバード');
  content = content.replace(/ハイテックシティ/g, 'ハイデラバード');
  content = content.replace(/\(Hitech City\)/g, '(Hyderabad)');

  // Fix potential double "Hyderabad, Hyderabad" or "in in Hyderabad"
  content = content.replace(/Hyderabad, Hyderabad/g, 'Hyderabad');
  content = content.replace(/Hyderabad, India, India/g, 'Hyderabad, India');
  content = content.replace(/inside Hyderabad — Hyderabad's/g, 'in Hyderabad — India\'s');
  content = content.replace(/in Hyderabad, Hyderabad/g, 'in Hyderabad');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
