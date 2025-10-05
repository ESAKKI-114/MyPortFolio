// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const TRACKING_ID = "G-WJ7T06P9LP"; // your GA4 ID

function AppContent() {
  const location = useLocation();
 const [isDarkMode, setIsDarkMode] = React.useState(
  localStorage.getItem('darkMode') === 'true' || true
);

const toggleDarkMode = () => {
  setIsDarkMode(prev => {
    localStorage.setItem('darkMode', !prev);
    return !prev;
  });
};

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

