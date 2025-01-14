import React from "react";

const Timeline = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Software Developer at Bytewrap Webworks",
      description: "Working with React, Node.js, and Tailwind CSS to build dynamic web applications.",
    },
    {
      date: "2022 - 2023",
      title: "Freelancer",
      description: "Developed full-stack applications using React, Firebase, and Node.js.",
    },
    {
      date: "2021 - 2022",
      title: "Intern at Tech Solutions",
      description: "Assisted in front-end development using React and Bootstrap for enterprise-level websites.",
    },
  ];

  return (
    <section className="timeline-section bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Journey</h2>
        <div className="relative">
          <div className="border-l-4 border-purple-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center space-x-6 relative"
              >
                <div className="flex justify-center items-center bg-purple-600 rounded-full h-10 w-10 text-white text-xl">
                  <span className="font-semibold">{index + 1}</span>
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-lg text-gray-400 mb-2">{item.date}</p>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
