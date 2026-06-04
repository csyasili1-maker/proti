import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createJiti } from 'jiti';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const jiti = createJiti(import.meta.url);
const { courses } = jiti(resolve(rootDir, 'src/mocks/coursesData.ts'));

const outDir = resolve(rootDir, 'public/images/courses');

const themes = {
  'Cloud Computing': { primary: '#0ea5e9', secondary: '#0369a1', accent: '#bae6fd', motif: 'cloud' },
  Cybersecurity: { primary: '#dc2626', secondary: '#7f1d1d', accent: '#fecaca', motif: 'shield' },
  'AI & Machine Learning': { primary: '#7c3aed', secondary: '#4c1d95', accent: '#ddd6fe', motif: 'nodes' },
  'Data Engineering': { primary: '#2563eb', secondary: '#1e3a8a', accent: '#bfdbfe', motif: 'pipeline' },
  'Software Development': { primary: '#059669', secondary: '#064e3b', accent: '#a7f3d0', motif: 'code' },
  'Data Analytics & Science': { primary: '#0f766e', secondary: '#134e4a', accent: '#99f6e4', motif: 'chart' },
  'BI & Visualization': { primary: '#16a34a', secondary: '#14532d', accent: '#bbf7d0', motif: 'dashboard' },
  'CRM / Salesforce': { primary: '#0284c7', secondary: '#075985', accent: '#bae6fd', motif: 'crm' },
  'ITSM / ServiceNow': { primary: '#65a30d', secondary: '#365314', accent: '#d9f99d', motif: 'workflow' },
  'DevOps & Automation': { primary: '#4f46e5', secondary: '#312e81', accent: '#c7d2fe', motif: 'devops' },
  'ERP & Business Apps': { primary: '#ea580c', secondary: '#7c2d12', accent: '#fed7aa', motif: 'blocks' },
  'Project Management': { primary: '#e11d48', secondary: '#881337', accent: '#fecdd3', motif: 'kanban' },
  'Database Technologies': { primary: '#1d4ed8', secondary: '#1e3a8a', accent: '#bfdbfe', motif: 'database' },
  'Emerging Technologies': { primary: '#c026d3', secondary: '#701a75', accent: '#f5d0fe', motif: 'hex' },
  'Full Stack Programs': { primary: '#0891b2', secondary: '#164e63', accent: '#a5f3fc', motif: 'stack' },
  'Business Analysis': { primary: '#15803d', secondary: '#14532d', accent: '#bbf7d0', motif: 'analysis' },
};

function hash(value) {
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    total = (total * 31 + value.charCodeAt(i)) >>> 0;
  }
  return total;
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function wrapTitle(title) {
  const words = title.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > 28 && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function motifSvg(motif, theme, seed) {
  const offset = seed % 60;
  const common = `stroke="${theme.accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.88"`;

  switch (motif) {
    case 'cloud':
      return `<path ${common} d="M520 220c16-62 112-78 150-24 48-8 94 26 94 76 0 45-36 78-86 78H512c-48 0-86-30-86-72 0-38 32-68 76-68 6 0 12 0 18 2z"/>`;
    case 'shield':
      return `<path ${common} d="M600 122l136 50v104c0 90-58 152-136 196-78-44-136-106-136-196V172l136-50z"/><path ${common} d="M548 286l38 38 84-96"/>`;
    case 'nodes':
      return `<circle cx="500" cy="190" r="34" fill="${theme.accent}" opacity=".82"/><circle cx="690" cy="160" r="30" fill="${theme.accent}" opacity=".62"/><circle cx="740" cy="340" r="38" fill="${theme.accent}" opacity=".74"/><circle cx="555" cy="395" r="28" fill="${theme.accent}" opacity=".68"/><path ${common} d="M530 190l132-24M704 188l30 114M707 348l-124 38M565 365l-48-144"/>`;
    case 'pipeline':
      return `<path ${common} d="M430 180h98c34 0 52 18 52 52v96c0 34 18 52 52 52h114"/><rect x="402" y="144" width="116" height="72" rx="18" fill="${theme.accent}" opacity=".78"/><rect x="582" y="260" width="116" height="72" rx="18" fill="${theme.accent}" opacity=".64"/><rect x="720" y="344" width="72" height="72" rx="18" fill="${theme.accent}" opacity=".82"/>`;
    case 'code':
      return `<path ${common} d="M514 178l-92 104 92 104M690 178l92 104-92 104M622 150l-64 264"/>`;
    case 'chart':
      return `<path ${common} d="M424 400h340"/><rect x="456" y="282" width="58" height="118" rx="12" fill="${theme.accent}" opacity=".64"/><rect x="550" y="218" width="58" height="182" rx="12" fill="${theme.accent}" opacity=".82"/><rect x="644" y="154" width="58" height="246" rx="12" fill="${theme.accent}" opacity=".7"/><path ${common} d="M452 236l92-48 82 30 104-92"/>`;
    case 'dashboard':
      return `<rect x="430" y="150" width="330" height="230" rx="28" ${common}/><path ${common} d="M472 224h96M472 278h210M472 332h152"/><circle cx="690" cy="246" r="46" fill="${theme.accent}" opacity=".78"/>`;
    case 'crm':
      return `<path ${common} d="M522 230c14-50 92-62 124-18 38-6 74 20 74 58 0 36-30 62-70 62H516c-38 0-68-24-68-58 0-30 26-54 60-54 5 0 10 0 14 2z"/><circle cx="526" cy="398" r="26" fill="${theme.accent}" opacity=".78"/><circle cx="634" cy="398" r="26" fill="${theme.accent}" opacity=".68"/><circle cx="742" cy="398" r="26" fill="${theme.accent}" opacity=".58"/>`;
    case 'workflow':
      return `<rect x="420" y="162" width="104" height="76" rx="20" fill="${theme.accent}" opacity=".78"/><rect x="604" y="162" width="104" height="76" rx="20" fill="${theme.accent}" opacity=".62"/><rect x="512" y="328" width="104" height="76" rx="20" fill="${theme.accent}" opacity=".86"/><path ${common} d="M524 200h80M656 238l-72 90M472 238l76 90"/>`;
    case 'devops':
      return `<path ${common} d="M502 206c52-52 136-52 188 0s52 136 0 188-136 52-188 0"/><path ${common} d="M502 394c-52-52-52-136 0-188"/><circle cx="502" cy="206" r="22" fill="${theme.accent}"/><circle cx="690" cy="394" r="22" fill="${theme.accent}"/><path ${common} d="M458 196h52v52M734 404h-52v-52"/>`;
    case 'blocks':
      return `<rect x="430" y="154" width="120" height="96" rx="20" fill="${theme.accent}" opacity=".86"/><rect x="586" y="154" width="120" height="96" rx="20" fill="${theme.accent}" opacity=".66"/><rect x="508" y="304" width="120" height="96" rx="20" fill="${theme.accent}" opacity=".76"/><path ${common} d="M550 202h36M646 250v54M490 250l42 54"/>`;
    case 'kanban':
      return `<rect x="430" y="144" width="320" height="250" rx="24" ${common}/><path ${common} d="M536 144v250M644 144v250"/><rect x="456" y="190" width="56" height="78" rx="10" fill="${theme.accent}" opacity=".82"/><rect x="562" y="222" width="56" height="108" rx="10" fill="${theme.accent}" opacity=".68"/><rect x="672" y="180" width="56" height="68" rx="10" fill="${theme.accent}" opacity=".76"/>`;
    case 'database':
      return `<ellipse cx="600" cy="174" rx="132" ry="48" ${common}/><path ${common} d="M468 174v164c0 26 60 48 132 48s132-22 132-48V174M468 256c0 26 60 48 132 48s132-22 132-48"/>`;
    case 'hex':
      return `<path ${common} d="M590 128l112 64v128l-112 64-112-64V192l112-64z"/><path ${common} d="M590 206l44 26v52l-44 26-44-26v-52l44-26z"/><path ${common} d="M702 192l66-38M478 192l-66-38M702 320l66 38M478 320l-66 38"/>`;
    case 'stack':
      return `<path ${common} d="M600 128l158 70-158 70-158-70 158-70zM442 278l158 70 158-70M442 350l158 70 158-70"/>`;
    case 'analysis':
      return `<path ${common} d="M432 390h320M470 344l82-84 72 52 104-136"/><circle cx="552" cy="260" r="18" fill="${theme.accent}"/><circle cx="624" cy="312" r="18" fill="${theme.accent}"/><circle cx="728" cy="176" r="18" fill="${theme.accent}"/><rect x="444" y="160" width="86" height="54" rx="14" fill="${theme.accent}" opacity=".58"/>`;
    default:
      return `<circle cx="${590 + offset}" cy="260" r="136" ${common}/>`;
  }
}

function svgForCourse(course) {
  const theme = themes[course.category] || themes['Software Development'];
  const seed = hash(course.slug);
  const lines = wrapTitle(course.title);
  const id = course.slug.replace(/[^a-z0-9-]/gi, '');
  const patternOpacity = 0.08 + (seed % 4) * 0.015;
  const titleLines = lines
    .map((line, index) => `<tspan x="64" dy="${index === 0 ? 0 : 42}">${escapeXml(line)}</tspan>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-labelledby="title-${id} desc-${id}">
  <title id="title-${id}">${escapeXml(course.title)} course visual</title>
  <desc id="desc-${id}">A branded local illustration for the ${escapeXml(course.title)} course in ${escapeXml(course.category)}.</desc>
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${theme.primary}"/>
      <stop offset="100%" stop-color="${theme.secondary}"/>
    </linearGradient>
    <radialGradient id="glow-${id}" cx="${30 + (seed % 40)}%" cy="${20 + (seed % 45)}%" r="70%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.5"/>
      <stop offset="70%" stop-color="${theme.accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid-${id}" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M42 0H0v42" fill="none" stroke="#ffffff" stroke-width="1" opacity="${patternOpacity.toFixed(2)}"/>
    </pattern>
  </defs>
  <rect width="800" height="500" rx="0" fill="url(#bg-${id})"/>
  <rect width="800" height="500" fill="url(#glow-${id})"/>
  <rect width="800" height="500" fill="url(#grid-${id})"/>
  <circle cx="${670 - (seed % 90)}" cy="${78 + (seed % 70)}" r="${88 + (seed % 38)}" fill="#ffffff" opacity="0.09"/>
  <circle cx="${440 + (seed % 120)}" cy="${410 - (seed % 60)}" r="${72 + (seed % 42)}" fill="#ffffff" opacity="0.08"/>
  ${motifSvg(theme.motif, theme, seed)}
  <g transform="translate(0 0)">
    <rect x="54" y="58" width="236" height="38" rx="19" fill="#ffffff" opacity="0.16"/>
    <text x="72" y="83" fill="#ffffff" opacity="0.92" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="1.2">${escapeXml(course.category.toUpperCase())}</text>
    <text x="64" y="186" fill="#ffffff" font-family="DM Sans, Inter, Arial, sans-serif" font-size="38" font-weight="800" letter-spacing="0">${titleLines}</text>
    <text x="64" y="370" fill="#ffffff" opacity="0.84" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="600">${escapeXml(course.level)} • ${course.duration} Weeks • Live Online</text>
    <rect x="64" y="404" width="190" height="46" rx="23" fill="#ffffff" opacity="0.18"/>
    <text x="90" y="433" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800">PROITKEYS</text>
  </g>
</svg>
`;
}

await mkdir(outDir, { recursive: true });

await Promise.all(
  courses.map((course) => writeFile(resolve(outDir, `${course.slug}.svg`), svgForCourse(course))),
);

console.log(`Generated ${courses.length} local course images in ${outDir}`);
