const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'public');
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copyDir(from, to) {
  for (const item of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, item.name);
    const destPath = path.join(to, item.name);
    if (item.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, out);
console.log('Build selesai: dist/ siap deploy ke Vercel.');
