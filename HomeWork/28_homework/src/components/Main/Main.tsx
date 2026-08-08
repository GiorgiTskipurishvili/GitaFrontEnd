import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../motion'

// data used by the "how it works" section
const steps = [
  {
    icon: '/icons/locate.svg',
    title: 'Locate with app',
    text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
  },
  {
    icon: '/icons/scooter.svg',
    title: 'Pick your scooter',
    text: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
  },
  {
    icon: '/icons/ride.svg',
    title: 'Enjoy the ride',
    text: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off!'
  }
]

// data used by the "features" section
const features = [
  {
    title: 'Easy to use riding telemetry',
    text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things.",
    image: '/images/telemetry.jpg'
  },
  {
    title: 'Coming to a city near you',
    text: 'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown.',
    image: '/images/near-you.jpg'
  },
  {
    title: 'Zero hassle payments',
    text: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app.',
    image: '/images/payments.jpg'
  }
]

export default function Main() {
  return (
    <main>
      {/* Hero section - animates on page load, not on scroll, since it's already visible */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-dark-navy px-6 py-24 text-center text-white md:px-10"
      >
        <h1 className="font-mono text-4xl font-bold md:text-5xl">Scooter sharing made simple</h1>
        <p className="mx-auto mt-6 max-w-xl">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app
          to locate the nearest bike, unlock it with a tap, and you’re away!
        </p>
        <a
          href="#download"
          className="mt-8 inline-block border-2 border-yellow bg-yellow px-6 py-3 font-mono font-bold text-white transition-colors hover:bg-transparent hover:text-yellow"
        >
          Get Scootin
        </a>
      </motion.section>

      {/* How it works section - each card animates in as you scroll to it */}
      <section className="px-6 py-20 md:px-10">
        <div className="max-w-container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <img src={step.icon} alt="" className="w-16" />
              <h3 className="mt-6 font-mono text-xl font-bold text-dark-navy">{step.title}</h3>
              <p className="mt-4">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features section - each block fades up as it scrolls into view */}
      <section className="flex flex-col gap-20 px-6 py-20 md:px-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className={`max-w-container mx-auto flex flex-col items-center gap-10 xl:flex-row xl:gap-16 ${
              index % 2 === 1 ? 'xl:flex-row-reverse' : ''
            }`}
          >
            <img src={feature.image} alt="" className="w-full max-w-sm rounded-full" />
            <div className="text-center xl:text-left">
              <h2 className="font-mono text-3xl font-bold text-dark-navy">{feature.title}</h2>
              <p className="mt-6">{feature.text}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
