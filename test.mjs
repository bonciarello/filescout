/**
 * FileScout — Test suite
 * Validazione dati, struttura e contenuti.
 */

import { readFileSync, existsSync } from 'fs';
import { fileTypes, CATEGORIES, COMPRESSION, OPENNESS, allExtensions, searchFileTypes } from './src/lib/data.js';
import { getIcon, categoryIconHint } from './src/lib/icons.js';

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${msg}`);
  }
}

function header(title) {
  console.log(`\n${title}`);
  console.log('='.repeat(title.length));
}

// ─── DATA VALIDATION ────────────────────────────────────────

header('Validazione dati fileTypes');

assert(typeof fileTypes === 'object' && !Array.isArray(fileTypes), 'fileTypes è un oggetto');

const validCategories = Object.keys(CATEGORIES);
const validCompression = Object.keys(COMPRESSION);
const validOpenness = Object.keys(OPENNESS);

let count = 0;
for (const [key, ft] of Object.entries(fileTypes)) {
  count++;
  assert(typeof ft.extension === 'string' && ft.extension.startsWith('.'), `${key}: extension valida`);
  assert(typeof ft.name === 'string' && ft.name.length > 2, `${key}: name valido`);
  assert(validCategories.includes(ft.category), `${key}: category '${ft.category}' è valida`);
  assert(typeof ft.description === 'string' && ft.description.length > 30, `${key}: description valida (lunga)`);
  assert(Array.isArray(ft.usage) && ft.usage.length >= 1, `${key}: usage è un array non vuoto`);
  assert(validCompression.includes(ft.compression), `${key}: compression '${ft.compression}' è valida`);
  assert(validOpenness.includes(ft.openness), `${key}: openness '${ft.openness}' è valida`);
  assert(typeof ft.iconHint === 'string', `${key}: iconHint presente`);
}
console.log(`  → ${count} tipi di file validati`);

assert(allExtensions.length === count, 'allExtensions ha lo stesso numero di elementi');
assert(allExtensions.every(k => fileTypes[k]), 'tutte le chiavi in allExtensions esistono in fileTypes');

// ─── CATEGORIES ─────────────────────────────────────────────

header('Validazione categorie');
for (const [key, cat] of Object.entries(CATEGORIES)) {
  assert(typeof cat.it === 'string', `CATEGORIES.${key}.it è stringa`);
  assert(typeof cat.color === 'string' && cat.color.startsWith('#'), `CATEGORIES.${key}.color è un hex`);
  assert(typeof cat.bg === 'string' && cat.bg.startsWith('#'), `CATEGORIES.${key}.bg è un hex`);
}

// ─── SEARCH ─────────────────────────────────────────────────

header('Funzione searchFileTypes');
const r1 = searchFileTypes('pdf');
assert(r1.length >= 1 && r1[0].extension === '.pdf', 'search "pdf" trova PDF');
assert(searchFileTypes('zzznotfound').length === 0, 'search inesistente restituisce array vuoto');
assert(searchFileTypes('').length === 0, 'search vuota restituisce array vuoto');

const rImg = searchFileTypes('image');
assert(rImg.length >= 1, 'search per categoria trova risultati');

// ─── ICONS ──────────────────────────────────────────────────

header('Icone SVG');
for (const hint of ['pdf','doc','txt','xls','ppt','csv','md','html','img','vector','audio','video','archive','font','system']) {
  const svg = getIcon(hint, '#333', 48);
  assert(typeof svg === 'string' && svg.includes('<svg'), `getIcon('${hint}') restituisce SVG valido`);
}
assert(typeof getIcon('nonexistent', '#333') === 'string', 'getIcon con hint sconosciuto restituisce fallback');

// ─── CATEGORY ICON HINT ─────────────────────────────────────

header('categoryIconHint');
for (const [key, hint] of Object.entries(categoryIconHint)) {
  assert(typeof hint === 'string', `categoryIconHint.${key} -> '${hint}'`);
}

// ─── STATIC FILES ───────────────────────────────────────────

header('File statici SEO');
assert(existsSync('./public/robots.txt'), 'robots.txt esiste');
assert(existsSync('./public/sitemap.xml'), 'sitemap.xml esiste');

const robots = readFileSync('./public/robots.txt', 'utf-8');
assert(robots.includes('Sitemap:'), 'robots.txt contiene Sitemap');

const sitemap = readFileSync('./public/sitemap.xml', 'utf-8');
assert(sitemap.includes('cristianporco.it'), 'sitemap.xml contiene URL canonico');

// ─── BUILD OUTPUT ───────────────────────────────────────────

header('Output build');
assert(existsSync('./dist/index.html'), 'dist/index.html esiste');
const distHtml = readFileSync('./dist/index.html', 'utf-8');
assert(distHtml.includes('FileScout'), 'index.html contiene il titolo');
assert(distHtml.includes('lang="it"'), 'index.html ha lang="it"');

// ─── SUMMARY ────────────────────────────────────────────────

console.log(`\n${'─'.repeat(40)}`);
console.log(`  ${passed} passati, ${failed} falliti`);
console.log(`${'─'.repeat(40)}\n`);

if (failed > 0) {
  process.exit(1);
}
