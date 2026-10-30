const fs = require('fs');
const comps = [
  'Features.jsx',
  'VisualizeRoomColor.jsx',
  'Reviews.jsx',
  'BlogSection.jsx',
  'PageFAQs.jsx',
  'Contact.jsx',
  'Footer.jsx'
];

comps.forEach(c => {
  const p = 'D:/Full Stack Dev/noida-painters/src/app/components/' + c;
  if (fs.existsSync(p)) {
    const t = fs.readFileSync(p, 'utf8');
    const firstSection = t.match(/<section[^>]*className=["']([^"']*)["']/);
    const firstFooter = t.match(/<footer[^>]*className=["']([^"']*)["']/);
    console.log(c);
    if (firstSection) console.log('  section:', firstSection[1]);
    if (firstFooter) console.log('  footer:', firstFooter[1]);
  }
});
