import React from "react";
import LeftSideItems from "./LeftSideItems";
import { colors, category, price, brands } from "../../data/data";

export const LeftSideBar = () => {
  return (
    <div>
      <LeftSideItems
        dropDown={false}
        fixed={true}
        droptitle="Shop by Category"
        data={category}
      />
      <LeftSideItems
        dropDown={true}
        fixed={false}
        droptitle="Shop by Color"
        data={colors}
      />
      <LeftSideItems
        dropDown={true}
        fixed={false}
        droptitle="Shop by Brand"
        data={brands}
      />
      <LeftSideItems
        dropDown={true}
        fixed={true}
        droptitle="Shop by Price"
        data={price}
      />
    </div>
  );
};
