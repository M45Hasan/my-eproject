import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

import List from "./List";

import FooterHead from "./FooterHead";
import FooterLink from "./FooterLink";
import Mailto from "./Mailto";
import Call from "./Call";


const FooterTop = () => {
  return (
    <Container>
      <Flex className="flex justify-between ">
        <div className="w-[13%]">
          <FooterHead>MENU</FooterHead>
          <List>
            <FooterLink itemName="Home" href="#" />
            <FooterLink itemName="Shop" href="#" />
            <FooterLink itemName="About" href="#" />
            <FooterLink itemName="Contact" href="#" />
            <FooterLink itemName="Journal" href="#" />
          </List>
        </div>
        <div className="w-[13%]">
          <FooterHead>SHOP</FooterHead>
          <List>
            <FooterLink itemName="Category1" href="#" />
            <FooterLink itemName="Category2" href="#" />
            <FooterLink itemName="Category3" href="#" />
            <FooterLink itemName="Category4" href="#" />
            <FooterLink itemName="Category5" href="#" />
          </List>
        </div>
        <div className="w-[13%]">
          <FooterHead>HELP</FooterHead>
          <List>
            <FooterLink itemName="Privacy Policy" href="#" />
            <FooterLink itemName="Terms & Conditions" href="#" />
            <FooterLink itemName="Special E-shop" href="#" />
            <FooterLink itemName="Shipping" href="#" />
            <FooterLink itemName="Secure Payments" href="#" />
          </List>
        </div>
        {/* SM-lg start*/}
        <div className=" w-[41%] justify-end sm:flex md:flex xl:hidden  ">
          <div className=" sm:block md:block xl:hidden ">
            <div className="ml-[]">
              <Image imgsrc="assets/logo.png" />
            </div>
            <div className="mt-[20%]">
              <FooterHead>
                <Call />
                <br />
                <Mailto />
              </FooterHead>
              <p className="font-regular mt-[4px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
        </div>
        {/* SM-lg end*/}
        <div className="flex hidden  w-[22%] justify-center xl:block">
          <div>
            <FooterHead>
              <Call />
              <br />
              <Mailto />
            </FooterHead>
            <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-[30%] xl:justify-center  ">
          <div>
            <Image imgsrc="assets/logo.png" />
          </div>
        </div>
        <div className="hidden w-[9%] xl:block "></div>
      </Flex>
    </Container>
  );
};

export default FooterTop;
