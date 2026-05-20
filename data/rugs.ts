// data/rugs.ts — Palais Saadiyin

export type Region =
  | 'Boujad'
  | 'Azilal'
  | 'Beni Ourain'
  | 'Beni MGuild'
  | 'Taznakht'
  | 'Mrirt'
  | 'Zemour'
  | 'High Atlas'
  | 'Middle Atlas'
  | 'Sahara'
  | 'Rabat'

export type Technique = 'knotted' | 'flatweave' | 'rag'
export type Era = 'vintage' | 'contemporary'

export interface Rug {
  slug: string
  title: string
  titleFr: string
  region: Region
  tribe?: string
  technique: Technique
  era: Era
  yearRange: string
  materials: string
  dimensions: { w: number; h: number; unit: 'cm' }
  palette: string[]
  inventoryNumber: string
  oneOfOne: boolean
  curatorialNote: string
  curatorialNoteFr: string
  motifs: string[]
  weaverNote?: string
  images: {
    primary: string
    summerSide: string
    winterSide: string
    details: string[]
  }
  featured?: boolean
}

export function getRugBySlug(slug: string): Rug | undefined {
  return rugs.find((r) => r.slug === slug)
}

export function getFeaturedRugs(): Rug[] {
  return rugs
    .filter((r) => r.featured)
    .sort((a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug))
}

export const ALL_REGIONS: Region[] = [
  'Boujad',
  'Azilal',
  'Beni Ourain',
  'Beni MGuild',
  'Taznakht',
  'Mrirt',
  'Zemour',
  'High Atlas',
  'Middle Atlas',
  'Sahara',
  'Rabat',
]

const FEATURED_ORDER = [
  // ── New photo-backed pieces (imgi_2 – imgi_8) appear first ──
  'azilal-indigo-composition-contemporaine',
  'beni-ourain-classique-ivoire-losange',
  'mrirt-aube-ocre-rose',
  'boujad-boucherouite-fragments',
  'zemour-vintage-losange-terracotta',
  'azilal-kilim-multicolore-festif',
  'beni-ourain-diptych-showroom',
  // ── Existing pieces ──
  'tapis-jardin-mamluk-vert',
  'rabati-medaillon-champ-bleu',
  'high-atlas-bleu-ciel-minimaliste',
  'boujad-champ-ecarlate-symboles',
  'zemmour-grand-kilim-encyclopedique',
  'zemmour-arbre-de-vie',
  'zemmour-kilim-patchwork-sature',
]

export const rugs: Rug[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // NEW ENTRIES — backed by uploaded photos (imgi_2 through imgi_8)
  //
  // IMAGE RENAME INSTRUCTIONS — copy each file from public/rugs/ to these names:
  //
  //  imgi_6_AA5...jpg  →  ps-photo-001-primary.jpg   (Azilal indigo multicolour)
  //  imgi_2_AA5...jpg  →  ps-photo-002-primary.jpg   (showroom — red + blue rugs on wall)
  //  imgi_3_AA5...jpg  →  ps-photo-003-primary.jpg   (Mrirt ochre/blush with pouf)
  //  imgi_5_AA5...jpg  →  ps-photo-004-primary.jpg   (Beni Ourain ivory diamond folded)
  //  imgi_7_AA5...jpg  →  ps-photo-005-primary.jpg   (Boucherouite rag rug)
  //  imgi_8_AA5...jpg  →  ps-photo-006-primary.jpg   (Zemour terracotta diamond vintage)
  //  imgi_4_AA5...jpg  →  ps-photo-007-primary.jpg   (Showroom stools — use as detail)
  //
  // Run rename-rug-images.bat (already in your project root) to do this automatically.
  // ════════════════════════════════════════════════════════════════════════════

  // ── P01 — Azilal Indigo Composition ─────────────────────────────────────────
  {
    slug: 'azilal-indigo-composition-contemporaine',
    title: 'Azilal Indigo — Contemporary Composition',
    titleFr: 'Azilal Indigo — Composition Contemporaine',
    region: 'Azilal',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: 'c. 2010–2020',
    materials: 'Hand-spun live-sheep wool, vegetable indigo and madder dyes',
    dimensions: { w: 250, h: 340, unit: 'cm' },
    palette: ['indigo', 'ivory', 'saffron', 'madder-red', 'charcoal', 'slate-grey', 'ochre'],
    inventoryNumber: 'PS-PHOTO-001',
    oneOfOne: true,
    curatorialNote:
      'A bold contemporary Azilal carpet anchored by a deep vegetable-indigo ground against which ' +
      'an exuberant vocabulary of geometric forms plays freely — ivory rectangles, saffron crosses, ' +
      'madder-red chevrons, slate-grey cloud forms and charcoal linear marks. ' +
      'The composition reads simultaneously as abstraction and autobiography: each motif placed ' +
      'by the weaver from memory rather than a drawn pattern, so the whole carries the rhythm ' +
      'of lived experience. A defining example of the contemporary High Atlas idiom.',
    curatorialNoteFr:
      'Un audacieux tapis Azilal contemporain ancré par un fond indigo végétal profond contre lequel ' +
      'un vocabulaire exubérant de formes géométriques joue librement — rectangles ivoire, croix safran, ' +
      'chevrons rouge garance, formes nuageuses gris ardoise et marques linéaires charbon. ' +
      'La composition se lit simultanément comme abstraction et autobiographie : chaque motif placé ' +
      'par la tisseuse de mémoire plutôt que d\'un patron dessiné.',
    motifs: [
      'free-floating rectangle',
      'saffron cross',
      'chevron register',
      'cloud form',
      'linear mark',
      'open indigo field',
    ],
    images: {
      primary: '/rugs/ps-photo-001-primary.jpg',
      summerSide: '/rugs/ps-photo-001-primary.jpg',
      winterSide: '/rugs/ps-photo-001-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P02 — Showroom Diptych (Red Boujad + Blue Beni Ourain) ──────────────────
  {
    slug: 'beni-ourain-diptych-showroom',
    title: 'Showroom Diptych — Boujad Red & Beni Ourain Blue',
    titleFr: 'Diptyque Showroom — Boujad Rouge & Beni Ourain Bleu',
    region: 'Beni Ourain',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1970–1990',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 250, h: 350, unit: 'cm' },
    palette: ['madder-red', 'crimson', 'indigo-blue', 'ivory', 'charcoal'],
    inventoryNumber: 'PS-PHOTO-002',
    oneOfOne: true,
    curatorialNote:
      'Two exceptional pieces displayed together in the Palais Saadiyin showroom: a saturated Boujad ' +
      'carpet in deep madder-red with scattered tribal symbols on the left, and a washed indigo ' +
      'Beni Ourain with a sparse diamond lattice on the right. Seen together they demonstrate the ' +
      'full range of the Moroccan tribal tradition — the warm fire of the central plains against ' +
      'the cool mountain air of the Middle Atlas. Both available individually; enquire for details.',
    curatorialNoteFr:
      'Deux pièces exceptionnelles exposées ensemble dans le showroom du Palais Saadiyin : un tapis ' +
      'Boujad saturé en rouge garance profond avec des symboles tribaux éparpillés à gauche, et un ' +
      'Beni Ourain indigo lavé avec un treillis de losanges épars à droite. Vus ensemble, ils démontrent ' +
      'toute l\'étendue de la tradition tribale marocaine.',
    motifs: [
      'scattered tribal symbol',
      'diamond lattice',
      'open field composition',
      'selvedge stripe',
    ],
    images: {
      primary: '/rugs/ps-photo-002-primary.jpg',
      summerSide: '/rugs/ps-photo-002-primary.jpg',
      winterSide: '/rugs/ps-photo-002-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P03 — Mrirt Dawn Ochre ───────────────────────────────────────────────────
  {
    slug: 'mrirt-aube-ocre-rose',
    title: 'Mrirt Dawn — Ochre, Blush & Black Line',
    titleFr: 'Mrirt Aube — Ocre, Rose & Ligne Noire',
    region: 'Mrirt',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: 'c. 2005–2018',
    materials: 'Hand-spun live-sheep wool, saffron, pomegranate and madder dyes',
    dimensions: { w: 200, h: 260, unit: 'cm' },
    palette: ['ochre', 'saffron', 'blush-rose', 'peach', 'black', 'warm-ivory'],
    inventoryNumber: 'PS-PHOTO-003',
    oneOfOne: true,
    curatorialNote:
      'A luminous Mrirt carpet in a warm palette of ochre, saffron, blush-rose and peach — ' +
      'colours drawn from saffron, pomegranate rind and diluted madder. ' +
      'Irregular horizontal wash bands, barely differentiated in value, traverse the field ' +
      'like geological strata glimpsed at dawn. Fine black diagonal lines bisect the composition ' +
      'with quiet authority, echoing the mountain ridgelines visible from the weaver\'s village. ' +
      'The overall effect is of landscape absorbed into abstraction.',
    curatorialNoteFr:
      'Un tapis Mrirt lumineux dans une palette chaude d\'ocre, safran, rose blush et pêche — ' +
      'couleurs tirées du safran, de la peau de grenade et de la garance diluée. ' +
      'Des bandes de lavage horizontales irrégulières traversent le champ comme des strates géologiques ' +
      'entrevues à l\'aube. De fines lignes diagonales noires bisectent la composition avec une ' +
      'autorité tranquille, faisant écho aux crêtes des montagnes visibles du village de la tisseuse.',
    motifs: [
      'horizontal wash band',
      'geological strata',
      'diagonal black line',
      'open field gradient',
    ],
    images: {
      primary: '/rugs/ps-photo-003-primary.jpg',
      summerSide: '/rugs/ps-photo-003-primary.jpg',
      winterSide: '/rugs/ps-photo-003-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P04 — Beni Ourain Classic Ivory ─────────────────────────────────────────
  {
    slug: 'beni-ourain-classique-ivoire-losange',
    title: 'Beni Ourain Classic — Ivory & Charcoal Diamond',
    titleFr: 'Beni Ourain Classique — Ivoire & Losange Charbon',
    region: 'Beni Ourain',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1975–1995',
    materials: 'Undyed live-sheep wool, charcoal natural dye, deep pile hand-knotted',
    dimensions: { w: 190, h: 280, unit: 'cm' },
    palette: ['ivory', 'warm-white', 'charcoal', 'taupe'],
    inventoryNumber: 'PS-PHOTO-004',
    oneOfOne: true,
    curatorialNote:
      'The archetypal Beni Ourain: a plush, deep-pile carpet in natural undyed ivory wool with ' +
      'a spare charcoal diamond lattice traversing the field. The lattice lines are hand-drawn ' +
      'from memory — no two parallel, no two equal — giving the geometry an organic vitality ' +
      'that machine-made imitations can never replicate. Photographed here folded to reveal ' +
      'the exceptional pile depth and the natural variation in the undyed fleece. ' +
      'Long fringe on both ends. A foundational piece for any serious collection.',
    curatorialNoteFr:
      'Le Beni Ourain archétypal : un tapis à poil profond et moelleux en laine ivoire naturelle ' +
      'non teinte avec un treillis de losanges charbon épars traversant le champ. Les lignes du ' +
      'treillis sont tracées de mémoire — aucune parallèle, aucune identique — donnant à la ' +
      'géométrie une vitalité organique que les imitations industrielles ne peuvent jamais reproduire. ' +
      'Photographié ici plié pour révéler la profondeur exceptionnelle du poil.',
    motifs: [
      'diamond lattice',
      'hand-drawn irregular line',
      'open ivory field',
      'selvedge band',
    ],
    weaverNote: 'Undyed fleece — natural ivory from live Middle Atlas sheep. No synthetic dye.',
    images: {
      primary: '/rugs/ps-photo-004-primary.jpg',
      summerSide: '/rugs/ps-photo-004-primary.jpg',
      winterSide: '/rugs/ps-photo-004-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P05 — Boujad Boucherouite Rag Rug ────────────────────────────────────────
  {
    slug: 'boujad-boucherouite-fragments',
    title: 'Boujad Boucherouite — Chromatic Fragments',
    titleFr: 'Boujad Boucherouite — Fragments Chromatiques',
    region: 'Boujad',
    technique: 'rag',
    era: 'vintage',
    yearRange: 'c. 1980–2000',
    materials: 'Recycled textile strips (wool, cotton, synthetics), hand-looped on cotton warp',
    dimensions: { w: 160, h: 230, unit: 'cm' },
    palette: ['crimson', 'cobalt', 'saffron', 'violet', 'sage', 'ivory', 'charcoal', 'peach'],
    inventoryNumber: 'PS-PHOTO-005',
    oneOfOne: true,
    curatorialNote:
      'A Boujad boucherouite of exceptional chromatic intensity, woven from strips of recycled ' +
      'textile — each fragment a shard of some earlier garment, curtain or cloth. ' +
      'The composition is purely improvisational: arcs, sweeps and colour masses appear where ' +
      'the weaver\'s hand and the available materials converged. Crimson, cobalt blue, saffron, ' +
      'violet, sage green and ivory collide and dissolve across the surface. ' +
      'The boucherouite tradition transforms domestic waste into an art form that pre-empts ' +
      'Abstract Expressionism by decades.',
    curatorialNoteFr:
      'Un boucherouite Boujad d\'une intensité chromatique exceptionnelle, tissé à partir de bandes ' +
      'de textile recyclé — chaque fragment un éclat d\'un vêtement, rideau ou tissu antérieur. ' +
      'La composition est purement improvisationnelle : arcs, balayages et masses de couleur ' +
      'apparaissent là où la main de la tisseuse et les matériaux disponibles ont convergé. ' +
      'La tradition boucherouite transforme les déchets domestiques en forme d\'art.',
    motifs: [
      'improvised arc form',
      'colour mass field',
      'textile fragment mosaic',
      'asymmetric sweep',
    ],
    weaverNote: 'Recycled textiles — every shard carries a former life.',
    images: {
      primary: '/rugs/ps-photo-005-primary.jpg',
      summerSide: '/rugs/ps-photo-005-primary.jpg',
      winterSide: '/rugs/ps-photo-005-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P06 — Zemour Vintage Terracotta Diamond ──────────────────────────────────
  {
    slug: 'zemour-vintage-losange-terracotta',
    title: 'Zemour Vintage — Terracotta Diamond Lattice',
    titleFr: 'Zemour Vintage — Treillis de Losanges Terracotta',
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1960–1975',
    materials: 'Hand-spun live-sheep wool, madder root and walnut-hull dyes',
    dimensions: { w: 175, h: 290, unit: 'cm' },
    palette: ['terracotta', 'madder-red', 'saffron', 'charcoal', 'ivory', 'warm-brown'],
    inventoryNumber: 'PS-PHOTO-006',
    oneOfOne: true,
    curatorialNote:
      'A museum-grade Beni Zemmour carpet of the mid-twentieth century, densely knotted with ' +
      'a repeating all-over diamond lattice in terracotta, madder-red and saffron. ' +
      'Within each diamond a secondary nested form glows — warm ivory inside burnt amber inside ' +
      'deep madder — creating an almost three-dimensional sense of depth through colour alone. ' +
      'The fringes on both ends remain largely intact, and the pile shows the rich, slightly ' +
      'matted quality of aged live-sheep wool that deepens rather than fades with time. ' +
      'A defining piece of the Zemmour tradition at its zenith.',
    curatorialNoteFr:
      'Un tapis Beni Zemmour de qualité muséale du milieu du vingtième siècle, densément noué ' +
      'avec un treillis de losanges répétitif en terracotta, rouge garance et safran. ' +
      'Dans chaque losange une forme imbriquée secondaire brille — ivoire chaud dans l\'ambre brûlé ' +
      'dans la garance profonde — créant un sens presque tridimensionnel de la profondeur par la ' +
      'couleur seule. Une pièce déterminante de la tradition Zemmour à son zénith.',
    motifs: [
      'all-over diamond lattice',
      'nested lozenge',
      'chevron border',
      'stepped diamond fill',
      'selvedge knotted fringe',
    ],
    images: {
      primary: '/rugs/ps-photo-006-primary.jpg',
      summerSide: '/rugs/ps-photo-006-primary.jpg',
      winterSide: '/rugs/ps-photo-006-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── P07 — Azilal Kilim Multicolour Festive ───────────────────────────────────
  {
    slug: 'azilal-kilim-multicolore-festif',
    title: 'Azilal Kilim — Multicolour Festive Composition',
    titleFr: 'Kilim Azilal — Composition Multicolore Festive',
    region: 'Azilal',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1975–1995',
    materials: 'Hand-spun live-sheep wool and recycled textile strips, natural and synthetic dyes',
    dimensions: { w: 200, h: 300, unit: 'cm' },
    palette: ['teal', 'crimson', 'orange', 'ivory', 'black', 'olive', 'pink', 'warm-brown'],
    inventoryNumber: 'PS-PHOTO-007',
    oneOfOne: true,
    curatorialNote:
      'A festive and maximalist Azilal flatweave of extraordinary chromatic complexity. ' +
      'The composition is structured as a field of autonomous colour panels — teal stripes, ' +
      'black and white chessboard sections, crimson leaf forms, orange geometric fills and ' +
      'ivory ground passages — each a self-contained unit that nevertheless contributes to ' +
      'the overall exuberant whole. A small orange cross motif at centre acts as a focal point. ' +
      'This piece sits at the intersection of the kilim and boucherouite traditions, ' +
      'combining woven structure with the improvisational spirit of the rag rug.',
    curatorialNoteFr:
      'Un kilim Azilal festif et maximaliste d\'une complexité chromatique extraordinaire. ' +
      'La composition est structurée comme un champ de panneaux de couleur autonomes — rayures ' +
      'sarcelle, sections en damier noir et blanc, formes de feuilles cramoisies, remplissages ' +
      'géométriques orange et passages de fond ivoire — chacun une unité autonome qui contribue ' +
      'néanmoins à l\'ensemble exubérant global.',
    motifs: [
      'autonomous colour panel',
      'teal stripe register',
      'chessboard section',
      'orange cross motif',
      'leaf form',
      'mixed technique composition',
    ],
    images: {
      primary: '/rugs/ps-photo-007-primary.jpg',
      summerSide: '/rugs/ps-photo-007-primary.jpg',
      winterSide: '/rugs/ps-photo-007-primary.jpg',
      details: [],
    },
    featured: false,
  },

  // ════════════════════════════════════════════════════════════════════════════
  // EXISTING ENTRIES (unchanged)
  // ════════════════════════════════════════════════════════════════════════════

  // ── 01 — Tuareg Patchwork Kilim ──────────────────────────────────────────
  {
    slug: 'zemmour-grand-kilim-encyclopedique',
    title: 'Tuareg Patchwork Kilim — Sand Dunes',
    titleFr: `Kilim Patchwork Touareg — Dunes de Sable`,
    region: 'Taznakht',
    tribe: 'Tuareg',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1970–1985',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 400, h: 600, unit: 'cm' },
    palette: ['terracotta', 'saffron', 'slate-blue', 'sage', 'madder', 'ivory', 'charcoal'],
    inventoryNumber: 'PS-2025-001',
    oneOfOne: true,
    curatorialNote:
      'A monumental Tuareg flatweave from the Taznakht tradition, entirely reversible. ' +
      'The composition depicts the undulating sand dunes of the Sahara as understood by the Blue People — ' +
      'the nomadic Tuareg who have crossed the desert for centuries. ' +
      'Hundreds of autonomous motif-panels — diamond lattices, chevrons, stepped lozenges and micro-geometric fills — ' +
      'represent the ever-shifting patterns of desert sand seen from above. ' +
      'A slate-blue selvedge border and a saffron-gold outer band frame the composition. ' +
      'Entirely reversible — both faces carry equal visual power.',
    curatorialNoteFr:
      `Un kilim Touareg monumental de la tradition de Taznakht, entièrement réversible. ` +
      `La composition représente les dunes de sable ondulantes du Sahara telles que les comprennent ` +
      `les Hommes Bleus — les Touaregs nomades qui traversent le désert depuis des siècles. ` +
      `Des centaines de panneaux de motifs autonomes représentent les motifs sans cesse changeants ` +
      `du sable du désert vus du ciel. Entièrement réversible — les deux faces portent une égale puissance visuelle.`,
    motifs: [
      'sand dune pattern',
      'diamond lattice',
      'chevron register',
      'stepped lozenge',
      'micro-geometric fill',
      'brocaded cartouche',
    ],
    images: {
      primary: '/rugs/ps-2025-001-primary.jpg',
      summerSide: '/rugs/ps-2025-001-summer.jpg',
      winterSide: '/rugs/ps-2025-001-summer.jpg',
      details: [
        '/rugs/ps-2025-001-detail-1.jpg',
        '/rugs/ps-2025-001-detail-2.jpg',
      ],
    },
    featured: true,
  },

  // ── 02 — Nomadic Tree of Life ────────────────────────────────────────────
  {
    slug: 'zemmour-arbre-de-vie',
    title: 'Nomadic Tree of Life — Three Techniques',
    titleFr: `Tapis Nomade Arbre de Vie — Trois Techniques`,
    region: 'Taznakht',
    tribe: 'Nomadic',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1965–1980',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 400, h: 600, unit: 'cm' },
    palette: ['warm-grey', 'amber', 'charcoal', 'ivory', 'rust', 'navy', 'saffron'],
    inventoryNumber: 'PS-2025-002',
    oneOfOne: true,
    curatorialNote:
      'An extraordinary nomadic carpet combining three distinct weaving techniques in a single piece: ' +
      'knotted pile, flatweave and embroidery — a feat of rare technical mastery. ' +
      'The composition is organised around a magnificent bifurcating Tree of Life spreading symmetrically ' +
      'across a warm grey-beige ground, its branches built from stacked tribal panels in amber, black, ivory and rust. ' +
      'Entirely reversible, both faces reveal a different facet of the same design. ' +
      'At four by six metres this is one of the largest and most technically complex pieces in the collection.',
    curatorialNoteFr:
      `Un extraordinaire tapis nomade combinant trois techniques de tissage distinctes en une seule pièce : ` +
      `poil noué, tissage plat et broderie — un exploit de rare maîtrise technique. ` +
      `La composition est organisée autour d'un magnifique Arbre de Vie bifurquant se déployant ` +
      `symétriquement sur un fond gris-beige chaud. Entièrement réversible, les deux faces révèlent ` +
      `une facette différente du même dessin. À quatre par six mètres, c'est l'une des pièces les plus ` +
      `grandes et les plus complexes de la collection.`,
    motifs: [
      'tree of life',
      'bifurcating branch',
      'diamond panel',
      'zigzag register',
      'stepped cross',
      'chevron fill',
    ],
    weaverNote: 'Three techniques combined: knotted pile, flatweave and embroidery. Reversible.',
    images: {
      primary: '/rugs/ps-2025-002-primary.jpg',
      summerSide: '/rugs/ps-2025-002-summer.jpg',
      winterSide: '/rugs/ps-2025-002-primary.jpg',
      details: ['/rugs/ps-2025-002-detail-1.jpg'],
    },
    featured: true,
  },

  // ── 03 — Royal Arabic Medallion ──────────────────────────────────────────
  {
    slug: 'rabati-medaillon-champ-bleu',
    title: 'Royal Arabic Medallion Carpet',
    titleFr: `Tapis Royal Arabesque à Médaillon`,
    region: 'Rabat',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1960–1975',
    materials: 'Mercerised wool pile, cotton warp and weft, natural dyes',
    dimensions: { w: 300, h: 400, unit: 'cm' },
    palette: ['indigo-blue', 'ivory', 'blush-pink', 'sage-green', 'burgundy'],
    inventoryNumber: 'PS-2025-003',
    oneOfOne: true,
    curatorialNote:
      'A masterpiece of the royal Arabic carpet tradition, inspired by the refined architectural ornament ' +
      'of Moorish palaces and mosques. The serene indigo-blue field is punctuated by a single central ' +
      'floral star medallion in ivory, blush and sage, with matching corner spandrel rosettes echoing ' +
      'the central motif across all four quarters. A dense cream arabesque border frames the composition ' +
      'in the Persian tradition, faithfully transmitted through generations of Rabat city workshop weavers. ' +
      'Entirely reversible. Pile knot count is exceptionally fine.',
    curatorialNoteFr:
      `Un chef-d'œuvre de la tradition royale du tapis arabesque, inspiré par l'ornement architectural raffiné ` +
      `des palais et mosquées mauresques. Le champ bleu indigo serein est ponctué d'un seul médaillon ` +
      `étoilé central en ivoire, rose et sauge, avec des rosettes d'écoinçon correspondantes aux quatre coins. ` +
      `Une dense bordure arabesque crème encadre la composition dans la tradition persane, fidèlement ` +
      `transmise par les ateliers de la ville de Rabat. Entièrement réversible.`,
    motifs: [
      'central star medallion',
      'arabesque vine border',
      'corner spandrel rosette',
      'Moorish floral cartouche',
    ],
    images: {
      primary: '/rugs/ps-2025-003-primary.jpg',
      summerSide: '/rugs/ps-2025-003-primary.jpg',
      winterSide: '/rugs/ps-2025-003-primary.jpg',
      details: ['/rugs/ps-2025-003-detail-1.jpg'],
    },
    featured: true,
  },

  // ── 04 — Royal Cartouche Garden Carpet ───────────────────────────────────
  {
    slug: 'tapis-jardin-mamluk-vert',
    title: 'Royal Cartouche Garden Carpet',
    titleFr: `Tapis Jardin Royal à Cartouches`,
    region: 'Rabat',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1955–1970',
    materials: 'Wool pile on cotton foundation, natural and early synthetic dyes',
    dimensions: { w: 200, h: 290, unit: 'cm' },
    palette: ['sage-green', 'ivory', 'burgundy', 'ochre', 'lavender', 'navy', 'blush'],
    inventoryNumber: 'PS-2025-004',
    oneOfOne: true,
    curatorialNote:
      'A magnificent formal garden carpet structured as rows of octagonal cartouches, each containing ' +
      'a distinct polychrome floral or geometric medallion — no two alike. ' +
      'The design draws on the ancient tradition of representing paradise as a walled garden divided into ' +
      'geometric sections, each blooming with its own botanical universe in lavender, ivory, rust, ochre and navy. ' +
      'The multi-band border combines a diamond lattice guard with a continuous floral meander, ' +
      'giving the piece the gravity of a royal commission. Knotted pile of exceptional fineness.',
    curatorialNoteFr:
      `Un magnifique tapis de jardin formel structuré en rangées de cartouches octogonaux, chacun contenant ` +
      `un médaillon floral ou géométrique polychrome distinct — aucun identique. ` +
      `Le dessin puise dans l'ancienne tradition de représenter le paradis comme un jardin clos divisé en ` +
      `sections géométriques, chacune fleurissant avec son propre univers botanique en lavande, ivoire, ` +
      `rouille, ocre et marine. La bordure multi-bandes combine un garde en treillis de losanges avec ` +
      `un méandre floral continu, donnant à la pièce la gravité d'une commande royale.`,
    motifs: [
      'octagonal cartouche grid',
      'polychrome floral medallion',
      'paradise garden layout',
      'diamond lattice guard',
      'arabesque meander border',
    ],
    images: {
      primary: '/rugs/ps-2025-004-primary.jpg',
      summerSide: '/rugs/ps-2025-004-detail-1.jpg',
      winterSide: '/rugs/ps-2025-004-primary.jpg',
      details: ['/rugs/ps-2025-004-detail-1.jpg'],
    },
    featured: true,
  },

  // ── 06 — Vintage High Atlas Berber ───────────────────────────────────────
  {
    slug: 'high-atlas-bleu-ciel-minimaliste',
    title: 'Vintage High Atlas Berber Carpet',
    titleFr: `Tapis Berbère Vintage du Haut Atlas`,
    region: 'High Atlas',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1960–1980',
    materials: 'Live-sheep wool pile, vegetable-indigo dye, cotton warp — three weaving techniques',
    dimensions: { w: 200, h: 300, unit: 'cm' },
    palette: ['sky-blue', 'chalk-white', 'charcoal', 'ivory'],
    inventoryNumber: 'PS-2025-006',
    oneOfOne: true,
    curatorialNote:
      'A rare vintage Berber carpet from the High Atlas combining three distinct weaving techniques. ' +
      'The vast open field of washed indigo-blue is streaked with ivory where natural sheep wool shows ' +
      'through the vegetable dye, creating an atmospheric, cloud-like ground. ' +
      'Three parallel vertical bands — each terminated at the top by a small serrated chevron mark — ' +
      'traverse the field like standing stones, ancient boundary markers of the mountain tribes. ' +
      'A narrow black-and-white zigzag border frames all four sides. ' +
      'The combination of three techniques in one piece makes this an exceptionally rare find.',
    curatorialNoteFr:
      `Un rare tapis berbère vintage du Haut Atlas combinant trois techniques de tissage distinctes. ` +
      `Le vaste champ ouvert d'indigo bleu lavé est strié d'ivoire là où la laine naturelle transparaît ` +
      `à travers la teinture végétale, créant un fond atmosphérique comme un nuage. ` +
      `Trois bandes verticales parallèles traversent le champ comme des menhirs, anciens marqueurs ` +
      `de frontière des tribus de montagne. La combinaison de trois techniques en une seule pièce ` +
      `en fait une trouvaille exceptionnellement rare.`,
    motifs: [
      'open indigo field',
      'three vertical stripe bands',
      'serrated chevron marker',
      'zigzag border',
    ],
    images: {
      primary: '/rugs/ps-2025-006-primary.jpg',
      summerSide: '/rugs/ps-2025-006-detail-1.jpg',
      winterSide: '/rugs/ps-2025-006-primary.jpg',
      details: ['/rugs/ps-2025-006-detail-1.jpg'],
    },
    featured: true,
  },

  // ── 07 — Arabic-Amazigh Fusion ───────────────────────────────────────────
  {
    slug: 'boujad-champ-ecarlate-symboles',
    title: 'Arabic-Amazigh Fusion Carpet',
    titleFr: `Tapis Fusion Arabe-Amazigh`,
    region: 'Boujad',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: 'c. 2015–2022',
    materials: 'Live-sheep wool pile, natural scarlet dye, cotton warp',
    dimensions: { w: 200, h: 300, unit: 'cm' },
    palette: ['scarlet', 'vermilion', 'charcoal', 'ivory', 'gold', 'slate-blue'],
    inventoryNumber: 'PS-2025-007',
    oneOfOne: true,
    curatorialNote:
      'A bold and rare fusion of two distinct cultural traditions in a single carpet. ' +
      'The knotted pile technique represents the Arabic craft heritage, refined over centuries in the royal ' +
      'workshops of Morocco. The scattered Amazigh tribal symbols — nested diamonds, cross-hatch squares, ' +
      'zigzag serpents and framed cartouches — are placed asymmetrically across the blazing scarlet field ' +
      'in the free, autobiographical spirit of Amazigh women weavers. ' +
      'Together these two traditions create a dialogue between the structured Arabic aesthetic and ' +
      'the spontaneous Amazigh visual language — a carpet that carries the story of two cultures.',
    curatorialNoteFr:
      `Une fusion audacieuse et rare de deux traditions culturelles distinctes en un seul tapis. ` +
      `La technique du poil noué représente le patrimoine artisanal arabe, raffiné au fil des siècles ` +
      `dans les ateliers royaux du Maroc. Les symboles tribaux amazighs éparpillés — losanges imbriqués, ` +
      `carrés quadrillés, serpents en zigzag et cartouches encadrés — sont placés asymétriquement sur ` +
      `le champ écarlate flamboyant dans l'esprit libre et autobiographique des tisseuses amazighes. ` +
      `Ensemble, ces deux traditions créent un dialogue entre l'esthétique arabe structurée et le ` +
      `langage visuel spontané amazigh — un tapis qui porte l'histoire de deux cultures.`,
    motifs: [
      'Amazigh tribal talisman',
      'nested diamond',
      'cross-hatch square',
      'zigzag serpent',
      'serrated Arabic border',
    ],
    weaverNote: 'A unique fusion of Arabic knotted technique and Amazigh symbolic design vocabulary.',
    images: {
      primary: '/rugs/ps-2025-007-primary.jpg',
      summerSide: '/rugs/ps-2025-007-primary.jpg',
      winterSide: '/rugs/ps-2025-007-primary.jpg',
      details: ['/rugs/ps-2025-007-detail-1.jpg'],
    },
    featured: true,
  },

  // ── 08 — Saturated Zemmour Patchwork ────────────────────────────────────
  {
    slug: 'zemmour-kilim-patchwork-sature',
    title: 'Saturated Zemmour Patchwork Kilim',
    titleFr: `Kilim Patchwork Zemmour Saturé`,
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1965–1980',
    materials: 'Hand-spun live-sheep wool, vegetable and natural dyes',
    dimensions: { w: 215, h: 400, unit: 'cm' },
    palette: ['madder-red', 'deep-red', 'amber', 'navy-blue', 'ivory', 'saffron', 'charcoal'],
    inventoryNumber: 'PS-2025-008',
    oneOfOne: true,
    curatorialNote:
      'A virtuoso patchwork kilim in a bolder and more saturated palette than any other Zemmour ' +
      'piece in the collection. The composition unfolds in large irregular panels — each a distinct ' +
      'mini-carpet in its own right — combining deep madder-reds, burnt amber, cobalt navy and ivory ' +
      'in complex geometric sequences: interlocking chevrons, chessboard fields, reciprocal triangles, ' +
      'diagonal stripe lattices and bold arrowhead bands. No panel repeats, yet the whole reads as a ' +
      'masterfully controlled totality. A museum-grade example of the Zemmour patchwork tradition.',
    curatorialNoteFr:
      `Un kilim patchwork virtuose dans une palette plus audacieuse et plus saturée que toute autre ` +
      `pièce Zemmour de la collection. La composition se déploie en grands panneaux irréguliers ` +
      `— chacun un mini-tapis distinct en son propre droit — combinant des rouges garance profonds, ` +
      `de l'ambre brûlé, du marine cobalt et de l'ivoire dans des séquences géométriques complexes. ` +
      `Aucun panneau ne se répète, mais l'ensemble se lit comme une totalité magistralement contrôlée.`,
    motifs: [
      'interlocking chevron',
      'chessboard field',
      'reciprocal triangle',
      'diagonal stripe lattice',
      'arrowhead band',
      'large irregular patch panel',
    ],
    images: {
      primary: '/rugs/ps-2025-008-primary.jpg',
      summerSide: '/rugs/WhatsApp Image 2026-05-17 at 07.03.04.jpeg',
      winterSide: '/rugs/ps-2025-008-primary.jpg',
      details: [],
    },
    featured: true,
  },

  // ── 09 — Azilal Abstract Ivory ───────────────────────────────────────────
  {
    slug: 'azilal-abstrait-ivoire-couleurs',
    title: 'Azilal Abstract Ivory — Colour Field',
    titleFr: `Azilal Abstrait Ivoire — Champ de Couleur`,
    region: 'Azilal',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1975–1990',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 250, h: 310, unit: 'cm' },
    palette: ['ivory', 'crimson', 'sky-blue', 'olive', 'peach', 'teal', 'charcoal', 'ochre'],
    inventoryNumber: 'PS-2025-009',
    oneOfOne: true,
    curatorialNote:
      'A bold contemporary Azilal carpet in the autobiographical tradition of the High Atlas Berber weavers. ' +
      'Against a vast ivory field, irregular colour blocks — crimson, sky-blue, olive, peach and teal — ' +
      'float freely across the composition, connected by sinuous black outline contours that divide the ground ' +
      'like the tributaries of a river seen from above. ' +
      'The overall effect recalls abstract expressionist painting yet remains entirely rooted in the ' +
      'improvisational visual language of Amazigh women weavers. Long original fringes on both ends intact.',
    curatorialNoteFr:
      `Un audacieux tapis Azilal dans la tradition autobiographique des tisseuses berbères du Haut Atlas. ` +
      `Sur un vaste champ ivoire, des blocs de couleur irréguliers — cramoisi, bleu ciel, olive, pêche et sarcelle — ` +
      `flottent librement sur la composition, reliés par des contours sinueux noirs qui divisent le fond ` +
      `comme les affluents d'une rivière vue du ciel. L'effet d'ensemble rappelle la peinture expressionniste ` +
      `abstraite tout en restant entièrement ancré dans le langage visuel improvisé des tisseuses amazighes.`,
    motifs: [
      'free-form colour block',
      'sinuous outline contour',
      'floating diamond',
      'irregular geometric patch',
      'open ivory field',
    ],
    images: {
      primary: '/rugs/ps-2025-009-primary.jpg',
      summerSide: '/rugs/ps-2025-009-summer.jpg',
      winterSide: '/rugs/ps-2025-009-primary.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 10 — Mrirt Wavy Stripe ──────────────────────────────────────────────
  {
    slug: 'mrirt-ondulations-terre',
    title: 'Mrirt Wave Carpet — Earth Frequencies',
    titleFr: `Tapis Mrirt Vagues — Fréquences Terrestres`,
    region: 'Mrirt',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1970–1985',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 180, h: 240, unit: 'cm' },
    palette: ['charcoal', 'dusty-rose', 'sage-green', 'terracotta', 'ivory', 'warm-grey'],
    inventoryNumber: 'PS-2025-010',
    oneOfOne: true,
    curatorialNote:
      'A hypnotic Mrirt carpet in which undulating vertical wave bands traverse the entire field from ' +
      'selvedge to selvedge, creating a sense of rhythmic movement reminiscent of geological strata or ' +
      'topographic contour lines. The palette is earthy and restrained — charcoal black, dusty rose, ' +
      'sage green, terracotta and ivory — yet the interplay of warm and cool tones gives the surface ' +
      'an unexpected luminosity. A rare example of the Mrirt wave tradition at its most refined.',
    curatorialNoteFr:
      `Un tapis Mrirt hypnotique dans lequel des bandes de vagues verticales ondulantes traversent tout ` +
      `le champ d'une lisière à l'autre, créant un sens du mouvement rythmique rappelant les strates ` +
      `géologiques ou les courbes de niveau topographiques. La palette est terreuse et retenue — noir ` +
      `charbon, rose poussiéreux, vert sauge, terracotta et ivoire — pourtant l'interaction des tons ` +
      `chauds et froids donne à la surface une luminosité inattendue.`,
    motifs: [
      'undulating wave band',
      'vertical stripe flow',
      'geological strata pattern',
      'irregular contour line',
    ],
    images: {
      primary: '/rugs/ps-2025-010-primary.jpg',
      summerSide: '/rugs/ps-2025-010-summer.jpg',
      winterSide: '/rugs/ps-2025-010-primary.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 11 — Middle Atlas Amazigh Encyclopaedia ──────────────────────────────
  {
    slug: 'middle-atlas-encyclopedie-amazigh',
    title: 'Middle Atlas Amazigh Encyclopaedia Carpet',
    titleFr: `Tapis Encyclopédie Amazigh du Moyen Atlas`,
    region: 'Middle Atlas',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1965–1980',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 220, h: 290, unit: 'cm' },
    palette: ['sage-green', 'terracotta', 'charcoal', 'ivory', 'ochre', 'olive', 'rust'],
    inventoryNumber: 'PS-2025-011',
    oneOfOne: true,
    curatorialNote:
      'An extraordinary Middle Atlas carpet functioning as a visual encyclopaedia of Amazigh tribal symbols. ' +
      'Against a washed sage-green field, hundreds of autonomous motifs are scattered freely: tent forms, ' +
      'arrowheads, zigzag serpents, diamond registers, human and animal silhouettes, tool forms and ' +
      'architectural outlines — each a glyph in the weaver\'s personal visual language. ' +
      'A dense geometric border of alternating coloured panels frames all four sides. ' +
      'No two readings of this carpet are the same; every viewing reveals new hidden symbols.',
    curatorialNoteFr:
      `Un extraordinaire tapis du Moyen Atlas fonctionnant comme une encyclopédie visuelle des symboles ` +
      `tribaux amazighs. Sur un champ vert sauge lavé, des centaines de motifs autonomes sont éparpillés ` +
      `librement : formes de tente, pointes de flèche, serpents en zigzag, registres de losanges, ` +
      `silhouettes humaines et animales, formes d'outils et contours architecturaux — chacun un glyphe ` +
      `dans le langage visuel personnel de la tisseuse. Aucune lecture de ce tapis n'est identique.`,
    motifs: [
      'tent form',
      'arrowhead glyph',
      'zigzag serpent',
      'human silhouette',
      'animal form',
      'architectural outline',
      'diamond register',
      'scattered field composition',
    ],
    images: {
      primary: '/rugs/ps-2025-011-primary.jpg',
      summerSide: '/rugs/ps-2025-011-summer.jpg',
      winterSide: '/rugs/ps-2025-011-primary.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 12 — Zemour Silver Diamond ───────────────────────────────────────────
  {
    slug: 'zemour-diamant-argent-blanc',
    title: 'Zemour Silver Diamond Flatweave',
    titleFr: `Kilim Zemour Diamant Argent`,
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1970–1985',
    materials: 'Hand-spun wool, natural undyed fleece, silver-grey and ivory tones',
    dimensions: { w: 200, h: 320, unit: 'cm' },
    palette: ['silver-grey', 'ivory', 'warm-white', 'taupe', 'charcoal'],
    inventoryNumber: 'PS-2025-012',
    oneOfOne: true,
    curatorialNote:
      'A rare tonal Zemour flatweave in an almost entirely neutral palette of silver-grey, ivory and warm white — ' +
      'exceptional in a tradition more commonly associated with vivid colour. ' +
      'The field is structured around a formal grid of nested diamond medallions and dense geometric fill panels, ' +
      'alternating between silver-grey and ivory grounds in a quiet, breathing rhythm. ' +
      'Multiple horizontal register bands of intricate small-scale pattern frame the central field. ' +
      'The restraint of the palette throws the extraordinary precision of the weaving into sharp relief.',
    curatorialNoteFr:
      `Un rare kilim Zemour tonal dans une palette presque entièrement neutre de gris argenté, ivoire ` +
      `et blanc chaud — exceptionnel dans une tradition plus communément associée aux couleurs vives. ` +
      `Le champ est structuré autour d'une grille formelle de médaillons losangés imbriqués et de panneaux ` +
      `de remplissage géométriques denses, alternant entre fonds gris argenté et ivoire dans un rythme ` +
      `tranquille. La retenue de la palette met en relief la précision extraordinaire du tissage.`,
    motifs: [
      'nested diamond medallion',
      'geometric fill panel',
      'alternating ground grid',
      'horizontal register band',
      'small-scale intricate pattern',
    ],
    images: {
      primary: '/rugs/ps-2025-012-primary.jpg',
      summerSide: '/rugs/ps-2025-012-summer.jpg',
      winterSide: '/rugs/ps-2025-012-primary.jpg',
      details: [],
    },
    featured: false,
  },
]
