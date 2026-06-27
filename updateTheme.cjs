const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf8');

// Imports
if (!c.includes('TealGlow')) {
  c = c.replace(
    "import { ContainerScroll } from '@/components/ui/container-scroll-animation'",
    "import { ContainerScroll } from '@/components/ui/container-scroll-animation'\nimport { TealGlow } from '@/components/ui/teal-glow'\nimport { LiquidGlassButton } from '@/components/ui/liquid-glass-button'"
  );
}

// Background colors
c = c.replace(/bg-amber-50/g, 'bg-slate-950');
c = c.replace(/bg-\[\#1a1408\]/g, 'bg-slate-950');
c = c.replace(/to-\[\#6b4a12\]/g, 'to-teal-900');
c = c.replace(/from-\[\#1a1408\]/g, 'from-slate-950');
c = c.replace(/via-\[\#3d2a0a\]/g, 'via-teal-950');

// Text colors
c = c.replace(/text-slate-800/g, 'text-slate-200');
c = c.replace(/text-slate-900/g, 'text-white');
c = c.replace(/text-slate-600/g, 'text-slate-400');
c = c.replace(/text-slate-500/g, 'text-slate-400');
c = c.replace(/border-slate-200/g, 'border-white/10');

// Amber to Teal
c = c.replace(/amber-/g, 'teal-');

// Faq background since dark mode
c = c.replace(/bg-white shadow-sm/g, 'bg-white/5 shadow-sm backdrop-blur-sm');

// Top level container add TealGlow
c = c.replace(
  '<div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">',
  '<div className="relative min-h-screen bg-slate-950 font-sans text-slate-200 antialiased overflow-x-hidden">\n      <TealGlow />'
);

// Buttons replacing
// Top Nav button
c = c.replace(
  /<a\s*\n\s*href={FORM_URL}\s*\n\s*target="_blank"\s*\n\s*rel="noopener noreferrer"\s*\n\s*className="rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"\s*\n\s*>\s*\n\s*Register Now\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" className="!px-5 !py-2 !text-sm">Register Now</LiquidGlassButton>`
);

// Mobile Nav button
c = c.replace(
  /<a\s*\n\s*href={FORM_URL}\s*\n\s*target="_blank"\s*\n\s*rel="noopener noreferrer"\s*\n\s*className="mt-2 block rounded-full bg-teal-500 px-5 py-2.5 text-center text-base font-semibold text-white"\s*\n\s*>\s*\n\s*Register Now\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" className="mt-2 !w-full">Register Now</LiquidGlassButton>`
);

// Hero Register button
c = c.replace(
  /<a\s*\n\s*href={FORM_URL}\s*\n\s*target="_blank"\s*\n\s*rel="noopener noreferrer"\s*\n\s*className="rounded-full bg-teal-500 px-8 py-3.5 text-center text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-600"\s*\n\s*>\s*\n\s*Register Now\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" className="!px-8 !py-3.5 !text-lg">Register Now</LiquidGlassButton>`
);

// Hero Learn More button
c = c.replace(
  /<a\s*\n\s*href="#about"\s*\n\s*className="rounded-full bg-white\/10 px-8 py-3.5 text-center text-base font-semibold text-white ring-1 ring-white\/30 backdrop-blur transition hover:bg-white\/20"\s*\n\s*>\s*\n\s*Learn More\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href="#about" className="!px-8 !py-3.5 !text-lg !bg-white/5 !border-white/10 hover:!bg-white/10">Learn More</LiquidGlassButton>`
);

// Register Section button
c = c.replace(
  /<a\s*\n\s*href={FORM_URL}\s*\n\s*target="_blank"\s*\n\s*rel="noopener noreferrer"\s*\n\s*className="mt-6 inline-block rounded-full bg-teal-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-600"\s*\n\s*>\s*\n\s*Register Now\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" className="mt-6 !px-8 !py-3.5 !text-lg">Register Now</LiquidGlassButton>`
);

// Footer button
c = c.replace(
  /<a\s*\n\s*href={FORM_URL}\s*\n\s*target="_blank"\s*\n\s*rel="noopener noreferrer"\s*\n\s*className="rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"\s*\n\s*>\s*\n\s*Register Now\s*\n\s*<\/a>/g,
  `<LiquidGlassButton as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer" className="!px-5 !py-2 !text-sm">Register Now</LiquidGlassButton>`
);

// About section inner cards background
c = c.replace(/bg-teal-50/g, 'bg-white/5 backdrop-blur-sm border-white/10');

// Fix text-white to text-slate-100 where needed for subtle dark mode
c = c.replace(/text-slate-900/g, 'text-white'); // Double check if missed any

fs.writeFileSync('src/App.jsx', c);
console.log('App.jsx updated');
