import React from "react";
import ListItem from "./ListItem";

const FooterLink = ({itemName,href}) => {
  return (
    <>
      <ListItem
        className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
        itemName={itemName}
        href={href}
      />
    </>
  );
};

export default FooterLink;
