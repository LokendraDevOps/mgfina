const escapeText = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const createArtDataUrl = ({
  title,
  subtitle = '',
  accentA = '#2f63ff',
  accentB = '#ff25e7',
  background = '#f8fbff'
}) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img" aria-label="${escapeText(title)}">
      <defs>
        <linearGradient id="g1" x1="120" y1="80" x2="860" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
      <rect width="960" height="640" rx="48" fill="${background}" />
      <circle cx="170" cy="160" r="110" fill="${accentA}" opacity="0.15" filter="url(#blur)" />
      <circle cx="760" cy="170" r="140" fill="${accentB}" opacity="0.18" filter="url(#blur)" />
      <circle cx="710" cy="450" r="165" fill="${accentA}" opacity="0.13" filter="url(#blur)" />
      <path d="M132 468C232 340 370 286 488 334C604 380 706 342 824 232" fill="none" stroke="url(#g1)" stroke-width="28" stroke-linecap="round" opacity="0.95" />
      <path d="M144 452C250 316 364 284 476 328C594 374 704 340 818 230" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity="0.3" />
      <rect x="90" y="88" width="220" height="220" rx="36" fill="url(#g1)" opacity="0.18" />
      <path d="M162 172h82v24h-58v48h48v22h-48v78h-24z" fill="${accentA}" />
      <circle cx="620" cy="194" r="72" fill="${accentB}" opacity="0.18" />
      <circle cx="620" cy="194" r="40" fill="${accentA}" opacity="0.28" />
      <text x="92" y="560" fill="#0f172a" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="42" font-weight="700">${escapeText(title)}</text>
      <text x="92" y="604" fill="#475569" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" font-weight="500">${escapeText(subtitle)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
