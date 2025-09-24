import React from 'react';
import logo from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <div>
      <div className="relative z-10 -mb-32">
        <div className="bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-2xl shadow-lg p-8 mx-6 md:mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <form className="mt-4 flex gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-sm px-4 py-2 rounded-lg border focus:ring-2 focus:ring-yellow-400 text-gray-900"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-[#0B0D17] text-white mt-12 pt-32 pb-12 flex flex-col items-center">
        <img className="w-[60px] h-[60px] mb-7" src={logo} alt="" />
        <div>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white">About Us</h3>
              <p className="mt-3 text-sm">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Subscribe</h3>
              <p className="mt-3 text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white flex-1 px-4 py-2 rounded-lg border text-gray-900 focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 font-medium hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">
              ©2024 Your Company All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
