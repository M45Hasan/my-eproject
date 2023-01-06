import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useState } from "react";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 769) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className="py-8 ">
      <Container>
        <Flex className="lg:flex ">
          <div className="lg:w-3/12 ">
            <Image imgsrc="assets/Logo.png" />
          </div>

          <div className="w-9/12">
            <GoThreeBars
              onClick={() => setShow(!show)}
              className="absolute top-2.5 right-2.5  ml-auto block lg:hidden "
            />

            {show && (
              <List className="mt-5 lg:mt-0 lg:flex lg:justify-end lg:gap-x-10 ">
                <ListItem
                  className="font-dm text-sm font-bold hover:font-bold "
                  itemName="Home"
                />
                <ListItem
                  className="font-regular font-dm text-sm hover:font-bold "
                  itemName="About"
                />
                <ListItem
                  className="font-regular font-dm text-sm hover:font-bold " 
                  itemName="Service"
                />
                <ListItem
                  className="font-regular font-dm text-sm hover:font-bold "
                  itemName="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
