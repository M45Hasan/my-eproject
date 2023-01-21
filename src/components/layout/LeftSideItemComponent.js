import React, { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

const LeftSideItemComponent = (props) => {
  let [subShow, setSubshow] = useState(false);

  let handleClick = () => {
    console.log("kire");
    setSubshow(!subShow);
  };
  return (
    <div className="border-1 border-b border-[#F0F0F0] py-4">
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between"
      >
        <div className=" flex w-full items-center justify-between">
          <h3 className="inline-block font-dm text-[12px] lg:text-[16px] font-medium    ">
            {props.color && (
              <span
                className=" inline-block h-[11px] w-[11px]  rounded-full pl-2 mr-1 pr-2"
                style={{ background: props.color }}
              >
                {/**color Passing Function */}
              </span>
            )}

            {props.subtitle}
          </h3>
          {/**plus-minus Func Start */}
          {!subShow ? (
            <div>{props.subDropDown && <FaPlus className=" text-[9px] md:text-[16px] lg:text-xl"  />} </div>
          ) : (
            <div>{props.subDropDown && <FaMinus className=" text-[9px] md:text-[16px] lg:text-xl"  />} </div>
          )}
          {/**plus-minus Func End */}
        </div>
      </div>
      {props.subDropDown && (
        <div>
          {subShow && (
            <div className="font-regular py-[6px] pl-10 font-dm text-[16px]  text-[#767676]">
              {" "}
              {props.children}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeftSideItemComponent;
