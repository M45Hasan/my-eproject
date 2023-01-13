import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <div className="mt-5 md:mt-36">
        <Container>
          <Flex className="flex gap-x-5 md:gap-x-10 ">
            <div className="max-w-2/4 ">
              <Link to="#">
                <Image className="block" imgsrc="assets/adlight.png" />
              </Link>
            </div>
            <div className="max-w-2/4">
              <Link to="#">
                <Image imgsrc=" assets/adelec.png" />
              </Link>

              <Link to="#" className="mt-[10px] lg:mt-10  inline-block">
                <Image imgsrc="assets/adelec.png" />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
