const STRIP =
  'زرابي · Berber · Kilim · Boucherouite · Azilal · Beni Ourain · Tuareg · Boujad · Taznakht · Vegetable dyes · Reversible · Live-sheep wool · زرابي'

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-ink/8 py-3 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="label-caps text-shadow/40 px-10 whitespace-nowrap"
          >
            {STRIP} ·&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}
