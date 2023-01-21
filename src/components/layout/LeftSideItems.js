import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import LeftSideItemComponent from "./LeftSideItemComponent";
import { colors, category, price, brands } from "../../data/data";

const LeftSideItems = ({ dropDown, droptitle, fixed, data }) => {
  let [show, setShow] = useState(false);
  console.log("cat", data);

  let handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      {fixed ? (
        <>
          <div className="lg:mb-[35px] mb-5">
            <h3 className="font-dm text-sm md:text-[16px] lg:text-xl font-bold text-[#262626]">
              {droptitle}
            </h3>
          </div>
          <div>
            {data == category ? (
              <>
                {category.map((item, i) => (
                  <LeftSideItemComponent
                    subDropDown={true}
                    color=""
                    subtitle={item.name}
                  >
                    {item.subcategory.map((subItem) => (
                      <p>{subItem.name}</p>
                    ))}
                  </LeftSideItemComponent>
                ))}{" "}
              </>
            ) : (
              <>
                {(data = price) &&
                  price.map((temi, i) => (
                    <LeftSideItemComponent
                      subDropDown={false}
                      color=""
                      subtitle={temi.range}
                    />
                  ))}
              </>
            )}
          </div>
        </>
      ) : (
        <div
          onClick={handleClick}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className="my-8 inline-block  font-dm text-sm md:text-[16px] lg:text-xl font-bold text-[#262626]">
            {droptitle}
          </h3>
          {/**angle Func Start */}
          {!show ? (
            <div>{dropDown && <BsFillCaretDownFill className=" text-[9px] md:text-[12px] lg:text-xl" />} </div>
          ) : (
            <div>{dropDown && <BsFillCaretUpFill className=" text-[9px] md:text-[12px] lg:text-xl"  />} </div>
          )}
          {/**angle Func End */}
        </div>
      )}
      {dropDown && (
        <>
          {show && (
            <div>
              {data === colors ? (
                <>
                  {data.map((it) => (
                    <LeftSideItemComponent
                      subDropDown={false}
                      color={it.code}
                      subtitle={it.code}
                    />
                  ))}
                </>
              ) : (
                <>
                  {(data = brands) &&
                    brands.map((tem, i) => (
                      <LeftSideItemComponent
                        subDropDown={false}
                        color=""
                        subtitle={tem.name}
                      />
                    ))}
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LeftSideItems;
