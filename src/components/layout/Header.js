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
import Image from "./Image";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

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
            <Dropdown className="relative z-50" dropRef={ref}>
              <p className="flex items-center gap-x-2.5 font-dm text-sm font-normal pt-3 lg:pt-0 ">
                <RiBarChartHorizontalLine />
               <span className="hidden lg:inline-block">Shop by Category</span> 
              </p>
              {show && (
                <List className="absolute  top-12  w-[263px] bg-primary  font-dm text-sm font-normal text-[#767676]">
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
          <div className="relative w-auto lg:w-[600px] ">
            <Search
              className="h-10  w-full py-4 px-5  font-dm text-sm font-normal placeholder:text-[#C4C4C4]"
              placeholder="Search Product"
            />
            <BiSearch className="absolute top-[15px] right-[13px]" />
          </div>
          <div className="Flex pt-[13px]">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropRef={ref2}>
                <div className="flex items-center ">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {showTwo && (
                  <List className="bg-white  absolute top-8 right-0 w-[200px]  font-dm text-sm font-bold text-[#262626]">
                    <ListItem
                      className="border border-solid border-[#f0ecec] py-4 px-5 hover:bg-primary hover:text-[#FFFFFF]"
                      itemName="My Account"
                    />
                    <ListItem
                      className="border border-solid border-[#f0ecec] py-4 px-5  hover:bg-primary hover:text-[#FFFFFF]"
                      itemName="Log out"
                    />
                  </List>
                )}
              </Dropdown>
              <Dropdown className="relative z-50" dropRef={cartRef}>
                <FaShoppingCart />

                {showCart && (
                  <div className="absolute right-0 top-8 h-[260px] w-[360px] border border-solid border-[#F0F0F0]">
                    <div className="  bg-[#F5F5F5] p-5">
                      <Flex className="flex items-center gap-x-5">
                        <div>
                          <Image imgsrc=" assets/cart.png" />
                        </div>
                        <div className="">
                          <h3 className="font-dm text-sm font-bold text-primary">
                            {" "}
                            Black Smart Watch
                          </h3>
                          <p className="mt-3 font-dm text-sm font-bold text-primary">
                            $44.00
                          </p>
                        </div>
                        <div className="">
                          <GrFormClose className="text-sm font-bold" />
                        </div>
                      </Flex>
                    </div>
                    <div className="bg-[white] pl-5 pt-[14px]">
                      <h4 className="font-regular font-dm text-[#767676]">
                        Subtotal:{" "}
                        <span className="font-bold text-[#262626]">$44.00</span>
                      </h4>
                      <Flex className="flex gap-x-[20px] mt-[13px]">
                        <div className="h-12 w-[148px] border border-solid border-primary text-center py-[10px]">
                          <Link to="#" className=" font-dm font-bold text-lg text-primary ">
                            View Cart
                          </Link>
                        </div>
                        <div className="h-12 w-[148px] bg-primary text-center py-[10px]">
                          <Link to="#" className=" font-dm font-bold text-lg text-[white] ">
                          Checkout
                          </Link>
                        </div>
                      </Flex>
                    </div>
                  </div>
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
