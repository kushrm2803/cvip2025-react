import React from "react";
import HeroSection from "../../components/HeroSection";
import NearbyTouristPlaces from "../../components/venue/NearbyTouristPlaces";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  exit: { opacity: 0 },
};

const TouristPlacesNearby = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        title="Nearby Tourist Places"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white p-4 md:p-8 rounded-xl shadow-lg mt-8"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore the Area
          </motion.h2>

          <NearbyTouristPlaces />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TouristPlacesNearby;
