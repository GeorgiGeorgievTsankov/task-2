import React from "react";
import group from "../assets/img/Clutch/Group.svg";
import rightArrow from "../assets/img/right-arrow-1.svg";
import stars from "../assets/img/stars/Frame 39825.svg";
import ceo from "../assets/img/testimonials/Frame 124.svg";
import logo from "../assets/img/testimonials/Logo.svg";
import logo2 from "../assets/img/testimonials/Logo2.svg";
import logo3 from "../assets/img/testimonials/Logo3.svg";
import logo4 from "../assets/img/testimonials/Logo4.svg";
import logo5 from "../assets/img/testimonials/Logo5.svg";
import logo6 from "../assets/img/testimonials/Logo6.svg";

function TestimonialsView() {
  return (
    <div
      id="testimonials"
      className="lg:relative h-[3644.63px] py-[50px]  lg:py-[100px] lg:w-[1920px] lg:h-[1276px] bg-[#fcfaf9] border-t-2 border-[#f1e6e0] flex flex-col   gap-16 "
    >
      <div className="lg:justify-between flex flex-col gap-8 items-center w-[320px] mx-auto lg:w-[1450px] lg:flex-row">
        <div className="w-[320px] flex-col justify-start items-start gap-4 inline-flex lg:w-[640px]">
          <div className="self-stretch flex-col justify-center items-start flex lg:h-[86px]">
            <div className="text-[#00a67d] text-lg font-bold font-['Satoshi'] uppercase leading-[30px]">
              TESTIMONIALS
            </div>
            <div className="self-stretch text-[#062e32] text-lg lg:text-[42px] font-bold font-['Satoshi'] leading-[56px]">
              Trusted by worldwide companies
            </div>
          </div>
          <div className="self-stretch text-[#425e61] text-lg font-medium font-['Satoshi'] leading-[30px]">
            Our mission is to elevate your brand to new heights. Our
            results-driven approach has successfully scaled businesses across
            diverse sectors, harnessing the power of digital marketing to drive
            remarkable growth
          </div>
        </div>

        <div className="w-[320px] lg:w-[459px] p-6 bg-white rounded-2xl border-2 border-[#f1e6e0] flex-col justify-center items-start inline-flex">
          <div className="self-stretch justify-between items-center flex lg:inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="lg:h-6 flex items-start gap-1.5">
                <img
                  src={stars}
                  alt="stars"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="lg:w-[125.47px] lg:h-[35.63px] relative flex">
                <img
                  src={group}
                  alt="word"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center text-[#3b5154] text-base font-medium font-['Satoshi'] leading-[30px]">
                38 Reviews
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-center text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                Rate us on clutch
              </div>
              <div className="w-6 h-6 py-[4.13px] flex items-center">
                <img
                  src={rightArrow}
                  alt="rightArrow"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* {flex-col justify-start items-start gap-8 inline-flex} */}
      {/*{Boxes}*/}
      <div className="w-[320px] h-[2981px] mx-auto lg:flex flex-col lg:gap-8 lg:w-[1441px] lg:h-[820px] relative">
        {/* {box1} */}
        <div className="mb-4 lg:h-[704px] lg:w-[459px] lg:h-[394px] p-6 lg:left-0 lg:top-0 lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col lg:justify-start lg:items-start lg:gap-8 inline-flex">
          <div className="w-[175px] h-8 relative">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch lg:h-[210px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                As a fintech startup, trust and user experience are crucial for
                us. They has helped us achieve both by enhancing our platform's
                user interface and implementing effective digital marketing
                strategies that significantly boosted our user base and investor
                interest. Their expertise in the fintech space is truly
                unmatched.
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img
                    src={ceo}
                    alt="ceo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {box4} */}
        <div className="mb-4 h-[504px] lg:w-[459px] lg:h-[394px] p-6 lg:left-0 lg:top-[426px] lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-14 h-14 relative">
            <img
              src={logo4}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                I was particularly impressed by their approach to our content
                marketing needs. They not only developed a content strategy that
                aligns with our brand voice but also managed to execute it in a
                way that has significantly increased our market reach and
                engagement.
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img
                    src={ceo}
                    alt="ceo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {box3} */}
        <div className="mb-4 lg:w-[459px] w-[320px] h-[462px] p-6 lg:left-[982px] lg:top-0 lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-10 h-10 relative">
            
            <img
              src={logo3}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Our partnership with them has transformed our online presence.
                Their dedicated team not only revamped our website but also
                implemented a social media strategy that has dramatically
                increased our engagement rates. We couldn't be happier with the
                results!
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img
                    src={ceo}
                    alt="ceo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {box6} */}
        <div className="mb-4 lg:w-[459px] w-[320px] h-[319px] lg:h-[326px] p-6 lg:left-[982px] lg:top-[494px] lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[111px] h-[26px] relative">
            <img
              src={logo6}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[90px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                They delivered exactly what they promised: more leads and more
                sales. Their professional approach and results-driven tactics
                are second to none.
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img className="w-[70px] h-[45px]" src={ceo} alt="ceo" />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {box2} */}
        <div className="mb-4 lg:w-[459px] w-[320px] h-[384px] lg:h-[294px] p-6 lg:left-[491px] lg:top-0 lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[145px] h-8 relative">
            <img
              src={logo2}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Thanks to their expert SEO services, we've seen a remarkable
                increase in our search engine rankings and web traffic. They are
                truly at the top of their game!
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img className="w-[70px] h-[45px]" src={ceo} alt="ceo" />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {box5} */}
        <div className="mb-4 lg:w-[459px] w-[320px] h-[672px] lg:h-[484px] p-6 lg:left-[491px] lg:top-[336px] lg:absolute bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-20 h-8 justify-center items-center inline-flex">
            <img
              src={logo5}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch h-[300px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                Working with them has been a game-changer for our e-commerce
                platform. Their comprehensive digital marketing strategy,
                encompassing everything from PPC campaigns to advanced
                analytics, has not only boosted our sales but also improved our
                customer retention rates. Their attention to detail and tailored
                approach made all the difference. We've seen a 60% increase in
                sales since we started working together, and our customer base
                has grown exponentially.
              </div>
            </div>
            <div className="justify-start items-center gap-3.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-10 h-10 rounded-full justify-center items-center flex">
                  <img className="w-[70px] h-[45px]" src={ceo} alt="ceo" />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-[#072f33] text-lg font-bold font-['Satoshi'] leading-normal">
                    Conor Johnson
                  </div>
                  <div className="text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                    CEO of Company A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TestimonialsView;
