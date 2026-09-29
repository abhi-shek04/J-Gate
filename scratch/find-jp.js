const fs = require('fs');
const path = require('path');

function scan(d) {
  fs.readdirSync(d).forEach(f => {
    let p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      scan(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let lines = fs.readFileSync(p, 'utf8').split('\n');
      lines.forEach((l, i) => {
        if (/[\u3040-\u30ff\u4e00-\u9fff]/.test(l)) {
          let t = l.trim();
          if (
            !t.startsWith('//') &&
            !t.startsWith('/*') &&
            !t.startsWith('*') &&
            !/\bJP:\s*["`']/.test(l) &&
            !/\bjp:\s*["`']/.test(l) &&
            !/["']jp["']:\s*["`']/.test(l) &&
            !/lang\s*===\s*["']JP["']/.test(l) &&
            !/lang\s*===\s*['"]JP['"]/.test(l) &&
            !/isJp/.test(l)
          ) {
            console.log(`${p}:${i + 1}: ${t}`);
          }
        }
      });
    }
  });
}

scan('./src');
