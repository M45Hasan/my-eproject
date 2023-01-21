import React from "react";

const Badge = ({ title }) => {
  return (
    <span className=" absolute top-1 xl:top-5 xl:left-5 left-1 inline-block bg-primary xl:py-[9px] xl:px-4   text-center font-dm text-[10px] xl:text-sm font-bold text-[#fff]">
      {title}
    </span>
  );
};

export default Badge;
