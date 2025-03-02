import React from 'react'

const Hero = () => {
  return (
    <div
    className="relative flex items-center justify-center h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", // Replace with your city skyline image
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-center text-white">
      <h1 className="text-5xl font-bold mb-4 font-poppins">
        Your Financial Freedom Starts Here
      </h1>
      <p className="text-xl mb-8 font-roboto">
        We help you grow your wealth with smart, secure investments.
      </p>
      {/* <button className="bg-gold text-navy-blue px-8 py-3 rounded-lg font-bold hover:bg-green hover:text-white transition duration-300">
        Get Started
      </button> */}
    </div>
  </div>
  )
}

export default Hero
