import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center min-h-screen px-6 py-12"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Left Side: Info */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Hi, I'm <span className="text-yellow-400">Shravani Joshi</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          I’m a passionate Software Developer skilled in React, Tailwind CSS, and building dynamic web applications.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          See My Work
        </a>
        {/* Download Resume Button */}
        <a
          href="my-portfolio\public\Shravani Joshi Fullstack Developer CV.pdf" // Assuming you have the resume in the public folder
          download
          className="inline-block px-6 py-3 mt-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
