import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center mb-2">
          <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-0">
            <div className="mr-4">
              <img
                src="/iitropar-logo.jpg"
                alt="College Logo"
                width="64"
                height="64"
                className="mb-2 md:mb-0"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                Indian Institute of Technology Ropar
              </h2>
              <p className="text-sm text-gray-600">
                Birla Seed Farms, Rupnagar, Punjab - 140001
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-2 mt-4">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/imp-dates" className="hover:text-gray-700">
            Important Dates
          </Link>
          <Link to="/submissions/call-for-papers" className="hover:text-gray-700">
            Call for Papers
          </Link>
          <Link to="/registrations" className="hover:text-gray-700">
            Registration
          </Link>
          <a
            href="https://www.iitrpr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            IIT Ropar Site
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://www.instagram.com/college" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.facebook.com/college" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://twitter.com/college" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.youtube.com/college" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-red-600" />
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Indian Institute of Technology, Ropar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
