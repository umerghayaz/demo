import React from 'react'

const VisitUs = () => {
  return (
    <section className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-[#4794C0] decoration-[#4794C0] decoration-2 underline-offset-8 underline leading-tight text-center mt-6 mb-8">
      OFFICE      </h1>
      <h2 
        className="text-4xl text-center text-[rgba(0,54,172,1)]">
           Why Lugano
           </h2>
<p className="text-xl text-center text-gray-500 mt-6">
  Lugano and Switzerland are an ideal crossroad between our Italian business roots and a network of different European cultures
</p>
      </div>
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }} // ✅ Fixed style syntax
              allowFullScreen // ✅ Fixed attribute
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-xl font-2xl text-[rgba(0,54,172,1)] mb-6">LUGANO</h3>
                <h3 className="text-xl font-2xl text-gray-600">Via Nassa, 29
                </h3>
                <h3 className="text-xl font-2xl text-gray-600">6900 Lugano CH
                </h3>

              </div>
              <div className=" border-gray-200 px-6 py-4">
               <h3 className="text-xl font-medium text-[rgba(0,54,172,1)]"> <span className="font-bold text-gray-600"> T </span> +41 91 9734000</h3>
                <h3 className="text-xl font-medium text-[rgba(0,54,172,1)]">info@aliantesuisse.com</h3>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default VisitUs
