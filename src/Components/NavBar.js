import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [autoTraverse, setAutoTraverse] = useState(true);
  const tabs = ['/','/projects', '/about' ];
  const tabNames = ['Home', 'Projects','About'];

  // Replace with your actual image path
  const profileImage = '/images/Profile.JPG';

  // Auto-traverse functionality
  useEffect(() => {
    let interval;
    if (autoTraverse) {
      interval = setInterval(() => {
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        const nextTab = tabs[nextIndex];
        setActiveTab(nextTab);
        navigate(nextTab);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeTab, autoTraverse, navigate, tabs]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleImageModal = () => {
    setIsImageModalOpen(!isImageModalOpen);
  };

  const isActive = (path) => {
    return activeTab === path;
  };

  const handleNavigation = (path) => {
    setActiveTab(path);
    setAutoTraverse(false);
    if (isMobileMenuOpen) toggleMobileMenu();
  };

  return (
    <>
      <nav className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo with Profile Image */}
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={toggleImageModal}
            >
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
            </motion.div>
            <Link 
              to="/" 
              className="text-2xl font-bold" 
              onClick={() => handleNavigation('/')}
            >
              PAUL ESAKKI
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={tab}
                  className={`hover:text-blue-500 transition-colors ${
                    isActive(tab) ? 'text-blue-500 font-semibold' : ''
                  }`}
                  onClick={() => handleNavigation(tab)}
                >
                  {tabNames[index]}
                  {isActive(tab) && (
                    <motion.div 
                      className="h-1 bg-blue-500 mt-1"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  aria-label="Toggle dark mode"
                />
                <div className={`w-10 h-6 rounded-full shadow-inner transition-colors ${
                  isDarkMode ? 'bg-blue-500' : 'bg-gray-300'
                }`}></div>
                <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? 'translate-x-4' : 'translate-x-0'
                }`}></div>
              </div>
              <span className="ml-2 text-sm font-medium">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </label>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={tab}
                    className={`block py-3 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                      isActive(tab) ? 'text-blue-500 font-semibold bg-gray-100 dark:bg-gray-800' : ''
                    }`}
                    onClick={() => handleNavigation(tab)}
                  >
                    {tabNames[index]}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={toggleImageModal}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleImageModal}
                className="absolute -top-10 right-0 text-white hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;