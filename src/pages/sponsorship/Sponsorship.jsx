import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import SponsorshipTable from "../../components/sponsorship/SponsorshipTable";
import { CheckCircle } from "lucide-react"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2 
    } 
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SponsorshipPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="Sponsorship & Exhibitor Opportunities"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
      >
  <motion.section
      className="mb-8"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Reasons Why You Should Take Part In CVIP 2025
      </h2>
      
      <div className="space-y-4">
        <motion.div 
          className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Grow Your Audience</h3>
            <p className="text-sm md:text-base text-gray-700">
              Cultivate new business leads by showcasing your offerings at a prestigious event that attracts industry professionals from around the globe.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Networking</h3>
            <p className="text-sm md:text-base text-gray-700">
              Build and nurture relationships with industry leaders, innovators, and decision-makers who can help propel your business forward.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Increase Brand Awareness</h3>
            <p className="text-sm md:text-base text-gray-700">
              Position your company as a thought leader and gain maximum exposure through our event's extensive publicity.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Drive Innovation</h3>
            <p className="text-sm md:text-base text-gray-700">
              Discover cutting-edge technologies and creative solutions that can fuel the next phase of your company's growth.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Enhance Competitive Edge</h3>
            <p className="text-sm md:text-base text-gray-700">
              Gain insights from industry experts and leverage our platform to boost your market presence and stay ahead of the competition.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-18">
            Sponsorship Tiers
          </h2>
          <SponsorshipTable />
        </motion.section>

        <motion.section
          className="mt-8"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
          }}
        >
          <p className="text-base md:text-lg text-center mb-4">
            CVIP 2025 attracts decision-makers looking for the next generation of products, solutions, and advanced industry perspectives. Put yourself in the position to meet them by supporting CVIP 2025!
          </p>
          <p className="text-base md:text-lg text-center font-semibold">
            Secure your sponsorship today.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SponsorshipPage;
