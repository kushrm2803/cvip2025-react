import React, { useState, useEffect } from "react";
import MemberCard from "../../components/committee/MemberCard";
import HeroSection from "../../components/HeroSection";
import { motion } from "framer-motion";

const SteeringCommittee = () => {
  const steeringMembers = [
    {
      name: "Prof. Umapada Pal",
      role: "ISI Kolkata",
      image: "/committee/ProfUmapadaPal.jpeg",
      link: "https://www.isical.ac.in/~umapada/",
    },
    {
      name: "Prof. R. Balasubramanian",
      role: "IIT Roorkee",
      image: "/committee/ProfRBalasubramanian.jpeg",
      link: "https://faculty.iitr.ac.in/cs/bala/",
    },
    {
      name: "Prof. Ananda Choudhary",
      role: "Jadavpur University",
      image: "/committee/DrAnandaSChowdhury.jpg",
      link: "https://sites.google.com/site/anandachowdhury/",
    },
    {
      name: "Prof. Deepak Mishra",
      role: "IIST Trivandrum",
      image: "/committee/DrDeepakMishra.jpg",
      link: "https://www.iist.ac.in/avionics/deepak.mishra",
    },
    {
      name: "Prof. Pritee Khanna",
      role: "IIITDM Jabalpur",
      image: "/committee/ProfPriteeKhanna.jpg",
      link: "http://cse.iiitdmj.ac.in/faculty_page.php?id=pkhanna@iiitdmj.ac.in",
    },
    {
      name: "Dr. Subrahmanyam Murala",
      role: "Trinity College Dublin",
      image: "/committee/DrSubrahmanyamMurala.jpeg",
      link: "https://www.tcd.ie/scss/people/academic-staff/muralas/",
    },
    {
      name: "Dr. Puneet Goyal",
      role: "IIT Ropar",
      image: "/committee/Puneet_img1.jpg",
      link: "http://cse.iitrpr.ac.in/dr-puneet-goyal",
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <HeroSection
        title="Steering Committee"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto mt-4 text-center"
      >
        {steeringMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            link={member.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SteeringCommittee;








