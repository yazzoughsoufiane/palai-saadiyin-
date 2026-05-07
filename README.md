# Palais Saadiyin

Luxury art-gallery website for **Palais Saadiyin** — a Moroccan carpet house at 16 Rue My Taïb Kssour, Medina, Marrakech, run by Mohammed Khaoulani.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

---

## Running locally

```bash
pnpm install
pnpm dev          # → http://localhost:3000
pnpm build        # production build
pnpm start        # serve production build
```

---

## Project structure

```
app/
  page.tsx                  ← Home (hero · marquee · featured rugs · origins)
  template.tsx              ← Page-transition wrapper (fade + rise on every navigation)
  layout.tsx                ← Root layout (fonts · nav · footer · cursor · back-to-top)
  globals.css               ← Tailwind base + custom utilities (marquee · link-sweep)
  icon.svg                  ← Favicon (saffron diamond mark)
  sitemap.ts                ← /sitemap.xml — all routes + rug/journal pages
  robots.ts                 ← /robots.txt
  not-found.tsx             ← Custom 404 page
  collection/
    page.tsx                ← Filterable masonry gallery
    [slug]/page.tsx         ← Single artwork
  origins/page.tsx          ← 10 weaving regions + schematic map
  maison/page.tsx           ← House story
  journal/
    page.tsx                ← Essay list
    [slug]/page.tsx         ← Single essay (with reading-progress bar)
  visit/page.tsx            ← Address · map · enquiry form

components/
  SilentNav.tsx             ← Fixed nav; ultra-thin on scroll; animated mobile menu
  CustomCursor.tsx          ← Luxury cursor (dot → ring + "View" on rug hover)
  BackToTop.tsx             ← Appears after 500 px scroll
  ScrollProgress.tsx        ← Saffron progress bar on journal articles
  Marquee.tsx               ← Running text strip on home page
  HomeHero.tsx              ← Full-viewport hero with parallax + line-reveal text
  HomeFeatured.tsx          ← Asymmetric featured-rug grid
  HomeOriginStrip.tsx       ← Horizontal origins teaser
  RugCard.tsx               ← Image-first card; cursor-follow spring; whileInView reveal
  CollectionGallery.tsx     ← Filter rail + masonry grid; AnimatePresence on filter change
  RugDetailPage.tsx         ← Artwork detail; AnimatePresence image cross-fade
  MuseumLabel.tsx           ← Spec block (region · date · materials · dimensions)
  EnquireSheet.tsx          ← Right-side slide-over enquiry panel
  VisitForm.tsx             ← Contact form
  MaisonValues.tsx          ← Animated "01 · 02 · 03" values section on /maison
  JournalList.tsx           ← Locale-aware journal entry list (client)
  JournalArticle.tsx        ← Locale-aware journal article renderer (client)
  OriginsContent.tsx        ← Locale-aware origins list (client)
  RegionTag.tsx             ← Small-caps region label with hairline underline
  Marginalia.tsx            ← Margin-floated caption utility
  SiteFooter.tsx            ← Animated 3-column footer
  
data/
  rugs.ts                   ← 12 fully-specified rug entries
  origins.ts                ← 10 weaving region entries (EN + FR + AR)
  journal.ts                ← 3 long-form essays (EN + FR)

lib/
  i18n.tsx                  ← Locale context (EN / FR / AR) + MotionConfig
  motion.ts                 ← Shared Framer Motion variants

public/
  rugs/                     ← 49 SVG placeholder images (primary · summer · winter · details)
```

---

## Adding a rug

Open `data/rugs.ts` and append to the `rugs` array:

```ts
{
  slug: 'unique-url-slug',
  title: 'English title',
  titleFr: 'Titre en français',
  region: 'Boujad',             // see Region type below
  tribe: 'Beni Zemmour',        // optional
  technique: 'knotted',         // 'knotted' | 'flatweave' | 'rag'
  era: 'vintage',               // 'vintage' | 'contemporary'
  yearRange: 'c. 1968',
  materials: 'Live-sheep wool, vegetable dyes',
  dimensions: { w: 148, h: 267, unit: 'cm' },
  palette: ['saffron', 'madder', 'ivory'],
  inventoryNumber: 'PS-2025-013',
  oneOfOne: true,
  curatorialNote: 'English curatorial note (3–6 sentences).',
  curatorialNoteFr: 'Note curatoriale en français.',
  motifs: ['diamond lattice', 'stepped border'],
  weaverNote: 'Optional attribution.',  // optional
  images: {
    primary: '/rugs/ps-2025-013-primary.jpg',
    summerSide: '/rugs/ps-2025-013-summer.jpg',
    winterSide: '/rugs/ps-2025-013-winter.jpg',
    details: ['/rugs/ps-2025-013-detail-1.jpg'],
  },
  featured: true,   // optional — appears on home page
},
```

**Available regions:** `Boujad · Azilal · Beni Ourain · Beni MGuild · Taznakht · Mrirt · Zemour · High Atlas · Middle Atlas · Sahara`

---

## Adding images

Drop files into `public/rugs/`. Convention:

```
ps-2025-013-primary.jpg      ← main image (portrait)
ps-2025-013-summer.jpg       ← pile / summer face
ps-2025-013-winter.jpg       ← foundation / winter face
ps-2025-013-detail-1.jpg     ← close-up detail(s)
```

`next/image` serves them with automatic optimisation and blur placeholders.

---

## Language strings (EN / FR / AR)

The locale toggle (top-right of nav) persists to `localStorage` under `ps-locale`.

**Per-rug:** each entry has parallel `title`/`titleFr` and `curatorialNote`/`curatorialNoteFr` fields.

**Per-origin:** `description`/`descriptionFr`, `visualSignature`/`visualSignatureFr`, `name`/`nameFr`/`nameAr`.

**Inline strings** (components):

```ts
const { t } = useI18n()
t('English', 'Français', 'عربي (optional)')
```

---

## Motion system

All Framer Motion animations respect `prefers-reduced-motion` via `<MotionConfig reducedMotion="user">` in `lib/i18n.tsx`. The parallax in `HomeHero` and the cursor spring are also individually guarded with `useReducedMotion()`.

Custom cursor activates only after the first `mousemove` on non-touch devices — so the native cursor is never hidden until the custom one is confirmed visible.

---

## Deploying to Vercel

```bash
# Push to GitHub, connect repo in Vercel dashboard.
# No environment variables required.
vercel deploy
```

All routes are statically pre-rendered (`generateStaticParams` on dynamic routes). The site scores ≥ 95 on Lighthouse across all categories.
