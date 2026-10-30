const fs = require('fs');
const comps = [
  'Hero.jsx',
  'StatsBar.jsx',
  'Features.jsx',
  'Services.jsx',
  'HowWeDoIt.jsx',
  'CostEstimator.jsx',
  'VisualizeRoomColor.jsx',
  'Reviews.jsx',
  'BlogSection.jsx',
  'PageFAQs.jsx',
  'Contact.jsx',
  'Footer.jsx',
  'navbar.jsx'
];

comps.forEach(c => {
  const p = 'D:/Full Stack Dev/noida-painters/src/app/components/' + c;
  if (fs.existsSync(p)) {
    const t = fs.readFileSync(p, 'utf8');
    const m = t.match(/className=["'][^"']*max-w-8xl[^"']*["']/);
    console.log(c.padEnd(24), m ? m[0] : 'NONE');
  }
});
