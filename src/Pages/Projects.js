import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCut,
  FaSearchLocation,
  FaRobot,
  FaExternalLinkAlt,
  FaTree,
} from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col items-center bg-white dark:bg-gray-900 py-6 px-3">
      {/* Two Column Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ================== LEFT SIDE: COMPLETED ================== */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
            ✅ Completed Projects
          </h2>

          <div className="space-y-6">
            {/* Medici App */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-3">
                <FaMobile className="text-xl text-teal-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Medici Mobile & Web App
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
                Tokenized patient queue management system with both web & mobile
                support. Includes appointment booking, digital workflow, and
                secure storage of patient files.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center text-xs md:text-sm bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded-full">
                  <FaReact className="mr-1" /> React (Web & Mobile)
                </span>
                <span className="flex items-center text-xs md:text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded-full">
                  <FaNodeJs className="mr-1" /> Node.js
                </span>
                <span className="flex items-center text-xs md:text-sm bg-red-100 dark:bg-red-900 px-2 py-0.5 rounded-full">
                  Firebase DB
                </span>
                <span className="flex items-center text-xs md:text-sm bg-yellow-100 dark:bg-yellow-900 px-2 py-0.5 rounded-full">
                  Google Drive (Image Storage)
                </span>
              </div>
              <a
                href="https://mediciapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-blue-600 hover:underline"
              >
                View Project <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>

            {/* FreshRoute ERP */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-3">
                <FaDatabase className="text-xl text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  FreshRoute ERP
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
                ERP platform for food supply chain with inventory tracking,
                role-based dashboards, logistics management & billing
                integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center text-xs md:text-sm bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded-full">
                  <FaReact className="mr-1" /> React + Redux
                </span>
                <span className="flex items-center text-xs md:text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded-full">
                  .NET Web API
                </span>
                <span className="flex items-center text-xs md:text-sm bg-purple-100 dark:bg-purple-900 px-2 py-0.5 rounded-full">
                  <FaDatabase className="mr-1" /> SQL Server
                </span>
                <span className="flex items-center text-xs md:text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                  Azure Blob Storage
                </span>
              </div>
              <a
                href="https://your-freshroute-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-blue-600 hover:underline"
              >
                View Project <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* ================== RIGHT SIDE: IN PROGRESS ================== */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-yellow-600 flex items-center">
            ⏳ In Progress / Ideas
          </h2>

          <div className="space-y-6">
            {/* Tourist Guide */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <FaSearchLocation className="text-xl text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tourist Guide
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Location-based app with maps, offline attractions & AI-driven
                recommendations.
              </p>
            </div>

            {/* Salon Booking */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <FaCut className="text-xl text-pink-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Salon Booking
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Beauty salon management platform with appointments & staff
                scheduling.
              </p>
            </div>

            {/* Dress Match AI */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <FaRobot className="text-xl text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Matcho Dress Match AI
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                AI-powered outfit recommendation app analyzing wardrobe & fashion
                trends.
              </p>
            </div>

             {/* Family Tree */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <FaTree className="text-xl text-pink-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Family Tree
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                To Find the long history of our Family.
              </p>
            </div>

            {/* Pregnancy AI */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <FaRobot className="text-xl text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  AI for Pregnancy Comfort
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Virtual AI assistant providing health tips, comfort tracking &
                reminders for expecting mothers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
