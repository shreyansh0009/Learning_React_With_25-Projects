import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="border-gray-600 " />

      <footer className="bg-gray-800 w-full py-8 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a
                href="#"
                className="text-stone-300 hover:text-emerald-400 transition"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-emerald-400 transition"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-emerald-400 transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-emerald-400 transition"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-emerald-400 transition"
              >
                Career
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-stone-300 hover:text-sky-400 transition text-xl"
              >
                <FaTwitter className="text-2xl" />
              </a>

              <a
                href="#"
                className="text-stone-300 hover:text-blue-600 transition text-xl"
              >
                <FaLinkedin className="text-2xl" />
              </a>

              <a
                href="#"
                className="text-stone-300 hover:text-gray-400 transition text-xl"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="#"
                className="text-stone-300 hover:text-pink-500 transition text-xl"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-stone-400 text-sm">
            <p>
              Copyright © {new Date().getFullYear()} Todo App - All rights
              reserved || Designed By: Saurabh Shreyansh
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
