<script>
  import { createEventDispatcher } from 'svelte';
  import { allExtensions, fileTypes } from './data.js';

  export let value = '';
  export let suggestions = [];

  const dispatch = createEventDispatcher();

  let showDropdown = false;
  let inputEl;

  /** @param {string} ext */
  function select(ext) {
    value = ext.startsWith('.') ? ext : '.' + ext;
    showDropdown = false;
    dispatch('select', { key: ext.replace(/^\./, '') });
  }

  function onInput(e) {
    const v = e.target.value;
    value = v;
    dispatch('input', { query: v });
    showDropdown = v.length >= 1;
  }

  function onFocus() {
    if (value.length >= 1) showDropdown = true;
  }

  function onBlur() {
    // Delay to allow click on dropdown item
    setTimeout(() => { showDropdown = false; }, 150);
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      showDropdown = false;
      inputEl?.blur();
    }
    if (e.key === 'Enter' && suggestions.length > 0) {
      select(suggestions[0].extension);
    }
  }
</script>

<div class="search-wrap">
  <label for="ext-input" class="sr-only">Cerca un'estensione di file</label>
  <div class="input-row">
    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input
      id="ext-input"
      type="text"
      bind:this={inputEl}
      placeholder="Scrivi un'estensione, es. .pdf"
      autocomplete="off"
      spellcheck="false"
      bind:value
      on:input={onInput}
      on:focus={onFocus}
      on:blur={onBlur}
      on:keydown={onKeydown}
      aria-expanded={showDropdown}
      aria-controls="suggestions-list"
      aria-autocomplete="list"
      role="combobox"
    />
    {#if value}
      <button class="clear-btn" on:click={() => { value = ''; suggestions = []; dispatch('clear'); }} aria-label="Cancella ricerca">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    {/if}
  </div>

  {#if showDropdown && suggestions.length > 0}
    <ul id="suggestions-list" class="dropdown" role="listbox">
      {#each suggestions as s (s.key)}
        <li role="option" aria-selected={false}>
          <button
            class="suggestion-item"
            on:mousedown|preventDefault={() => select(s.extension)}
          >
            <span class="sug-ext">{s.extension}</span>
            <span class="sug-name">{s.name}</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  {#if !showDropdown}
    <div class="quick-picks">
      <span class="qp-label">Estensioni comuni:</span>
      {#each allExtensions.slice(0, 8) as ext}
        <button class="qp-chip" on:click={() => select('.' + ext)}>.{ext}</button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .search-wrap {
    position: relative;
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap;
  }
  .input-row {
    display: flex;
    align-items: center;
    background: #fff;
    border: 2px solid #d4d4d8;
    border-radius: 12px;
    padding: 0 12px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .input-row:focus-within {
    border-color: #2D6A4F;
    box-shadow: 0 0 0 3px rgba(45,106,79,0.12);
  }
  .search-icon {
    color: #9C9CAA;
    flex-shrink: 0;
    margin-right: 8px;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    padding: 12px 0;
    background: transparent;
    color: #1E1E2A;
    min-width: 0;
  }
  input::placeholder {
    color: #A0A0AE;
  }
  .clear-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    margin: 0;
    border-radius: 6px;
    color: #9C9CAA;
    display: flex;
    align-items: center;
    min-width: 44px;
    min-height: 44px;
    justify-content: center;
    transition: color 0.15s, background 0.15s;
  }
  .clear-btn:hover { color: #1E1E2A; background: #f4f4f5; }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 6px;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    list-style: none;
    padding: 6px;
    z-index: 100;
    max-height: 320px;
    overflow-y: auto;
  }
  .suggestion-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 10px 12px;
    border: none;
    border-radius: 8px;
    background: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    transition: background 0.12s;
    text-align: left;
    min-height: 44px;
  }
  .suggestion-item:hover,
  .suggestion-item:focus-visible {
    background: #F0F7F2;
    outline: none;
  }
  .sug-ext {
    font-family: 'DM Mono', 'SF Mono', monospace;
    font-weight: 600;
    color: #2D6A4F;
    min-width: 44px;
    font-size: 14px;
  }
  .sug-name {
    color: #6E6E7E;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .quick-picks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    justify-content: center;
  }
  .qp-label {
    font-size: 13px;
    color: #8E8E9A;
    margin-right: 4px;
  }
  .qp-chip {
    font-family: 'DM Mono', 'SF Mono', monospace;
    font-size: 13px;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid #e4e4e7;
    background: #fff;
    color: #5A5A6E;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
    min-height: 32px;
  }
  .qp-chip:hover,
  .qp-chip:focus-visible {
    border-color: #2D6A4F;
    color: #2D6A4F;
    background: #F0F7F2;
    outline: none;
  }
</style>
