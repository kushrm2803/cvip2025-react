import React from "react";
import AboutInstitute from "../../components/venue/AboutInstitute";
import ImageSlider from "../../components/venue/ImageSlider";
import Map from "../../components/venue/Map";
import HeroSection from "../../components/HeroSection";

const ConferenceVenue = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <HeroSection
        title="Conference Venue"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />
      <div className="mt-4">
        <AboutInstitute />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Institute Highlights
        </h2>
        <ImageSlider />
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Conference Location
        </h2>
        <Map />
      </div>
    </div>
  );
};

export default ConferenceVenue;
