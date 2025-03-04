const About = () => {
    return (
      <section className="py-6 bg-white shadow-lg transition-colors duration-300">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-extrabold leading-tight text-center">
            ESG
          </h1>
          
          <h2 className="text-4xl font-bold leading-snug text-center">
            We provide strategic advisory services to Aliante Equity Fund (“AEF”)
          </h2>
  
          <p className="pt-2 pb-8 text-xl font-medium text-center text-gray-500 dark:text-gray-400">
            We have 16 years’ experience in giving the necessary strategic support to transform companies by improving their Management’s performances, enhancing and optimizing processes and production, focusing on R&D and growing internationally, both organically and by acquisitions.
            <br /><br />
            We are among the very few focusing in transatlantic expansion activities: we advise in buying the excellent niche companies of the Made in Italy and executing North American build-up acquisitions.
          </p>
  
          <button className="px-8 py-3 text-lg font-semibold rounded bg-[#0036ac] text-gray-50 hover:bg-blue-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition">
            Learn more
          </button>
        </div>
      </section>
    );
  };
  
  export default About;