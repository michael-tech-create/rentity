import { FaFacebookF, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <p className="text-3xl font-extrabold text-blue-500 tracking-wide">
            Rentify
          </p>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            Powerful Rental Management System to simplify your workflow.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold text-white uppercase tracking-wide">
            Head Office
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Umaru Musa Way, <br /> Asokoro
          </p>
        </div>

        {/* Social & Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white uppercase tracking-wide">
            Stay Connected
          </h2>
          <ul className="flex space-x-6 mt-4">
            <li>
              <Link href="#" aria-label="Facebook">
                <FaFacebookF className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Github">
                <FaGithubSquare className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
              </Link>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Glossary
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {year} Rentify</p>
        <p className="mt-2 md:mt-0">All rights reserved</p>
      </div>
    </footer>
  );
}
