import React from 'react';
import skull from '../../img/skull.png';

function Hero() {
  return (
    <section className="flex items-center justify-center px-12 py-20">
      <div className="max-w-2xl text-center">
        <span className="text-orange-500">Welcome</span>
        <h1 className="text-6xl font-bold mt-4 mb-6">The Fusion Club</h1>
        <p className="text-xl text-gray-300 mb-8">
          Where innovation, creativity, and technology come together to build the future!
        </p>
      </div>
      <img 
        src={skull} 
        alt="AI Face" 
        className="w-72 h-72 object-cover rounded-full shadow-2xl shadow-orange-500/20"
      />
    </section>
  );
}

export default Hero;
