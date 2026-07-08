<script>
  import { fly, scale } from 'svelte/transition';
  import { CATEGORIES, COMPRESSION, OPENNESS } from './data.js';
  import { getIcon, categoryIconHint } from './icons.js';

  /** @type {import('./data.js').FileType & { key: string }} */
  export let fileType = null;

  $: cat = fileType ? CATEGORIES[fileType.category] : null;
  $: catColor = cat?.color || '#555';
  $: hint = fileType?.iconHint || categoryIconHint[fileType?.category] || 'doc';
  $: svgIcon = fileType ? getIcon(hint, catColor, 80) : '';
  $: compressionLabel = fileType ? COMPRESSION[fileType.compression] : '';
  $: opennessLabel = fileType ? OPENNESS[fileType.openness] : '';
</script>

{#if fileType}
  {#key fileType.key}
    <article class="card" in:fly={{ y: 20, duration: 300 }} out:fly={{ y: -15, duration: 180 }}>
      <header class="card-header">
        <div class="icon-wrap" in:scale={{ duration: 350, start: 0.7 }}>
          {@html svgIcon}
        </div>
        <div class="header-info">
          <span class="extension-code">{fileType.extension}</span>
          <h2 class="format-name">{fileType.name}</h2>
          <span class="category-badge" style="background:{cat?.bg || '#eee'}; color:{catColor}; border: 1.5px solid {catColor}20">
            {cat?.it || fileType.category}
          </span>
        </div>
      </header>

      <div class="card-body">
        <p class="description">{fileType.description}</p>

        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Compressione</span>
            <span class="meta-value tag" class:tag-lossless={fileType.compression === 'lossless'} class:tag-lossy={fileType.compression === 'lossy'} class:tag-none={fileType.compression === 'none'}>
              {compressionLabel}
            </span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Standard</span>
            <span class="meta-value tag" class:tag-open={fileType.openness === 'open'} class:tag-proprietary={fileType.openness === 'proprietary'} class:tag-mixed={fileType.openness === 'mixed'}>
              {opennessLabel}
            </span>
          </div>
        </div>

        {#if fileType.usage?.length}
          <div class="usage-section">
            <h3 class="usage-title">A cosa serve</h3>
            <ul class="usage-list">
              {#each fileType.usage as use, i (use)}
                <li>{use}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </article>
  {/key}
{:else}
  <div class="empty-state" in:fly={{ y: 20, duration: 300 }}>
    <div class="empty-icon">
      <svg width="72" height="72" viewBox="0 0 64 64" fill="none">
        <rect x="6" y="6" width="52" height="52" rx="8" stroke="#c4c4cf" stroke-width="1.8" stroke-dasharray="6 4" />
        <path d="M18 28h28M18 36h20" stroke="#c4c4cf" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </div>
    <h2 class="empty-title">Cerca un formato</h2>
    <p class="empty-text">
      Scrivi un'estensione (es. <strong>.pdf</strong>, <strong>.heic</strong>, <strong>.webp</strong>) nel campo sopra<br />
      oppure scegline una dalla lista per scoprire tutto sul formato.
    </p>
  </div>
{/if}

<style>
  .card {
    background: #fff;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 20px;
  }
  .icon-wrap {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F6F0;
    border-radius: 14px;
    padding: 8px;
  }
  .icon-wrap :global(svg) {
    width: 64px;
    height: 64px;
  }
  .header-info {
    flex: 1;
    min-width: 0;
  }
  .extension-code {
    font-family: 'DM Mono', 'SF Mono', monospace;
    font-size: 20px;
    font-weight: 700;
    color: #2D6A4F;
    letter-spacing: -0.5px;
  }
  .format-name {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    font-weight: 400;
    color: #1E1E2A;
    margin: 2px 0 8px;
    line-height: 1.3;
    letter-spacing: -0.2px;
  }
  .category-badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    padding: 3px 10px;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
  }

  .card-body {
    /* transitions handled by parent */
  }
  .description {
    font-size: 15px;
    line-height: 1.7;
    color: #4A4A5A;
    margin: 0 0 18px;
    font-family: 'DM Sans', sans-serif;
  }

  .meta-grid {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .meta-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #9C9CAA;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
  }
  .meta-value.tag {
    font-size: 13px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
    font-family: 'DM Sans', sans-serif;
    display: inline-block;
    width: fit-content;
  }
  .tag-lossless {
    background: #E8F5E9;
    color: #2E7D32;
  }
  .tag-lossy {
    background: #FFF3E0;
    color: #E65100;
  }
  .tag-none {
    background: #ECEFF1;
    color: #546E7A;
  }
  .tag-open {
    background: #E3F2FD;
    color: #1565C0;
  }
  .tag-proprietary {
    background: #FCE4EC;
    color: #C62828;
  }
  .tag-mixed {
    background: #FFF8E1;
    color: #F57F17;
  }

  .usage-section {
    border-top: 1px solid #F0EDE6;
    padding-top: 16px;
  }
  .usage-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #8E8E9A;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin: 0 0 10px;
  }
  .usage-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .usage-list li {
    font-size: 14px;
    color: #5A5A6E;
    padding: 4px 0 4px 18px;
    position: relative;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.5;
  }
  .usage-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #2D6A4F;
    opacity: 0.5;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 48px 24px;
    max-width: 420px;
    margin: 0 auto;
  }
  .empty-icon {
    margin-bottom: 16px;
    opacity: 0.5;
  }
  .empty-title {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    color: #1E1E2A;
    margin: 0 0 8px;
    font-weight: 400;
  }
  .empty-text {
    font-size: 15px;
    line-height: 1.7;
    color: #7A7A8A;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
  }
  .empty-text strong {
    color: #4A4A5A;
    font-weight: 600;
  }

  @media (max-width: 500px) {
    .card {
      padding: 20px;
      border-radius: 12px;
    }
    .card-header {
      gap: 12px;
    }
    .icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 12px;
    }
    .icon-wrap :global(svg) {
      width: 48px;
      height: 48px;
    }
    .format-name {
      font-size: 19px;
    }
    .usage-list {
      grid-template-columns: 1fr;
    }
  }
</style>
