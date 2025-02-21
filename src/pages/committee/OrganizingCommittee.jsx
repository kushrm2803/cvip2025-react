import React, { useState, useEffect } from "react";
import MemberCard from "../../components/committee/MemberCard";
import HeroSection from "../../components/HeroSection";
import { motion } from "framer-motion";

const OrganizingCommittee = () => {
  const OrganizingMembers = [
    {
      name: "Dr. Elizabeth Green",
      role: "Senior Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Michael Lee",
      role: "Technical Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/michael",
    },
    {
      name: "Dr. Susan White",
      role: "Strategic Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/susan",
    },
    {
      name: "Dr. David Brown",
      role: "External Relations Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/david",
    },
    {
      name: "Dr. Anna Black",
      role: "Research Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/anna",
    },
    {
      name: "Dr. Elizabeth Green",
      role: "Senior Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Dustin Green",
      role: "Senior Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Elizabeth Jacob",
      role: "Senior Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Eliz Green",
      role: "Senior Advisor",
      image: "/committee/avatar.png",
      link: "https://scholar.google.com/elizabeth",
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
	    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
		
		  <div>
            <b>Patron: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li>Prof. B. B. Chaudhuri (ISI Kolkata, India)</li>
			  </ul>
            </span>
          </div>
		  
		  <br/>
		    <div>
            <b>General Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Prof. Rajeev Ahuja (Director, IIT Ropar, India)</li>
				<li> Prof. Guoying Zhao (Academy Professor, University of Oulu, Finland)</li>
				<li> Prof. Venkatesh Babu (Professor, IISc Bangalore, India)</li>
			  </ul>
            </span>
          </div>
		  
		  <br/>
		    <div>
            <b>General Co-Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Prof. R. Balasubramanian (Professor and Head, IIT Roorkee, India)</li>
			  </ul>
            </span>
          </div>
            			
		  <br/>
		    <div>
            <b>Conference Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Dr. Puneet Goyal (Associate Professor, IIT Ropar, India)</li>
				<li> Dr. Santosh Vipparthi (Associate Professor and Head, IIT Ropar, India)</li>
				<li> Dr. Gaurav Bhatnagar (Project Director, iHub-Drishti and Professor, IIT Jodhpur, India)</li>
				<li> Prof. Aparajita Ojha (Professor, IIITDM Jabalpur, India)</li>
			  </ul>
            </span>
          </div>
          			
		  <br/>
		    <div>
            <b>Conference Co-Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Dr. Jagadeesh Kakarla (Assistant Professor, IIITDM Kancheepuram, India)</li>
				<li> Dr. Shiv Ram Dubey (Assistant Professor, IIIT Allahabad, India)</li>
				<li> Prof. Sanjeev Kumar (Professor, IIT Roorkee, India)</li>
				<li> Dr. Deep Gupta (Assistant Professor, VNIT Nagpur, India)</li>
			  </ul>
            </span>
          </div>
         			
		  <br/>
		    <div>
            <b>Sponsorship Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Dr. Sukrit Gupta (Assistant Professor, IIT Ropar, India)</li>
			  </ul>
            </span>
          </div>  
 			
		  <br/>
		    <div>
            <b>Workshop Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Dr. Prashant Patil (Assistant Professor, IIT Guwahati, India)</li>
				<li> Dr. Kapil Rana (Assistant Professor, TIET Patiala, India.)</li>
			  </ul>
            </span>
          </div>
         			
		  <br/>
		    <div>
            <b>Publications Chairs: </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
				<li> Dr. Abhinav Dhall (Associate Professor, Monash University, Australia)</li>
				<li> Dr. Neeraj Goel (Assistant Professor, IIT Ropar, India)</li>
			  </ul>
            </span>
          </div>  
			
		  <br/>
		    <div>
            <b>More details will be updated soon ... </b><br/>
            <span className="font-normal">
			  <ul className="list-disc list-outside text-base">
			  </ul>
            </span>
          </div>  


		  
	   </div>
      {/*<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto mt-4"
      >
        {OrganizingMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            link={member.link}
          />
        ))}
      </motion.div>*/}
    </div>
  );
};

export default OrganizingCommittee;

