import React from "react";

const Hero1 = () => {
  return (
<section className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex justify-center items-center">
  <div className="container mx-auto flex flex-col items-center px-4 py-28 text-center md:px-10 lg:px-32 xl:max-w-3xl">
    
    <h1 className="text-4xl font-bold leading-none sm:text-5xl text-center">
      Quisquam necessita vel
      <span style={{ color: "rgba(0,54,172,1)" }}> laborum doloribus </span>
      delectus
    </h1>

    <p className="px-8 mt-8 mb-12 text-lg text-center">
      Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
      amet vero eaque explicabo!
    </p>

    <div className="flex flex-wrap justify-center">
      <button
        style={{ backgroundColor: "rgba(0,54,172,1)" }}
        className="px-8 py-3 m-2 text-lg font-semibold rounded text-gray-50 transition hover:opacity-90"
      >
        Get started
      </button>
      <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300 dark:text-gray-100 dark:border-gray-600 transition hover:bg-gray-200 dark:hover:bg-gray-700">
        Learn more
      </button>
    </div>

  </div>
</section>

  );
};

export default Hero1;
