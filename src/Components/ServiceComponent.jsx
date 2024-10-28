import React from "react";
import search from "../assets/img/search-1.svg";
import frame53 from "../assets/img/Vector.svg";
import emailIco from "../assets/img/Vector3.svg";
import favoriteIco from "../assets/img/favorites-1.svg";
import atomIco from "../assets/img/atom-1.svg";
import leadIco from "../assets/img/Frame-54.svg";
import webIco from "../assets/img/frame-55.svg";
import webDevIco from "../assets/img/frame-56.svg";
import rightArrow from "../assets/img/right-arrow-1.svg";

function ServiceComponent() {
  return (
    <div id="services" className="lg:relative pt-[50px] lg:pt-[0px] w-[360px] h-[2796px] lg:w-[1920px] lg:h-[1072px] relative bg-[#fcfaf9] border-t border-[#f1e6e0]">
      <div className="ml-auto gap-y-[16px]  mb-16 w-[320px] h-[254px] lg:w-[1440px] lg:absolute lg:left-[240px] lg:top-[10px]  justify-between items-center lg:inline-flex">
        <div className=" lg:w-[580px] flex-col justify-center items-start inline-flex">
          <div className=" text-[#00a67d] text-lg font-bold font-['Satoshi'] uppercase leading-[30px]">
            OUR Services
          </div>
          <div className=" text-[#062e32] text-[42px] font-bold font-['Satoshi'] leading-[56px]">
            We've got you covered
          </div>
        </div>
        <div className="lg:w-[580px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
          Our mission is to elevate your brand to new heights. Our
          results-driven approach has successfully scaled businesses across
          diverse sectors, harnessing the power of digital marketing to drive
          remarkable growth
        </div>
      </div>
      {/* {Box-1} */}
      <div className="justify-center  gap-y-[16px] h-[2320px] lg:absolute lg:w-[1460px] lg:h-[596px] lg:left-1/2 lg:top-[238px] lg:-translate-x-1/2 flex flex-wrap items-start content-start lg:gap-x-[32px] lg:gap-y-[42px]">
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={search}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                SEO Optimisation
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>

              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {Box-2} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 relative bg-white rounded-md">
                <img
                  src={frame53}
                  alt="frame53"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Paid media
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {Box-3} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 relative bg-white rounded-md">
                <img
                  src={emailIco}
                  alt="email"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Email marketing
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {Box-4} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={favoriteIco}
                  alt="favorite"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Influencer marketing
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {Box-5} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-[3px] bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={atomIco}
                  alt="atom"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                  Social media
                </div>
                <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                  Dominate search engine rankings and attract more site visitors
                  with our tailored SEO strategies.
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {Box-6} */}

        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={leadIco}
                  alt="lead"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Lead generation
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* {Box-7} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-1 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={webIco}
                  alt="web"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Web design
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* {Box-8} */}
        <div className="w-[336px] h-[276px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={webDevIco}
                  alt="web-dev"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Web development
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Dominate search engine rankings and attract more site visitors
                with our tailored SEO strategies.
              </div>
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Learn more
              </div>
              <div className="lg:w-6 lg:h-6 py-[4.13px] justify-center items-center flex">
                <img
                  src={rightArrow}
                  alt="search1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {Button} */}
      <div className="mx-auto w-[320px] h-[58px] mt-5 lg:mt-0 lg:absolute lg:top-[914px] lg:left-[869px] lg:w-[182px] lg:h-[58px] px-[22px] py-3 bg-[#07373c] rounded-full lg:justify-center lg:items-center lg:gap-2.5 lg:inline-flex">
        <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
          View all services
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
