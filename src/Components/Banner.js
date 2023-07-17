import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-12 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0 md:pr-16">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Welcome to SpaceX!
            </h1>
            <p className="text-base md:text-lg mb-4">
              Explore Rockets and Capsules.
            </p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-blue-100 transition-colors">
              Get Started
            </button>
          </div>
          <img
            src="https://example.com/banner-image.jpg"
            alt="SpaceX Banner"
            className="h-32 w-32 object-cover rounded-full md:h-40 md:w-40 md:ml-8 md:order-first"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
