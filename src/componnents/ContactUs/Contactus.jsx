import React from 'react'
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <section className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-whitetext-gray-700 body-font relative">
   
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12 space-y-6">
  <h1 className="text-2xl font-bold text-[#4794C0] decoration-[#4794C0] decoration-2 underline-offset-8 underline leading-tight text-center">
    Contact Us
  </h1>
  <h2 className="text-4xl text-center text-[rgba(0,54,172,1)]">
  We’d love to hear from you
  </h2>
  <p className="text-xl text-center text-gray-500">
    Got a question or need to get in touch with our team? We’re all ears.
  </p>
</div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">      
              <input
                type="text"
                id="name"
                name="name"
                placeholder='First Name'
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              
              <input
                type="text"
                id="Last Name"
                name="Last Name"
                placeholder='Last Name'
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              
              <input
                type="text"
                id="Phone Number"
                name="Phone Number"
                placeholder='Your Phone Number'
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
             
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Your E-mail Address'
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
             
              <textarea
                id="message"
                name="message"
                placeholder='Write Your Message Here'
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
          <button className="flex mx-auto items-center justify-center text-white bg-[rgba(0,54,172,1)] border border-[rgba(0,54,172,1)] py-3 px-10 focus:outline-none hover:bg-[rgba(0,40,140,1)] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
            SEND YOUR MESSAGE
</button>

          </div>
          
        </div>
      </div>
    </div>
  </section>

  )
}

export default Contactus
