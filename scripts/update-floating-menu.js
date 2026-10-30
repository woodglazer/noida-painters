const fs = require('fs');

const file = 'D:/Full Stack Dev/noida-painters/src/app/layout.js';
let content = fs.readFileSync(file, 'utf8');

const targetNav = `<nav
          aria-label="Quick contact options"
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] text-center text-xs font-bold text-[#0B1F4D] shadow-[0_-8px_24px_rgba(15,23,42,0.12)] md:hidden"
        >
          <a href="tel:+919717256514" className="flex min-h-14 items-center justify-center px-2">
            Call
          </a>
          <a
            href="https://wa.me/919717256514?text=Hello%20Noida%20Painters%2C%20I%20would%20like%20to%20discuss%20a%20painting%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center border-x border-slate-200 px-2"
          >
            WhatsApp
          </a>
          <a href="/contact" className="flex min-h-14 items-center justify-center px-2 text-[#022b5c]">
            Get Quote
          </a>
        </nav>`;

const replacement = `        {/* Floating Rounded Mobile Bottom Navigation Bar */}
        <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 pointer-events-none md:hidden">
          <nav
            aria-label="Quick contact options"
            className="pointer-events-auto flex items-center justify-between gap-1 rounded-full border border-stone-300/80 bg-white/95 px-3 py-2 shadow-2xl shadow-slate-900/20 backdrop-blur-md"
          >
            <a
              href="tel:+919717256514"
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-[#022b5c] transition-colors hover:bg-stone-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call</span>
            </a>

            <span className="h-4 w-px bg-stone-300/80" />

            <a
              href="https://wa.me/919717256514?text=Hello%20Noida%20Painters%2C%20I%20would%20like%20to%20discuss%20a%20painting%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-[#16a34a] transition-colors hover:bg-stone-100"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                <path d="M16.02 3a12.8 12.8 0 0 0-10.9 19.52L3.4 29l6.65-1.74A12.9 12.9 0 1 0 16.02 3Zm0 23.4c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.95 1.03 1.05-3.84-.26-.42A10.48 10.48 0 1 1 16.02 26.4Zm5.75-7.85c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.31c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <span className="h-4 w-px bg-stone-300/80" />

            <a
              href="/contact"
              className="flex items-center gap-1.5 rounded-full bg-[#022b5c] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#011d3f]"
            >
              <span>Get Quote</span>
              <span>&rarr;</span>
            </a>
          </nav>
        </div>`;

// Regex replace to handle line breaks flexibly
content = content.replace(/<nav\s+aria-label="Quick contact options"[\s\S]*?<\/nav>/, replacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Mobile menu updated to floating rounded pill successfully!');
