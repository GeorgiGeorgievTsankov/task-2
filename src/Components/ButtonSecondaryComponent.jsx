import React from "react";

function ButtonSecondaryComponent({ children, onClick }) {
    return (
        <div 
          onClick={onClick} 
          className=" px-[22px] py-3 rounded-full border-2 border-[#e2ffcf] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <div className="text-center text-[#e2ffcf] text-lg font-bold font-['Satoshi'] leading-normal">
            {children}
          </div>
        </div>
      );
}

export default ButtonSecondaryComponent;
