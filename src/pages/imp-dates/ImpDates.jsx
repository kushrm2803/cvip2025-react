import React from "react";
import HeroSection from "../../components/HeroSection";
import DatesTable from "../../components/DatesTable";
import AdditionalInfo from "../../components/imp-dates/AdditionalInfo";

const ImpDates = () => {
  const dates = [
    {
      phase: "Paper Submission Starts",
      date: "February 25, 2025",
      status: "Open",
    },
    {
      phase: "First Round - Paper Submission Deadline",
      date: "April 15, 2025",
      status: "Closed",
    },
    {
      phase: "Notification of Paper Acceptance",
      date: "June 15, 2025",
      status: "Closed",
    },
    {
      phase: "Second Round - Paper Submission Deadline",
      date: "August 10, 2025",
      status: "Closed",
    },
    {
      phase: "Notification of Paper Acceptance",
      date: "October 10, 2025",
      status: "Closed",
    },
    {
      phase: "Camera Ready Submission Deadline",
      date: "October 31, 2025",
      status: "Open",
    },
    {
      phase: "Academia and Industry Workshops",
      date: "December 10, 2025",
      status: "Open",
    },
    {
      phase: "Main Conference Dates",
      date: "December 11-13, 2025",
      status: "Scheduled",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection
        key={Math.random()}
        title="Important Dates"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />

      <div className="container mx-auto py-12 px-4">
        <DatesTable key={Math.random()} dates={dates} />
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default ImpDates;
