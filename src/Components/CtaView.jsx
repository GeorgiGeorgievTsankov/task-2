import React from "react";
import email from "../assets/img/Frame 9.svg";
import ButtonDefaultComponent from "./ButtonDefaultComponent";

function CtaView() {
  return (
    <div className="w-[360px] lg:w-[1920px] h-[398px] lg:h-[610px] lg:py-10 bg-[#062e32] lg:bg-[white] flex flex-col justify-center items-center">
    <div className="mx-auto w-[320px] lg:w-[1440px] h-[298px] lg:h-[410px] relative bg-[#062e32] rounded-[20px] lg:rounded-[32px] flex flex-col justify-center items-center">
      <div className="mx-auto w-[240px] lg:w-[712px] h-auto flex flex-col justify-center items-center gap-8 lg:gap-16">
        <div className="flex-col justify-center items-center gap-2 lg:gap-1.5 lg:flex">
          <div className="text-center text-[#e2ffcf] text-2xl lg:text-[42px] font-bold font-['Satoshi'] leading-8 lg:leading-[56px]">
            Ready to Unleash Your Potential?
          </div>
          <div className="w-11/12 lg:w-[712px] text-center text-[#b9cec2] text-sm lg:text-lg font-medium font-['Satoshi'] leading-6 lg:leading-[30px]">
            Enter your email address below to subscribe to our newsletter
          </div>
        </div>
        <div className="lg:w-[456px] h-[58px] gap-3 flex-col lg:flex-row items-center inline-flex">
          {/* input-container */}
          <div className="lg:w-[356px] lg:h-[58px] px-[22px] py-3 bg-[#062e32] rounded-full border-2 border-[#0c8280] flex items-center gap-2">
            <div className="w-6 h-6 pl-0.5 pr-[1.69px] pt-[5px] pb-[4.33px] flex items-center justify-center">
              <img src={email} alt="email" />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px] outline-none w-full placeholder-[#bacfc2]"
            />
          </div>
          <div className="w-full lg:w-[128px] lg:h-[58px] mx-auto">
            <ButtonDefaultComponent onClick={() => alert("Button clicked!")}>
              Subscribe
            </ButtonDefaultComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  );
}

export default CtaView;
