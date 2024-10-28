import React from "react";
import logo1 from "../assets/img/frame-53.svg";
import logo2 from "../assets/img/frame-53-2.svg";
import logo3 from "../assets/img/frame-53-3.svg";
import ButtonDefaultComponent from "./ButtonDefaultComponent";

function ResultView() {
  return (
    <div className="ml-auto mr-auto  w-[320px] h-[1982px]  flex lg:w-[1920px] lg:h-[772px] lg:py-[100px] lg:flex-col lg:justify-start lg:items-center lg: gap-16 lg:inline-flex">
      {/* {text} */}
      <div className="pt-[50px] lg:pt-0 items-center space-y-24 w-[320px] h-[1782px] lg:w-[850px] lg:h-[162px] lg:flex-col lg:justify-start lg:items-center lg:gap-4 lg:inline-flex">
        <div className=" w-[320px] h-[298] lg:w-[850px] lg:h-[162px]">
          <div className="lg:self-stretch lg:h-[86px] lg:flex-col lg:justify-start lg:items-center lg:flex">
            <div className="text-center text-[#00a67d] text-lg font-bold font-['Satoshi'] uppercase leading-[30px]">
              OUR RESULTS
            </div>
            <div className="text-center text-[#062e32] text-[42px] font-bold font-['Satoshi'] leading-[56px]">
              Market Masters by the numbers
            </div>
          </div>
          <div className="self-stretch text-center text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
            Our mission is to elevate your brand to new heights. Our
            results-driven approach has successfully scaled businesses across
            diverse sectors, harnessing the power of digital marketing to drive
            remarkable growth
          </div>
        </div>

        {/* {boxes} */}
        <div className="pb-[20px] space-y-10 lg:space-y-0 w-[320px] h-[1352px lg:w-[1440px] lg:h-[346px] lg:justify-between lg:items-start lg:inline-flex">
          <div className="w-[336px] h-[346px] p-6  bg-[#062e32]  rounded-3xl flex-col justify-center items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="flex-col justify-start  gap-2 flex">
                <div className="w-[295px] text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                  A quantifiable journey of marketing excellence
                </div>
                <div className="w-[295px] text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                  Explore the numbers that tell the story of our projects,
                  experiences, and the talented team behind our success.
                  <br />
                </div>
              </div>
              <ButtonDefaultComponent onClick={() => alert("Button clicked!")}>
                Book a call
              </ButtonDefaultComponent>
            </div>
          </div>

          <div className="w-[336px] h-[346px] p-6 bg-[#fcfaf9] rounded-3xl border-2 border-[#f1e5e0] flex-col justify-between items-start inline-flex">
            <div className="w-[52px] h-[52px] pl-1 pr-[3px] py-[5px] rounded-md justify-center items-center inline-flex">
              <img
                src={logo1}
                alt="Logo1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="self-stretch h-[152px] flex-col justify-start items-start gap-3 flex">
              <div className="text-center text-[#062e32] text-7xl font-bold font-['Satoshi'] leading-[68px]">
                $84M
              </div>
              <div className="self-stretch h-[0px] border-2 border-[#f1e6e0]"></div>
              <div className="w-72 text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Trackable revenue generated across our portfolio
              </div>
            </div>
          </div>

          <div className="w-[336px] h-[346px] p-6 bg-[#fcfaf9] rounded-3xl border-2 border-[#f1e5e0] flex-col justify-between items-start inline-flex">
            <div className="w-[52px] h-[52px] pl-1 pr-[3px] py-[5px] rounded-md justify-center items-center inline-flex">
              <img
                src={logo2}
                alt="Logo2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="self-stretch h-[152px] flex-col justify-start items-start gap-3 flex">
              <div className="text-center text-[#062e32] text-7xl font-bold font-['Satoshi'] leading-[68px]">
                230%
              </div>
              <div className="self-stretch h-[0px] border-2 border-[#f1e6e0]"></div>
              <div className="w-72 text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Average yearly growth rate across our clients
              </div>
            </div>
          </div>

          <div className="w-[336px] h-[346px] p-6 bg-[#fcfaf9] rounded-3xl border-2 border-[#f1e5e0] flex-col justify-between items-start inline-flex">
            <div className="w-[52px] h-[52px] pl-1 pr-[3px] py-[5px] rounded-md justify-center items-center inline-flex">
              <img
                src={logo3}
                alt="Logo3"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="self-stretch h-[152px] flex-col justify-start items-start gap-3 flex">
              <div className="text-center text-[#062e32] text-7xl font-bold font-['Satoshi'] leading-[68px]">
                90%
              </div>
              <div className="self-stretch h-[0px] border-2 border-[#f1e6e0]"></div>
              <div className="w-72 text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Increase in ROAS compared to previous results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultView;
