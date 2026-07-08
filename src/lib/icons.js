/**
 * FileScout — Icone SVG animate per ogni tipo di file.
 * Ogni icona è una funzione che restituisce markup SVG puro,
 * pensato per essere animato con transizioni CSS.
 */

/**
 * @param {string} hint   — tipo di icona da generare
 * @param {string} color  — colore primario (hex)
 * @param {number} [size=64] — dimensione in pixel
 * @returns {string} markup SVG
 */
export function getIcon(hint, color, size = 64) {
  const w = size;
  const h = size;
  const stroke = color;
  const strokeW = 1.8;
  const fill = 'none';

  switch (hint) {

    // ── PDF: documento con "PDF" stilizzato ──────────────
    case 'pdf': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="38" height="60" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M44 2v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <text x="20" y="48" font-family="DM Sans, sans-serif" font-weight="700" font-size="14" fill="${stroke}" letter-spacing="-0.5">PDF</text>
        <line x1="14" y1="22" x2="36" y2="22" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="14" y1="27" x2="32" y2="27" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="14" y1="32" x2="34" y2="32" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
      </svg>`;

    // ── DOC: documento generico con righe ────────────────
    case 'doc': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="38" height="60" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M44 2v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <line x1="14" y1="22" x2="38" y2="22" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
        <line x1="14" y1="28" x2="38" y2="28" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
        <line x1="14" y1="34" x2="30" y2="34" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
        <line x1="14" y1="40" x2="36" y2="40" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
        <line x1="14" y1="46" x2="26" y2="46" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
      </svg>`;

    // ── TXT: documento minimalista ───────────────────────
    case 'txt': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="38" height="60" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M44 2v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <line x1="14" y1="22" x2="40" y2="22" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="14" y1="28" x2="40" y2="28" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 2" />
        <line x1="14" y1="34" x2="28" y2="34" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 2" />
      </svg>`;

    // ── XLS: foglio di calcolo con griglia ───────────────
    case 'xls': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="8" y="4" width="42" height="56" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M46 4v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <line x1="12" y1="24" x2="46" y2="24" stroke="${stroke}" stroke-width="1.2" />
        <line x1="12" y1="32" x2="46" y2="32" stroke="${stroke}" stroke-width="1.2" />
        <line x1="12" y1="40" x2="46" y2="40" stroke="${stroke}" stroke-width="1.2" />
        <line x1="24" y1="20" x2="24" y2="52" stroke="${stroke}" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="36" y1="20" x2="36" y2="52" stroke="${stroke}" stroke-width="1" stroke-dasharray="2 2" />
      </svg>`;

    // ── PPT: presentazione con schermo ───────────────────
    case 'ppt': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="8" y="4" width="42" height="56" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M46 4v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <rect x="15" y="22" width="28" height="18" rx="2" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="25,28 25,34 31,31" fill="${stroke}" opacity="0.7" />
        <line x1="15" y1="46" x2="43" y2="46" stroke="${stroke}" stroke-width="1" />
      </svg>`;

    // ── CSV: tabella dati ────────────────────────────────
    case 'csv': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="8" y="4" width="48" height="56" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M52 4v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round" opacity="0"/>
        <line x1="12" y1="22" x2="52" y2="22" stroke="${stroke}" stroke-width="1.2" />
        <line x1="12" y1="32" x2="52" y2="32" stroke="${stroke}" stroke-width="1.2" />
        <line x1="12" y1="42" x2="52" y2="42" stroke="${stroke}" stroke-width="1.2" />
        <line x1="28" y1="18" x2="28" y2="52" stroke="${stroke}" stroke-width="1" stroke-dasharray="2 2" />
        <text x="16" y="20" font-size="6" fill="${stroke}" opacity="0.6" font-family="monospace">A</text>
        <text x="32" y="20" font-size="6" fill="${stroke}" opacity="0.6" font-family="monospace">B</text>
        <text x="44" y="20" font-size="6" fill="${stroke}" opacity="0.6" font-family="monospace">C</text>
      </svg>`;

    // ── MD: markdown con cancelletto ────────────────────
    case 'md': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="38" height="60" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M44 2v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <text x="15" y="30" font-size="16" fill="${stroke}" font-family="monospace" font-weight="bold">#</text>
        <line x1="28" y1="26" x2="42" y2="26" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="15" y1="37" x2="36" y2="37" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="15" y1="43" x2="28" y2="43" stroke="${stroke}" stroke-width="1.2" stroke-linecap="round" />
      </svg>`;

    // ── HTML: parentesi angolari ─────────────────────────
    case 'html': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="38" height="60" rx="3" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M44 2v10a3 3 0 003 3h10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round"/>
        <text x="17" y="30" font-size="10" fill="${stroke}" font-family="monospace" font-weight="bold">&lt;&gt;</text>
        <line x1="30" y1="28" x2="42" y2="28" stroke="${stroke}" stroke-width="1" stroke-linecap="round" />
        <line x1="14" y1="38" x2="36" y2="38" stroke="${stroke}" stroke-width="1" stroke-linecap="round" />
        <line x1="14" y1="44" x2="28" y2="44" stroke="${stroke}" stroke-width="1" stroke-linecap="round" />
      </svg>`;

    // ── IMG: immagine con paesaggio ──────────────────────
    case 'img': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="4" y="6" width="56" height="48" rx="4" stroke="${stroke}" stroke-width="${strokeW}" />
        <circle cx="44" cy="22" r="7" stroke="${stroke}" stroke-width="1.4" />
        <path d="M4 42l16-16 10 10 10-14 16 20" stroke="${stroke}" stroke-width="1.4" stroke-linejoin="round" />
      </svg>`;

    // ── VECTOR: strumento penna ──────────────────────────
    case 'vector': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <path d="M6 56l18-32 12 18 22-30" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round" />
        <circle cx="6" cy="56" r="2.5" fill="${stroke}" />
        <circle cx="24" cy="24" r="2" fill="${stroke}" />
        <circle cx="36" cy="42" r="2" fill="${stroke}" />
        <circle cx="58" cy="12" r="2.5" fill="${stroke}" />
      </svg>`;

    // ── AUDIO: onde sonore ───────────────────────────────
    case 'audio': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="8" y="16" width="10" height="32" rx="3" fill="${stroke}" opacity="0.85" />
        <path d="M18 26v12l10 6V20l-10 6z" fill="${stroke}" opacity="0.85" />
        <path d="M34 20c4 3 6 7 6 12s-2 9-6 12" stroke="${stroke}" stroke-width="${strokeW}" stroke-linecap="round" />
        <path d="M42 16c6 4 10 10 10 16s-4 12-10 16" stroke="${stroke}" stroke-width="${strokeW}" stroke-linecap="round" opacity="0.5" />
      </svg>`;

    // ── VIDEO: schermo con play ──────────────────────────
    case 'video': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="4" y="8" width="56" height="40" rx="4" stroke="${stroke}" stroke-width="${strokeW}" />
        <polygon points="26,18 26,38 44,28" fill="${stroke}" opacity="0.85" />
        <line x1="4" y1="54" x2="60" y2="54" stroke="${stroke}" stroke-width="${strokeW}" stroke-linecap="round" />
        <line x1="18" y1="54" x2="18" y2="60" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" />
        <line x1="46" y1="54" x2="46" y2="60" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" />
      </svg>`;

    // ── ARCHIVE: scatola con cerniera ────────────────────
    case 'archive': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="6" y="16" width="52" height="42" rx="2" stroke="${stroke}" stroke-width="${strokeW}" />
        <path d="M6 16l6-10h40l6 10" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round" />
        <line x1="18" y1="16" x2="18" y2="6" stroke="${stroke}" stroke-width="1.2" />
        <line x1="46" y1="16" x2="46" y2="6" stroke="${stroke}" stroke-width="1.2" />
        <line x1="6" y1="30" x2="58" y2="30" stroke="${stroke}" stroke-width="1.2" stroke-dasharray="3 2" />
        <circle cx="32" cy="40" r="3" fill="${stroke}" opacity="0.6" />
      </svg>`;

    // ── FONT: lettera A stilizzata ───────────────────────
    case 'font': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <path d="M14 54L32 8l18 46" stroke="${stroke}" stroke-width="${strokeW}" stroke-linejoin="round" />
        <line x1="20" y1="38" x2="44" y2="38" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" />
        <path d="M38 8l-6 16-6-16" stroke="${stroke}" stroke-width="1" stroke-linejoin="round" opacity="0.3" />
      </svg>`;

    // ── SYSTEM: ingranaggio/terminale ────────────────────
    case 'system': return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <circle cx="32" cy="32" r="14" stroke="${stroke}" stroke-width="${strokeW}" />
        <circle cx="32" cy="32" r="5" stroke="${stroke}" stroke-width="1.4" />
        <path d="M32 18v-6M32 52v-6M18 32h-6M52 32h6M22 22l-4-4M46 42l4 4M42 22l4-4M22 42l-4 4" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" />
      </svg>`;

    // ── DEFAULT: punto interrogativo ─────────────────────
    default: return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 64 64" fill="${fill}">
        <rect x="10" y="2" width="44" height="60" rx="6" stroke="${stroke}" stroke-width="${strokeW}" stroke-dasharray="5 3" />
        <text x="32" y="42" text-anchor="middle" font-size="24" fill="${stroke}" font-family="serif">?</text>
      </svg>`;
  }
}

/**
 * Mappa le categorie ai rispettivi hint di icona (fallback).
 */
export const categoryIconHint = {
  document: 'doc',
  image: 'img',
  vector: 'vector',
  audio: 'audio',
  video: 'video',
  archive: 'archive',
  font: 'font',
  system: 'system',
  web: 'html',
  data: 'csv',
};
