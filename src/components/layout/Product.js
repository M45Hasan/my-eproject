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
      <div className=" xl:w-fit w-[110px] sm:w-[150px] lg:w-56 md:w-[160px]">  {/*image cell size */}
        <div className="group relative overflow-y-hidden">
          <div className=" ">
            {" "}
            <Image imgsrc={src} />
          </div>

          {badge && <Badge title={title} />}
          <div className="absolute bottom-[-110%] left-0 h-20 w-full bg-[#ffffffb6] py-3 px-0 duration-300 ease-in group-hover:bottom-0  lg:bottom-[-60%] lg:h-32 xl:h-40 lg:py-3 xl:py-6">
            <Flex className="flex items-center justify-end gap-x-2 sm:gap-x-3">
              <p className="   font-dm text-[10px] font-normal text-[#767676] lg:text-base ">
                Add to Wish Listy
              </p>
              <BsFillSuitHeartFill className="   lg:text-base" />
            </Flex>

            <Flex className="flex items-center justify-end gap-x-3">
              <p className="my-[4px] font-dm  text-xs font-normal  text-[#767676] lg:my-[21px] lg:text-base">
                Compare
              </p>
              <TiArrowRepeat className="   lg:text-base" />
            </Flex>
            <Flex className="flex items-center justify-end gap-x-3">
              <p className=" font-dm text-[10px] font-bold text-[#262626] lg:text-base">
                Add to Cart
              </p>
              <FaShoppingCart className="   lg:text-base" />
            </Flex>
          </div>
        </div>
        <div>
          <Flex className="mt-0 block items-baseline sm:mt-6 sm:flex sm:justify-between">
            <h3 className="text-left font-dm text-xs font-bold lg:text-base xl:text-xl">
              {Pname}
            </h3>
            <p className="font-dm text-xs font-normal text-[#767676] lg:text-[16px] ">
              {Price}
            </p>
            <div className=" flex  items-baseline justify-between sm:hidden">
              <p className={className}>
                {className === "text-[white]" && (
                  <span className="font-dm   text-xs font-normal text-[black] lg:text-[16px]">
                    {Color}
                  </span>
                )}
                <span className="font-dm text-xs font-normal lg:text-[16px]">
                  {Color}
                </span>
              </p>
            </div>
          </Flex>
          <p className={className}>
            {className === "text-[white]" && (
              <span className="hidden font-dm text-xs font-normal text-[black] sm:block lg:text-[16px]">
                {Color}
              </span>
            )}
            <span className="hidden font-dm text-xs font-normal sm:block lg:text-[16px]">
              {Color}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
