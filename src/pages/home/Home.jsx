import React from "react";
import Carousel from "../../components/home/carousel/Carousel";
import ConferenceDetails from "../../components/home/ConferenceDetails";
// import SpeakersSection from "../components/home/SpeakersSection";
import AboutIITRopar from "../../components/home/AboutIITRopar";
// import SponsorsSection from "../../components/home/SponsorsSection";
import EventCountDown from "../../components/home/EventCountDown";
import DatesTable from "../../components/DatesTable";

const HomePage = () => {
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
    <div className="w-full">
      <Carousel />
      <ConferenceDetails />
      {/* <SpeakersSection /> */}
      <EventCountDown
        eventStartDate="2025-12-10T00:00:00"
        eventEndDate="2025-12-13T00:00:00"
      />
      <div className="container mx-auto py-12 px-4">
        <DatesTable key={Math.random()} dates={dates} />
      </div>
      <AboutIITRopar />
      {/* <SponsorsSection /> */}
    </div>
  );
};

export default HomePage;
