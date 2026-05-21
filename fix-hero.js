const fs = require('fs');
let f = fs.readFileSync('components/HomeHero.tsx', 'utf8');
f = f.replace(
  `        <h1 className="font-serif font-light text-bone text-display leading-[0.92] tracking-tight">
          {['Palais', 'Saadiyin'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + i * 0.18,
                }}
                className="block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>`,
  `        <h1 className="font-serif text-bone text-display leading-[0.92] tracking-tight">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block font-bold"
            >
              Cosy
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
              className="block font-light italic text-[0.45em] tracking-[0.12em] mt-2"
            >
              Rug Art Collection
            </motion.span>
          </div>
        </h1>`
);
fs.writeFileSync('components/HomeHero.tsx', f);
console.log('Done!');
