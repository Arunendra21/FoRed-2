import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand & Legal */}
        <div>
          <div className="text-2xl font-bold text-black mb-2">
            <span className="text-gray-800">Fo</span>
            <span className="text-red-500">Reds</span>
          </div>
          <p className="text-sm">
            Registered as Meal Bridge Foundation.<br />
            Under Indian Society Registration Act XXI, 1860
          </p>
          <p className="text-sm mt-2">
            All donations are tax-exempted as eligible<br />
            under section 80G of the Income Tax Act, 1961.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-between">
          {/* Who We Are */}
          <div>
            <h4 className="font-semibold mb-3">Who we are</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Financials</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Policies</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-3">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">Form 10BE</a></li>
              <li><a href="#" className="hover:underline">Request for food</a></li>
              <li><a href="#" className="hover:underline">Partner with us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebookF size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
