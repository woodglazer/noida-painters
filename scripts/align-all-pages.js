const fs = require('fs');

function standardizeInnerPage(file, isArticle = false) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (isArticle) {
    // Replace <article className="px-5 ..."> <div className="mx-auto max-w-8xl">
    // with <article className="..."> <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
    content = content.replace(
      /<article className=["']px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12["']>\s*<div className=["']mx-auto max-w-8xl["']>/,
      '<article className="pb-14 pt-28 sm:pb-20 sm:pt-32">\n        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
    );
  } else {
    // Replace <section className="px-5 pb-... pt-28 sm:px-8 sm:pb-... sm:pt-32 lg:px-12"> <div className="mx-auto max-w-8xl">
    content = content.replace(
      /<section className=["']px-5 pb-([0-9]+) pt-28 sm:px-8 sm:pb-([0-9]+) sm:pt-32 lg:px-12["']>\s*<div className=["']mx-auto max-w-8xl["']>/,
      '<section className="pb-$1 pt-28 sm:pb-$2 sm:pt-32">\n        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">'
    );
  }
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Processed:', file);
}

standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/about/page.js', false);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/why-us/page.js', false);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/services/page.js', false);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/services/[slug]/page.js', true);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/areas/page.js', false);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/areas/[slug]/page.js', true);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/blog/page.js', false);
standardizeInnerPage('D:/Full Stack Dev/noida-painters/src/app/blog/[slug]/page.js', true);
