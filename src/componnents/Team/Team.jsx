import React from 'react'
import { motion } from "framer-motion";
import paolo from './../../assets/paolo.webp';
import ballabio from './../../assets/ballabio.webp';
import fischer from './../../assets/fischer.webp';
import guzzetti from './../../assets/guzzetti.webp';
import mazone from './../../assets/manzone.webp';
import montagnin from './../../assets/montagnin.webp';
import conforti from './../../assets/conforti.webp';
import brioschi from './../../assets/brioschi.webp';
import serlenga from './../../assets/serlenga.webp';
import croff from './../../assets/croff.webp';
import teamsectionimage from './../../assets/teamsectionimage.webp';

const Team = () => {
    const teamMembers = [
        {
          name: "CHRISTIAN BALLABIO",
          role: "CEO",
          image: ballabio,
        },
        {
          name: "PAOLO RIGHETTO",
          role: "Chairman of the Board of Directors",
          image:paolo,
        },
        {
          name: "DAVIDE CROFF",
          role: "Member of the Board of Directors",
          image:croff,
        },
       
        {
            name: "NICCOLÒ FISCHER",
            role: "Co-Founder & Senior Partner",
            image: fischer,
        },
        {
            name: "GIORGIO GUZZETTI",
            role: "Senior Operational Manager",
            image: guzzetti,
          },
        {
            name: "CARLO MANZONE",
            role: "Member of the Strategic Committee",
            image: mazone,
        },
        {
            name: "ALLEGRA MONTAGNIN",
            role: "Corporate Manager",
            image: montagnin,
        },
        
        {
            name: "BARBARA CONFORTI",
            role: "Operational Manager",
            image: conforti,
        },
        {
            name: "FRANCESCO BRIOSCHI",
            role: "Financial Analyst",
            image: brioschi,
        },
        {
            name: "LUIGI SERLENGA",
            role: "Office and Staff Assistant",
            image: serlenga,
        },
      ];
  return (
    
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className=" bg-white shadow-lg transition-colors duration-300"
  >
    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl font-bold text-[#4794C0] decoration-[#4794C0] decoration-2 underline-offset-8 underline leading-tight text-center"
      >
        Our Team
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-4xl text-center text-[rgba(0,54,172,1)]"
      >
A qualified team with an international background
</motion.h2>
  <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-xl text-center text-gray-500"
      >
Cross functional expertise and well-balanced seniority are ensuring a high reputation relationship with all the clients and the stakeholders of the advisory activity
</motion.p>
<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
{teamMembers.map((member, index) => (
    <div
      key={index}
      className={`space-y-4 ${index === teamMembers.length - 1 ? "lg:col-span-3 flex flex-col items-center" : ""}`}
    >
      <motion.img
        alt={member.name}
        className="object-cover h-80 mx-auto mb-4 bg-center rounded-sm transition-all"
        src={member.image}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}

      />

      <div className="flex flex-col items-center text-center">
        <h4 className="text-xl font-semibold text-[rgba(0,54,172,1)]">{member.name}</h4>
        <p className="text-xl text-gray-600">{member.role}</p>
      </div>
    </div>
  ))}
</div>
</div>
<div className="w-full mt-6">
      <img 
        src={teamsectionimage} 
        alt="Background"
        className="w-full h-[800px] object-cover"
        />
    </div>
  </motion.section>
  
  )
}

export default Team
