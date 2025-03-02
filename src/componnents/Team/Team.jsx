import React from 'react'
import { motion } from "framer-motion";

const Team = () => {
  return (
    
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-6 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl font-bold leading-none text-center sm:text-5xl"
      >
        Our Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl text-center text-gray-700 dark:text-gray-300"
      >
        At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam
        natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!
      </motion.p>

      {/* First row with 3 profiles */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.6 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center text-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
          >
            <img
              alt="Profile"
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src={`https://i.pravatar.cc/100?img=${i + 1}`} // Dummy image
            />
            <p className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
              Leroy Jenkins
            </p>
            <p className="text-gray-600 dark:text-gray-400">Visual Designer</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row with 5 profiles */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.8 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i + 3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center text-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
          >
            <img
              alt="Profile"
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src={`https://i.pravatar.cc/100?img=${i + 4}`} // Dummy image
            />
            <p className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
              Leroy Jenkins
            </p>
            <p className="text-gray-600 dark:text-gray-400">Visual Designer</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
  
  )
}

export default Team
