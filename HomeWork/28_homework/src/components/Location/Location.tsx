import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../motion'

// list of cities Scoot is currently available in
const cities = ['New York', 'London', 'Jakarta', 'Yokohama']

export default function Location() {
  return (
    <main>
      {/* Page hero - animates on page load */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-dark-navy px-6 py-16 text-center text-white md:px-10"
      >
        <h1 className="font-mono text-4xl font-bold md:text-5xl">Locations</h1>
      </motion.section>

      {/* Map + city list section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="px-6 py-20 md:px-10"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-10">
          <img src="/images/world-map-desktop.png" alt="World map with location points" className="w-full" />

          <ul className="flex flex-wrap justify-center gap-4">
            {cities.map(city => (
              <li key={city} className="bg-yellow px-6 py-3 font-mono font-bold text-white">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Call to action section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="px-6 pb-20 text-center md:px-10"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-8 xl:flex-row xl:text-left">
          <h2 className="flex-1 font-mono text-3xl font-bold text-dark-navy md:text-4xl">Your City Not Listed?</h2>
          <p className="xl:flex-1">
            If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-yellow bg-yellow px-6 py-3 font-mono font-bold text-white transition-colors hover:bg-transparent hover:text-yellow"
          >
            Message Us
          </a>
        </div>
      </motion.section>
    </main>
  )
}
