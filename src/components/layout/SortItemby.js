import React from "react";

const SortItemby = ({ SortName, children, fixedName, className, value }) => {
  return (
    <div>
      <div className="flex items-center gap-x-[20px] ">
        <div>
          {" "}
          <p className=" text-regular  p-2.5 text-sm text-[#767676] ">
            Sort by :
          </p>
        </div>

        <select className="text-regular block w-[239px] border border-solid border-[#f3f3f3c6] bg-[#FFFFFF]  p-2.5 text-sm text-[#767676]">
          <option selected>Feature</option>
          <option vlaue="bd">Category1</option>
          <option vlaue="bd">Category2</option>
          <option vlaue="bd">Category3</option>
          <option vlaue="bd">Category4</option>
        </select>
      </div>
      
      <div className="flex items-center gap-x-[20px] ">
        <div>
          {" "}
          <p className=" text-regular  p-2.5 text-sm text-[#767676] ">
            Show :
          </p>
        </div>

        <select className="text-regular block w-[139px] border border-solid border-[#f3f3f3c6] bg-[#FFFFFF]  p-2.5 text-sm text-[#767676]">
          <option value="12" selected>12</option>
          <option vlaue="24">24</option>
          <option vlaue="36">36</option>
          
        </select>
      </div>

    </div>
  );
};

export default SortItemby;
