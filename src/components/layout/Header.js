import React, { useEffect } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";
import { useState, useRef } from "react";
import Search from "./Search";

const Header = () => {
  let [show, setShow] = useState(false);
  let [showTwo, setShowTwo] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let ref = useRef();
  let ref2 = useRef();
  let cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(e.target);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
      if (ref2.current.contains(e.target)) {
        setShowTwo(true);
      } else {
        setShowTwo(false);
      }
      if (cartRef.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="Flex items-center">
            <Dropdown className="relative" dropRef={ref}>
              <p className="flex items-center gap-x-2.5 font-dm text-sm font-normal  ">
                <RiBarChartHorizontalLine />
                Shop by Category
              </p>
              {show && (
                <List className="absolute  top-8  w-[263px] bg-primary  font-dm text-sm font-normal text-[#767676]">
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Accesories"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Furniture"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Electronic"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Clothes"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Bags"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                    itemName="Home application"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-[600px] ">
            <Search
              className="h-10  w-full py-4 px-5  font-dm text-sm font-normal placeholder:text-[#C4C4C4]"
              placeholder="Search Product"
            />
            <BiSearch className="absolute top-[15px] right-[13px]" />
          </div>
          <div className="Flex pt-[13px]">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative" dropRef={ref2}>
                <div className="flex items-center ">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {showTwo && (
                  <List className="bg-white  absolute top-8 right-0 w-[200px]  font-dm text-sm font-bold text-[#262626]">
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:bg-primary hover:text-[#FFFFFF]"
                      itemName="My Account"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5  hover:bg-primary hover:text-[#FFFFFF]"
                      itemName="Log out"
                    />
                  </List>
                )}
              </Dropdown>
              <Dropdown className="relative" dropRef={cartRef}>
                <div className="">
                  <FaShoppingCart />
                </div>
                {showCart && (
                  <List className="absolute  top-8 right-0 w-[263px] bg-primary  font-dm text-sm font-normal text-[#767676]">
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Accesories"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Furniture"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Electronic"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Clothes"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Bags"
                    />
                    <ListItem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-6 hover:text-[white]"
                      itemName="Home application"
                    />
                  </List>
                )}
              </Dropdown>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
