import { motion } from 'framer-motion';
import TypingEffect from '../Components/TypeEffect';

const Home = () => {
  const expertise = [
    {
      name: ".NET",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
      description: "Enterprise applications"
    },
    {
      name: "C#",
      icon: "https://learn.microsoft.com/en-us/dotnet/media/logo_csharp.png",
      description: "Robust backend development"
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      description: "Interactive web applications"
    },
    {
      name: "SQL",
      icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      description: "Efficient data management"
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      description: "Modern user interfaces"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      url: "https://www.linkedin.com/in/esakki114/"
    },
    {
      name: "GitHub",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      url: "https://github.com/ESAKKI-114"
    },
    {
      name: "HackerRank",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      url: "https://www.hackerrank.com/profile/balaesakki114"
    },
    {
      name: "LeetCode",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      url: "https://leetcode.com/u/ESAKKI114/"
    }
  ];

  return (
   <div className="px-4 pt-2 pb-8 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-3xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TypingEffect text="Full Stack Developer | Problem Solver | Tech Enthusiast" speed={80} />
        </motion.div>

        {/* Expertise Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center dark:text-white mb-6">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-10 w-auto mb-2 object-contain"
                />
                <h3 className="text-md font-medium dark:text-white">{skill.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Explore My Work
          </a>
        </motion.div>

        {/* Social Links Section */}
        <section>
          <h2 className="text-xl font-semibold text-center dark:text-white mb-4">
            Connect With Me
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg w-16 h-16 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className={`h-8 w-auto ${social.name === 'LeetCode' ? 'dark:invert' : ''}`}
                />
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
