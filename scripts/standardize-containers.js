const fs = require('fs');

function updateFile(filePath, regex, replacement) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('SUCCESS:', filePath);
  } else {
    console.log('REGEX NOT MATCHED:', filePath);
  }
}

// 1. Reviews.jsx
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/Reviews.jsx',
  /<div className=["']mx-auto max-w-8xl["']>/,
  '<div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
);

// 2. BlogSection.jsx: Remove px from section, add to max-w-8xl div
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/BlogSection.jsx',
  /className=["']bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 border-b border-slate-200["']/,
  'className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200"'
);
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/BlogSection.jsx',
  /<div className=["']mx-auto max-w-8xl["']>/,
  '<div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
);

// 3. PageFAQs.jsx: Add px to max-w-8xl div
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/PageFAQs.jsx',
  /<div className=["']mx-auto max-w-8xl["']>/,
  '<div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
);

// 4. Contact.jsx: Remove px from section, add to max-w-8xl div
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/Contact.jsx',
  /className=["']bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 border-b border-slate-200["']/,
  'className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200"'
);
updateFile(
  'D:/Full Stack Dev/noida-painters/src/app/components/Contact.jsx',
  /<div className=["']mx-auto grid max-w-8xl gap-8 lg:grid-cols-\[0\.9fr_1\.1fr\] lg:gap-12["']>/,
  '<div className="mx-auto grid max-w-8xl gap-8 px-5 sm:px-8 lg:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">'
);
