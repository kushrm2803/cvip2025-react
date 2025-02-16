import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImpDatesPage from "./pages/ImpDates";
import Sponsorship from "./pages/Sponsorship";
import NotFound from "./pages/NotFound";
import Registrations from "./pages/Registrations";

const App = () => {
  return (
    <Router>
      <div className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imp-dates" element={<ImpDatesPage />} />
            <Route path="/sponsorships" element={<Sponsorship />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
