import React from "react";

const Badge = ({ title }) => {
  return (
    <span className=" absolute top-3 sm:top-5 left-3 sm:left-5 inline-block bg-primary py-[5py] sm:py-[9px] px-4 sm:px-8 text-center font-dm text-sm font-bold text-[#fff]">
      {title}
    </span>
  );
};

export default Badge;
