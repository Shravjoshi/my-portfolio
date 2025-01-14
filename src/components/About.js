import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about-section bg-gray-800 text-white py-20 px-6 md:px-12"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-purple-500">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
          I’m a passionate software developer with experience in front-end and back-end development. I specialize in building web applications using React, Tailwind CSS, Node.js, and MongoDB. I am always eager to learn new technologies and improve my skills in this ever-evolving tech world.
        </p>

        {/* Experience List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">2+ years of experience in building web apps</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-briefcase text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Freelancer</h3>
            <p className="text-gray-300">Worked on multiple freelance projects with diverse clients</p>
          </div>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-500 col-span-2">
            My Skills
          </h3>

          {/* JavaScript */}
          <div className="mb-6 w-full">
            <p className="text-lg mb-2 text-gray-300">JavaScript</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{ width: "80%", backgroundColor: "#F7DF1E" }} // JavaScript color (yellow)
              ></div>
            </div>
          </div>

          {/* React */}
          <div className="mb-6 w-full">
            <p className="text-lg mb-2 text-gray-300">React</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{ width: "75%", backgroundColor: "#61DBFB" }} // React color (light blue)
              ></div>
            </div>
          </div>

          {/* Node.js */}
          <div className="mb-6 w-full">
            <p className="text-lg mb-2 text-gray-300">Node.js</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{ width: "70%", backgroundColor: "#68A063" }} // Node.js color (green)
              ></div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="mb-6 w-full">
            <p className="text-lg mb-2 text-gray-300">Tailwind CSS</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{ width: "85%", backgroundColor: "#06B6D4" }} // Tailwind CSS color (cyan)
              ></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
