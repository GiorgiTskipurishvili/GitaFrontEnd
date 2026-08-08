// shared animation settings used across all sections
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// scroll-triggered sections use this: plays once, when 20% of the section is visible
export const viewportOnce = { once: true, amount: 0.2 }
