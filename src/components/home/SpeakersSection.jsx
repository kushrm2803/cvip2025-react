import React from "react";
import { motion } from "framer-motion";
import MemberCard from "../committee/MemberCard";
import { Link } from "react-router-dom";

const speakersData = [
  {
    id: 1,
    name: "Dr. John Doe",
    role: "AI Researcher | IIT Ropar",
    image: "/committee/avatar.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Blockchain Expert | IIT Delhi",
    image: "/committee/avatar.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Cloud Specialist",
    image: "/committee/avatar.png",
  },
  {
    id: 4,
    name: "Robert Brown",
    role: "Cybersecurity Analyst",
    image: "/committee/avatar.png",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Data Scientist",
    image: "/committee/avatar.png",
  },
  {
    id: 6,
    name: "Michael Wilson",
    role: "Software Engineer",
    image: "/committee/avatar.png",
  },
];

const SpeakersSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Speakers
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {speakersData.map((speaker) => (
            <motion.div
              key={speaker.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MemberCard
                name={speaker.name}
                role={speaker.role}
                image={speaker.image}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link to="/speakers">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-500">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
