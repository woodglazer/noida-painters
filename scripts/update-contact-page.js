const fs = require('fs');

const file = 'D:/Full Stack Dev/noida-painters/src/app/contact/page.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<header className="px-5 pb-0 pt-28 text-center sm:px-8 sm:pt-32 lg:px-12">',
  '<header className="pb-0 pt-28 text-center sm:pt-32">\n        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
);
content = content.replace(
  'arrange a site conversation.</p>\n      </header>',
  'arrange a site conversation.</p>\n        </div>\n      </header>'
);
content = content.replace(
  'arrange a site conversation.</p>\r\n      </header>',
  'arrange a site conversation.</p>\r\n        </div>\r\n      </header>'
);

content = content.replace(
  /<section\s+className=["']bg-white px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16["']\s+aria-labelledby=["']business-address-heading["']>\s*<div className=["']mx-auto max-w-8xl["']>/,
  '<section className="bg-white py-8 sm:py-12 lg:py-16 border-b border-slate-200" aria-labelledby="business-address-heading">\n        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated contact page');
