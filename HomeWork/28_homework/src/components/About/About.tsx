import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../motion'

// data used by the "our values" section
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

// data used by the "FAQs" section
const faqs = [
  {
    group: 'How it works',
    questions: [
      {
        question: 'How do I download the app?',
        answer:
          'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. You can also click the relevant link at the bottom of this page.'
      },
      {
        question: 'Can I find a nearby Scoots?',
        answer:
          "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots."
      }
    ]
  },
  {
    group: 'Safe driving',
    questions: [
      {
        question: 'Should I wear a helmet?',
        answer:
          'Yes, please do! All cities have different laws, but we strongly recommend always wearing a helmet regardless of the local laws.'
      },
      {
        question: 'What if I damage my Scoot?',
        answer:
          "Be sure to read our terms and conditions carefully. There's an option to add insurance for each trip, or sign up for annual insurance."
      }
    ]
  }
]

export default function About() {
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
        <h1 className="font-mono text-4xl font-bold md:text-5xl">About</h1>
      </motion.section>

      {/* Feature section 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="px-6 py-20 md:px-10"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-10 xl:flex-row xl:gap-16">
          <img src="/images/digital-era.jpg" alt="" className="w-full max-w-sm rounded-full" />
          <div className="text-center xl:text-left">
            <h2 className="font-mono text-3xl font-bold text-dark-navy">Mobility for the digital era</h2>
            <p className="mt-6">
              Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to
              scooters at your fingertips.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Feature section 2 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="px-6 py-20 md:px-10"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-10 xl:flex-row-reverse xl:gap-16">
          <img src="/images/better-living.jpg" alt="" className="w-full max-w-sm rounded-full" />
          <div className="text-center xl:text-left">
            <h2 className="font-mono text-3xl font-bold text-dark-navy">Better urban living</h2>
            <p className="mt-6">
              We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the
              minimal carbon footprint for each ride.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our values section */}
      <section className="px-6 py-20 md:px-10">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-dark-navy">Our values</h2>
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

      {/* FAQs section */}
      <section className="px-6 pb-20 md:px-10">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-dark-navy">FAQs</h2>
        <div className="max-w-container mx-auto flex flex-col gap-12">
          {faqs.map(group => (
            <motion.div
              key={group.group}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 xl:flex-row"
            >
              <h3 className="font-mono text-xl font-bold text-dark-navy xl:w-64 xl:shrink-0">{group.group}</h3>
              <div className="flex flex-1 flex-col gap-4">
                {group.questions.map(item => (
                  <details key={item.question} className="bg-snow p-6 text-dark-navy">
                    <summary className="cursor-pointer font-mono font-bold">{item.question}</summary>
                    <p className="mt-4">{item.answer}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
