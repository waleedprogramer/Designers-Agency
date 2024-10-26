import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="container px-20 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Our Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Information</h3>
          <ul>
            <li className="mb-2">
              <a href="#address" className="hover:text-gray-400">
                Address
              </a>
            </li>
            <li className="mb-2">
              <a href="#phone" className="hover:text-gray-400">
                Phone Number
              </a>
            </li>
            <li className="mb-2">
              <a href="#email" className="hover:text-gray-400">
                Email Address
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul>
            <li className="mb-2">
              <a href="#mission" className="hover:text-gray-400">
                Our Mission
              </a>
            </li>
            <li className="mb-2">
              <a href="#vision" className="hover:text-gray-400">
                Our Vision
              </a>
            </li>
            <li className="mb-2">
              <a href="#team" className="hover:text-gray-400">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Product */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul>
            <li className="mb-2">
              <a href="#pricing" className="hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#testimonials" className="hover:text-gray-400">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#faq" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#support" className="hover:text-gray-400">
                Customer Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center border-t border-gray-700 pt-5">
        <p className="text-gray-400">&copy; 2024 Waleed Mehmood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
