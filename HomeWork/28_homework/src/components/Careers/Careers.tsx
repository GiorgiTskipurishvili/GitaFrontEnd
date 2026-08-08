import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../motion'
import jobs from '../../data/jobs.json'

// data used by the "why join us" section
const values = [
  {
    image: '/images/our-tech.jpg',
    title: 'Our tech',
    text: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
  },
  {
    image: '/images/our-integrity.jpg',
    title: 'Our integrity',
    text: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
  },
  {
    image: '/images/our-community.jpg',
    title: 'Our community',
    text: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.'
  }
]

export default function Careers() {
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
        <h1 className="font-mono text-4xl font-bold md:text-5xl">Careers</h1>
      </motion.section>

      {/* Feature section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="px-6 py-20 md:px-10"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-10 xl:flex-row xl:gap-16">
          <img src="/images/join-us.jpg" alt="" className="w-full max-w-sm rounded-full" />
          <div className="text-center xl:text-left">
            <h2 className="font-mono text-3xl font-bold text-dark-navy">Care to join our mission?</h2>
            <p className="mt-6">
              We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to
              provide clean, accessible transport we want to hear from you!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why join us section */}
      <section className="px-6 py-20 md:px-10">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-dark-navy">Why join us?</h2>
        <div className="max-w-container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <img src={value.image} alt="" className="w-40 rounded-full" />
              <h3 className="mt-6 font-mono text-xl font-bold text-dark-navy">{value.title}</h3>
              <p className="mt-4">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job listings section */}
      <section className="px-6 pb-20 md:px-10">
        <ul className="max-w-container mx-auto flex flex-col gap-4">
          {jobs.map((job, index) => (
            <motion.li
              key={job.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-between gap-4 bg-snow p-6 text-center md:flex-row md:text-left"
            >
              <div>
                <p className="font-mono font-bold text-dark-navy">{job.title}</p>
                <p>{job.location}</p>
              </div>
              <a
                href={job.applyLink}
                className="inline-block border-2 border-yellow bg-yellow px-6 py-3 font-mono font-bold text-white transition-colors hover:bg-transparent hover:text-yellow"
              >
                Apply
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  )
}
