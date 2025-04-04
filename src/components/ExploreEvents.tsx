import React from 'react';

function ExploreEvents() {
  return (
    <section className="px-12 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Explore Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gaming Event */}
        <div className="bg-gradient-to-br from-orange-950 to-black p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Gaming</h3>
          <div className="bg-black/50 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold mb-2">Game Design Challenge</h4>
            <p className="text-sm text-gray-300">29 November 2023</p>
            <span className="inline-block px-3 py-1 bg-orange-600 rounded text-sm mt-2">Gaming</span>
            <p className="mt-4 text-gray-300">Design and prototype a game in just 48 hours! Work in teams or solo to create something amazing.</p>
          </div>
        </div>

        {/* Tech Event */}
        <div className="bg-gradient-to-br from-orange-950 to-black p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Tech</h3>
          <div className="bg-black/50 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold mb-2">AI Workshop</h4>
            <p className="text-sm text-gray-300">22 November 2023</p>
            <span className="inline-block px-3 py-1 bg-orange-600 rounded text-sm mt-2">Tech</span>
            <p className="mt-4 text-gray-300">Learn the basics of artificial intelligence and machine learning in this hands-on workshop. No prior experience required!</p>
          </div>
        </div>

        {/* Welcome Event */}
        <div className="bg-gradient-to-br from-orange-950 to-black p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Tech</h3>
          <div className="bg-black/50 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold mb-2">Welcome to Fusion Club!</h4>
            <p className="text-sm text-gray-300">15 November 2023</p>
            <span className="inline-block px-3 py-1 bg-orange-600 rounded text-sm mt-2">Tech</span>
            <p className="mt-4 text-gray-300">Join us for our inaugural event and learn what Fusion Club is all about! Meet fellow members and enjoy some refreshments.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-600 rounded-lg hover:bg-orange-700 transition">See More</button>
      </div>
    </section>
  );
}

export default ExploreEvents;