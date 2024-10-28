import React from "react";
import Navbar from "./Navbar";
import googleLogo from "../assets/img/Google.png";
import facebookLogo from "../assets/img/Facebook.png";
import youLogo from "../assets/img/YouTube.svg";
import pinterestLogo from "../assets/img/Pinterest.svg";
import twitchLogo from "../assets/img/Twitch.svg";
import webLogo from "../assets/img/Webflow.svg";
import containerPic from "../assets/img/ImageContainer.png";
import circleLogo from "../assets/img/Circle.svg";
import playPlayLogo from "../assets/img/PlayIcon.svg";
import LogoClutch from "../assets/img/Clutch logo.svg";
// import ButtonDefaultComponent from "./ButtonDefaultComponent";
// import ButtonSecondaryComponent from "./ButtonSecondaryComponent";

function HeroView() {
  return (
    <section
      id="hero"
      className=" w-[360px] h-[1273px]  bg-[#062e32] relative lg:w-[1920px] lg:h-[1610px] flex flex-col items-center justify-center"
    >
      <Navbar />
      <div className="lg:h-[1610px]   lg:relative">
        <div className="absolute left-[20px] top-[24px]  w-[320px] h-[1133.67px] flex  lg:left-[20px] lg:top-[24px] lg:w-[1920px] lg:h[1640px] lg:relative ">
          <div className="absolute flex flex-col  items-start gap-6 w-[320px] h-[420px]  top-24 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  lg:flex lg:flex-col lg:items-center lg:gap-16 lg:absolute lg:w-[1120px] lg:h-[354px] lg:left-[400px] lg:top-[196px]">
            <div className="relative flex flex-col items-start gap-1 w-[320px] h-[204px] lg:items-center lg:text-center">
              <div className="flex flex-row items-center p-0 gap-3 w-[155px] h-[30px]">
                <div className="h-[30px] justify-start items-center gap-3 inline-flex">
                  <div className="lg:w-[23px] lg:h-[22px]">
                    <img src={LogoClutch} alt="LogoClutch" />
                  </div>
                  <div className="text-center w-[155px] h-[30px] lg:w-[130px] lg:h-[30px]">
                    <span
                      style={{ color: "#bacfc2" }}
                      className="text-base font-medium font-satoshi leading-[30px] mr-1 "
                    >
                      4.9 / 5 on
                    </span>
                    <span
                      style={{ color: "#e2ffcf" }}
                      className="text-base font-medium font-satoshi leading-[30px]"
                    >
                      Clutch
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="w-[320px] h-[168px] font-satoshi font-black text-[36px] leading-[42px] flex items-center tracking-[-0.014em] text-customMainHeading lg:flex lg:w-[1120px] lg:h-[144px] lg:font-black lg:text-[64px] lg:leading-[72px] lg:items-center lg:justify-center lg:tracking-[-0.014em] lg:text-[#E2FFCF]">
                Drive revenue and retention with experts that know how to win
              </h1>

              <div>
                <p className="w-[320px] h-[192px] font-satoshi font-body text-[20px] leading-[32px] flex items-center tracking-[-0.014em] text-customBodyD lg:w-[1120px] lg:h-[64px] lg:text-[18px] lg:leading-[32px]  lg:tracking-[-0.01em] lg:text-[#BACFC2] lg:mx-auto">
                  Choose us as your digital marketing agency and propel your
                  business to new heights with our award-winning digital
                  marketing services and proprietary technology platform.
                </p>
              </div>
            </div>
            {/* {Button-box} */}
            {/* <div className="absolute left-[20px] top-[573px] lg:relative lg:top-auto lg:left-auto lg:justify-start lg:items-start lg:flex lg:gap-3">
              <ButtonSecondaryComponent
                onClick={() => alert("Button clicked!")}
              >
                Success stories
              </ButtonSecondaryComponent>
              <ButtonDefaultComponent onClick={() => alert("Button clicked!")}>
                Book a call
              </ButtonDefaultComponent>
            </div> */}
            <div className="absolute  w-[320px] h-[58px] lg:w-auto top-[473px] lg:relative lg:top-auto lg:left-auto lg:justify-start lg:items-centar lg:flex lg:gap-3">
              <div className="px-[22px] p-3 rounded-full border-2 border-[#e2ffcf] justify-center items-center  flex">
                <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                  Success stories
                </div>
              </div>
              <div className="px-[22px] mt-2 lg:mt-0 p-3 bg-[#e2ffcf] rounded-full justify-center items-center  flex">
                <div className="text-center text-[#07373c] text-lg font-bold font-['Satoshi'] leading-normal">
                  Book a call
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {Picture-box} */}
        <div className="absolute left-[20px] top-[777px] w-80 h-[220.22px] lg:absolute lg:left-[240px] lg:top-[630px] lg:w-[1440px] lg:h-[680px] ">
          <img
            className="lg:w-[1440px] lg:h-[630px] left-0 top-0 absolute rounded-[32px] border-2 border-[#166a72]"
            src={containerPic}
            alt="picture"
          />
          <div className="lg:absolute lg:w-[120px] lg:h-[120px] left-[calc(50%-60px)] top-[calc(50%-60px)]">
            <img src={circleLogo} alt="play" />
            <img
              className="lg:absolute  left-[40%] top-[35%]"
              src={playPlayLogo}
              alt="play-play"
            />
          </div>
        </div>

        {/* {Industry-box} */}
        <div className="absolute top-[462px] lg:absolute lg:left-[240px] lg:top-[1374px] relative flex-col justify-center items-center lg:gap-4 inline-flex">
          <div className="text-center text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
            Trusted by industry leaders:
          </div>
          <div className="justify-between p-12 flex gap-[24px] gap-x-[24px] flex-row flex-wrap lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-6 lg:-[92px] lg:w-[1440px] lg:h-[90px] lg:rounded-[18px]">
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={googleLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:object-contain"
              />
            </div>
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={facebookLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:h-full lg:object-contain"
              />
            </div>
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={youLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:h-full lg:object-contain"
              />
            </div>
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={pinterestLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:h-full lg:object-contain"
              />
            </div>
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={twitchLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:h-full lg:object-contain"
              />
            </div>
            <div className="w-[68.37px] h-[22.56px] relative lg:w-[116.27px] lg:h-[38.36px] lg:relative">
              <img
                src={webLogo}
                alt="googleLogo"
                className="w-[68.37px] h-[22.56px] relative lg:w-full lg:h-full lg:object-contain"
              />
            </div>
          </div>
        </div>
        {/* {-------------} */}
      </div>
    </section>
  );
}

export default HeroView;
