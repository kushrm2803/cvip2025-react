import React from "react";
import { motion } from "framer-motion";

const topicsList = [
  "Activity Detection/ Recognition",
"Biometrics, Forensics, Content Protection",
"Compressed Image/ Video Analytics",
"Computational Imaging",
"Datasets and Evaluation",
"Deep Learning for Computer Vision",
"Document and Synthetic Visual Processing",
"Document Image Analysis",
"Explainable AI for Computer Vision",
"Face, Iris, Emotion, Sign Language and Gesture Recognition",
"Generative AI for Computer Vision",
"Human Computer Interaction",
"Image Restoration/Super Resolution ",
"Image/ Video Processing for Autonomous Vehicles / Motion / Tracking",
"Image/ Video Retrieval / Forensics",
"Image/ Video Scene Understanding",
"Image/ Video Security and Quality Assessment",
"Medical Image Analysis",
"Quantum Computer Vision",
"Remote Sensing, Hyperspectral Image Processing",
"Segmentation and Shape Representation",
"Vision based Human Gait Analysis",
"Visual Sensor Hardware, Visual Surveillance",
"3D/X-ray/Thermal Image/Video Processing",
];

const topicVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const CallForPapersTopics = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={topicVariants}
      className="bg-red-50 p-8 rounded-xl shadow-lg w-full"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Research Topics
      </h2>
      <p className="text-base md:text-lg mb-4">
        Topics of interest cover all aspects of computer vision and image processing including, but not limited to:
      </p>
      <ul className="list-disc list-inside text-base md:text-lg">
        {topicsList.map((topic, index) => (
          <motion.li key={index} variants={topicVariants}>
            {topic}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CallForPapersTopics;
