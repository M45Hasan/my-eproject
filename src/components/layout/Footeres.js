import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import FooterHead from "./FooterHead";
import Call from "./Call";
import Mailto from "./Mailto";
import { useState, useEffect, useRef } from "react";
import List from "./List";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";

const Footeres = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  let [shop, setShop] = useState(false);
  let refShop = useRef();
  let [help, setHelp] = useState(false);
  let refHelp = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
        console.log("hi",ref.current.contains(e.target))
      } else {
        setShow(false);
      }

      if (refShop.current.contains(e.target)) {
        setShop(true);
      } else {
        setShop(false);
      }

      if (refHelp.current.contains(e.target)) {
        setHelp(true);
      } else {
        setHelp(false);
      }
    });
  }, []);
  return (
    <div className=" relative bg-[#F5F5F3]  ">
      <Container>
        <Flex className="flex justify-between">
          <div className=" ">
            <Dropdown className="" dropRef={ref}>
              <div>
                <FooterHead>
                  <span className="!text-[14px]">MENU</span>{" "}
                </FooterHead>
                {/* MenuList start */}
                {show && (
                  <div className="absolute top-[0] right-[165px] w-[120px] bg-[#ecf5f5] px-1">
                    <List className="mt-2 ">
                      <ListItem
                        className="font-dm text-sm  hover:font-bold "
                        itemName="Home"
                        href="/"
                      />
                      <ListItem
                        className="font-regular font-dm text-sm hover:font-bold "
                        itemName="About"
                        href="#"
                      />
                      <ListItem
                        className="font-regular font-dm text-sm hover:font-bold "
                        itemName="Service"
                        href="#"
                      />
                      <ListItem
                        className="font-regular font-dm text-sm hover:font-bold "
                        itemName="Contact"
                        href="#"
                      />
                    </List>
                  </div>
                )}
                {/* MenuList End */}
              </div>
            </Dropdown>

            <Dropdown className="" dropRef={refShop}>
              <div>
                <FooterHead>
                  <span className="!text-[14px]">SHOP</span>{" "}
                </FooterHead>
                {/* MenuList start */}
                {shop && (
                  <div className="absolute top-[0] right-[165px] w-[120px] bg-[#ecf5f5] px-1">
                    <List className="mt-2 ">
                      <ListItem
                        className="pb-[4px] font-dm text-sm hover:font-bold "
                        itemName="Category1"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm text-sm hover:font-bold "
                        itemName="Category2"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-sm hover:font-bold "
                        itemName="Category3"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-sm hover:font-bold "
                        itemName="Category4"
                        href="#"
                      />

                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-sm hover:font-bold "
                        itemName="Category5"
                        href="#"
                      />
                    </List>
                  </div>
                )}
                {/* MenuList End */}
              </div>
            </Dropdown>

            <Dropdown className="" dropRef={refHelp}>
              <div>
                <FooterHead>
                  <span className="!text-[14px]">HELP</span>{" "}
                </FooterHead>
                {/* MenuList start */}
                {help && (
                  <div className="absolute top-[0] right-[165px] w-[120px] bg-[#ecf5f5] px-1">
                    <List className="mt-2 ">
                      <ListItem
                        className="pb-[4px] font-dm text-[12px] hover:font-bold "
                        itemName="Privacy Policy"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm text-[12px] hover:font-bold "
                        itemName="Terms & Conditions"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-[12px] hover:font-bold "
                        itemName="Special E-shop"
                        href="#"
                      />
                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-[12px] hover:font-bold "
                        itemName="Shipping"
                        href="#"
                      />

                      <ListItem
                        className="font-regular pb-[4px] font-dm  text-[12px] hover:font-bold "
                        itemName="Secure Payments"
                        href="#"
                      />
                    </List>
                  </div>
                )}
                {/* MenuList End */}
              </div>
            </Dropdown>
          </div>
          <div className="text-end">
            <div className="mr-0 inline-block pb-[35px]">
              <Image imgsrc="assets/logo.png" />
            </div>

            <br />
            <Call />
            <br />
            <Mailto />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footeres;
