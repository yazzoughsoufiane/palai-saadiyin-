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
    summerSide?: string
    winterSide?: string
    details?: string[]
  }
  featured?: boolean
}

// ── Helper functions ────────────────────────────────────────────────────────

export function getRugBySlug(slug: string): Rug | undefined {
  return rugs.find((r) => r.slug === slug)
}

export function getFeaturedRugs(): Rug[] {
  return rugs.filter((r) => r.featured)
}

// ── All regions for filter UI ───────────────────────────────────────────────

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

// ── Rug data ────────────────────────────────────────────────────────────────

export const rugs: Rug[] = [

  // ── 01 ───────────────────────────────────────────────────────────────────
  {
    slug: 'zemmour-grand-kilim-encyclopedique',
    title: 'Grand Encyclopaedic Zemmour Kilim',
    titleFr: `Grand Kilim Encyclopédique Zemmour`,
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1970–1985',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 310, h: 430, unit: 'cm' },
    palette: ['terracotta', 'saffron', 'slate-blue', 'sage', 'madder', 'ivory', 'charcoal'],
    inventoryNumber: 'PS-2025-001',
    oneOfOne: true,
    curatorialNote:
      'This monumental flatweave functions as a living archive of Zemmour tribal vocabulary. ' +
      'Hundreds of autonomous motif-panels — diamond lattices, chevrons, stepped lozenges, eye-symbols ' +
      'and micro-geometric fills — float within horizontal registers on a warm biscuit ground, ' +
      'each woven in a subtly different palette as if compiled by many hands over many seasons. ' +
      'A slate-blue selvedge border and a narrow saffron-gold outer band frame the composition with rare restraint. ' +
      'The flatweave technique creates a reversible textile of equal beauty on both faces. ' +
      'Few pieces of this scale and encyclopedic richness reach the market.',
    curatorialNoteFr:
      `Ce kilim monumental fonctionne comme une archive vivante du vocabulaire tribal Zemmour. ` +
      `Des centaines de panneaux de motifs autonomes — treillis de losanges, chevrons, losanges à gradins, ` +
      `symboles oculaires et remplissages micro-géométriques — flottent dans des registres horizontaux ` +
      `sur un fond biscuit chaud, chacun tissé dans une palette subtilement différente. ` +
      `Un bord bleu ardoise et une bande extérieure or safran encadrent la composition avec une rare retenue.`,
    motifs: [
      'diamond lattice',
      'chevron register',
      'stepped lozenge',
      'eye symbol',
      'micro-geometric fill',
      'brocaded cartouche',
    ],
    images: {
      primary: '/rugs/ps-2025-001-primary.jpg',
      summerSide: '/rugs/ps-2025-001-summer.jpg',
      details: [
        '/rugs/ps-2025-001-detail-1.jpg',
        '/rugs/ps-2025-001-detail-2.jpg',
      ],
    },
    featured: true,
  },

  // ── 02 ───────────────────────────────────────────────────────────────────
  {
    slug: 'zemmour-arbre-de-vie',
    title: '"Tree of Life" Zemmour Kilim',
    titleFr: `Kilim Zemmour « Arbre de Vie »`,
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1965–1980',
    materials: 'Hand-spun live-sheep wool, natural and vegetable dyes',
    dimensions: { w: 340, h: 520, unit: 'cm' },
    palette: ['warm-grey', 'amber', 'charcoal', 'ivory', 'rust', 'navy', 'saffron'],
    inventoryNumber: 'PS-2025-002',
    oneOfOne: true,
    curatorialNote:
      'A rare monumental composition organised around a bifurcating Tree of Life that spreads ' +
      'symmetrically across a warm grey-beige ground. Branching limbs are built from stacked tribal ' +
      'panels — zigzag, diamond, chevron, stepped cross — in amber, black, ivory and rust, creating ' +
      'a kaleidoscopic canopy that fills the entire field. A deep navy outer border is paired with a ' +
      'broad saffron-gold inner band, anchoring the design with hieratic solemnity. In Zemmour weaving ' +
      'tradition the tree motif is associated with cosmological fertility and the link between earth and sky. ' +
      'At over five metres in length this is an exceptional room-defining piece.',
    curatorialNoteFr:
      `Une rare composition monumentale organisée autour d'un Arbre de Vie bifurquant symétriquement ` +
      `sur un fond gris-beige chaud. Les branches sont construites à partir de panneaux tribaux empilés ` +
      `en ambre, noir, ivoire et rouille, créant un feuillage kaléidoscopique qui remplit tout le champ. ` +
      `Un bord extérieur bleu marine profond est associé à une large bande intérieure or safran. ` +
      `Dans la tradition Zemmour le motif de l'arbre est associé à la fertilité cosmologique.`,
    motifs: [
      'tree of life',
      'bifurcating branch',
      'diamond panel',
      'zigzag register',
      'stepped cross',
      'chevron fill',
    ],
    weaverNote: 'Likely woven collaboratively by two or more weavers; a central vertical seam is visible.',
    images: {
      primary: '/rugs/ps-2025-002-primary.jpg',
      summerSide: '/rugs/ps-2025-002-summer.jpg',
    },
    featured: true,
  },

  // ── 03 ───────────────────────────────────────────────────────────────────
  {
    slug: 'rabati-medaillon-champ-bleu',
    title: 'Blue-Field Rabati Medallion Carpet',
    titleFr: `Tapis Rabati à Médaillon sur Fond Bleu`,
    region: 'Rabat',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1960–1975',
    materials: 'Mercerised wool pile, cotton warp and weft, natural dyes',
    dimensions: { w: 200, h: 300, unit: 'cm' },
    palette: ['indigo-blue', 'ivory', 'blush-pink', 'sage-green', 'burgundy'],
    inventoryNumber: 'PS-2025-003',
    oneOfOne: true,
    curatorialNote:
      'The classic Rabati format — a serene open field punctuated by a single central medallion — ' +
      'rendered here in deep periwinkle-indigo. The solitary star medallion is composed of ' +
      'interlocking floral arabesques in ivory, blush and sage, with matching corner spandrel rosettes ' +
      'echoing the central motif across all four quarters of the field. A dense cream border carries ' +
      'a continuous arabesque vine in the Persian tradition, faithfully transmitted through generations ' +
      'of Rabat city workshop weavers. The pile knot count is exceptionally fine. Original fringes intact.',
    curatorialNoteFr:
      `Le format classique Rabati — un champ ouvert et serein ponctué d'un seul médaillon central — ` +
      `est rendu ici en indigo bleuet profond. Le médaillon étoilé solitaire est composé ` +
      `d'arabesques florales entrelacées en ivoire, rose et sauge, avec des rosettes d'écoinçon ` +
      `correspondantes aux quatre coins du champ. Une dense bordure crème porte une vigne arabesque ` +
      `continue dans la tradition persane, fidèlement transmise par les ateliers de la ville de Rabat.`,
    motifs: [
      'central star medallion',
      'arabesque vine border',
      'corner spandrel rosette',
      'floral cartouche',
    ],
    images: {
      primary: '/rugs/ps-2025-003-primary.jpg',
      details: ['/rugs/ps-2025-003-detail-1.jpg'],
    },
    featured: false,
  },

  // ── 04 ───────────────────────────────────────────────────────────────────
  {
    slug: 'tapis-jardin-mamluk-vert',
    title: 'Green Mamluk-Style Garden Carpet',
    titleFr: `Tapis Jardin Style Mamluk Vert`,
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
      'Structured as a formal garden divided into rows of octagonal cartouches, each containing ' +
      'a distinct polychrome floral or geometric medallion on a sage-green ground. No two cartouches ' +
      'repeat: each holds its own miniature universe of botanical and geometric ornament in lavender, ' +
      'ivory, rust, ochre, blush and navy. The format echoes Mamluk-era garden carpet traditions, ' +
      'transposed here into the refined Moroccan urban weaving vocabulary of mid-century Rabat. ' +
      'A multi-band border combines a diamond lattice guard stripe with a continuous floral meander.',
    curatorialNoteFr:
      `Structuré comme un jardin formel divisé en rangées de cartouches octogonaux, chacun contenant ` +
      `un médaillon floral ou géométrique polychrome distinct sur fond vert sauge. Aucun cartouche ` +
      `ne se répète : chacun contient son propre univers miniature d'ornements botaniques et ` +
      `géométriques en lavande, ivoire, rouille, ocre, rose et marine. Le format fait écho aux ` +
      `traditions de tapis de jardin mamelouks, transposées dans le vocabulaire raffiné du tissage ` +
      `urbain marocain de Rabat au milieu du siècle.`,
    motifs: [
      'octagonal cartouche grid',
      'polychrome floral medallion',
      'garden layout',
      'diamond lattice guard',
      'arabesque meander border',
    ],
    images: {
      primary: '/rugs/ps-2025-004-primary.jpg',
    },
    featured: false,
  },

  // ── 05 ───────────────────────────────────────────────────────────────────
  {
    slug: 'zemmour-kilim-patchwork-galerie',
    title: 'Warm Zemmour Patchwork Gallery Kilim',
    titleFr: `Kilim Galerie Zemmour Patchwork aux Tons Chauds`,
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1975–1990',
    materials: 'Hand-spun live-sheep wool, vegetable and natural dyes',
    dimensions: { w: 200, h: 430, unit: 'cm' },
    palette: ['madder-red', 'amber', 'navy', 'ivory', 'saffron', 'charcoal', 'sage'],
    inventoryNumber: 'PS-2025-005',
    oneOfOne: true,
    curatorialNote:
      'A long gallery-format patchwork kilim in which every horizontal band carries a different ' +
      'pairing of motifs and colour. Deep madder-reds and amber warm the dominant panels; navy and ' +
      'charcoal cool the eye in the denser geometric passages. Ivory and sage illuminate individual ' +
      'brocaded cartouches scattered throughout the field. The classical Zemmour vocabulary deployed ' +
      'with exceptional chromatic variety and weaving confidence. Long original fringes on both short ' +
      'ends undamaged. Ideal for a corridor, hallway or as a dramatic wall hanging.',
    curatorialNoteFr:
      `Un long kilim patchwork en format galerie dans lequel chaque bande horizontale porte un ` +
      `appariement différent de motifs et de couleurs. Les rouges garance profonds et l'ambre ` +
      `réchauffent les panneaux dominants ; le marine et le charbon refroidissent le regard dans ` +
      `les passages géométriques plus denses. L'ivoire et la sauge illuminent des cartouches ` +
      `brocadés individuels dispersés dans le champ. Idéal pour un couloir ou comme tenture murale.`,
    motifs: [
      'checkerboard panel',
      'arrowhead register',
      'stepped diamond',
      'chevron serpentine',
      'zigzag band',
      'brocaded cartouche',
    ],
    images: {
      primary: '/rugs/ps-2025-005-primary.jpg',
    },
    featured: false,
  },

  // ── 06 ───────────────────────────────────────────────────────────────────
  {
    slug: 'high-atlas-bleu-ciel-minimaliste',
    title: 'Sky-Blue High Atlas Minimalist Pile',
    titleFr: `Poil Minimaliste Haut Atlas Bleu Ciel`,
    region: 'High Atlas',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: 'c. 2010–2020',
    materials: 'Live-sheep wool pile, vegetable-indigo dye, cotton warp',
    dimensions: { w: 230, h: 310, unit: 'cm' },
    palette: ['sky-blue', 'chalk-white', 'charcoal', 'ivory'],
    inventoryNumber: 'PS-2025-006',
    oneOfOne: true,
    curatorialNote:
      'Radically spare, this large pile rug distils High Atlas weaving to its essence: a wide open ' +
      'field of washed indigo-blue streaked with ivory where natural sheep wool shows through the dye, ' +
      'creating an atmospheric, cloud-like ground. Three parallel vertical bands — each terminated at ' +
      'the top by a small serrated chevron mark — traverse the field like standing stones or ancient ' +
      'boundary markers. A narrow black-and-white zigzag border on all four sides provides the only ' +
      'tonal anchor. Long wool pile with a silky handle and exceptional softness underfoot.',
    curatorialNoteFr:
      `Radicalement sobre, ce grand tapis à poil réduit le tissage du Haut Atlas à son essence : ` +
      `un vaste champ ouvert d'indigo bleu lavé, strié d'ivoire là où la laine naturelle transparaît ` +
      `à travers la teinture, créant un fond atmosphérique comme un nuage. Trois bandes verticales ` +
      `parallèles traversent le champ comme des menhirs, chacune terminée par une petite marque ` +
      `de chevron dentelé. Un étroit bord zigzag noir et blanc fournit le seul ancrage tonal.`,
    motifs: [
      'open indigo field',
      'three vertical stripe bands',
      'serrated chevron marker',
      'zigzag border',
    ],
    images: {
      primary: '/rugs/ps-2025-006-primary.jpg',
    },
    featured: true,
  },

  // ── 07 ───────────────────────────────────────────────────────────────────
  {
    slug: 'boujad-champ-ecarlate-symboles',
    title: 'Scarlet-Field Boujad with Tribal Symbols',
    titleFr: `Boujad Champ Écarlate aux Symboles Tribaux`,
    region: 'Boujad',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: 'c. 2015–2022',
    materials: 'Live-sheep wool pile, synthetic scarlet dye, cotton warp',
    dimensions: { w: 255, h: 365, unit: 'cm' },
    palette: ['scarlet', 'vermilion', 'charcoal', 'ivory', 'gold', 'slate-blue'],
    inventoryNumber: 'PS-2025-007',
    oneOfOne: true,
    curatorialNote:
      'An arresting field of saturated scarlet-vermilion dominates this large Boujad pile rug. ' +
      'Scattered asymmetrically across the open ground are more than ten small tribal talismans — ' +
      'nested diamonds, cross-hatch squares, zigzag serpents and framed cartouches — each rendered ' +
      'in charcoal, ivory, gold and slate-blue. A serrated black border with ivory tooth-marks frames ' +
      'all four sides. The deliberate irregularity of symbol placement reflects the improvisational ' +
      'spirit of Boujad women weavers, for whom each piece is a unique autobiographical statement.',
    curatorialNoteFr:
      `Un champ saisissant de rouge écarlate-vermillon domine ce grand tapis à poil Boujad. ` +
      `Dispersés asymétriquement sur le champ ouvert se trouvent plus de dix petits talismans ` +
      `tribaux — losanges imbriqués, carrés quadrillés, serpents en zigzag et cartouches encadrés ` +
      `— chacun rendu en charbon, ivoire, or et bleu ardoise. Un bord noir dentelé encadre les ` +
      `quatre côtés. L'irrégularité délibérée du placement des symboles reflète l'esprit ` +
      `d'improvisation des tisseuses Boujad, pour qui chaque pièce est une déclaration autobiographique unique.`,
    motifs: [
      'scattered talisman',
      'nested diamond',
      'cross-hatch square',
      'zigzag serpent',
      'serrated border',
    ],
    weaverNote: 'Khouribga Province. Likely woven by a single female weaver.',
    images: {
      primary: '/rugs/ps-2025-007-primary.jpg',
    },
    featured: true,
  },

  // ── 08 ───────────────────────────────────────────────────────────────────
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
      'A virtuoso patchwork kilim in a bolder and more saturated palette than the other Zemmour ' +
      'pieces in the collection. The composition unfolds in large irregular panels — each a distinct ' +
      'mini-carpet in its own right — combining deep madder-reds, burnt amber, cobalt navy and ivory ' +
      'in complex geometric sequences: interlocking chevrons, chessboard fields, reciprocal triangles, ' +
      'diagonal stripe lattices and bold arrowhead bands. No panel repeats, yet the whole reads as a ' +
      'masterfully controlled totality. A museum-grade example of the Zemmour patchwork tradition.',
    curatorialNoteFr:
      `Un kilim patchwork virtuose dans une palette plus audacieuse et plus saturée que les autres ` +
      `pièces Zemmour de la collection. La composition se déploie en grands panneaux irréguliers ` +
      `— chacun un mini-tapis distinct en son propre droit — combinant des rouges garance profonds, ` +
      `de l'ambre brûlé, du marine cobalt et de l'ivoire dans des séquences géométriques complexes : ` +
      `chevrons entrelacés, damiers, triangles réciproques et bandes en pointe de flèche. ` +
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
    },
    featured: true,
  },
]
