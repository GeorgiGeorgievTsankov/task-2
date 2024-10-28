import React from "react";
import { useState } from "react";
import logo from "../assets/img/Logo.svg";
import Hamburger from "../assets/img/Hamburger.png";
import ButtonSecondaryComponent from "./ButtonSecondaryComponent";

function Navbar() {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    console.log("Menu toggled!");
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };
  

  return (
    <div className="z-10 absolute left-1/2 transform -translate-x-1/2 top-[32px] w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[58px] max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="w-[54px] h-[41px] relative">
          <a href="#hero">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Navigation Links - hidden on small screens */}
        <nav className="hidden lg:flex px-9 py-4 bg-[#085253] rounded-full border-2 border-[#0c8280] justify-start items-center gap-16">
          <ul className="flex items-center gap-16">
            <li>
              <button
                onClick={toggleServicesMenu}
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                Services
              </button>
              {isServicesMenuOpen && (
                <div className="absolute  mt-4 p-6 bg-[#085253] rounded-3xl border-2 border-[#0c8280] flex-col">
                  <ul>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      SEO Optimisation
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Paid Media
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Email Marketing
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Influencer Marketing
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Social Media
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Lead Generation
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Web Design
                    </li>
                    <li className="py-2 text-[#e2ffcf] text-lg font-bold">
                      Web Development
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#success"
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                Success stories
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="text-center text-[#e2ffcf] text-lg font-bold cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Book a call button - hidden on small screens */}

        <div className="hidden lg:block">
          <ButtonSecondaryComponent onClick={() => alert("Button clicked!")}>
            Book a call
          </ButtonSecondaryComponent>
        </div>

        {/* Hamburger Menu Icon - visible on small screens */}
        <div className="lg:hidden w-6 h-6 flex items-center">
          <img
            src={Hamburger}
            alt="hamburger"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
