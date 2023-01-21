import React from "react";
import {FcNext} from "react-icons/fc"
import { Link } from "react-router-dom";


const Breadcrum = ({title}) => {
  return (
    <div className=" md:mt-[124px] mt-10">
     
        <h1 className="text-dm capitalize sm:text-5xl text-2xl font-bold mb-[11px]">{window.location.pathname.split("/")[1]}</h1>
        <p className="text-dm text-xs font-normal text-[#767676] flex items-center gap-x-2">
         <Link to="/">Home</Link> <FcNext/> {window.location.pathname.split("/")[1]}
        </p>
      
    </div>
  );
};

export default Breadcrum;
