<script>
  import { fileTypes, searchFileTypes, allExtensions, CATEGORIES } from './lib/data.js';
  import SearchInput from './lib/SearchInput.svelte';
  import FileCard from './lib/FileCard.svelte';

  let query = '';
  let selectedKey = null;
  let suggestions = [];

  /** @type {import('./lib/data.js').FileType & { key: string } | null} */
  $: selectedFile = selectedKey && fileTypes[selectedKey]
    ? { key: selectedKey, ...fileTypes[selectedKey] }
    : null;

  /** @type {import('./lib/data.js').FileType[]} */
  $: suggestions = searchFileTypes(query);

  function handleInput(e) {
    query = e.detail?.query ?? '';
  }

  function handleSelect(e) {
    const key = e.detail?.key;
    if (key && fileTypes[key]) {
      selectedKey = key;
      query = '.' + key;
    }
  }

  function handleClear() {
    query = '';
    selectedKey = null;
    suggestions = [];
  }

  // Pick a "featured" subset for the grid
  const featured = allExtensions.filter(k => ['pdf','jpg','png','svg','mp3','zip','docx','html'].includes(k));
</script>

<div class="app">
  <header class="app-header">
    <div class="brand">
      <div class="brand-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="4" width="42" height="56" rx="5" stroke="#2D6A4F" stroke-width="2.2" />
          <path d="M46 4v10a3 3 0 003 3h10" stroke="#2D6A4F" stroke-width="2.2" stroke-linejoin="round"/>
          <circle cx="30" cy="36" r="10" stroke="#D4784C" stroke-width="2" fill="none" />
          <circle cx="30" cy="36" r="3" fill="#D4784C" opacity="0.6" />
        </svg>
      </div>
      <div>
        <h1 class="app-title">FileScout</h1>
        <p class="app-subtitle">Decodificatore visivo di tipi di file</p>
      </div>
    </div>
  </header>

  <main class="app-main">
    <section class="search-section">
      <SearchInput
        value={query}
        {suggestions}
        on:input={handleInput}
        on:select={handleSelect}
        on:clear={handleClear}
      />
    </section>

    <section class="result-section">
      <FileCard fileType={selectedFile} />
    </section>

    {#if !selectedFile}
      <section class="browse-section">
        <h2 class="browse-title">Scopri i formati</h2>
        <div class="category-grid">
          {#each Object.entries(CATEGORIES) as [key, cat]}
            <button
              class="cat-card"
              style="--cat-color: {cat.color}; --cat-bg: {cat.bg}"
              on:click={() => {
                const first = allExtensions.find(k => fileTypes[k].category === key);
                if (first) { selectedKey = first; query = '.' + first; }
              }}
            >
              <span class="cat-name">{cat.it}</span>
              <span class="cat-count">{allExtensions.filter(k => fileTypes[k].category === key).length} formati</span>
            </button>
          {/each}
        </div>
      </section>
    {/if}
  </main>

  <footer class="app-footer">
    <p>
      FileScout — Tutti i diritti riservati &copy; {new Date().getFullYear()}
      &middot;
      <a href="https://cristianporco.it/app/filescout/">cristianporco.it</a>
    </p>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* ── Header ── */
  .app-header {
    padding: 24px 0 8px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-icon {
    flex-shrink: 0;
  }
  .app-title {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    font-weight: 400;
    color: #1E1E2A;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.3px;
  }
  .app-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #8E8E9A;
    margin: 2px 0 0;
  }

  /* ── Main ── */
  .app-main {
    flex: 1;
    padding: 16px 0 32px;
  }
  .search-section {
    margin-bottom: 24px;
  }
  .result-section {
    min-height: 200px;
  }

  /* ── Browse ── */
  .browse-section {
    margin-top: 36px;
  }
  .browse-title {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    font-weight: 400;
    color: #1E1E2A;
    margin: 0 0 14px;
    text-align: center;
  }
  .category-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .cat-card {
    background: #fff;
    border: 1.5px solid #e8e8ed;
    border-radius: 12px;
    padding: 16px 12px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
    min-height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .cat-card:hover,
  .cat-card:focus-visible {
    border-color: var(--cat-color);
    background: var(--cat-bg);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    outline: none;
  }
  .cat-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--cat-color);
  }
  .cat-count {
    font-size: 12px;
    color: #9C9CAA;
  }

  /* ── Footer ── */
  .app-footer {
    padding: 16px 0 20px;
    text-align: center;
    border-top: 1px solid #F0EDE6;
  }
  .app-footer p {
    font-size: 13px;
    color: #A0A0AE;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
  }
  .app-footer a {
    color: #2D6A4F;
    text-decoration: none;
    font-weight: 600;
  }
  .app-footer a:hover { text-decoration: underline; }

  @media (max-width: 600px) {
    .category-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .app-title {
      font-size: 24px;
    }
    .app {
      padding: 0 16px;
    }
  }

  @media (max-width: 380px) {
    .category-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
