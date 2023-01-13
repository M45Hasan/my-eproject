import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import Footeres from "./Footeres";
import { useEffect, useState } from "react";

const Footer = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 415) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    scrollWidth();
    console.log(window.innerWidth);
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <>
      {show && <Footeres />}
      {!show && (
        <div className="mt-11 h-[374px] bg-[#F5F5F3] py-12 md:mt-14 lg:mt-24 xl:mt-[140px] ">
          <FooterTop />
          <FooterBottom />
        </div>
      )}
    </>
  );
};

export default Footer;
