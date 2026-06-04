import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');
const outDir = resolve(rootDir, 'public/images/company-logos');

const logoSources = [
  { name: 'Amazon', file: 'amazon.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Accenture', file: 'accenture.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg' },
  { name: 'Cognizant', file: 'cognizant.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
  { name: 'Capgemini', file: 'capgemini.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
  { name: 'Infosys', file: 'infosys.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'TCS', file: 'tcs.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/TATA_Consultancy_Services_Logo.svg' },
  { name: 'Deloitte', file: 'deloitte.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg' },
  { name: 'Wipro', file: 'wipro.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'HCL', file: 'hcl.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/HCLTech-new-logo.svg' },
  { name: 'Tech Mahindra', file: 'tech-mahindra.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg' },
  { name: 'LTIMindtree', file: 'ltimindtree.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/LTIMindtree_Logo.svg' },
  { name: 'Mphasis', file: 'mphasis.svg', url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Mphasis_logo.svg' },
  { name: 'Publicis Sapient', file: 'publicis-sapient.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/PS_Logo_RGB.svg' },
  { name: 'Persistent Systems', file: 'persistent-systems.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Persistent_Systems_Logo.svg' },
  { name: 'LTI', file: 'lti.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/LandT_Infotech.svg' },
];

await mkdir(outDir, { recursive: true });

const results = [];

for (const logo of logoSources) {
  const outPath = resolve(outDir, logo.file);

  try {
    const response = await fetch(logo.url, {
      headers: { 'User-Agent': 'ProtikeysLogoFetcher/1.0 local website assets' },
    });
    if (!response.ok) {
      results.push({ ...logo, status: response.status, saved: false });
      continue;
    }

    const svg = await response.text();
    if (!svg.includes('<svg')) {
      results.push({ ...logo, status: response.status, saved: false, reason: 'Response was not an SVG file' });
      continue;
    }

    await writeFile(outPath, svg);
    results.push({ ...logo, status: response.status, saved: true, bytes: Buffer.byteLength(svg) });
  } catch (error) {
    results.push({ ...logo, saved: false, error: error instanceof Error ? error.message : String(error) });
  }
}

const failed = results.filter((result) => !result.saved);
console.log(JSON.stringify({ saved: results.length - failed.length, failed }, null, 2));

if (failed.length) {
  process.exit(1);
}
