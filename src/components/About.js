import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about-section bg-gray-800 text-white py-20 px-6 md:px-12"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-purple-500">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed text-center">
          I’m a passionate software developer with experience in front-end and back-end development. I specialize in building web applications using React, asp.net, java, rest api, mysql, Node.js, and MongoDB. I am always eager to learn new technologies and improve my skills in this ever-evolving tech world.
        </p>

        {/* Experience List with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">

          {/* First Experience Card: BYTE WARP WEBWORKS LLP */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left text-white">BYTE WARP WEBWORKS LLP</h3>
            <p className="text-left text-gray-300 mb-4">Fullstack Developer Intern (June 2024–Present)</p>
            <ul className="text-gray-300 list-inside pl-5 space-y-2">
              <li>Developed and optimized web applications using C#, LINQ, ASP.NET MVC Core, JavaScript, jQuery, and SQL.</li>
              <li>Collaborated with clients to define project scope, technical requirements, and provided post-deployment support.</li>
              <li>Delivered secure and scalable back-end services while implementing performance-driven front-end features.</li>
              <li>Worked in an Agile environment to ensure iterative development and continuous delivery.</li>
            </ul>
          </div>

          {/* Second Experience Card: FREELANCE */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-briefcase text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left text-white">FREELANCE</h3>
            <p className="text-left text-gray-300 mb-4">Feb 2024–Present</p>
            <ul className="text-gray-300 list-inside pl-5 space-y-2">
              <li>Designed and implemented a responsive web application for a grocery store using React, HTML, CSS, JavaScript for the front end and Firebase for back-end services and authentication.</li>
              <li>Integrated real-time database and cloud functions, ensuring seamless data flow and efficient performance.</li>
              <li>Focused on creating intuitive user interfaces with React Hooks, Redux, and Material-UI.</li>
              <li>Delivered a fully functional application, earning client praise for exceeding project expectations.</li>
              <li>Gained Google Analytics, tags, Technical SEO & advertisements knowledge.</li>
            </ul>
          </div>

        </div>  

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
