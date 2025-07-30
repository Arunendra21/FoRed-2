import React from 'react';
import bg_image from "../assets/homepage_background.jpg";
import foRedsImage from "../assets/about.jpg"; 
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import DonorDashboard from './DonorDashboard';

function Home() {
  return (
    <>
    <div className="relative w-full overflow-hidden">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="text-xl font-semibold leading-4">
          <span className="text-gray-800">Fo</span>
          <span className="text-red-500 font-bold">Reds</span>
          <span className="block text-xs text-gray-500">Food_redistribution_system</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8 text-sm font-medium">
          <div className="hover:text-red-500 cursor-pointer">ABOUT US ▼</div>
          <div className="hover:text-red-500 cursor-pointer">OUR WORK ▼</div>
          <div className="hover:text-red-500 cursor-pointer">PARTNER WITH US ▼</div>
        </div>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Donate Now
        </Link>
      </nav>

      {/* Hero Image Section */}
      <div className="h-screen w-full relative">
        <img
          src={bg_image}
          alt="Homepage background"
          className="w-full h-full object-cover"
        />

        {/* Get Support Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Looking for Meal Support?
            </h1>
            <p className="text-lg mb-6 drop-shadow-md">
              FoReds partners with NGOs and schools to ensure no food goes to waste—and no one goes hungry.
            </p>
            <Link
  to="/login"
  className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300"
>
  Login
</Link>

          </div>
        </div>
      </div>

      {/* About FoReds Section */}
      <div className="bg-white text-gray-800 px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">
              A Mission to Share Meals, Not Waste Them
            </h2>
            <p className="mb-4 text-lg">
              Since early 2019, FoReds has been on a mission to redistribute excess food and reduce hunger across underserved areas. In collaboration with local heroes and partners, we've committed ourselves to making nutrition more accessible—especially for vulnerable children and mothers.
            </p>
            <p className="text-lg">
              Our work is focused on creating lasting change. By connecting food donors with communities in need, we aim to reshape the way India tackles malnutrition—one meal at a time.
            </p>
            <Link to="/about" className="inline-block mt-6 text-red-500 font-medium hover:underline">
              Learn more →
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={foRedsImage}
              alt="FoReds volunteers distributing food"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
}





export default Home;

