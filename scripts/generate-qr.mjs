import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const logoPath = path.join(publicDir, 'logo.jpg');
const outputPath = path.join(publicDir, 'yellow-spoon-portfolio-qr.svg');
const targetUrl = 'https://swathi-varun.github.io/portfolio/';

const qr = QRCode.create(targetUrl, {
  errorCorrectionLevel: 'H',
  margin: 0,
});

const moduleCount = qr.modules.size;
const quietZone = 4;
const moduleSize = 18;
const svgSize = (moduleCount + quietZone * 2) * moduleSize;
const logoSize = Math.round(svgSize * 0.22);
const logoX = Math.round((svgSize - logoSize) / 2);
const logoY = logoX;
const logoPadding = Math.round(moduleSize * 1.2);
const logoData = fs.readFileSync(logoPath).toString('base64');

const darkModules = [];

for (let row = 0; row < moduleCount; row += 1) {
  for (let col = 0; col < moduleCount; col += 1) {
    if (!qr.modules.data[row * moduleCount + col]) continue;

    darkModules.push(
      `<rect x="${(col + quietZone) * moduleSize}" y="${(row + quietZone) * moduleSize}" width="${moduleSize}" height="${moduleSize}" />`,
    );
  }
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" role="img" aria-labelledby="title desc">
  <title id="title">Yellow Spoon portfolio QR code</title>
  <desc id="desc">Scan to open ${targetUrl}</desc>
  <rect width="100%" height="100%" rx="42" fill="#ffffff" />
  <g fill="#0b0b0b" shape-rendering="crispEdges">
    ${darkModules.join('\n    ')}
  </g>
  <rect x="${logoX - logoPadding}" y="${logoY - logoPadding}" width="${logoSize + logoPadding * 2}" height="${logoSize + logoPadding * 2}" rx="28" fill="#ffffff" />
  <image href="data:image/jpeg;base64,${logoData}" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet" />
</svg>
`;

fs.writeFileSync(outputPath, svg);
console.log(`Created ${path.relative(projectRoot, outputPath)} for ${targetUrl}`);
