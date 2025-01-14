import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing function
    });
  }, []);

  return (
    <>
       <Helmet>
        <title>Shravani Joshi | Portfolio</title>
        <meta name="description" content="Portfolio website showcasing projects, skills, and more." />
        <meta name="keywords" content="developer, portfolio, web developer, react, javascript" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
