import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start bg-white dark:bg-gray-900 pt-2">
      <div className="w-full max-w-6xl p-4 space-y-4"> {/* Added vertical spacing between rows */}
        
        {/* Row 1: Full-width Address Box */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
          <FaMapMarkerAlt className="w-8 h-8 text-green-500 mb-3" /> {/* Larger icon */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"> {/* Larger font */}
            Address
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300"> {/* Larger font */}
            2/145 pudhu gramam, Kadayam<br />
            Tenkasi District, Tamil Nadu<br />
            India - 627415
          </p>
        </div>

        {/* Row 2: Two equal-width boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Box 1: Mobile Number */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <FaPhone className="w-8 h-8 text-blue-500 mb-3" /> {/* Larger icon */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Mobile Number
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              +91 9791612131/ +91 6383668381
            </p>
          </div>

          {/* Box 2: Mail */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <FaEnvelope className="w-8 h-8 text-red-500 mb-3" /> {/* Larger icon */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              balaesakki114@gmail.com
            </p>
          </div>
        </div>

        {/* Row 3: Two equal-width boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Box 3: LinkedIn */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <FaLinkedin className="w-8 h-8 text-blue-600 mb-3" /> {/* Larger icon */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              LinkedIn
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              linkedin.com/in/paule114
            </p>
          </div>

          {/* Box 4: GitHub */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <FaGithub className="w-8 h-8 text-gray-900 dark:text-gray-100 mb-3" /> {/* Larger icon */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              GitHub
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
             github.com/PAULESAKKI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;