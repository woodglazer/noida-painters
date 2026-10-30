const fs = require('fs');

const pages = [
  'about/page.js',
  'areas/page.js',
  'areas/[slug]/page.js',
  'blog/page.js',
  'blog/[slug]/page.js',
  'contact/page.js',
  'cookies/page.js',
  'privacy-policy/page.js',
  'services/page.js',
  'services/[slug]/page.js',
  'why-us/page.js'
];

pages.forEach(p => {
  const file = 'D:/Full Stack Dev/noida-painters/src/app/' + p;
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const sections = text.match(/<section[^>]*className=["'][^"']*["']/g) || [];
    const articles = text.match(/<article[^>]*className=["'][^"']*["']/g) || [];
    const headers = text.match(/<header[^>]*className=["'][^"']*["']/g) || [];
    console.log(p);
    sections.forEach(s => console.log('  sec:', s));
    articles.forEach(a => console.log('  art:', a));
    headers.forEach(h => console.log('  hdr:', h));
  }
});
