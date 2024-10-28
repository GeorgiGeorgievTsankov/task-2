import React from "react";

function ButtonDefaultComponent({ children, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="px-[22px] py-3 bg-[#e2ffcf] rounded-full flex justify-center items-center cursor-pointer"
    >
      <div className="text-center text-[#06282b]  text-lg font-bold font-['Satoshi'] leading-normal">
        {children}
      </div>
    </div>
  );
}

export default ButtonDefaultComponent;

