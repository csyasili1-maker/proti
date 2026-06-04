import { access } from 'node:fs/promises';
import { resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');

const logoFiles = [
  'accenture.svg',
  'amazon.svg',
  'capgemini.svg',
  'cognizant.svg',
  'deloitte.svg',
  'hcl.svg',
  'infosys.svg',
  'lti.svg',
  'ltimindtree.svg',
  'mphasis.svg',
  'persistent-systems.svg',
  'publicis-sapient.svg',
  'tcs.svg',
  'tech-mahindra.svg',
  'wipro.svg',
];

const missing = [];

for (const file of logoFiles) {
  try {
    await access(resolve(rootDir, 'public/images/company-logos', file));
  } catch {
    missing.push(file);
  }
}

if (missing.length) {
  console.error(JSON.stringify({ missing }, null, 2));
  process.exit(1);
}

console.log(`Verified ${logoFiles.length} local company logo images.`);
