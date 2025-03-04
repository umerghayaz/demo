import React from 'react';
import { motion } from "framer-motion";
import about from './../../assets/about.jpg';

const About1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-6 bg-white shadow-lg transition-colors duration-300"
    >
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-[#4794C0] decoration-[#4794C0] decoration-2 underline-offset-8 underline leading-tight text-center"
        >
          ABOUT
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl text-center text-[rgba(0,54,172,1)]"
        >
          We provide strategic advisory services to Aliante Equity Fund (“AEF”)
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-center text-gray-500"
        >
          We have 16 years’ experience in giving the necessary strategic support to transform companies by improving their Management’s performances, enhancing and optimizing processes and production, focusing on R&D and growing internationally, both organically and by acquisitions.
          <br /><br />
          We are among the very few focusing in transatlantic expansion activities: we advise in buying the excellent niche companies of the Made in Italy and executing North American build-up <br></br>acquisitions.
        </motion.p>
      </div>

      {/* Background Image (After Content) */}
      <div className="w-full mt-6">
        <img 
          src={about} 
          alt="Background"
          className="w-full h-[600px] object-cover"
          />
      </div>
    </motion.section>
  );
}

export default About1;
