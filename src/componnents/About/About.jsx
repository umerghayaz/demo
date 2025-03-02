import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-6 bg-gray-200 text-gray-800 dark:bg-[#0036ac] dark:text-gray-50 transition-colors duration-300"
  >
    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl font-extrabold leading-tight text-center"
      >
        ESG
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-4xl font-bold leading-snug text-center"
      >
        We provide strategic advisory services to Aliante Equity Fund (“AEF”)
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pt-2 pb-8 text-xl font-medium text-center"
      >
        We have 16 years’ experience in giving the necessary strategic support to transform companies by improving their Management’s performances, enhancing and optimizing processes and production, focusing on R&D and growing internationally, both organically and by acquisitions.
        <br /><br />
        We are among the very few focusing in transatlantic expansion activities: we advise in buying the excellent niche companies of the Made in Italy and executing North American build-up acquisitions.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 text-lg font-semibold rounded bg-[#0036ac] text-gray-50 hover:bg-blue-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition"
      >
        Learn more
      </motion.button>
    </div>
  </motion.section>

  )
}

export default About
