import React from "react";
import ceo from "../assets/img/testimonials/Frame 124.svg";
import seo from "../assets/img/seo.png";

function BlogView() {
  return (
    <div
      id="blog"
      className="mx-auto w-[360px] h-[912px] lg:w-[1920px] lg:h-[940px] px-4 lg:px-60 pt-[50px] lg:pt-[100px] pb-[50px] lg:pb-[103px] bg-[#fcfaf9] border-y-2 border-[#f1e6e0] lg:justify-center lg:items-center lg:inline-flex"
    >
      <div className="lg:self-stretch flex-col lg:justify-start lg:items-start gap-8 gap-16 lg:inline-flex">
        <div className="w-[320px] h-[176px] lg:w-[1440px] lg:justify-between lg:items-end lg:inline-flex">
          <div className="flex-col lg:justify-center lg:items-start lg:inline-flex">
            <div className="text-[#00a67d] text-sm lg:text-lg font-bold font-['Satoshi'] uppercase leading-[20px] lg:leading-[30px]">
              blog
            </div>
            <div className="text-[#062e32] text-[24px] lg:text-[42px] font-bold font-['Satoshi'] leading-[32px] lg:leading-[56px]">
              Digital marketing & industry insights
            </div>
          </div>
          <div className="px-4 py-2 lg:px-[22px] lg:py-3 bg-[#062e32] rounded-full justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#e2ffcf] text-sm lg:text-lg font-bold font-['Satoshi'] leading-normal">
              View all articles
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[320px] lg:w-[1440px] h-[556px] lg:h-[587px] lg:justify-between lg:items-start lg:inline-flex">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-[320px] lg:w-[459px] p-4 lg:p-6 bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-4 inline-flex"
            >
              <div className="w-full h-auto lg:h-[361px] pt-px rounded-[18px] border-2 border-[#f1e6e0] justify-center items-center inline-flex">
                <img
                  className="w-full lg:w-[540px] h-auto lg:h-[360px] rounded-3xl"
                  src={seo}
                  alt="seo"
                />
              </div>
              <div className="flex-col justify-start items-start gap-4 lg:gap-6 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-[#062e32] text-[20px] lg:text-[26px] font-bold font-['Satoshi'] leading-[28px] lg:leading-[30px]">
                    The ultimate guide to SEO
                  </div>
                  <div className="text-[#3b5154] text-sm lg:text-lg font-medium font-['Satoshi'] leading-[20px] lg:leading-[30px]">
                    Discover the essential strategies for improving your local
                    SEO and why it matters for your business.
                  </div>
                </div>
                <div className="justify-start items-center gap-3.5 inline-flex">
                  <div className="justify-start items-center gap-1.5 flex">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full justify-center items-center flex">
                      <img
                        className="w-[50px] h-[30px] lg:w-[70px] lg:h-[45px]"
                        src={ceo}
                      />
                    </div>
                    <div className="text-[#062e32] text-sm lg:text-lg font-bold font-['Satoshi'] leading-normal">
                      Conor Johnson
                    </div>
                  </div>
                  <div className="text-right text-[#435f61] text-xs lg:text-base font-medium font-['Satoshi'] leading-[20px] lg:leading-[30px]">
                    25 Apr
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="block lg:hidden">
          <div className="h-[556px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[556px] flex-col justify-start items-start gap-[31px] flex">
              <div className="self-stretch h-[556px] p-4 bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-start gap-4 flex">
                <div className="w-full h-auto lg:h-[361px] pt-px rounded-[18px] border-2 border-[#f1e6e0] justify-center items-center inline-flex">
                  <img
                    className="w-full lg:w-[540px] h-auto lg:h-[360px] rounded-[18px]"
                    src={seo}
                    alt="seo"
                  />
                </div>
                <div className="self-stretch h-[222px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-[#062e32] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                      The ultimate guide to SEO
                    </div>
                    <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
                      Discover the essential strategies for improving your local
                      SEO and why it matters for your business.
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                    <div className="grow shrink basis-0 h-10 justify-start items-center gap-1.5 flex">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full justify-center items-center flex">
                        <img
                          className="w-[50px] h-[30px] lg:w-[70px] lg:h-[45px]"
                          src={ceo}
                        />
                      </div>
                      <div className="text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                        Conor Johnson
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-right text-[#435f61] text-base font-medium font-['Satoshi'] leading-[30px]">
                      25 Apr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-80 h-4 relative">
            <div className="left-[127.50px] top-0 absolute justify-center items-center gap-[15px] inline-flex">
              <div className="w-4 h-4 relative">
                <div className="w-2.5 h-2.5 left-[3px] top-[3px] absolute bg-[#07373c] rounded-full" />
                <div className="w-4 h-4 left-0 top-0 absolute rounded-full border border-[#07373c]" />
              </div>
              <div className="w-2.5 h-2.5 bg-[#bacfc2] rounded-full" />
              <div className="w-2.5 h-2.5 bg-[#bacfc2] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
