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

export type Technique = 'knotted' | 'flatweave' | 'rag'
export type Era = 'vintage' | 'contemporary'

export interface RugDimensions {
  w: number
  h: number
  unit: 'cm'
}

export interface RugImages {
  primary: string
  summerSide?: string
  winterSide?: string
  details: string[]
}

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
  dimensions: RugDimensions
  palette: string[]
  inventoryNumber: string
  oneOfOne: true
  curatorialNote: string
  curatorialNoteFr: string
  motifs: string[]
  weaverNote?: string
  images: RugImages
  featured?: boolean
}

export const rugs: Rug[] = [
  {
    slug: 'champ-de-safran-boujad',
    title: 'Field of Saffron, Boujad',
    titleFr: 'Champ de safran, Boujad',
    region: 'Boujad',
    tribe: 'Beni Zemmour',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1968',
    materials: 'Live-sheep wool, vegetable dyes (saffron, pomegranate rind, walnut hull)',
    dimensions: { w: 148, h: 267, unit: 'cm' },
    palette: ['saffron', 'madder', 'ivory', 'charcoal'],
    inventoryNumber: 'PS-2024-001',
    oneOfOne: true,
    curatorialNote:
      'Woven in the ksar of Boujad during a period when the Beni Zemmour women were experimenting with bold colour fields over traditional geometric registers. The ground is a continuous saffron field broken by a central diamond lattice rendered in madder and walnut-hull black. Each diamond encloses a motif the weavers call tafaout — the sun — here redrawn as an eight-pointed star with barbed shoulders. The winter reverse is a deeper ochre that reads almost amber in low light, transforming the piece entirely between seasons.',
    curatorialNoteFr:
      'Tissé dans le ksar de Boujad, ce tapis illustre la période d\'expérimentation des femmes Beni Zemmour avec les champs de couleurs audacieux. Le fond safran est brisé par un treillis de losanges au madder et au noir de brou de noix. Chaque losange encadre un motif appelé tafaout — le soleil — ici redessiné en étoile à huit branches. Le revers hivernal vire à l\'ocre profond, transformant entièrement la pièce selon la saison.',
    motifs: ['diamond lattice', 'tafaout (sun star)', 'stepped border', 'barb hook'],
    weaverNote: 'Attributed to a master weaver of the Sidi Lamine quarter, Boujad.',
    images: {
      primary: '/rugs/ps-2024-001-primary.svg',
      summerSide: '/rugs/ps-2024-001-summer.svg',
      winterSide: '/rugs/ps-2024-001-winter.svg',
      details: ['/rugs/ps-2024-001-detail-knot.svg', '/rugs/ps-2024-001-detail-fringe.svg'],
    },
    featured: true,
  },
  {
    slug: 'memoire-azilal',
    title: 'Memoir, Azilal',
    titleFr: 'Mémoire, Azilal',
    region: 'Azilal',
    tribe: 'Ait Bou Zid',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1975',
    materials: 'Live-sheep wool, vegetable and mineral dyes',
    dimensions: { w: 132, h: 224, unit: 'cm' },
    palette: ['ivory', 'rust', 'indigo', 'forest', 'madder'],
    inventoryNumber: 'PS-2024-002',
    oneOfOne: true,
    curatorialNote:
      'The Azilal plateau produces rugs of radical asymmetry, their composition driven by the weaver\'s memory rather than a cartoon. This piece unfolds like a diary: figures, animals, and abstracted landscape elements accumulate without hierarchy from selvage to selvage. A running ibex near the lower third, barely perceptible under a wash of undyed ivory wool, is perhaps the most intimate detail — a signature hidden in plain sight. The pile is medium-high and dense; the winter side reverses to an unbleached natural ground that anchors the chromatic exuberance of the obverse.',
    curatorialNoteFr:
      'Le plateau d\'Azilal produit des tapis d\'une asymétrie radicale, dont la composition est guidée par la mémoire de la tisseuse plutôt que par un carton. Cette pièce se déroule comme un journal intime : figures, animaux et éléments paysagers s\'accumulent sans hiérarchie. Un bouquetin courant près du tiers inférieur, à peine perceptible sous une couche de laine ivoire naturelle, constitue peut-être le détail le plus intime — une signature cachée à vue.',
    motifs: ['ibex figure', 'abstracted human form', 'scattered stars', 'free-form field'],
    images: {
      primary: '/rugs/ps-2024-002-primary.svg',
      summerSide: '/rugs/ps-2024-002-summer.svg',
      winterSide: '/rugs/ps-2024-002-winter.svg',
      details: ['/rugs/ps-2024-002-detail-ibex.svg'],
    },
    featured: true,
  },
  {
    slug: 'neige-beni-ourain',
    title: 'Snow Field, Beni Ourain',
    titleFr: 'Champ de neige, Beni Ourain',
    region: 'Beni Ourain',
    tribe: 'Ait Youssi',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1960',
    materials: 'Undyed live-sheep wool, natural pigment accents',
    dimensions: { w: 178, h: 320, unit: 'cm' },
    palette: ['ivory', 'charcoal', 'natural grey'],
    inventoryNumber: 'PS-2024-003',
    oneOfOne: true,
    curatorialNote:
      'The Beni Ourain tribes of the High Atlas wove in the palette of their landscape: unblemished snow and black basalt. This exceptional example uses only three natural tones — undyed ivory, a warm grey from melanotic sheep, and a near-black from sumac — to achieve a composition of extraordinary restraint. The diamond lattice (lozenges called ayala) floats across the ivory ground with no border to contain it, as though the pattern could continue beyond the weave\'s edge. The long, supple pile makes this as much a tactile as a visual experience.',
    curatorialNoteFr:
      'Les tribus Beni Ourain du Haut Atlas tissaient dans la palette de leur paysage : neige immaculée et basalte noir. Cet exemplaire exceptionnel n\'emploie que trois tons naturels — ivoire non teint, gris chaud de brebis mélanotique, et quasi-noir au sumac — pour atteindre une composition d\'une sobriété extraordinaire. Le treillis de losanges (ayala) flotte sur le fond ivoire sans bordure pour le contenir.',
    motifs: ['diamond lattice (ayala)', 'lozenges', 'minimal border'],
    images: {
      primary: '/rugs/ps-2024-003-primary.svg',
      summerSide: '/rugs/ps-2024-003-summer.svg',
      winterSide: '/rugs/ps-2024-003-winter.svg',
      details: ['/rugs/ps-2024-003-detail-pile.svg'],
    },
    featured: true,
  },
  {
    slug: 'atlas-nocturne-beni-mguild',
    title: 'Nocturne, Beni M\'Guild',
    titleFr: 'Nocturne, Beni M\'Guild',
    region: 'Beni MGuild',
    tribe: 'Beni M\'Guild',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1955',
    materials: 'Live-sheep wool, indigo, madder, oak gall',
    dimensions: { w: 195, h: 355, unit: 'cm' },
    palette: ['indigo', 'madder', 'ivory', 'saffron'],
    inventoryNumber: 'PS-2024-004',
    oneOfOne: true,
    curatorialNote:
      'Beni M\'Guild rugs from the Middle Atlas are among the most formally ambitious in the Moroccan canon. This nocturne-blue ground, achieved through multiple indigo baths at altitude, anchors a stacked medallion composition that reads like an architectural elevation — a palace made of geometry. Madder roses and saffron hourglass forms alternate in the central field. The weaver has introduced a deliberate irregularity in the lower medallion: a gap in the border that, in local tradition, prevents the perfection that belongs only to the divine.',
    curatorialNoteFr:
      'Les tapis Beni M\'Guild du Moyen Atlas comptent parmi les plus formellement ambitieux du répertoire marocain. Ce fond bleu nocturne, obtenu par de multiples bains d\'indigo en altitude, ancre une composition à médaillons empilés qui ressemble à une élévation architecturale. La tisseuse a introduit une irrégularité délibérée dans le médaillon inférieur : une lacune dans la bordure qui, selon la tradition locale, prévient la perfection qui n\'appartient qu\'au divin.',
    motifs: ['stacked medallion', 'madder rose', 'hourglass form', 'intentional flaw'],
    weaverNote: 'Believed to originate from the Aït Izdeg section of the Beni M\'Guild confederation.',
    images: {
      primary: '/rugs/ps-2024-004-primary.svg',
      summerSide: '/rugs/ps-2024-004-summer.svg',
      winterSide: '/rugs/ps-2024-004-winter.svg',
      details: ['/rugs/ps-2024-004-detail-medallion.svg'],
    },
  },
  {
    slug: 'rouge-taznakht',
    title: 'Rouge, Taznakht',
    titleFr: 'Rouge, Taznakht',
    region: 'Taznakht',
    tribe: 'Ait Ouaouzguite',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: '2019',
    materials: 'Live-sheep wool, madder root, henna, walnut hull',
    dimensions: { w: 160, h: 248, unit: 'cm' },
    palette: ['madder', 'saffron', 'ivory', 'moss'],
    inventoryNumber: 'PS-2024-005',
    oneOfOne: true,
    curatorialNote:
      'Taznakht, south of the High Atlas in the Anti-Atlas foothills, produces rugs renowned for a singular madder red that seems to burn from within. This contemporary piece follows the classic Taznakht register format — horizontal bands of alternating geometric fill — but the weaver has opened two fields to improvisation, filling them with a loose cloud of abstracted botanical forms. The reversal reveals an opaquer, more burgundy face that is equally resolved. This rug took fourteen months to complete on a traditional fixed-beam loom.',
    curatorialNoteFr:
      'Taznakht, au sud du Haut Atlas dans les contreforts de l\'Anti-Atlas, produit des tapis réputés pour un rouge garance singulier qui semble brûler de l\'intérieur. Cette pièce contemporaine suit le format classique à registres horizontaux, mais la tisseuse a ouvert deux champs à l\'improvisation, les remplissant d\'une nuée de formes botaniques abstraites. Le revers révèle une face plus opaque, plus bordeaux, également réussie.',
    motifs: ['horizontal registers', 'botanical improvisation', 'stepped fill', 'flowing fringe'],
    images: {
      primary: '/rugs/ps-2024-005-primary.svg',
      summerSide: '/rugs/ps-2024-005-summer.svg',
      winterSide: '/rugs/ps-2024-005-winter.svg',
      details: ['/rugs/ps-2024-005-detail-dye.svg'],
    },
    featured: true,
  },
  {
    slug: 'boucherouite-polychrome',
    title: 'Polychrome, Boucherouite',
    titleFr: 'Polychrome, Boucherouite',
    region: 'Middle Atlas',
    technique: 'rag',
    era: 'vintage',
    yearRange: 'c. 1980',
    materials: 'Recycled cotton and wool strips, natural and synthetic dyes',
    dimensions: { w: 115, h: 198, unit: 'cm' },
    palette: ['orange', 'pink', 'green', 'yellow', 'blue'],
    inventoryNumber: 'PS-2024-006',
    oneOfOne: true,
    curatorialNote:
      'The boucherouite (from the Arabic بو شريط, "a piece of used clothing") tradition transforms the discarded into the celebratory. This Middle Atlas example from the 1980s achieves an almost Matissean chromatic intensity from strips of cotton djellaba, acrylic yarn remnants, and unravelled knitwear. The composition is entirely intuitive — no cartoon, no repeat — yet resolves into a confident all-over field that rewards close looking. Its lightness makes it ideal as a summer-side piece; it functions equally as a wall textile.',
    curatorialNoteFr:
      'La tradition boucherouite (de l\'arabe بو شريط, "un morceau de vêtement usagé") transforme le déchu en festif. Cet exemple du Moyen Atlas des années 1980 atteint une intensité chromatique presque matissienne à partir de bandes de djellaba en coton, de résidus de fil acrylique et de tricots défaits. La composition est entièrement intuitive — sans carton, sans répétition.',
    motifs: ['free-form all-over', 'strip improvisation', 'scattered geometry'],
    images: {
      primary: '/rugs/ps-2024-006-primary.svg',
      summerSide: '/rugs/ps-2024-006-summer.svg',
      winterSide: '/rugs/ps-2024-006-winter.svg',
      details: ['/rugs/ps-2024-006-detail-texture.svg'],
    },
  },
  {
    slug: 'kilim-zemour-atlas',
    title: 'Kilim, Zemour',
    titleFr: 'Kilim, Zemour',
    region: 'Zemour',
    tribe: 'Beni Zemmour',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1950',
    materials: 'Live-sheep wool, cochineal, reseda (weld), indigo',
    dimensions: { w: 168, h: 310, unit: 'cm' },
    palette: ['madder', 'indigo', 'ivory', 'saffron', 'moss'],
    inventoryNumber: 'PS-2024-007',
    oneOfOne: true,
    curatorialNote:
      'The Beni Zemmour flatweavers of the Khénifra plateau are masters of the kilim register, achieving in weft-faced plain weave a complexity of pattern that rivals knotted pile at half the weight. This mid-century kilim deploys five colours in a chevron-and-diamond field bracketed by broad carnation borders. The cochineal red is remarkable — still vivid after seven decades, a testament to the mordanting skill of the Atlas dye tradition. Being a flatweave, both faces are identical: the reversibility here is structural, not compositional.',
    curatorialNoteFr:
      'Les tisserands de kilims Beni Zemmour du plateau de Khénifra sont maîtres du registre kilim. Ce kilim du milieu du siècle déploie cinq couleurs dans un champ à chevrons et losanges encadré de larges bordures à œillets. Le rouge cochenille est remarquable — encore vif après sept décennies, témoignage du savoir-faire en mordançage de la tradition tinctoriale de l\'Atlas.',
    motifs: ['chevron field', 'diamond register', 'carnation border', 'hatchwork fill'],
    images: {
      primary: '/rugs/ps-2024-007-primary.svg',
      summerSide: '/rugs/ps-2024-007-summer.svg',
      winterSide: '/rugs/ps-2024-007-winter.svg',
      details: ['/rugs/ps-2024-007-detail-weave.svg'],
    },
  },
  {
    slug: 'haute-atlas-tribal',
    title: 'Passage, High Atlas',
    titleFr: 'Passage, Haut Atlas',
    region: 'High Atlas',
    tribe: 'Ait Haddidou',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1972',
    materials: 'Live-sheep wool, oak gall, pomegranate, saffron',
    dimensions: { w: 140, h: 256, unit: 'cm' },
    palette: ['saffron', 'moss', 'ivory', 'rust'],
    inventoryNumber: 'PS-2024-008',
    oneOfOne: true,
    curatorialNote:
      'The Ait Haddidou of the High Atlas are among the most celebrated weavers in Moroccan tradition, known for the annual Imilchil moussem where carpets are offered as part of betrothal ceremonies. This saffron-ground knotted rug carries the visual vocabulary of that ceremonial context: the central field is organised around a bridal lozenge — a large, open diamond form associated with femininity and protection — flanked by registers of smaller geometric forms. The saffron is achieved through successive baths in dried Crocus sativus, the same variety grown for culinary use in the Taliouine valley.',
    curatorialNoteFr:
      'Les Ait Haddidou du Haut Atlas sont parmi les tisserands les plus célèbres de la tradition marocaine, connus pour le moussem annuel d\'Imilchil. Ce tapis noué à fond safran porte le vocabulaire visuel de ce contexte cérémoniel : le champ central est organisé autour d\'un losange nuptial — une grande forme en diamant ouverte associée à la féminité et à la protection.',
    motifs: ['bridal lozenge', 'protection symbol', 'geometric registers', 'open field'],
    weaverNote: 'Woven for a betrothal ceremony in the Imilchil region, per the seller\'s attestation.',
    images: {
      primary: '/rugs/ps-2024-008-primary.svg',
      summerSide: '/rugs/ps-2024-008-summer.svg',
      winterSide: '/rugs/ps-2024-008-winter.svg',
      details: ['/rugs/ps-2024-008-detail-center.svg'],
    },
  },
  {
    slug: 'mrirt-nuit-profonde',
    title: 'Deep Night, Mrirt',
    titleFr: 'Nuit profonde, Mrirt',
    region: 'Mrirt',
    tribe: 'Beni Mguild subgroup',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1965',
    materials: 'Live-sheep wool, indigo, oak gall, henna',
    dimensions: { w: 175, h: 290, unit: 'cm' },
    palette: ['indigo', 'ivory', 'charcoal', 'rust accent'],
    inventoryNumber: 'PS-2024-009',
    oneOfOne: true,
    curatorialNote:
      'Mrirt, west of the Beni M\'Guild territory near the Middle Atlas town of Khenifra, produces a distinctive style characterised by deep indigo grounds and ivory figure. This example presses that contrast to its limit: the ground is an almost midnight blue achieved through at least six indigo dip-dye cycles, against which a complex lobed medallion in unbleached wool floats with ghostly precision. The irregular pile height, caused by variations in knot tension across the width, creates a subtle surface texture that animates the piece in raking light.',
    curatorialNoteFr:
      'Mrirt, à l\'ouest du territoire Beni M\'Guild, produit un style distinctif caractérisé par des fonds indigo profonds et un motif ivoire. Cet exemplaire pousse ce contraste à l\'extrême : le fond est d\'un bleu presque nocturne obtenu par au moins six cycles de teinture à l\'indigo, contre lequel un médaillon lobé complexe en laine non blanchie flotte avec une précision fantomatique.',
    motifs: ['lobed medallion', 'ivory on indigo', 'geometric field', 'subtle pile relief'],
    images: {
      primary: '/rugs/ps-2024-009-primary.svg',
      summerSide: '/rugs/ps-2024-009-summer.svg',
      winterSide: '/rugs/ps-2024-009-winter.svg',
      details: ['/rugs/ps-2024-009-detail-indigo.svg'],
    },
  },
  {
    slug: 'tapis-tuareg-sahara',
    title: 'Tuareg Mat, Sahara',
    titleFr: 'Natte Touareg, Sahara',
    region: 'Sahara',
    tribe: 'Kel Ahaggar',
    technique: 'flatweave',
    era: 'vintage',
    yearRange: 'c. 1985',
    materials: 'Rush, palm leaf, camel leather bindings',
    dimensions: { w: 120, h: 200, unit: 'cm' },
    palette: ['natural straw', 'dark brown', 'ivory'],
    inventoryNumber: 'PS-2024-010',
    oneOfOne: true,
    curatorialNote:
      'The Tuareg mat (tikit) is among the most elemental forms of North African textile art: woven from rush and palm leaf in a herringbone structure, it requires no dye because it is made entirely from the palette of the desert itself. This example, brought to Marrakech by a Saharan trader in the late 1980s, uses camel leather thong bindings to join three woven panels, creating a subtle seam rhythm that reads as an intentional compositional device. Functional, spare, and quietly monumental.',
    curatorialNoteFr:
      'La natte touareg (tikit) est l\'une des formes les plus élémentaires de l\'art textile nord-africain : tissée en jonc et feuilles de palmier en armure de chevron, elle n\'a pas besoin de teinture car elle est faite entièrement dans la palette du désert lui-même. Cet exemple utilise des lanières de cuir de chameau pour assembler trois panneaux tissés, créant un rythme de couture subtil qui s\'impose comme un dispositif compositionnel intentionnel.',
    motifs: ['herringbone weave', 'leather binding seam', 'natural ground pattern'],
    images: {
      primary: '/rugs/ps-2024-010-primary.svg',
      summerSide: '/rugs/ps-2024-010-summer.svg',
      winterSide: '/rugs/ps-2024-010-winter.svg',
      details: ['/rugs/ps-2024-010-detail-binding.svg'],
    },
  },
  {
    slug: 'azilal-blanc-ivoire',
    title: 'White Field, Azilal',
    titleFr: 'Champ blanc, Azilal',
    region: 'Azilal',
    tribe: 'Ait Bou Oulli',
    technique: 'knotted',
    era: 'contemporary',
    yearRange: '2022',
    materials: 'Live-sheep wool, saffron, madder, henna',
    dimensions: { w: 155, h: 240, unit: 'cm' },
    palette: ['ivory', 'saffron', 'madder', 'sage'],
    inventoryNumber: 'PS-2024-011',
    oneOfOne: true,
    curatorialNote:
      'Contemporary Azilal weaving has found an international audience drawn to its diary-like spontaneity — but the best examples, like this one, are not naively spontaneous: they are the product of a mature visual intelligence working within a tradition of studied freedom. The ivory ground gives the scattered figure drawing room to breathe; the colour insertions — single madder lines, a henna-orange bird, a saffron star — are placed with the precision of a poet who counts syllables invisibly. This piece took sixteen months to complete and was woven by a single weaver without interruption between autumn dyeing seasons.',
    curatorialNoteFr:
      'Le tissage contemporain d\'Azilal a trouvé un public international attiré par sa spontanéité de journal intime — mais les meilleurs exemples, comme celui-ci, ne sont pas naïvement spontanés : ils sont le produit d\'une intelligence visuelle mûre travaillant dans une tradition de liberté étudiée. Le fond ivoire laisse aux figures dispersées de l\'espace pour respirer ; les insertions de couleur sont placées avec la précision d\'un poète qui compte les syllabes invisiblement.',
    motifs: ['scattered figure', 'bird form', 'star fragment', 'open field'],
    weaverNote: 'Woven by a single weaver over 16 months, Ait Bou Oulli plateau, 2021–2022.',
    images: {
      primary: '/rugs/ps-2024-011-primary.svg',
      summerSide: '/rugs/ps-2024-011-summer.svg',
      winterSide: '/rugs/ps-2024-011-winter.svg',
      details: ['/rugs/ps-2024-011-detail-bird.svg'],
    },
    featured: true,
  },
  {
    slug: 'boujad-rose-cardinal',
    title: 'Cardinal Rose, Boujad',
    titleFr: 'Rose cardinale, Boujad',
    region: 'Boujad',
    tribe: 'Beni Zemmour',
    technique: 'knotted',
    era: 'vintage',
    yearRange: 'c. 1958',
    materials: 'Live-sheep wool, madder, cochineal, oak gall, copper mordant',
    dimensions: { w: 162, h: 295, unit: 'cm' },
    palette: ['cardinal red', 'ivory', 'orange', 'charcoal'],
    inventoryNumber: 'PS-2024-012',
    oneOfOne: true,
    curatorialNote:
      'This cardinal-red Boujad from the late 1950s is among the most chromatically saturated pieces in the Palais Saadiyin collection. The red — a layered mordant dye combining madder and cochineal fixed with a copper-sulphate bath — has deepened over six decades into a hue that sits between carmine and tobacco. A dense field of small hooked and barbed diamond forms (tifinagh-derived in their origin, according to local scholars) covers the entire ground, with two narrow ivory borders serving as the sole relief. The pile shows even wear consistent with ceremonial but not domestic use.',
    curatorialNoteFr:
      'Ce Boujad rouge cardinal de la fin des années 1950 est l\'une des pièces chromatiquement les plus saturées de la collection du Palais Saadiyin. Le rouge — une teinture à mordant combinant garance et cochenille fixée dans un bain de sulfate de cuivre — s\'est approfondi en six décennies en une teinte entre le carmin et le tabac. Un champ dense de petites formes en diamant à crochets et barbes (d\'origine tifinagh selon les spécialistes locaux) couvre tout le fond.',
    motifs: ['dense diamond field', 'barbed hook', 'tifinagh-derived form', 'narrow ivory border'],
    images: {
      primary: '/rugs/ps-2024-012-primary.svg',
      summerSide: '/rugs/ps-2024-012-summer.svg',
      winterSide: '/rugs/ps-2024-012-winter.svg',
      details: ['/rugs/ps-2024-012-detail-field.svg'],
    },
  },
]

export function getRugBySlug(slug: string): Rug | undefined {
  return rugs.find((r) => r.slug === slug)
}

export function getFeaturedRugs(): Rug[] {
  return rugs.filter((r) => r.featured)
}

export function getRugsByRegion(region: Region): Rug[] {
  return rugs.filter((r) => r.region === region)
}

export function getRugsByTechnique(technique: Technique): Rug[] {
  return rugs.filter((r) => r.technique === technique)
}

export function getRugsByEra(era: Era): Rug[] {
  return rugs.filter((r) => r.era === era)
}

export const ALL_REGIONS: Region[] = [
  'Boujad', 'Azilal', 'Beni Ourain', 'Beni MGuild',
  'Taznakht', 'Mrirt', 'Zemour', 'High Atlas', 'Middle Atlas', 'Sahara',
]
