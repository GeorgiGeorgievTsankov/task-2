import React from "react";
import rightArrow from "../assets/img/right-arrow-1.svg";
// import search from "../assets/img/search-1.svg";
import marketplacesIco from "../assets/img/marketplaces.svg";
import fintechIco from "../assets/img/fintech.svg";
import fashionIco from "../assets/img/fashion.svg";
import petIco from "../assets/img/pet.svg";
import foodIco from "../assets/img/food.svg";
import automotiveIco from "../assets/img/Steering-Wheel.svg";
import cloudIco from "../assets/img/cloud1.svg";
import shoppingIco from "../assets/img/shopping-cart-1.svg";




function ExpertiseComponent() {
  return (
    <div className="mx-auto w-[320px] h-[2922px] lg:w-[1920px] lg:h-[1056px] lg:py-[100px] flex-col justify-start items-center gap-16 lg:inline-flex">
      <div className="h-[238px] flex-col justify-start text-left lg:items-center items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-center flex">
          <div className="text-left lg:text-start text-[#00a67d] text-lg font-bold font-['Satoshi'] uppercase leading-[30px]">
            OUR EXPertise
          </div>
          <div className=" lg:text-center text-[#062e32] text-lg lg:text-[42px] font-bold font-['Satoshi'] leading-[56px]">
            Business industries we dive in
          </div>
        </div>
        <div className="text-start lg:w-[630px] lg:text-center text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
          Our team excels in adapting our strategies to meet the unique needs of
          various industries. Discover how we drive success in each sector.
        </div>
      </div>

      {/* {Start} */}
      <div className="lg:w-[1440px] lg:h-[630px] flex flex-wrap justify-between items-start content-start gap-x-[24px] gap-y-[30px] mx-auto">
        {/* {Box-1} */}
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[198px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={marketplacesIco}
                  alt="marketplaces"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Marketplaces
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We enhance marketplace visibility and sales with tailored SEO,
                targeted ads, and customer acquisition strategies.
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={fintechIco}
                  alt="fintech"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Fintech & Banking
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We implement trustworthy and secure digital strategies that
                attract and retain customers
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

        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={fashionIco}
                  alt="fashion"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Fashion & Apparel
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We enhance fashion brands with influencer partnerships and
                targeted digital campaigns
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={petIco}
                  alt="pet"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Pet care
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We create heartwarming, educational content that builds strong
                community ties
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={foodIco}
                  alt="food"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Food & Beverage
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We craft appetizing marketing campaigns that drive excitement,
                increase and local visibility
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={automotiveIco}
                  alt="automotive"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Automotive
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Our dynamic strategies bring automotive brands to life,
                highlighting innovation
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[198px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={cloudIco}
                  alt="cloud"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                SaaS
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We drive growth for SaaS companies through targeted content
                marketing, lead generation, and user retention
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
        <div className="w-[336px] h-[300px] p-6 bg-white rounded-[18px] border-2 border-[#f1e6e0] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[198px] flex-col justify-start items-start gap-2 flex">
            <div className="w-8 h-8 p-0.5 bg-white rounded-md justify-center items-center inline-flex">
                <img
                  src={shoppingIco}
                  alt="shopping"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                eCommerce
              </div>
              <div className="w-[291px] text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Our strategies optimize eCommerce platforms to improve user
                experience, increase conversions
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
      {/* {----} */}
    </div>
  );
}

export default ExpertiseComponent;
