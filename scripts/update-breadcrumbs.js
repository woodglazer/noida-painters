const fs = require('fs');

const file = 'D:/Full Stack Dev/noida-painters/src/app/components/Breadcrumbs.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const contentWidths = { "4xl": "56rem", "6xl": "72rem", "7xl": "80rem" };',
  'const contentWidths = { "4xl": "56rem", "6xl": "72rem", "7xl": "80rem", "8xl": "88rem" };'
);

content = content.replace(
  'export default function Breadcrumbs({ items, inline = false, onDark = false, width = "7xl" }) {',
  'export default function Breadcrumbs({ items, inline = false, onDark = false, width = "8xl" }) {'
);

content = content.replace(
  `      <div\n        className={inline ? "" : "mx-auto w-full px-5 sm:px-8 lg:px-12"}\n        style={!inline ? { maxWidth: \`calc(\${contentWidths[width] || contentWidths["7xl"]} + 6rem)\` } : undefined}\n      >`,
  `      <div className={inline ? "" : "mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12"}>`
);

// Also handle Windows CRLF if needed
if (!content.includes('max-w-8xl px-5')) {
  content = content.replace(
    /className=\{inline \? "" : "mx-auto w-full px-5 sm:px-8 lg:px-12"\}[\r\n\s]*style=\{!inline \? \{ maxWidth: [^}]+\} : undefined\}/,
    'className={inline ? "" : "mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12"}'
  );
}

fs.writeFileSync(file, content, 'utf8');
console.log('Breadcrumbs updated. Contains max-w-8xl:', content.includes('max-w-8xl'));
