import Container from "../components/layout/Container";
import React from "react";
import Breadcrum from "../components/layout/Breadcrum";
import Image from "../components/layout/Image";
import Flex from "../components/layout/Flex";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Breadcrum />
      <Flex className="lg:mt-32 mt-[50px] flex justify-between lg:gap-x-12 gap-x-4  mb-6">
        <div className="w-2/4">
          <Link to="#">
            {" "}
            <Image imgsrc="assets/about1.png " className="w-full" />
          </Link>
        </div>

        <div className="w-2/4">
          <Link to="#">
            {" "}
            <Image imgsrc="assets/about2.png" className="w-full" />
          </Link>
        </div>
      </Flex>

      <h4 className="py-10 lg:py-28 font-dm text-left italic lg:not-italic text-lg lg:text-4xl font-bold text-[#262626]">
        {" "}
        Orebi is one of the world’s leading ecommerce brands and is
        internationally recognized for celebrating the essence of classic
        Worldwide cool looking style.
      </h4>

      <Flex className="lg:flex lg:justify-between lg:gap-x-10  block ">
        <div className="lg:w-1/3 lg:pt-8 pt-3">
          <h4 className=" pb-3 font-dm text-[25px] font-bold text-[#262626]">
            Our Vision{" "}
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="lg:w-1/3 pt-8">
          <h4 className=" pb-3 font-dm text-[25px] font-bold text-[#262626]">
            Our Story
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="lg:w-1/3  pt-8">
          <h4 className=" pb-3 font-dm text-[25px] font-bold text-[#262626]">
            Our Brands
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676] pb-7 lg:pb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </Flex>
    </Container>
  );
};

export default About;
