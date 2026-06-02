// data/rugs.ts — Cosyrac

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
  | 'Ait Youssef'
  | 'Ait Isaac'
  | 'Ait Jaacob'

export type Technique = 'knotted' | 'flatweave' | 'rag'

export interface Rug {
  slug: string
  title: string
  titleFr: string
  region: Region
  tribe?: string
  technique: Technique
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

  // ── 06 — High Atlas Berber ───────────────────────────────────────
  {
    slug: 'high-atlas-bleu-ciel-minimaliste',
    title: 'High Atlas Berber Carpet',
    titleFr: `Tapis Berbère du Haut Atlas`,
    region: 'High Atlas',
    technique: 'knotted',
    yearRange: 'c. 1960–1980',
    materials: 'Live-sheep wool pile, vegetable-indigo dye, cotton warp — three weaving techniques',
    dimensions: { w: 200, h: 300, unit: 'cm' },
    palette: ['sky-blue', 'chalk-white', 'charcoal', 'ivory'],
    inventoryNumber: 'PS-2025-006',
    oneOfOne: true,
    curatorialNote:
      'A rare Berber carpet from the High Atlas combining three distinct weaving techniques. ' +
      'The vast open field of washed indigo-blue is streaked with ivory where natural sheep wool shows ' +
      'through the vegetable dye, creating an atmospheric, cloud-like ground. ' +
      'Three parallel vertical bands — each terminated at the top by a small serrated chevron mark — ' +
      'traverse the field like standing stones, ancient boundary markers of the mountain tribes. ' +
      'A narrow black-and-white zigzag border frames all four sides. ' +
      'The combination of three techniques in one piece makes this an exceptionally rare find.',
    curatorialNoteFr:
      `Un rare tapis berbère du Haut Atlas combinant trois techniques de tissage distinctes. ` +
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

  // ── 13 — Beni Ourain Ivory Geometric ────────────────────────────────────
  {
    slug: 'beni-ourain-ivoire-geometrique',
    title: 'Beni Ourain Ivory — Geometric Contours',
    titleFr: 'Beni Ourain Ivoire — Contours Géométriques',
    region: 'Beni Ourain',
    technique: 'knotted',
    yearRange: 'c. 2020–2025',
    materials: 'Live-sheep wool, natural undyed ivory fleece',
    dimensions: { w: 250, h: 310, unit: 'cm' },
    palette: ['ivory', 'warm-white', 'natural-grey'],
    inventoryNumber: 'PS-2025-013',
    oneOfOne: true,
    curatorialNote:
      'A serene large-format Beni Ourain in natural undyed ivory wool, structured around a series of ' +
      'concentric angular contour lines that radiate outward from a central chevron spine. ' +
      'The relief carving technique creates subtle shadow play across the deep pile, giving the ' +
      'composition a sculptural, almost topographic quality. Classic hand-knotted fringes on both ends ' +
      'complete this quietly monumental piece.',
    curatorialNoteFr:
      "Un grand Beni Ourain serein en laine ivoire naturelle non teinte, structuré autour d'une série " +
      "de lignes de contour angulaires concentriques qui rayonnent à partir d'une colonne centrale en " +
      "chevron. La technique de sculpture en relief crée un jeu d'ombres subtil sur le poil profond, " +
      "conférant à la composition une qualité sculpturale et presque topographique.",
    motifs: [
      'concentric angular contour',
      'chevron spine',
      'radial geometric band',
      'sculptural relief carving',
    ],
    images: {
      primary: '/rugs/ps-2025-013-primary.jpg.png',
      summerSide: '/rugs/ps-2025-013-summer.jpg.jpeg',
      winterSide: '/rugs/ps-2025-013-primary.jpg.png',
      details: [],
    },
    featured: false,
  },

  // ── 14 — Beni Ourain Ivory Tree ──────────────────────────────────────────
  {
    slug: 'beni-ourain-ivoire-losanges',
    title: 'Beni Ourain Ivory — Diamond Lattice',
    titleFr: 'Beni Ourain Ivoire — Treillis de Losanges',
    region: 'Beni Ourain',
    technique: 'knotted',
    yearRange: 'c. 2020–2025',
    materials: 'Live-sheep wool, natural undyed ivory fleece, charcoal wool',
    dimensions: { w: 250, h: 310, unit: 'cm' },
    palette: ['ivory', 'warm-white', 'charcoal'],
    inventoryNumber: 'PS-2025-014',
    oneOfOne: true,
    curatorialNote:
      'A quintessential Beni Ourain in the classic diamond lattice tradition — the most iconic motif ' +
      'of the Middle Atlas Berber weaving heritage. Against a vast field of natural undyed ivory wool, ' +
      'a continuous diagonal grid of charcoal lines forms large open diamonds across the entire surface. ' +
      'The deep, cloud-soft pile and the purity of the two-tone palette give this piece a timeless, ' +
      'almost meditative presence. Decorative knotted fringes with a fine striped border on both ends.',
    curatorialNoteFr:
      "Un Beni Ourain quintessentiel dans la tradition classique du treillis de losanges — le motif le " +
      "plus iconique du patrimoine de tissage berbère du Moyen Atlas. Sur un vaste champ de laine ivoire " +
      "naturelle non teinte, un treillis diagonal continu de lignes charbon forme de grands losanges ouverts " +
      "sur toute la surface. Le poil profond et doux comme un nuage et la pureté de la palette bicolore " +
      "confèrent à cette pièce une présence intemporelle, presque méditative.",
    motifs: [
      'diamond lattice',
      'diagonal grid',
      'open lozenge field',
      'striped fringe border',
    ],
    images: {
      primary: '/rugs/ps-2025-014-primary.jpg',
      summerSide: '/rugs/ps-2025-014-summer.jpg',
      winterSide: '/rugs/ps-2025-014-primary.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 14 — Ait Youssef Diamond Lattice ──────────────────────────────────────
  {
    slug: 'ait-youssef-diamond-lattice',
    title: 'Ait Youssef Diamond Lattice Carpet',
    titleFr: 'Tapis à Treillis de Losanges Ait Youssef',
    region: 'Middle Atlas',
    tribe: 'Ait Youssef',
    technique: 'knotted',
    yearRange: 'c. 1955–1975',
    materials: 'Wool pile on wool foundation, natural dyes — madder, saffron, walnut',
    dimensions: { w: 150, h: 220, unit: 'cm' },
    palette: ['#8B3A2E', '#C8843A', '#6B6B2E', '#F4EFE7', '#5C4A2E'],
    inventoryNumber: 'CS-2026-014',
    oneOfOne: true,
    curatorialNote:
      'A densely hand-knotted carpet from the Ait Youssef tribe of the Middle Atlas, woven on a warm madder-rose field. The central composition is a repeating diagonal diamond lattice enclosing small geometric star medallions in golden amber, olive green, and ivory — motifs drawn directly from the tattoo vocabulary of Ait Youssef women weavers. A lush outer border carries a continuous vine-and-flower motif in cream and deep rust. The wool, sheared from live sheep and spun by hand, retains a rich lanolin lustre. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un tapis noué à la main de la tribu Ait Youssef du Moyen Atlas, tissé sur un fond madder-rosé. La composition centrale est un treillis diagonal de losanges enclosant de petits médaillons géométriques en ambre doré, vert olive et ivoire — des motifs tirés du vocabulaire des tatouages des femmes Ait Youssef. Une bordure extérieure luxuriante porte un motif de vigne en crème et rouille profonde. Laine de mouton vivant, filée à la main. Pièce unique.',
    motifs: ['diamond lattice', 'star medallion', 'vine border', 'geometric rosette'],
    images: {
      primary: '/rugs/rug-14-editorial.png',
      summerSide: '/rugs/rug-14-primary.jpg',
      winterSide: '/rugs/rug-14-reverse.jpg',
      details: [],
    },
    featured: true,
  },

  // ── 15 — Ait Isaac Garden Compartment ─────────────────────────────────────
  {
    slug: 'ait-isaac-garden-compartment',
    title: 'Ait Isaac Garden Compartment Carpet',
    titleFr: 'Tapis à Compartiments Jardin Ait Isaac',
    region: 'Middle Atlas',
    tribe: 'Ait Isaac',
    technique: 'knotted',
    yearRange: 'c. 1950–1970',
    materials: 'Wool pile on wool foundation, natural dyes — plum berry, saffron, henna',
    dimensions: { w: 155, h: 235, unit: 'cm' },
    palette: ['#6B2D6B', '#7B9B6B', '#C8843A', '#F4EFE7', '#2A2A2A'],
    inventoryNumber: 'CS-2026-015',
    oneOfOne: true,
    curatorialNote:
      'An exceptional carpet from the Ait Isaac tribe, structured as a garden of compartments on a deep burgundy-plum ground. Each square section contains a distinct geometric flower or star — no two identical — drawn from the full symbolic repertoire of the tribe. A central elongated medallion anchors the composition. A visual diary of Amazigh tribal memory, woven one motif at a time from live-sheep wool and natural dyes. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un tapis exceptionnel de la tribu Ait Isaac, structuré comme un jardin de compartiments sur un fond bordeaux-prune profond. Chaque section carrée contient une fleur ou une étoile géométrique distincte — aucune n\'est identique — tirée du répertoire symbolique complet de la tribu. Un médaillon central allongé ancre la composition. Un journal visuel de la mémoire tribale amazighe. Pièce unique.',
    motifs: ['garden compartments', 'star flower', 'central medallion', 'geometric border'],
    images: {
      primary: '/rugs/rug-15-editorial.png',
      summerSide: '/rugs/rug-15-primary.png',
      winterSide: '/rugs/rug-15-reverse.png',
      details: [],
    },
    featured: true,
  },

  // ── 16 — Ait Jaacob Quadrant Medallion ────────────────────────────────────
  {
    slug: 'ait-jaacob-quadrant-medallion',
    title: 'Ait Jaacob Quadrant Medallion Carpet',
    titleFr: 'Tapis à Médaillons en Quadrant Ait Jaacob',
    region: 'Middle Atlas',
    tribe: 'Ait Jaacob',
    technique: 'knotted',
    yearRange: 'c. 1960–1980',
    materials: 'Wool pile on wool foundation, natural dyes — madder, saffron, indigo',
    dimensions: { w: 165, h: 250, unit: 'cm' },
    palette: ['#C84B2E', '#C8843A', '#2A2A2A', '#F4EFE7', '#8B3A2E'],
    inventoryNumber: 'CS-2026-016',
    oneOfOne: true,
    curatorialNote:
      'A vivid and commanding carpet from the Ait Jaacob tribe, woven in burnt orange and amber on a terra cotta ground. The field is organised into large rectangular panels, each containing bold octagonal medallion forms with geometric star interiors in deep charcoal and ivory. The outer border carries a dense animal and geometric frieze characteristic of the Ait Jaacob weaving tradition. The powerful palette speaks to the tribe\'s celebrated mastery of natural dye. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un tapis éclatant de la tribu Ait Jaacob, tissé en orange brûlé et ambre sur fond terre cuite. Le champ est organisé en grands panneaux rectangulaires contenant chacun de boldies formes de médaillons octogonaux aux intérieurs en étoile géométrique. La bordure extérieure porte une frise animale dense. Pièce unique.',
    motifs: ['octagonal medallion', 'quadrant panels', 'animal frieze', 'geometric star'],
    images: {
      primary: '/rugs/rug-16-editorial.png',
      summerSide: '/rugs/rug-16-primary.jpg',
      winterSide: '/rugs/rug-16-reverse.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 17 — Ait Youssef Twin Star ─────────────────────────────────────────────
  {
    slug: 'ait-youssef-twin-star',
    title: 'Ait Youssef Twin Star Carpet',
    titleFr: 'Tapis aux Deux Étoiles Ait Youssef',
    region: 'Middle Atlas',
    tribe: 'Ait Youssef',
    technique: 'knotted',
    yearRange: 'c. 1955–1975',
    materials: 'Wool pile on wool foundation, natural dyes — madder, saffron, indigo',
    dimensions: { w: 175, h: 280, unit: 'cm' },
    palette: ['#D4785A', '#1A1715', '#D4B800', '#FFFFFF', '#C84B2E'],
    inventoryNumber: 'CS-2026-017',
    oneOfOne: true,
    curatorialNote:
      'A graphically arresting carpet from the Ait Youssef tribe, woven on a warm salmon-terracotta ground. Two large octagonal star medallions in jet black and bright saffron yellow dominate the central field, their bold geometry creating a striking visual rhythm that sits at the intersection of tribal tradition and pure abstract design. The wide ornamental border is filled with a dense grid of small geometric cartouches in black, yellow, and ivory. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un tapis saisissant de la tribu Ait Youssef, tissé sur un fond saumon-terracotta. Deux grands médaillons étoilés octogonaux en noir de jais et jaune safran dominent le champ central, leur géométrie audacieuse se situant à l\'intersection de la tradition tribale et du design abstrait pur. Laine de mouton vivant, teintures naturelles. Pièce unique.',
    motifs: ['twin star medallion', 'octagonal frame', 'cartouche border', 'geometric grid'],
    images: {
      primary: '/rugs/rug-17-editorial.png',
      summerSide: '/rugs/rug-17-primary.jpg',
      winterSide: '/rugs/rug-17-reverse.jpg',
      details: [],
    },
    featured: true,
  },

  // ── 18 — Ait Isaac Middle Atlas Hanbel ────────────────────────────────────
  {
    slug: 'ait-isaac-hanbel-flatweave',
    title: 'Ait Isaac Middle Atlas Hanbel',
    titleFr: 'Hanbel du Moyen Atlas Ait Isaac',
    region: 'Middle Atlas',
    tribe: 'Ait Isaac',
    technique: 'flatweave',
    yearRange: 'c. 1950–1970',
    materials: 'Flatwoven wool, natural dyes — walnut, saffron, madder',
    dimensions: { w: 145, h: 295, unit: 'cm' },
    palette: ['#5C3A1E', '#C8843A', '#F4EFE7', '#8B4513', '#2A2A2A'],
    inventoryNumber: 'CS-2026-018',
    oneOfOne: true,
    curatorialNote:
      'A rare flatweave hanbel from the Ait Isaac tribe of the Middle Atlas, woven in rich tobacco-brown and amber with horizontal registers of diamond and lozenge motifs in ivory and sienna. The top and bottom ends transition into broad flatwoven stripe bands — a structural feature unique to the flatweave tradition of the Atlas tribes. Lighter and more transportable than a knotted pile carpet, the hanbel was woven for both daily use and ceremonial occasions. Made entirely from live-sheep wool with natural plant dyes. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un rare hanbel à tissage plat de la tribu Ait Isaac du Moyen Atlas, tissé en brun tabac riche et ambre avec des registres horizontaux de motifs en losange en ivoire et sienna. Les extrémités se transforment en larges bandes rayées — une caractéristique structurelle unique à la tradition du tissage plat des tribus de l\'Atlas. Laine de mouton vivant, teintures naturelles. Pièce unique.',
    motifs: ['diamond register', 'lozenge motif', 'stripe band', 'flatweave selvedge'],
    images: {
      primary: '/rugs/rug-18-editorial.png',
      summerSide: '/rugs/rug-18-primary.jpg',
      winterSide: '/rugs/rug-18-reverse.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 19 — Ait Jaacob Diamond Field ─────────────────────────────────────────
  {
    slug: 'ait-jaacob-diamond-field',
    title: 'Ait Jaacob Diamond Field Berber Carpet',
    titleFr: 'Tapis Berbère à Champ de Losanges Ait Jaacob',
    region: 'Middle Atlas',
    tribe: 'Ait Jaacob',
    technique: 'knotted',
    yearRange: 'c. 1945–1965',
    materials: 'Wool pile on wool foundation, natural dyes — rose madder, weld, indigo',
    dimensions: { w: 200, h: 285, unit: 'cm' },
    palette: ['#C49080', '#8B9B6B', '#7B9B9B', '#F4EFE7', '#8B3A2E'],
    inventoryNumber: 'CS-2026-019',
    oneOfOne: true,
    curatorialNote:
      'A large and soulful carpet from the Ait Jaacob tribe whose rose-terracotta ground carries the beautiful wear of decades of use. The full-field diamond lattice, rendered in dusty sage green, pale turquoise, and ivory, has developed a soft abrashed patina that no new piece can replicate. Each diamond contains nested geometric sub-motifs drawn from the protective symbol vocabulary of Ait Jaacob women weavers — signs worn on the face and hands for protection, identity, and blessing. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un grand tapis plein d\'âme de la tribu Ait Jaacob, dont le fond rose-terracotta porte la belle usure de décennies d\'utilisation. Le treillis de losanges sur tout le champ, rendu en vert sauge poussiéreux, turquoise pâle et ivoire, a développé une patine abrashée douce qu\'aucune pièce neuve ne peut reproduire. Chaque losange contient des sous-motifs géométriques imbriqués. Pièce unique.',
    motifs: ['full-field diamond lattice', 'nested geometric motif', 'protective symbol', 'abrashed field'],
    images: {
      primary: '/rugs/rug-19-editorial.png',
      summerSide: '/rugs/rug-19-primary.jpg',
      winterSide: '/rugs/rug-19-reverse.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 20 — Ait Youssef Aubergine Compartment ────────────────────────────────
  {
    slug: 'ait-youssef-aubergine-compartment',
    title: 'Ait Youssef Aubergine Compartment Carpet',
    titleFr: 'Tapis à Compartiments Aubergine Ait Youssef',
    region: 'Middle Atlas',
    tribe: 'Ait Youssef',
    technique: 'knotted',
    yearRange: 'c. 1955–1975',
    materials: 'Wool pile on wool foundation, natural dyes — plum berry, saffron, walnut',
    dimensions: { w: 170, h: 245, unit: 'cm' },
    palette: ['#5C2D6B', '#F4EFE7', '#C8843A', '#6B4B2E', '#2A2A2A'],
    inventoryNumber: 'CS-2026-020',
    oneOfOne: true,
    curatorialNote:
      'A magnificent carpet from the Ait Youssef tribe in deep aubergine-purple, structured around a central prayer-niche medallion outlined in ivory and surrounded by a dense field of individual geometric compartments. Each compartment holds a distinct tribal symbol — crosses, eight-pointed stars, diamond formations — in ivory, saffron-orange, and warm brown. The outer border carries a precise geometric meander in black and ivory. Every motif in this piece corresponds to a protective symbol in the tattoo tradition of Amazigh women. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un magnifique tapis de la tribu Ait Youssef en aubergine-violet profond, structuré autour d\'un médaillon central en forme de niche de prière entouré d\'un champ dense de compartiments géométriques individuels. Chaque compartiment renferme un symbole tribal distinct. La bordure extérieure porte un méandre géométrique précis. Pièce unique.',
    motifs: ['prayer niche medallion', 'geometric compartments', 'eight-pointed star', 'meander border'],
    images: {
      primary: '/rugs/rug-20-editorial.png',
      summerSide: '/rugs/rug-20-primary.jpg',
      winterSide: '/rugs/rug-20-reverse.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 21 — Ait Isaac Cedar Grove Runner ─────────────────────────────────────
  {
    slug: 'ait-isaac-cedar-grove-runner',
    title: 'Ait Isaac Cedar Grove Runner',
    titleFr: 'Couloir à la Cédraie Ait Isaac',
    region: 'Middle Atlas',
    tribe: 'Ait Isaac',
    technique: 'knotted',
    yearRange: 'c. 1950–1970',
    materials: 'Wool pile on wool foundation, natural dyes — madder, walnut hull',
    dimensions: { w: 135, h: 320, unit: 'cm' },
    palette: ['#8B2020', '#F4EFE7', '#2A2A2A', '#C8843A', '#8B3A2E'],
    inventoryNumber: 'CS-2026-021',
    oneOfOne: true,
    curatorialNote:
      'A long and visually hypnotic runner from the Ait Isaac tribe, woven on a deep crimson-madder ground and entirely covered in a repeating pattern of stylised cedar tree motifs in ivory and charcoal. The trees rise in tight rows across the full field — an ancient motif in Atlas weaving representing the cedar forests of the Middle Atlas, and the Amazigh ideas of growth, protection, and continuity. A bottom chevron band closes the composition with bold geometric energy. One of the most distinctive pieces in the collection. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un long couloir hypnotisant de la tribu Ait Isaac, tissé sur un fond cramoisi-madder profond et entièrement recouvert d\'un motif répétitif d\'arbres de cèdre stylisés en ivoire et charbon. Les arbres s\'élèvent en rangées serrées — un motif ancien dans le tissage de l\'Atlas représentant les forêts de cèdres du Moyen Atlas. Pièce unique.',
    motifs: ['cedar tree', 'repeating grove', 'chevron base', 'tightly packed field'],
    images: {
      primary: '/rugs/rug-21-editorial.png',
      summerSide: '/rugs/rug-21-primary.jpg',
      winterSide: '/rugs/rug-21-reverse.jpg',
      details: [],
    },
    featured: false,
  },

  // ── 22 — Ait Jaacob Ruby Niche Ceremonial ─────────────────────────────────
  {
    slug: 'ait-jaacob-ruby-niche-ceremonial',
    title: 'Ait Jaacob Ruby Niche Ceremonial Carpet',
    titleFr: 'Tapis Cérémoniel à Niche Rubis Ait Jaacob',
    region: 'Middle Atlas',
    tribe: 'Ait Jaacob',
    technique: 'knotted',
    yearRange: 'c. 1945–1965',
    materials: 'Wool pile on wool foundation, natural dyes — madder, pomegranate, henna',
    dimensions: { w: 150, h: 290, unit: 'cm' },
    palette: ['#8B1A1A', '#F4EFE7', '#C8843A', '#2A2A2A', '#4A8B8B'],
    inventoryNumber: 'CS-2026-022',
    oneOfOne: true,
    curatorialNote:
      'A deeply expressive ceremonial carpet from the Ait Jaacob tribe, woven in saturated ruby-crimson from live-sheep wool dyed with madder and pomegranate. The composition is built around a bold vertical axis of stacked ceremonial niche forms, each containing gestural sub-motifs — abstract shields, comb symbols, and protective talismanic marks — woven with the freedom and confidence of a master hand. The borders carry dense geometric marks in ivory and charcoal. The wild original fringes of teal, cream, and rust are untrimmed and entirely authentic. Vintage and one of a kind.',
    curatorialNoteFr:
      'Un tapis cérémoniel profondément expressif de la tribu Ait Jaacob, tissé en rouge rubis saturé à partir de laine de mouton vivant teinte à la garance et à la grenade. La composition est construite autour d\'un axe vertical audacieux de formes de niche cérémonielles empilées. Les franges originales sauvages en sarcelle, crème et rouille sont non taillées et entièrement authentiques. Pièce unique.',
    motifs: ['stacked niche forms', 'ceremonial shield', 'comb symbol', 'talismanic mark'],
    images: {
      primary: '/rugs/rug-22-editorial.png',
      summerSide: '/rugs/rug-22-primary.jpg',
      winterSide: '/rugs/rug-22-reverse.jpg',
      details: [],
    },
    featured: false,
  },
]

// --- Image integrity: de-duplicate reversible faces -------------------------
// A piece is only shown as "reversible / two faces" when it genuinely has a
// distinct summer face AND a distinct winter face. Historically some entries
// reused the primary image as the winter (or summer) side, which made the
// detail-page toggle show the same photo twice. Here we blank any side image
// that merely repeats another, so the UI hides the toggle unless the faces
// are real and different.
for (const r of rugs) {
  const primary = r.images.primary
  if (r.images.summerSide === primary) r.images.summerSide = ''
  if (r.images.winterSide === primary || r.images.winterSide === r.images.summerSide) {
    r.images.winterSide = ''
  }
}
