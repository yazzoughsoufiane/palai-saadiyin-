'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Live-sheep wool',
    body: 'Every rug in the collection is woven from the wool of living sheep — shorn, not gathered. This matters for the quality of the lanolin, the luster of the pile, and the responsiveness to natural dye. The wool arrives in Marrakech from Atlas cooperatives whose animals graze on wild herbs and mountain grasses.',
  },
  {
    number: '02',
    title: 'Vegetable dyes',
    body: 'Our palette is drawn almost entirely from madder root, indigo, saffron, pomegranate rind, walnut hull, and henna — mordanted and fixed using traditional Atlas methods. A few older pieces carry early synthetic colours from their own period, which we always note in their description. These natural colours deepen rather than fade; a rug from 1955 is not faded. It has become itself.',
  },
  {
    number: '03',
    title: '16 months, one weaver',
    body: 'A single medium-sized rug contains between 40,000 and 150,000 individual knots. At the pace of traditional weaving — six hours a day, with seasons for dyeing and harvest — this means a minimum of six months for a small piece, and up to sixteen months for a room-sized composition. Time is in every knot.',
  },
]

export default function MaisonValues() {
  return (
    <div className="border-t border-ink/10 pt-16 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {values.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.14 }}
          >
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.14 }}
                className="label-caps text-shadow/40"
              >
                {item.number}
              </motion.p>
            </div>
            <h3 className="font-serif text-[1.375rem] font-light text-ink mb-4">{item.title}</h3>
            <p className="prose-body text-pretty">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
