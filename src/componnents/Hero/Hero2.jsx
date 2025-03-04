import React from 'react'
import heroimg from './../../assets/heroimg.jpg';
const Hero2 = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src={heroimg} 
        alt="Hero Background"
        className="w-full h-full object-cover" // Ensures full coverage
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  
    {/* Content Overlay */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
      <h1 className="text-6xl   mb-4 text-center">
        TRANSFORMING EUROPEAN SMES INTO GLOBAL/SECTOR'S LEADER
      </h1>
     
    </div>
  </div>
  
  )
}

export default Hero2
