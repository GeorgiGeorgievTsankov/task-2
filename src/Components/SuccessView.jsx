import React from "react";
import { useState } from "react";

import firstPic from "../assets/img/Image111.png";
import secondPic from "../assets/img/Image112.png";
import ButtonSecondaryComponent from "./ButtonSecondaryComponent";

function SuccessView({ caseStudies }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div
        id="success"
        className="hidden lg:block lg:w-[1920px] lg:h-[1229px] px-60 pt-[100px] pb-[111px] bg-[#062e32] justify-center items-center inline-flex"
      >
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-end gap-16 inline-flex">
          <div className="lg:w-[1439px] justify-between items-end inline-flex">
            <div className="lg:w-[570px] flex-col justify-center items-start gap-1.5 inline-flex">
              <div className="self-stretch text-[#e2ffcf] text-[42px] font-bold font-['Satoshi'] leading-[56px]">
                Proud of our success stories
              </div>
              <div className="self-stretch text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                In our case studies you will find inspiring success stories from
                brands like Brand A, Brand B, Brand C. They show how Market
                Masters help to optimize website performance and increase
                bottom-line.
              </div>
            </div>
            <ButtonSecondaryComponent onClick={() => alert("Button clicked!")}>
              View all case studies
            </ButtonSecondaryComponent>
          </div>
          {/* {Box-1} */}
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="p-6 bg-[#084146] rounded-3xl border-2 border-[#0a565c] flex-col justify-start items-start gap-6 inline-flex">
              <div className="lg:w-[656px] bg-white rounded-[18px] border-2 border-[#0a565d] justify-center items-center inline-flex">
                <img className="w-[656px] h-[489px]" src={firstPic} />
              </div>
              <div className="lg:w-[656px] h-[280px] flex-col justify-between items-end flex">
                <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                    Transforming brand presence for radiance cosmetics
                  </div>
                  <div className="self-stretch text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                    The strategic digital marketing efforts for Radiance
                    Cosmetics not only enhanced their online presence but also
                    converted that presence into tangible sales results, proving
                    the effectiveness of a well-rounded digital approach in the
                    competitive beauty industry.
                  </div>
                </div>
                <div className="self-stretch pt-6 border-t-2 border-[#085253] justify-between items-center inline-flex">
                  <div className="h-[54px] justify-between items-start flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        562+
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Keywords
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        266%
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Organic traffic growth
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        8X
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Conversion rate
                      </div>
                    </div>
                  </div>
                  {/* <div className="px-[22px] py-3 rounded-full border-2 border-[#e2ffcf] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                    Learn more
                  </div>
                </div> */}
                  <ButtonSecondaryComponent
                    SecondaryComponent
                    onClick={() => alert("Button clicked!")}
                  >
                    Learn more
                  </ButtonSecondaryComponent>
                </div>
              </div>
            </div>

            {/* {Box-2} */}
            <div className="p-6 bg-[#084146] rounded-3xl border-2 border-[#0a565c] flex-col justify-start items-start gap-6 inline-flex">
              <div className="lg:w-[656px] bg-white rounded-[18px] border-2 border-[#0a565d] justify-center items-center inline-flex">
                <img className="w-[656px] h-[489px]" src={secondPic} />
              </div>
              <div className="lg:w-[656px] h-[280px] flex-col justify-between items-end flex">
                <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#e2ffcf] text-[26px] font-bold font-['Satoshi'] leading-[30px]">
                    Elevating brand presence for Luxe Apparel
                  </div>
                  <div className="self-stretch text-[#bacfc2] text-lg font-medium font-['Satoshi'] leading-[30px]">
                    The strategic digital marketing efforts transformed the
                    brand’s online presence and sales performance, marking a
                    significant achievement in the competitive fashion industry.
                  </div>
                </div>
                <div className="self-stretch pt-6 border-t-2 border-[#085253] justify-between items-center inline-flex">
                  <div className="h-[54px] justify-between items-start flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        562+
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Keywords
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        266%
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Organic traffic growth
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                        8X
                      </div>
                      <div className="text-[#bacfc2] text-base font-medium font-['Satoshi'] leading-[30px]">
                        Conversion rate
                      </div>
                    </div>
                  </div>
                  {/* <div className="px-[22px] py-3 rounded-full border-2 border-[#e2ffcf] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                    Learn more
                  </div>
                </div> */}
                  <ButtonSecondaryComponent
                    SecondaryComponent
                    onClick={() => alert("Button clicked!")}
                  >
                    Learn more
                  </ButtonSecondaryComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto flex mt-[50px] w-[360px] h-[1190px] relative">
        <div className="mx-auto w-[299.39px] h-[348px]  flex-col  gap-8 inline-flex">
          <div className="self-stretch h-[258px] flex-col justify-center items-start gap-1.5 flex">
            <div className="self-stretch text-[#062e32] text-[28px] font-bold font-['Satoshi'] leading-9">
              Proud of our success stories
            </div>
            <div className="self-stretch text-[#3b5154] text-lg font-medium font-['Satoshi'] leading-[30px]">
              In our case studies you will find inspiring success stories from
              brands like Brand A, Brand B, Brand C. They show how Market
              Masters help to optimize website performance and increase
              bottom-line.
            </div>
          </div>
          <div className="self-stretch h-[58px] px-[22px] py-3 bg-[#07373c] rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
              View all case studies
            </div>
          </div>
        </div>
        {/* {start} */}

        <div className=" absolute top-[400px] w-[360px] h-[710px] ">
          {/* Display current slide */}
          <div className="mx-auto h-[762px] flex flex-col ">
            {caseStudies.map(
              (caseStudy, index) =>
                index === currentSlide && (
                  <div
                    key={caseStudy.brand}
                    className="w-full p-4 bg-white rounded-3xl border-2 border-[#f1e6e0] flex-col justify-start items-center gap-6"
                  >
                    <img
                      className="rounded-3xl"
                      src={caseStudy.imgSrc}
                      alt={caseStudy.brand}
                    />
                    <div className="text-[#062e32] text-xl font-bold">
                      {caseStudy.brand}
                    </div>
                    <div className="text-[#3b5154] text-lg">
                      {caseStudy.description}
                    </div>

                    <div className="w-[320px] h-[284px] pt-6 border-t-2 border-[#f1e6e0] flex-col justify-start items-start gap-6 inline-flex">
                      <div className="h-[178px] flex-col justify-start items-start gap-2 flex">
                        <div className="flex-col justify-start items-start flex">
                          <div className="text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                            {caseStudy.words}
                          </div>
                          <div className="text-[#3b5154] text-base font-medium font-['Satoshi'] leading-[30px]">
                            Keywords
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                            266%
                          </div>
                          <div className="text-[#3b5154] text-base font-medium font-['Satoshi'] leading-[30px]">
                            Organic traffic growth
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="text-[#062e32] text-lg font-bold font-['Satoshi'] leading-normal">
                            8X
                          </div>
                          <div className="text-[#3b5154] text-base font-medium font-['Satoshi'] leading-[30px]">
                            Conversion rate
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[58px] px-[22px] py-3 bg-[#07373c] rounded-full justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-[#07373c]" : "bg-[#bacfc2]"
                }`}
              />
            ))}
          </div>
        </div>
        {/* {end} */}
      </div>
    </>
  );
}

export default SuccessView;
