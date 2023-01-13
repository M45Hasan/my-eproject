import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import Flex from "./Flex";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TiArrowRepeat } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ src, badge, Pname, Price, Color, className, title }) => {
  return (
    <>
      <div className="group relative overflow-y-hidden">
        <Image imgsrc={src} />
        {badge && <Badge title={title} />}
        <div className="absolute lg:bottom-[-55%] bottom-[-110%] left-0 lg:h-40 h-20 w-full bg-[#ffffffb6] lg:py-6 py-3 px-0 sm:px-7 duration-300 ease-in group-hover:bottom-0">
          <Flex className="flex items-center justify-end gap-x-2 sm:gap-x-3">
            <p className="   font-dm text-[12px] font-normal text-[#767676] lg:text-base ">
              Add to Wish Listy
            </p>
            <BsFillSuitHeartFill className="   lg:text-base" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-3">
            <p className="my-[8px] font-dm  lg:text-base text-xs  font-normal text-[#767676] lg:my-[21px]">
              Compare
            </p>
            <TiArrowRepeat className="   lg:text-base" />
          </Flex>
          <Flex className="flex items-center justify-end gap-x-3">
            <p className=" font-dm text-[12px] lg:text-base font-bold text-[#262626]">
              Add to Cart
            </p>
            <FaShoppingCart className="   lg:text-base" />
          </Flex>
        </div>
      </div>
      <div>
        <Flex className="mt-0 sm:mt-6 block sm:flex sm:justify-between items-baseline">
          <h3 className="xl:text-xl lg:text-base text-xs font-dm font-bold text-left">
            {Pname}
          </h3>
          <div className=" flex items-center justify-between sm:hidden items-baseline">
            <p className="font-dm lg:text-[16px] text-xs font-normal text-[#767676] ">
              {Price}
            </p>
            <p className={className} >
              {className === "text-[white]" && (
                <span className="font-dm   lg:text-[16px] text-xs font-normal text-[black]">
                  {Color}
                </span>
              )}
              <span className="font-dm lg:text-[16px] text-xs font-normal">{Color}</span>
            </p>
          </div>
          <p className="hidden pr-7 font-dm lg:text-[16px] text-xs font-normal text-[#767676] sm:block">
            {Price}
          </p>
        </Flex>
        <p className={className}>
          {className === "text-[white]" && (
            <span className="hidden font-dm lg:text-[16px] text-xs font-normal text-[black] sm:block">
              {Color}
            </span>
          )}
          <span className="hidden font-dm lg:text-[16px] text-xs font-normal sm:block">
            {Color}
          </span>
        </p>
      </div>
    </>
  );
};

export default Product;
