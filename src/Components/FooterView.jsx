import React from "react";
import LinkedIn from "../assets/img/Footer/Social link1.svg";
import Instagram from "../assets/img/Footer/Social link2.svg";
import Twitter from "../assets/img/Footer/Social link3.svg";
import Youtube from "../assets/img/Footer/Social link4.svg";
import Logo from "../assets/img/Footer/Logo.svg";

function FooterView() {
  return (
    <div
      id="footer"
      className="w-[360px] h-[1487px] lg:w-[1920px] lg:h-[514px] relative bg-[#062e32] border-t-2 border-[#0c8280]"
    >
      <div className="flex flex-col-reverse">
        {/* Main footer content */}
        <div className="flex mx-auto flex-col lg:flex-row w-[320px] h-[224px] lg:h-[78px] lg:w-[1444px] py-6 lg:left-[238px] lg:top-[436px] lg:absolute border-t-2 border-[#085253] justify-between lg:items-start lg:inline-flex">
          {/* Build by section */}
          <div className="text-start lg:text-center">
            <span
              style={{
                color: "#bacfc2",
                fontSize: "1rem",
                fontWeight: "500",
                fontFamily: "Satoshi",
                lineHeight: "30px",
              }}
            >
              Build by F
            </span>
            <a href="https://fundamental.bg/">
              <span
                style={{
                  color: "#e2ffcf",
                  fontSize: "1rem",
                  fontWeight: "500",
                  fontFamily: "Satoshi",
                  lineHeight: "30px",
                }}
              >
                undamental Studio
              </span>
            </a>
            <span
              style={{
                color: "#bacfc2",
                fontSize: "1rem",
                fontWeight: "500",
                fontFamily: "Satoshi",
                lineHeight: "30px",
              }}
            >
              . Powered by{" "}
            </span>
            <span
              style={{
                color: "#e2ffcf",
                fontSize: "1rem",
                fontWeight: "500",
                fontFamily: "Satoshi",
                lineHeight: "30px",
              }}
            >
              Wordpress
            </span>
          </div>

          {/* Navigation links */}
          <div className="lg:h-[30px] justify-start items-start gap-11 lg:inline-flex">
            <div className="lg:text-center text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
              Privacy policy
            </div>
            <div className="lg:text-center text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
              Terms of service
            </div>
            <div className="lg:text-center text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
              Cookie settings
            </div>
          </div>
        </div>
        {/* Main footer content End*/}

        {/* Additional footer sections */}
        <div className="mx-auto w-[320px] h-[1227px] lg:h-[322px] lg:w-[1440px] lg:left-[240px] lg:top-[50px] lg:absolute lg:justify-between lg:items-start lg:inline-flex">
          {/* Social media icons section */}
          <div className="pt-3 flex-col justify-between h-[109px] lg:justify-start lg:items-start lg:gap-6 inline-flex">
            <div className="w-[54px] h-[41px] relative cursor-pointer">
              <a href="#hero">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            <div className="justify-start items-start gap-1.5 inline-flex">
              <div className="w-[42px] h-[42px] pl-[4.99px] pr-[4.60px] pt-[4.99px] pb-[4.60px] bg-[#084146] rounded-[5.09px] justify-center items-center flex cursor-pointer">
                <a href="https://www.linkedin.com/">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="w-[42px] h-[42px] relative bg-[#084146] rounded-[5.09px] cursor-pointer">
                <a href="https://www.instagram.com/">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="w-[42px] h-[42px] pl-[4.66px] pr-[4.27px] pt-[4.66px] pb-[4.27px] bg-[#084146] rounded-[5.09px] justify-center items-center flex cursor-pointer">
                <a href="https://www.twitter.com/">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="w-[42px] h-[42px] pl-[5.61px] pr-[5.22px] pt-[5.61px] pb-[5.22px] bg-[#084146] rounded-[5.09px] justify-center items-center flex cursor-pointer">
                <a href="https://www.youtube.com/">
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Services section */}
          <div className="flex-col lg:flex-row justify-start items-start gap-[32px] lg:gap-[140px] flex">
            {/* Services section */}
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                Services
              </div>
              <ul className="flex-col justify-start items-start gap-1.5 flex">
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    SEO Optimisation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Paid media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Email marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Influencer marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Social media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Lead generation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Web design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Web development
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries section */}
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                Industries
              </div>
              <ul className="flex-col justify-start items-start gap-1.5 flex">
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Marketplaces
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Fintech & Banking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Fashion & Apparel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Pet care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Food & Beverage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    Automotive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    SaaS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer"
                  >
                    eCommerce
                  </a>
                </li>
              </ul>
            </div>

            {/* Company section */}
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                Company
              </div>
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <ul className="flex-col justify-start items-start gap-1.5 flex">
                  <li>
                    <a className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer">
                      About us
                    </a>
                  </li>

                  <li className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer">
                    Careers
                  </li>
                  <li className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer">
                    Contact us
                  </li>
                  <li className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer">
                    FAQ
                  </li>
                  <li className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] cursor-pointer">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[146px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
              Contacts
            </div>
            <div className="self-stretch h-[106px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                  (111) 111-1111
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                  office@companyname.com
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                  4882 Pooh Bear Lane, South Carolina, SC{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
