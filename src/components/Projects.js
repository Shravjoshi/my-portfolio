import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Project 1: E-Commerce Website",
      description: "A full-stack e-commerce website built with React, Node.js, and MongoDB.",
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2: Personal Blog",
      description: "A simple blog built with React and Markdown for writing posts.",
      link: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3: Portfolio Website",
      description: "A portfolio website to showcase my skills and projects using React and Tailwind CSS.",
      link: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <section id="projects" className="projects-section py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
