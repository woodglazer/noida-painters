const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (file === 'page.js' || file === 'page.jsx') {
      results.push(filePath);
    }
  });
  return results;
}

const allPages = getFiles('D:/Full Stack Dev/noida-painters/src/app');
allPages.forEach(p => {
  const rel = path.relative('D:/Full Stack Dev/noida-painters/src/app', p);
  const content = fs.readFileSync(p, 'utf8');
  const maxwMatches = content.match(/className=["'][^"']*max-w-[^"']*["']/g) || [];
  const pxMatches = content.match(/px-[0-9]+/g) || [];
  console.log(rel);
  maxwMatches.forEach(m => console.log('   ', m));
});
