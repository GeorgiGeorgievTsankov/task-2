import React from "react";
import darts from "../assets/img/ourProcess/darts_2910816 1.svg";
import chess from "../assets/img/ourProcess/chess 1.svg";
import shuttle from "../assets/img/ourProcess/shuttle 2.svg";
import pieChart from "../assets/img/ourProcess/pie-chart 2.svg";
import ButtonDefaultComponent from "./ButtonDefaultComponent";

function OurProcessView() {
  return (
    <div className="w-[360px] h-[1440px] lg:w-[1920px] lg:h-[610px] lg:pl-[241px] lg:pr-[239px] bg-[#062e32] justify-center items-center inline-flex">
      <div className="py-[100px] flex-col justify-start items-start gap-16 inline-flex">
        <div className="w-[320px] lg:w-[1439px] lg:justify-between lg:items-end lg:inline-flex">
          <div className="w-[320px] flex-col lg:justify-center lg:items-start lg:gap-1.5 lg:inline-flex">
            <div className="text-[#e2ffcf] text-[42px] font-bold font-['Satoshi'] leading-[56px]">
              Our process
            </div>
            <div className="w-[320px] lg:w-[634px] text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
              At Market Masters, we streamline your path to digital marketing
              success through a clear and collaborative process.
            </div>
          </div>
          <div className="pt-5 lg:inline-flex">
          <ButtonDefaultComponent onClick={() => alert("Button clicked!")}>
            Book a call
          </ButtonDefaultComponent>
          </div>
        </div>

        <div className="w-[320px]  lg:w-[1440px] justify-start items-start lg:gap-8 gap-y-4 lg:inline-flex">
          {/* {box1} */}
          <div className="mb-4 grow shrink basis-0 p-4 bg-[#064041] rounded-[18px] border-2 border-[#135b62] flex-col justify-center items-center gap-6 inline-flex">
            <div className="w-10 h-10 relative">
              <img src={darts} alt="darts" />
            </div>
            <div className="self-stretch h-32 flex-col justify-center items-center gap-2 flex">
              <div className="text-center text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Goal setting
              </div>
              <div className="self-stretch text-center text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Every successful project begins with a thorough consultation. We
                start by understanding your business.
              </div>
            </div>
          </div>
          {/* box2 */}
          <div className="mb-4 grow shrink basis-0 p-4 bg-[#064041] rounded-[18px] border-2 border-[#135b62] flex-col justify-center items-center gap-6 inline-flex">
            <div className="w-[39px] h-10 px-[2.07px] flex-col justify-center items-center flex">
              <div className="w-[34.86px] h-10 relative">
                <img src={chess} alt="chess" />
              </div>
            </div>
            <div className="self-stretch h-32 flex-col justify-center items-center gap-2 flex">
              <div className="text-center text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Strategy planning
              </div>
              <div className="self-stretch text-center text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                After the consultation, our team develops a comprehensive
                strategy tailored to your specific needs.
              </div>
            </div>
          </div>
          {/* {box3} */}
          <div className="mb-4 grow shrink basis-0 p-4 bg-[#064041] rounded-[18px] border-2 border-[#135b62] flex-col justify-center items-center gap-6 inline-flex">
            <div className="w-[39px] h-[38px] relative">
              <img src={shuttle} alt="shuttle" />
            </div>
            <div className="self-stretch h-32 flex-col justify-center items-center gap-2 flex">
              <div className="text-center text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Implementation
              </div>
              <div className="self-stretch text-center text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                We manage all aspects of the execution, ensuring that every
                campaign is launched smoothly.
              </div>
            </div>
          </div>
          {/* {box4} */}
          <div className="mb-4 grow shrink basis-0 p-4 bg-[#064041] rounded-[18px] border-2 border-[#135b62] flex-col justify-center items-center gap-6 inline-flex">
            <div className="w-10 h-10 justify-center items-center inline-flex">
              <div className="w-10 h-10 relative">
                <img src={pieChart} alt="pie-chart" />
              </div>
            </div>
            <div className="self-stretch h-32 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch text-center text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                Evaluation
              </div>
              <div className="self-stretch text-center text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                After launching the campaigns, we closely monitor their
                performance and gather data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcessView;
