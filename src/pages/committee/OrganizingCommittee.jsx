import React, { useState, useEffect } from "react";
import MemberCard from "../../components/committee/MemberCard";
import HeroSection from "../../components/HeroSection";
import { motion } from "framer-motion";

const OrganizingCommittee = () => {
  const OrganizingMembers = [
    {
      title: "Patron",
      members: [
        {
          name: "Prof. B. B. Chaudhuri",
          role: "ISI Kolkata, India",
          image: "/committee/ProfBBChaudhuri.jpeg",
          link: "#",
        },
      ],
    },
    {
      title: "General Chairs",
      members: [
        {
          name: "Prof. Rajeev Ahuja",
          role: "Director, IIT Ropar, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Prof. Guoying Zhao",
          role: "Academy Professor, University of Oulu, Finland",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Prof. Venkatesh Babu",
          role: "Professor, IISc Bangalore, India",
          image: "/committee/avatar.png",
          link: "#",
        },
      ],
    },
    {
      title: "General Co-Chairs",
      members: [
        {
          name: "Prof. R. Balasubramanian",
          role: "Professor and Head, IIT Roorkee, India",
          image: "/committee/ProfRBalasubramanian.jpeg",
          link: "#",
        },
      ],
    },
    {
      title: "Conference Chairs",
      members: [
        {
          name: "Dr. Puneet Goyal",
          role: "Associate Professor, IIT Ropar, India",
          image: "/committee/Puneet_img1.jpg",
          link: "#",
        },
        {
          name: "Dr. Santosh Vipparthi",
          role: "Associate Professor and Head, IIT Ropar, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Dr. Gaurav Bhatnagar",
          role: "Project Director, iHub-Drishti and Professor, IIT Jodhpur, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Prof. Aparajita Ojha",
          role: "Professor, IIITDM Jabalpur, India",
          image: "/committee/avatar.png",
          link: "#",
        },
      ],
    },
    {
      title: "Conference Co-Chairs",
      members: [
        {
          name: "Dr. Jagadeesh Kakarla",
          role: "Assistant Professor, IIITDM Kancheepuram, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Dr. Shiv Ram Dubey",
          role: "Assistant Professor, IIIT Allahabad, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Prof. Sanjeev Kumar",
          role: "Professor, IIT Roorkee, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Dr. Deep Gupta",
          role: "Assistant Professor, VNIT Nagpur, India",
          image: "/committee/DrDeepGupta.jpeg",
          link: "#",
        },
      ],
    },
    {
      title: "Sponsorship Chairs",
      members: [
        {
          name: "Dr. Sukrit Gupta",
          role: "Assistant Professor, IIT Ropar, India",
          image: "/committee/avatar.png",
          link: "#",
        },
      ],
    },
    {
      title: "Workshop Chairs",
      members: [
        {
          name: "Dr. Prashant Patil",
          role: "Assistant Professor, IIT Guwahati, India",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Dr. Kapil Rana",
          role: "Assistant Professor, TIET Patiala, India",
          image: "/committee/avatar.png",
          link: "#",
        },
      ],
    },
    {
      title: "Publications Chairs",
      members: [
        {
          name: "Dr. Abhinav Dhall",
          role: "Associate Professor, Monash University, Australia",
          image: "/committee/avatar.png",
          link: "#",
        },
        {
          name: "Dr. Neeraj Goel",
          role: "Assistant Professor, IIT Ropar, India",
          image: "/committee/avatar.png",
          link: "#",
        },
      ],
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
        title="Organizing Committee"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />

     {OrganizingMembers.map((group, index) => (
      <div key={index} className="text-center mt-12 mb-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">{group.title}</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 container mx-auto mt-4"
        >
          {group.members.map((member, index) => (
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
))}


    </div>
  );
};

export default OrganizingCommittee;

