import sharp from 'sharp';

const NAVY = { r: 14, g: 22, b: 34, alpha: 1 };
const OG_W = 1200;
const OG_H = 630;
const LOGO_W = 360;
const FRAME_STROKE = '#d0a24b';
const TEXT = '#f3ecdf';
const SUBTEXT = '#d5c4a1';

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function makeSvg({ title, subtitle }) {
  return Buffer.from(`
    <svg width="${OG_W}" height="${OG_H}" viewBox="0 0 ${OG_W} ${OG_H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${OG_W}" height="${OG_H}" rx="0" fill="#0e1622"/>
      <rect x="48" y="48" width="${OG_W - 96}" height="${OG_H - 96}" rx="32" fill="none" stroke="${FRAME_STROKE}" stroke-opacity="0.45" stroke-width="2"/>
      <line x1="88" y1="520" x2="520" y2="520" stroke="${FRAME_STROKE}" stroke-width="4"/>
      <text x="88" y="215" fill="${TEXT}" font-size="68" font-weight="700" font-family="Arial, Helvetica, sans-serif">${escapeXml(title)}</text>
      <text x="92" y="275" fill="${SUBTEXT}" font-size="30" font-family="Georgia, Times New Roman, serif">${escapeXml(subtitle)}</text>
    </svg>
  `);
}

const repos = [
  {
    name: 'forteca-cleaning',
    logo: '/home/daniel.bzura/forteca-cleaning/public/images/logo.png',
    out: '/home/daniel.bzura/forteca-cleaning/public/og-image.png',
    title: 'Forteca Cleaning',
    subtitle: 'Professional Vacation Rental Cleaning',
    panel: true,
  },
  {
    name: 'forteca-contracting',
    logo: '/home/daniel.bzura/forteca-contracting/public/images/logo.png',
    out: '/home/daniel.bzura/forteca-contracting/public/og-image.png',
    title: 'Forteca Contracting',
    subtitle: 'Pocono Renovation & Construction',
    panel: false,
  },
  {
    name: 'forteca-estate',
    logo: '/home/daniel.bzura/forteca-poc/public/images/logo.png',
    out: '/home/daniel.bzura/forteca-poc/public/og-image.png',
    legacyOut: '/home/daniel.bzura/forteca-poc/public/og-default.png',
    title: 'Forteca Estate',
    subtitle: 'Vacation Rentals & Property Management',
    panel: false,
  },
];

for (const repo of repos) {
  const { data, info } = await sharp(repo.logo)
    .resize({ width: LOGO_W, height: LOGO_W, fit: 'contain' })
    .toBuffer({ resolveWithObject: true });

  const composites = [{ input: makeSvg(repo), left: 0, top: 0 }];

  if (repo.panel) {
    const panelW = info.width + 64;
    const panelH = info.height + 64;
    composites.push({
      input: {
        create: {
          width: panelW,
          height: panelH,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      },
      left: Math.round(760 - panelW / 2),
      top: Math.round(315 - panelH / 2),
    });
  }

  composites.push({
    input: data,
    left: Math.round(760 - info.width / 2),
    top: Math.round(315 - info.height / 2),
  });

  const image = sharp({
    create: { width: OG_W, height: OG_H, channels: 4, background: NAVY },
  }).composite(composites);

  await image
    .png()
    .toFile(repo.out);

  if (repo.legacyOut) {
    await image.clone().png().toFile(repo.legacyOut);
  }

  console.log(`✓ ${repo.name} → ${repo.out}`);
}
