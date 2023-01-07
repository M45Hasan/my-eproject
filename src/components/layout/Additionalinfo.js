import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";

const Additionalinfo = () => {
  return (
    <div className="mt-[-5px] border border-solid border-[#F0F0F0] bg-[#FFF] py-2 sm:py-7">
      <Container>
        <Flex className="flex justify-between ">
          <div className="flex items-center ">
            <TbNumber2 className="sm:text-2xl text-[10px]" />
            <p className="pl-2 font-dm sm:text-[16px]  font-normal text-[#6D6D6D] text-[10px]">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center ">
            <MdLocalShipping className="sm:text-2xl  text-[10px]" />
            <p className="pl-2 font-dm sm:text-[16px]  font-normal text-[#6D6D6D] text-[10px]">
              Free shipping
            </p>
          </div>
          <div className="flex items-center ">
            <GiReturnArrow className="sm:text-2xl  text-[10px]" />
            <p className="pl-2 font-dm sm:text-[16px]  font-normal text-[#6D6D6D] text-[10px]">
              Return policy in 30 days
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Additionalinfo;
