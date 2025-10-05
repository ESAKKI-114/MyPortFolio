import React from 'react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate, 
  FaAward, 
  FaUser,
  FaExternalLinkAlt 
} from 'react-icons/fa';

const About = () => {
  // Certification files in your public/certifications folder
  const certifications = [
    {
      name: "Python: Programming For Everybody",
      issuer: "Python Fundamentals",
      file: "https://drive.google.com/file/d/1z9LXEi-ISs9sShMWvKpekDZwfrg0KiRd/view?usp=drive_link"
    },
    {
      name: "Microsoft Certified: FreeCode Camp C# Foundation",
      issuer: "Microsoft",
      file: "https://drive.google.com/file/d/1z9LXEi-ISs9sShMWvKpekDZwfrg0KiRd/view?usp=drive_link"
    }
  ];

  const openCertification = (filePath) => {
    window.open(filePath, '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start bg-white dark:bg-gray-900 pt-2">
      {/* Main Content - Wider Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 p-6">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUser className="w-6 h-6 text-indigo-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              PAUL ESAKKI
            </h2>
          </div>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-semibold">Native Place:</span> Kadayam, Tenkasi
          </p>
          
          {/* Professional Summary Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              I’m a Full-Stack Developer with strong experience in building scalable, cloud-based applications. Along with my work in .NET and modern front-end frameworks, I’m also interested in the future of technology with AI, AR/VR, and automation.
              I aim to create AI-powered apps, immersive AR/VR experiences, and next-gen ERP solutions that not only solve today’s business needs but also prepare for the future            </p>
          </div>
        </div>

        {/* Right Side: 2x2 Grid of Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4">
          {/* Box 1: Education - Blue */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaGraduationCap className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold">Bachelor of Engineering (B.E)</h3>
                <p>The Ramco Institute of Technology (Anna University) | CGPA: 7.8/10</p>
              </div>
              <div>
                <h3 className="font-semibold">Higher Secondary (12th Grade)</h3>
                <p>Chathram Bharathi Higher Secondary School | Percentage: 92%</p>
              </div>
              <div>
                <h3 className="font-semibold">Secondary (10th Grade)</h3>
                <p>Chathram Bharathi Higher Secondary School | Percentage: 95%</p>
              </div>
            </div>
          </div>

          {/* Box 2: Experiences - Green */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaBriefcase className="w-6 h-6 text-emerald-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Experience
              </h2>
            </div>
            <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold">Novac Tech Solutions Private Limited</h3>
                <p>-Associate Software Engineer-II (2025 - Present)</p>
              </div>
              <div>
                <h3 className="font-semibold">The Ramco Cements Private Limited</h3>
                <p>- Assistant Software Engineer-I (2022 - 2024)</p>
                <p>- System Engineer Trainee (2020 - 2021)</p>
              </div>
            </div>
          </div>

          {/* Box 3: Certifications - Purple */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaCertificate className="w-6 h-6 text-violet-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Certifications
              </h2>
            </div>
            <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer hover:underline group"
                  onClick={() => openCertification(cert.file)}
                >
                  <div className="flex items-start">
                    <h3 className="font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {cert.name}
                    </h3>
                    <FaExternalLinkAlt className="w-3 h-3 ml-1 mt-1 text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  </div>
                  <p>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 4: Awards - Amber */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <div className="flex items-center mb-3">
    <FaAward className="w-6 h-6 text-amber-500 mr-2" />
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
      Awards & Acknowledgements
    </h2>
  </div>
  <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
    <div>⭐ Star Performer of the Month - March 2025</div>
    <div>✅ Successfully completed and deployed ERP projects for client implementation, ensuring seamless integration and live production rollout.</div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default About;