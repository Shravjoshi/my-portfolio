import React from "react";

const Skills = () => {
  return (
    <section className="skills-section bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Card */}
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Frontend</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-9/10"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>HTML</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-17/20"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Tailwind CSS</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Backend</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Express</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>MongoDB</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-7/10"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>REST APIs</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-9/10"></div>
              </div>
            </div>
          </div>

          {/* Database Card */}
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Database</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>MySQL</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>MongoDB</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-17/20"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Firebase</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Frameworks Card */}
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Frameworks</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-9/10"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Angular</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>ASP.NET Core</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-7/10"></div>
              </div>
            </div>
          </div>

          {/* Project Management Card */}
         <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Project Management</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>Agile</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-17/20"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Scrum</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>SDLC</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
          {/* for tools */}
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
  <h3 className="text-2xl font-semibold text-purple-500 mb-4">Tools</h3>
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <span>Visual Studio Code</span>
      <span>90%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
      <div className="bg-purple-600 h-2 rounded-full w-9/10"></div>
    </div>

    <div className="flex justify-between items-center">
      <span>XAMPP</span>
      <span>80%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
      <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
    </div>

    <div className="flex justify-between items-center">
      <span>Postman</span>
      <span>85%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
      <div className="bg-purple-600 h-2 rounded-full w-17/20"></div>
    </div>

    <div className="flex justify-between items-center">
      <span>Git</span>
      <span>75%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
      <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
