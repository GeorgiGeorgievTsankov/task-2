import React, { useState } from "react";
import downArrou from "../assets/img/down-arrow 1.svg";
import faq from "../assets/img/ImageFAQ.png"

function FaqView() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "How do you measure the success?", answer: "We measure success through specific KPIs aligned with client goals, tracking performance and growth over time." },
    { question: "What makes your agency different from others?", answer: "Our agency tailors strategies for each client, with a focus on transparency, data-driven insights, and measurable outcomes." },
    { question: "How long does it typically take to see results?", answer: "Results typically start appearing within 3-6 months, depending on the strategy and industry." },
    { question: "How do you tailor your services to each client?", answer: "We conduct a detailed analysis of each client’s needs, market, and target audience to customize our services." },
    { question: "What size businesses do you work with?", answer: "We work with businesses of all sizes, from startups to large corporations, adapting our approach to each." },
    { question: "What are your marketing specialists?", answer: "Our team includes specialists in SEO, content marketing, social media, PPC, and more." },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="mx-auto w-[320px] h-[1247px] lg:w-[1920px] lg:h-[946px] py-[100px] flex-col lg:justify-end lg:items-center lg:inline-flex">
      <div className=" flex-col lg:justify-start lg:items-center lg:gap-16 lg:flex">
        <div className="w-[320px] lg:w-[703px] lg:text-center text-[#062e32] text-[42px] font-bold font-['Satoshi'] leading-[56px]">
          Get the answers you are looking for about Market Masters
        </div>
        <div className="lg:w-[1440px] lg:h-[570px] lg:justify-start lg:items-start lg:gap-[66px] lg:inline-flex">
          {/* FAQ Section */}
          <div className="w-[320px] h[104px] lg:w-[703px] flex flex-col items-center">
            {faqData.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  onClick={() => handleClick(index)}
                  className="w-[320px] lg:w-full h-[95px] p-6 border-b-2 border-[#f1e6e0] flex justify-between items-center cursor-pointer"
                >
                  <div className="text-[#062e32] text-[26px] font-bold leading-[30px] font-['Satoshi']">
                    {item.question}
                  </div>
                  <div className="lg:w-6 lg:h-6 lg:flex lg:justify-center lg:items-center">
                    {openIndex === index ? "-" : <img src={downArrou} alt="down-arrow" />}
                  </div>
                </div>

                {/* Answers */}
                {openIndex === index && (
                  <div className="p-6 text-[#062e32]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="mt-5 lg:mt-0 lg:w-[670px] lg:h-[570px] rounded-3xl border-2 border-[#f1e6e0] lg:justify-end lg:items-center lg:inline-flex">
            <img
              className="lg:w-[744px] lg:h-[582px] rounded-3xl"
              src={faq}
              alt="FAQ Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqView;

