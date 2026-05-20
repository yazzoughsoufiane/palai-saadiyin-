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
  'tapis-jardin-mamluk-vert',
  'rabati-medaillon-champ-bleu',
  'high-atlas-bleu-ciel-minimaliste',
  'boujad-champ-ecarlate-symboles',
  'zemmour-grand-kilim-encyclopedique',
  'zemmour-arbre-de-vie',
  'zemmour-kilim-patchwork-sature',
]


export const rugs: Rug[] = [

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
      summerSide: '/rugs/WhatsApp Image 2026-05-17 at 07.03.04.jpeg',
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
]
