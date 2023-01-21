import React from "react";

const InputBox = (props) => {
  return (
    <div className="my-[23px]">
        <h4 className="  font-dm placeholder:font-regular text-base font-bold placeholder:text-sm  ">{props.title}</h4>
        <props.as placeholder={props.placeholder} className="outline-0 border-b border-solid border-[#767676] pb-2.5 w-full"/>
    </div>
  );
};

export default InputBox;
