import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section bg-gray-900 text-white flex items-center justify-center min-h-screen px-6 py-12"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Compact and Modern Tagline */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
          Coding the Future of the Web
        </h1>

        {/* Subheadline with skills */}
        <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto text-gray-300">
          Hi, I'm <span className="font-bold">SHRAVANI JOSHI</span>, a passionate and enthusiastic Fullstack Developer specializing in creating intuitive and responsive web applications.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            See My Work
          </a>

          <a
            href="public\Shravani Joshi Fullstack Developer CV.pdf" // Replace with your actual resume link
            className="inline-block px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md transition-all duration-300"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
