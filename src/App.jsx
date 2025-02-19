import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ImpDatesPage from "./pages/imp-dates/ImpDates";
import Sponsorship from "./pages/sponsorship/Sponsorship";
import NotFound from "./pages/NotFound";
import Registrations from "./pages/registrations/Registrations";
import AuthorGuidelines from "./pages/submissions/AuthorGuidelines";
import CallForPapersPage from "./pages/submissions/CallForPapers";
import AdvisoryCommittee from "./pages/committee/AdvisoryCommittee";
import OrganizingCommittee from "./pages/committee/OrganizingCommittee";
import SteeringCommittee from "./pages/committee/SteeringCommittee";
import Accomodation from "./pages/venue/Accomodation"
import ConferenceVenue from "./pages/venue/ConferenceVenue"
import HowToReach from "./pages/venue/HowToReach"
import TouristPlacesNearby from "./pages/venue/TouristPlaceNearby"

const App = () => {
  return (
    <Router basename={'/cvip2025/'}>
      <div className="antialiased min-h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imp-dates" element={<ImpDatesPage />} />
            <Route path="/sponsorships" element={<Sponsorship />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/submissions/author-guidelines" element={<AuthorGuidelines />} />
            <Route path="/submissions/call-for-papers" element={<CallForPapersPage />} />
            <Route path="/committee/advisory-committee" element={<AdvisoryCommittee />} />
            <Route path="/committee/organizing-committee" element={<OrganizingCommittee/>} />
            <Route path="/committee/steering-committee" element={<SteeringCommittee />} />
            <Route path="/venue&travel/accomodation" element={<Accomodation/>}/>
            <Route path="/venue&travel/conference-venue" element={<ConferenceVenue/>}/>
            <Route path="/venue&travel/how-to-reach" element={<HowToReach/>}/>
            <Route path="/venue&travel/tourist-places-nearby" element={<TouristPlacesNearby/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
