import React from "react";
import ReactDOM from "react-dom/client"; // Update to import from 'react-dom/client'
import App from "./App";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import './index.css'; // This should be present at the top of the file


AOS.init({ duration: 1200 }); // Initialize AOS

// Create a root using the createRoot API (React 18)
const root = ReactDOM.createRoot(document.getElementById("root")); 

// Use root.render instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
