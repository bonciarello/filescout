/**
 * FileScout — Catalogo completo dei tipi di file.
 * Ogni voce contiene: estensione, nome, categoria, descrizione in italiano,
 * esempi d'uso, tipo di compressione, apertura standard, colore associato.
 */

export const CATEGORIES = {
  document:  { it: 'Documento',   color: '#2E7D32', bg: '#E8F5E9' },
  image:     { it: 'Immagine',    color: '#E65100', bg: '#FFF3E0' },
  vector:    { it: 'Vettoriale',  color: '#1565C0', bg: '#E3F2FD' },
  audio:     { it: 'Audio',       color: '#7B1FA2', bg: '#F3E5F5' },
  video:     { it: 'Video',       color: '#C62828', bg: '#FCE4EC' },
  archive:   { it: 'Archivio',    color: '#37474F', bg: '#ECEFF1' },
  font:      { it: 'Font',        color: '#558B2F', bg: '#F1F8E9' },
  system:    { it: 'Sistema',     color: '#00695C', bg: '#E0F7FA' },
  web:       { it: 'Web',         color: '#D84315', bg: '#FBE9E7' },
  data:      { it: 'Dati',        color: '#4527A0', bg: '#EDE7F6' },
};

export const COMPRESSION = {
  lossless: 'Senza perdita (lossless)',
  lossy:    'Con perdita (lossy)',
  none:     'Nessuna compressione',
};

export const OPENNESS = {
  open:        'Standard aperto',
  proprietary: 'Formato proprietario',
  mixed:       'Parzialmente aperto',
};

/**
 * @typedef {Object} FileType
 * @property {string}  extension      — es. '.pdf'
 * @property {string}  name           — nome completo del formato
 * @property {string}  category       — chiave di CATEGORIES
 * @property {string}  description    — spiegazione semplice in italiano
 * @property {string[]} usage         — esempi d'uso concreti
 * @property {'lossless'|'lossy'|'none'} compression
 * @property {'open'|'proprietary'|'mixed'} openness
 */

/** @type {Record<string, FileType>} */
export const fileTypes = {

  // ── DOCUMENTI ──────────────────────────────────────────────

  pdf: {
    extension: '.pdf',
    name: 'Portable Document Format',
    category: 'document',
    description: 'Formato universale creato da Adobe per visualizzare documenti esattamente come sono stati impaginati, su qualsiasi dispositivo. È uno standard ISO (32000) e il formato più usato al mondo per la condivisione di documenti non modificabili.',
    usage: ['Manuali e guide tecniche', 'Ebook e pubblicazioni digitali', 'Documenti ufficiali e legali', 'Contratti, fatture e moduli', 'Curriculum vitae e portfolio'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'pdf',
  },

  docx: {
    extension: '.docx',
    name: 'Microsoft Word Open XML Document',
    category: 'document',
    description: 'Formato standard di Microsoft Word dal 2007. Basato su XML e ZIP, contiene testo, immagini, grafici e formattazione avanzata. Molto più moderno e leggero del vecchio .doc.',
    usage: ['Relazioni e tesine', 'Lettere e comunicazioni formali', 'Documenti collaborativi aziendali', 'Brochure e volantini', 'Modelli riutilizzabili'],
    compression: 'lossless',
    openness: 'mixed',
    iconHint: 'doc',
  },

  doc: {
    extension: '.doc',
    name: 'Microsoft Word Document (legacy)',
    category: 'document',
    description: 'Il formato originale di Microsoft Word, usato fino al 2003. È un formato binario proprietario, ormai considerato obsoleto ma ancora supportato per compatibilità.',
    usage: ['Vecchi documenti Word', 'Archivi storici aziendali', 'Template pre-2007'],
    compression: 'none',
    openness: 'proprietary',
    iconHint: 'doc',
  },

  txt: {
    extension: '.txt',
    name: 'Plain Text File',
    category: 'document',
    description: 'Il formato più semplice in assoluto: contiene solo testo puro, senza formattazione, immagini o stili. Universale e leggerissimo, si apre con qualsiasi editor di testo su qualsiasi sistema operativo.',
    usage: ['Note rapide e appunti', 'File README e documentazione', 'Log di sistema', 'Codice sorgente semplice', 'Dati tabellari in colonne'],
    compression: 'none',
    openness: 'open',
    iconHint: 'txt',
  },

  rtf: {
    extension: '.rtf',
    name: 'Rich Text Format',
    category: 'document',
    description: 'Formato di testo con formattazione di base (grassetto, corsivo, colori, tabelle) creato da Microsoft ma pensato per essere scambiato tra programmi diversi. Supportato da tutti i word processor.',
    usage: ['Scambio documenti tra sistemi diversi', 'Documenti con formattazione leggera', 'Esportazione da applicativi legacy'],
    compression: 'none',
    openness: 'open',
    iconHint: 'doc',
  },

  odt: {
    extension: '.odt',
    name: 'OpenDocument Text',
    category: 'document',
    description: 'Il formato aperto per documenti di testo usato da LibreOffice, OpenOffice e altre suite libere. Standard ISO (26300), è un\'alternativa libera e gratuita al .docx.',
    usage: ['Documenti in ambienti open source', 'Redazione collaborativa libera', 'Pubblica amministrazione (standard consigliato)'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'doc',
  },

  xlsx: {
    extension: '.xlsx',
    name: 'Microsoft Excel Open XML Spreadsheet',
    category: 'document',
    description: 'Il formato standard di Microsoft Excel. È un foglio di calcolo che contiene celle organizzate in righe e colonne, formule, grafici e tabelle pivot. Basato su XML compresso.',
    usage: ['Bilanci e analisi finanziarie', 'Gestione inventari e magazzino', 'Report aziendali con grafici', 'Pianificazione progetti (diagrammi di Gantt)', 'Database semplici e rubriche'],
    compression: 'lossless',
    openness: 'mixed',
    iconHint: 'xls',
  },

  pptx: {
    extension: '.pptx',
    name: 'Microsoft PowerPoint Open XML Presentation',
    category: 'document',
    description: 'Formato per presentazioni di Microsoft PowerPoint. Contiene diapositive con testo, immagini, animazioni e transizioni. Basato su XML compresso.',
    usage: ['Presentazioni aziendali', 'Lezioni e corsi', 'Pitch e proposte commerciali', 'Slide deck per conferenze'],
    compression: 'lossless',
    openness: 'mixed',
    iconHint: 'ppt',
  },

  csv: {
    extension: '.csv',
    name: 'Comma-Separated Values',
    category: 'data',
    description: 'Un formato semplicissimo: dati tabellari salvati come testo puro dove ogni riga è un record e le virgole separano i campi. Leggerissimo e universale, ideale per importare/esportare dati tra sistemi diversi.',
    usage: ['Import/export database', 'Analisi dati in Python o R', 'Rubriche e mailing list', 'Listini prezzi e cataloghi', 'Open data della PA'],
    compression: 'none',
    openness: 'open',
    iconHint: 'csv',
  },

  md: {
    extension: '.md',
    name: 'Markdown',
    category: 'document',
    description: 'Formato di testo leggero con marcatori semplici per grassetto, titoli, link e liste. Pensato per essere leggibile anche come testo puro e convertibile facilmente in HTML. È lo standard per la documentazione su GitHub e nei progetti software.',
    usage: ['Documentazione tecnica (README)', 'Post su blog statici', 'Note personali strutturate', 'Wiki e knowledge base', 'Documentazione API'],
    compression: 'none',
    openness: 'open',
    iconHint: 'md',
  },

  html: {
    extension: '.html',
    name: 'HyperText Markup Language',
    category: 'web',
    description: 'Il linguaggio che sta alla base di ogni pagina web. Non è un vero formato di file "chiuso" ma un documento di testo con tag che descrivono struttura e contenuti. Interpretato da tutti i browser.',
    usage: ['Pagine web e siti internet', 'Email formattate in HTML', 'Documentazione navigabile offline', 'Template per newsletter'],
    compression: 'none',
    openness: 'open',
    iconHint: 'html',
  },

  // ── IMMAGINI ───────────────────────────────────────────────

  jpg: {
    extension: '.jpg',
    name: 'JPEG — Joint Photographic Experts Group',
    category: 'image',
    description: 'Il formato immagine più diffuso al mondo. Usa una compressione con perdita (lossy) che riduce moltissimo le dimensioni del file eliminando dettagli poco visibili all\'occhio umano. Perfetto per le foto, meno per la grafica con testo.',
    usage: ['Fotografia digitale', 'Immagini per il web e social media', 'Anteprime e thumbnail', 'Catalogo prodotti e-commerce'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'img',
  },

  jpeg: {
    extension: '.jpeg',
    name: 'JPEG — Joint Photographic Experts Group',
    category: 'image',
    description: 'Variante del .jpg (stesso identico formato). L\'estensione a 4 lettere veniva usata su vecchi sistemi operativi che richiedevano estensioni di esattamente 3 caratteri (.jpg su DOS/Windows). Oggi .jpg e .jpeg sono equivalenti.',
    usage: ['Fotografia digitale', 'Immagini per il web e social media', 'Stampa fotografica', 'Archiviazione foto'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'img',
  },

  png: {
    extension: '.png',
    name: 'Portable Network Graphics',
    category: 'image',
    description: 'Formato immagine senza perdita di qualità (lossless) creato come alternativa libera al GIF. Supporta la trasparenza (canale alpha) e compressione senza perdita: l\'immagine è identica all\'originale, pixel per pixel.',
    usage: ['Loghi e icone con sfondo trasparente', 'Screenshot e interfacce', 'Grafica web di alta qualità', 'Immagini con testo e linee nette', 'Asset per videogiochi'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'img',
  },

  gif: {
    extension: '.gif',
    name: 'Graphics Interchange Format',
    category: 'image',
    description: 'Formato storico (1987) che supporta animazioni semplici e trasparenza, ma limitato a 256 colori. Amatissimo per meme e reazioni animate, anche se tecnicamente superato. Non adatto alle foto.',
    usage: ['Meme e animazioni brevi', 'Reazioni animate nelle chat', 'Banner pubblicitari animati', 'Piccole animazioni loop'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'img',
  },

  webp: {
    extension: '.webp',
    name: 'Web Picture',
    category: 'image',
    description: 'Formato moderno creato da Google per il web. Supporta sia compressione lossy (foto) che lossless (grafica) e la trasparenza. Riduce le dimensioni del 25-35% rispetto a JPEG e PNG a parità di qualità visiva.',
    usage: ['Immagini per siti web veloci', 'Foto e gallerie online', 'App mobile e PWA', 'Sostituto moderno di JPEG e PNG'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'img',
  },

  svg: {
    extension: '.svg',
    name: 'Scalable Vector Graphics',
    category: 'vector',
    description: 'Formato vettoriale basato su XML: invece di una griglia di pixel, descrive l\'immagine con forme geometriche, curve e testo. Si ingrandisce all\'infinito senza perdere qualità. Pesantissimo per le foto, perfetto per loghi e icone.',
    usage: ['Loghi e identità di marca', 'Icone e pittogrammi', 'Illustrazioni tecniche', 'Grafici e diagrammi interattivi', 'Mappe e infografiche'],
    compression: 'none',
    openness: 'open',
    iconHint: 'vector',
  },

  bmp: {
    extension: '.bmp',
    name: 'Bitmap Image',
    category: 'image',
    description: 'Formato immagine non compresso sviluppato da Microsoft. Ogni pixel è salvato esattamente com\'è, quindi i file sono enormi. Ormai usato solo in contesti legacy o molto specifici.',
    usage: ['Texture per vecchi videogiochi', 'Immagini in applicazioni Windows legacy', 'Elaborazione immagini senza perdita intermedia'],
    compression: 'none',
    openness: 'open',
    iconHint: 'img',
  },

  tiff: {
    extension: '.tiff',
    name: 'Tagged Image File Format',
    category: 'image',
    description: 'Formato professionale flessibile che supporta vari tipi di compressione (anche lossless) e profondità di colore elevate. È lo standard nella stampa, nell\'editoria e nella scansione documentale.',
    usage: ['Scansioni ad alta qualità', 'Stampa tipografica e offset', 'Archiviazione documenti legali', 'Fotografia professionale RAW-processed'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'img',
  },

  heic: {
    extension: '.heic',
    name: 'High Efficiency Image Container',
    category: 'image',
    description: 'Formato moderno introdotto da Apple con iOS 11. Usa la compressione HEVC (la stessa dei video 4K) per dimezzare lo spazio delle foto rispetto a JPEG, mantenendo qualità superiore. Supporta anche profondità a 16 bit e foto live.',
    usage: ['Foto su iPhone e iPad recenti', 'Archiviazione foto nel Cloud', 'Galleria foto macOS e iOS'],
    compression: 'lossy',
    openness: 'proprietary',
    iconHint: 'img',
  },

  avif: {
    extension: '.avif',
    name: 'AV1 Image File Format',
    category: 'image',
    description: 'Il formato immagine più avanzato oggi disponibile, basato sul codec video AV1. Comprime meglio di WebP e HEIC, è royalty-free ed è supportato da tutti i browser moderni. Il futuro delle immagini sul web.',
    usage: ['Immagini per il web di nuova generazione', 'CDN e distribuzione ottimizzata', 'Siti ad alte prestazioni (Core Web Vitals)'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'img',
  },

  ico: {
    extension: '.ico',
    name: 'Icon File',
    category: 'image',
    description: 'Formato specializzato per le icone di Windows. Può contenere più dimensioni della stessa immagine (16×16, 32×32, 48×48...) nello stesso file. Il browser lo usa per la favicon nella scheda.',
    usage: ['Favicon del sito web', 'Icone di applicazioni Windows', 'Icone di cartelle personalizzate'],
    compression: 'none',
    openness: 'open',
    iconHint: 'img',
  },

  raw: {
    extension: '.raw',
    name: 'Raw Image (dati grezzi del sensore)',
    category: 'image',
    description: 'Non è un formato unico, ma una famiglia di formati (.CR2, .NEF, .ARW, .DNG...) che contengono i dati grezzi catturati dal sensore della fotocamera, prima di qualsiasi elaborazione. Il "negativo digitale" del fotografo.',
    usage: ['Fotografia professionale', 'Post-produzione avanzata (Lightroom, Capture One)', 'Archiviazione originale prima dell\'editing'],
    compression: 'none',
    openness: 'mixed',
    iconHint: 'img',
  },

  // ── VETTORIALI / DESIGN ──────────────────────────────────

  ai: {
    extension: '.ai',
    name: 'Adobe Illustrator Artwork',
    category: 'vector',
    description: 'Il formato nativo di Adobe Illustrator, lo strumento professionale per la grafica vettoriale. Contiene curve di Bézier, livelli, gradienti ed effetti. Standard nel design di loghi, illustrazioni e stampe.',
    usage: ['Creazione loghi e brand identity', 'Illustrazioni editoriali', 'Stampa grande formato (cartelloni)', 'Packaging design', 'Pattern e texture vettoriali'],
    compression: 'none',
    openness: 'proprietary',
    iconHint: 'vector',
  },

  eps: {
    extension: '.eps',
    name: 'Encapsulated PostScript',
    category: 'vector',
    description: 'Formato vettoriale storico basato sul linguaggio PostScript di Adobe. Ancora usato nell\'editoria e nella stampa professionale per la sua compatibilità universale con software e stampanti di ogni epoca.',
    usage: ['Invio file alle tipografie', 'Loghi per stampa professionale', 'Inserimento grafici in layout editoriali (InDesign, Quark)'],
    compression: 'none',
    openness: 'open',
    iconHint: 'vector',
  },

  psd: {
    extension: '.psd',
    name: 'Adobe Photoshop Document',
    category: 'image',
    description: 'Il formato di lavoro di Adobe Photoshop. Mantiene livelli, maschere, canali, effetti e testo editabile. Non è pensato per la distribuzione finale ma per la lavorazione: va esportato in JPEG/PNG/WebP per la consegna.',
    usage: ['Fotoritocco professionale', 'Web design (mockup)', 'Compositing fotografico', 'Creazione texture e materiali 3D'],
    compression: 'none',
    openness: 'proprietary',
    iconHint: 'img',
  },

  sketch: {
    extension: '.sketch',
    name: 'Sketch Document',
    category: 'vector',
    description: 'Formato nativo di Sketch, il tool di design UI/UX per macOS. Contiene tavole da disegno, simboli, stili condivisi e griglie. Molto usato per il design di interfacce, app e siti web.',
    usage: ['UI/UX design', 'Wireframe e prototipi', 'Sistemi di design (design system)', 'Icone e componenti riutilizzabili'],
    compression: 'lossless',
    openness: 'proprietary',
    iconHint: 'vector',
  },

  fig: {
    extension: '.fig',
    name: 'Figma Design File',
    category: 'vector',
    description: 'Formato di Figma, la piattaforma di design collaborativo basata sul web. Memorizza progetti UI/UX con componenti, varianti e prototipi interattivi. I file .fig si possono esportare e importare per backup e condivisione.',
    usage: ['Design collaborativo in team', 'Prototipi interattivi', 'Design system condivisi', 'Handoff designer-sviluppatore'],
    compression: 'lossless',
    openness: 'proprietary',
    iconHint: 'vector',
  },

  // ── AUDIO ─────────────────────────────────────────────────

  mp3: {
    extension: '.mp3',
    name: 'MPEG Audio Layer III',
    category: 'audio',
    description: 'Il formato audio più celebre e compatibile di sempre. Comprime il suono in modo "lossy" sfruttando la psicoacustica: elimina le frequenze che l\'orecchio umano percepisce meno, riducendo il file a circa 1/10 dell\'originale senza perdita percepibile.',
    usage: ['Musica digitale e streaming', 'Podcast e audiolibri', 'Suonerie e notifiche', 'Archivio musicale personale'],
    compression: 'lossy',
    openness: 'mixed',
    iconHint: 'audio',
  },

  wav: {
    extension: '.wav',
    name: 'Waveform Audio File Format',
    category: 'audio',
    description: 'Formato audio non compresso sviluppato da Microsoft e IBM. Contiene il suono esattamente come è stato registrato, senza alcuna perdita di qualità. File molto pesanti, usati in produzione musicale e broadcasting.',
    usage: ['Produzione musicale (DAW)', 'Registrazione in studio', 'Archivio master audio', 'Suoni di sistema Windows', 'Broadcasting radiofonico'],
    compression: 'none',
    openness: 'open',
    iconHint: 'audio',
  },

  flac: {
    extension: '.flac',
    name: 'Free Lossless Audio Codec',
    category: 'audio',
    description: 'Formato audio che comprime senza perdita (come uno ZIP per il suono): il file pesa circa la metà del WAV originale, ma l\'audio è identico, bit per bit. È open source ed è il preferito dagli audiofili.',
    usage: ['Archiviazione audiofila di CD', 'Collezioni musicali di alta qualità', 'Backup master audio', 'Download di musica lossless (Bandcamp, Qobuz)'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'audio',
  },

  aac: {
    extension: '.aac',
    name: 'Advanced Audio Coding',
    category: 'audio',
    description: 'Successore dell\'MP3, offre qualità migliore allo stesso bitrate. È il formato predefinito di YouTube, iPhone, Nintendo e della radio digitale. Più efficiente dell\'MP3 ma leggermente meno compatibile universalmente.',
    usage: ['Streaming YouTube e Netflix', 'Registrazione audio su iPhone', 'Musica su iTunes e Apple Music', 'Radio digitale DAB+'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'audio',
  },

  ogg: {
    extension: '.ogg',
    name: 'Ogg Vorbis',
    category: 'audio',
    description: 'Formato audio lossy completamente libero e open source, senza alcun brevetto. Qualità paragonabile all\'MP3 ma con un\'efficienza leggermente superiore. Molto usato nei videogiochi e nei progetti open source.',
    usage: ['Audio nei videogiochi indipendenti', 'Streaming su piattaforme open source', 'File audio su Wikipedia Commons', 'Suoni in applicazioni libere'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'audio',
  },

  wma: {
    extension: '.wma',
    name: 'Windows Media Audio',
    category: 'audio',
    description: 'Formato audio proprietario di Microsoft, creato per competere con l\'MP3. Esiste in versione lossy (standard), lossless e voice. Ormai poco usato al di fuori dell\'ecosistema Windows.',
    usage: ['Raccolte musicali su Windows Media Player', 'Streaming su vecchi dispositivi Microsoft', 'Registrazioni vocali su Windows'],
    compression: 'lossy',
    openness: 'proprietary',
    iconHint: 'audio',
  },

  m4a: {
    extension: '.m4a',
    name: 'MPEG-4 Audio',
    category: 'audio',
    description: 'Un "contenitore" audio che di solito contiene audio compresso in AAC (o Apple Lossless). Introdotto da Apple, è il formato standard per la musica acquistata su iTunes e per le registrazioni vocali su iPhone.',
    usage: ['Musica acquistata su iTunes', 'Memo vocali su iPhone', 'Podcast in alta qualità', 'Audiolibri su Apple Books'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'audio',
  },

  // ── VIDEO ─────────────────────────────────────────────────

  mp4: {
    extension: '.mp4',
    name: 'MPEG-4 Part 14',
    category: 'video',
    description: 'Il formato video più universale. Un "contenitore" che può includere video compresso (di solito H.264) e audio (AAC). Supportato letteralmente ovunque: dal web ai telefoni, dalle smart TV alle console.',
    usage: ['Video su YouTube e social', 'Film e serie in digitale', 'Registrazioni da smartphone', 'Video corsi e tutorial'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'video',
  },

  avi: {
    extension: '.avi',
    name: 'Audio Video Interleave',
    category: 'video',
    description: 'Contenitore video storico creato da Microsoft nel 1992. Molto flessibile (può contenere quasi qualsiasi codec), ma è datato: non supporta sottotitoli, capitoli o metadati moderni. File tendenzialmente pesanti.',
    usage: ['Vecchi filmati domestici', 'Video in applicazioni Windows legacy', 'Rendering da vecchi software di editing'],
    compression: 'lossy',
    openness: 'proprietary',
    iconHint: 'video',
  },

  mov: {
    extension: '.mov',
    name: 'QuickTime Movie',
    category: 'video',
    description: 'Contenitore video sviluppato da Apple per QuickTime. Tecnicamente simile all\'MP4 ma con alcune funzionalità in più (canale alpha per trasparenze, tracce multiple). Molto usato nel montaggio video professionale.',
    usage: ['Montaggio video professionale (Final Cut, DaVinci)', 'Video con trasparenza per overlay', 'Editing su macOS'],
    compression: 'lossy',
    openness: 'proprietary',
    iconHint: 'video',
  },

  mkv: {
    extension: '.mkv',
    name: 'Matroska Video',
    category: 'video',
    description: 'Contenitore multimediale open source estremamente potente. Può contenere illimitate tracce video, audio, sottotitoli, capitoli e metadati — tutto in un unico file. È il formato preferito per le collezioni di film in Alta Definizione.',
    usage: ['Film in Full HD e 4K', 'Collezioni con audio multilingua e sottotitoli', 'Anime con sottotitoli multipli', 'Archiviazione Blu-ray digitale'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'video',
  },

  webm: {
    extension: '.webm',
    name: 'WebM Video',
    category: 'video',
    description: 'Contenitore video libero e royalty-free creato da Google per il web. Usa i codec VP8/VP9 per il video e Vorbis/Opus per l\'audio. Ottimo per l\'HTML5: tutti i browser moderni lo riproducono nativamente.',
    usage: ['Video incorporati in pagine web (HTML5)', 'Animazioni e sfondi video leggeri', 'Streaming su piattaforme aperte'],
    compression: 'lossy',
    openness: 'open',
    iconHint: 'video',
  },

  wmv: {
    extension: '.wmv',
    name: 'Windows Media Video',
    category: 'video',
    description: 'Formato video proprietario di Microsoft, nato come parte di Windows Media. Storicamente diffuso su PC Windows, oggi è quasi scomparso a favore di MP4 e formati più moderni.',
    usage: ['Vecchi filmati su PC Windows', 'Video corsi legacy', 'Archivi aziendali su infrastruttura Microsoft'],
    compression: 'lossy',
    openness: 'proprietary',
    iconHint: 'video',
  },

  // ── ARCHIVI ───────────────────────────────────────────────

  zip: {
    extension: '.zip',
    name: 'ZIP Archive',
    category: 'archive',
    description: 'Il formato di compressione più diffuso e compatibile. Raggruppa file e cartelle in un unico archivio, riducendone le dimensioni con compressione lossless. Supportato nativamente da Windows, macOS e Linux senza bisogno di software aggiuntivo.',
    usage: ['Invio di file multipli via email', 'Backup di cartelle e progetti', 'Distribuzione software e download', 'Riduzione dimensioni per l\'upload'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'archive',
  },

  rar: {
    extension: '.rar',
    name: 'RAR Archive',
    category: 'archive',
    description: 'Formato di compressione proprietario creato da Eugene Roshal. Generalmente comprime meglio dello ZIP (file più piccoli), ma richiede WinRAR o software specifico per essere creato. La decompressione invece è supportata liberamente.',
    usage: ['Compressione spinta di file molto grandi', 'Archivi suddivisi in volumi', 'Distribuzione su reti a banda limitata'],
    compression: 'lossless',
    openness: 'proprietary',
    iconHint: 'archive',
  },

  '7z': {
    extension: '.7z',
    name: '7-Zip Archive',
    category: 'archive',
    description: 'Formato open source con il miglior rapporto di compressione tra i formati comuni. Creato dal software 7-Zip, supporta crittografia AES-256, volumi e compressione solid per ridurre ulteriormente le dimensioni.',
    usage: ['Compressione massima per backup', 'Archivi crittografati con password', 'Distribuzione software open source'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'archive',
  },

  tar: {
    extension: '.tar',
    name: 'Tape Archive',
    category: 'archive',
    description: 'Formato storico nato per i nastri magnetici su Unix. Il .tar NON comprime: si limita a impacchettare molti file in uno solo (archiviazione). Spesso è abbinato a .gz (gzip) per ottenere .tar.gz e avere anche la compressione.',
    usage: ['Distribuzione codice sorgente su Linux', 'Backup in ambienti Unix', 'Trasferimento collezioni di file tra server'],
    compression: 'none',
    openness: 'open',
    iconHint: 'archive',
  },

  gz: {
    extension: '.gz',
    name: 'Gzip Compressed File',
    category: 'archive',
    description: 'Formato di compressione usatissimo su Linux/Unix. Comprime un singolo file (spesso abbinato a .tar per comprimere cartelle). Veloce, efficiente e onnipresente nel mondo server e nello sviluppo software.',
    usage: ['Compressione log di sistema', 'Trasferimento file via rete', 'Distribuzione pacchetti software Linux', 'Backup automatici su server'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'archive',
  },

  // ── FONT ──────────────────────────────────────────────────

  ttf: {
    extension: '.ttf',
    name: 'TrueType Font',
    category: 'font',
    description: 'Formato di font digitale creato da Apple e Microsoft. Contiene le forme (glifi) dei caratteri descritte come curve di Bézier quadratiche. È il formato di font più compatibile in assoluto.',
    usage: ['Installazione font su Windows e macOS', 'Uso in applicazioni desktop (Word, Photoshop)', 'Stampa professionale', 'Interfacce e temi di sistema'],
    compression: 'none',
    openness: 'open',
    iconHint: 'font',
  },

  otf: {
    extension: '.otf',
    name: 'OpenType Font',
    category: 'font',
    description: 'Evoluzione del TrueType nata dalla collaborazione tra Adobe e Microsoft. Supporta molte più funzionalità tipografiche: legature, varianti stilistiche, swash, piccole maiuscole e fino a 65.536 glifi (ideale per alfabeti estesi come il cinese).',
    usage: ['Tipografia professionale', 'Design editoriale di alta qualità', 'Font con caratteristiche OpenType avanzate', 'Branding e identità visiva'],
    compression: 'none',
    openness: 'open',
    iconHint: 'font',
  },

  woff: {
    extension: '.woff',
    name: 'Web Open Font Format',
    category: 'font',
    description: 'Formato font pensato specificamente per il web. È un TrueType/OpenType compresso con metadati aggiuntivi. Riduce i tempi di caricamento delle pagine web e protegge i font da usi non autorizzati.',
    usage: ['Caricamento font su siti web', 'Web performance (Core Web Vitals)', 'Typography su web app'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'font',
  },

  woff2: {
    extension: '.woff2',
    name: 'Web Open Font Format 2',
    category: 'font',
    description: 'La versione di nuova generazione del WOFF. Usa la compressione Brotli (più efficiente di gzip) per ridurre i file font del 30% rispetto al WOFF originale. Supportato da tutti i browser moderni.',
    usage: ['Web font di nuova generazione', 'Performance web ottimizzata', 'Google Fonts (servito in WOFF2)'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'font',
  },

  // ── SISTEMA / ESECUTIBILI ────────────────────────────────

  exe: {
    extension: '.exe',
    name: 'Windows Executable',
    category: 'system',
    description: 'Un programma eseguibile per Microsoft Windows. Contiene codice macchina che Windows carica ed esegue direttamente. Installare un .exe significa dare al programma pieno accesso al sistema: scarica sempre .exe solo da fonti fidate.',
    usage: ['Installazione software su Windows', 'Programmi portatili (portable)', 'Strumenti di sistema', 'Patch e aggiornamenti software'],
    compression: 'none',
    openness: 'proprietary',
    iconHint: 'system',
  },

  dmg: {
    extension: '.dmg',
    name: 'Apple Disk Image',
    category: 'system',
    description: 'Un\'immagine disco per macOS. Quando lo apri, viene "montato" come un disco virtuale sul desktop. Contiene l\'applicazione (.app) e spesso un collegamento alla cartella Applicazioni per il drag-and-drop.',
    usage: ['Installazione app su macOS', 'Distribuzione software per Mac', 'Backup clonabili di unità macOS'],
    compression: 'lossless',
    openness: 'proprietary',
    iconHint: 'system',
  },

  iso: {
    extension: '.iso',
    name: 'ISO Disk Image',
    category: 'system',
    description: 'Una copia esatta, bit per bit, di un disco ottico (CD, DVD, Blu-ray) o di una chiavetta. Standard ISO 9660. Si può masterizzare su un supporto fisico o montare come unità virtuale.',
    usage: ['Distribuzione sistemi operativi (Linux, Windows)', 'Backup esatti di CD/DVD', 'Macchine virtuali (immagini di avvio)', 'Chiavette USB avviabili'],
    compression: 'none',
    openness: 'open',
    iconHint: 'system',
  },

  apk: {
    extension: '.apk',
    name: 'Android Package',
    category: 'system',
    description: 'Il pacchetto di installazione per Android. È un archivio ZIP che contiene il codice compilato, le risorse (icone, immagini, layout) e un file manifesto. Equivalente del .exe su Windows, ma per il mondo Android.',
    usage: ['Installazione app su Android', 'Distribuzione app fuori dal Play Store', 'Beta testing', 'Backup app Android'],
    compression: 'lossless',
    openness: 'open',
    iconHint: 'system',
  },

  // ── WEB / CODICE ──────────────────────────────────────────

  css: {
    extension: '.css',
    name: 'Cascading Style Sheets',
    category: 'web',
    description: 'Il linguaggio che definisce l\'aspetto visivo delle pagine web: colori, caratteri, spaziature, animazioni. Lavora insieme all\'HTML per trasformare un documento strutturato in un\'interfaccia curata e bella da vedere.',
    usage: ['Stile di siti web e web app', 'Temi e skin personalizzabili', 'Animazioni e transizioni CSS', 'Layout responsive per mobile'],
    compression: 'none',
    openness: 'open',
    iconHint: 'html',
  },

  js: {
    extension: '.js',
    name: 'JavaScript File',
    category: 'web',
    description: 'Il linguaggio di programmazione del web: rende le pagine interattive e dinamiche. Un file .js contiene codice eseguito dal browser (o da Node.js) che reagisce ai click, carica dati, anima elementi e gestisce la logica dell\'applicazione.',
    usage: ['Interattività su siti web', 'Web app e single-page application', 'Automazioni e script lato server (Node.js)', 'Estensioni browser e plugin'],
    compression: 'none',
    openness: 'open',
    iconHint: 'html',
  },

  json: {
    extension: '.json',
    name: 'JavaScript Object Notation',
    category: 'data',
    description: 'Formato di testo leggerissimo per lo scambio di dati strutturati. Leggibile sia dagli umani che dalle macchine, è diventato lo standard universale per le API web, i file di configurazione e la serializzazione dati.',
    usage: ['API REST e scambio dati web', 'File di configurazione (package.json, settings)', 'Esportazione/importazione database NoSQL', 'File di localizzazione e traduzioni'],
    compression: 'none',
    openness: 'open',
    iconHint: 'csv',
  },

  xml: {
    extension: '.xml',
    name: 'eXtensible Markup Language',
    category: 'data',
    description: 'Formato strutturato con tag simile all\'HTML, ma serve per descrivere dati generici, non pagine web. Molto usato per configurazioni, scambio dati tra sistemi aziendali, feed RSS e formati di documento (OOXML, ODF).',
    usage: ['Configurazioni software (Maven, Android)', 'Feed RSS e Atom', 'Scambio dati tra sistemi enterprise', 'Fatturazione elettronica (in Italia)'],
    compression: 'none',
    openness: 'open',
    iconHint: 'csv',
  },

  yaml: {
    extension: '.yaml',
    name: 'YAML Ain\'t Markup Language',
    category: 'data',
    description: 'Formato per dati strutturati pensato per essere ancora più leggibile del JSON. Usa l\'indentazione (spazi) invece delle parentesi. Molto amato per file di configurazione, pipeline CI/CD e Docker.',
    usage: ['File Docker Compose', 'Pipeline GitHub Actions / GitLab CI', 'Configurazioni Kubernetes', 'Ansible playbooks'],
    compression: 'none',
    openness: 'open',
    iconHint: 'csv',
  },

  // ── ALTRI ─────────────────────────────────────────────────

  db: {
    extension: '.db',
    name: 'Database File',
    category: 'data',
    description: 'Estensione generica per file di database. Può contenere dati in decine di formati diversi (SQLite, Berkeley DB, Paradox...). Il più comune oggi è SQLite, un database leggero e senza server usato in app mobile e desktop.',
    usage: ['Archiviazione dati in app mobile (iOS/Android)', 'Database locale per applicazioni desktop', 'Memorizzazione dati offline in browser', 'Backup di database leggeri'],
    compression: 'none',
    openness: 'open',
    iconHint: 'system',
  },

  log: {
    extension: '.log',
    name: 'Log File',
    category: 'data',
    description: 'Un semplice file di testo dove i programmi registrano eventi, errori e attività in ordine cronologico. Strumento indispensabile per diagnosticare problemi e monitorare il funzionamento di server e applicazioni.',
    usage: ['Debug e diagnostica software', 'Monitoraggio server e sicurezza', 'Audit di sistema', 'Analisi delle performance'],
    compression: 'none',
    openness: 'open',
    iconHint: 'txt',
  },
};

/**
 * Tutte le estensioni disponibili, in ordine alfabetico.
 * @type {string[]}
 */
export const allExtensions = Object.keys(fileTypes).sort();

/**
 * Cerca i tipi di file il cui nome, estensione o categoria contengono la query.
 * @param {string} query
 * @returns {FileType[]}
 */
export function searchFileTypes(query) {
  const q = query.toLowerCase().replace(/^\./, '');
  if (!q) return [];
  const results = [];
  for (const [key, ft] of Object.entries(fileTypes)) {
    const cat = CATEGORIES[ft.category]?.it || '';
    if (
      key.includes(q) ||
      ft.name.toLowerCase().includes(q) ||
      ft.extension.includes(q) ||
      cat.toLowerCase().includes(q)
    ) {
      results.push({ key, ...ft });
    }
  }
  return results.slice(0, 12);
}
