import Breadcrum from "../components/layout/Breadcrum";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import { FaWindows } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import { useState } from "react";
import { LeftSideBar } from "../components/layout/LeftSideBar";

const Products = () => {
  let [showPage, setPage] = useState(12);
  
  let pageOption = (e) => {
    setPage(+e.target.value);
    console.log("hello");
  };

  return (
    <Container>
      <Breadcrum title="Product" />
      <Flex className="mt-9 flex gap-x-6 lg:mt-28">
        <div className="w-[25%]">
          <LeftSideBar/>
      
        </div>
        <div className="relative  w-[75%]">
          {/** head sort start */}
          <div className="md:mb-12 mb-6 flex items-center justify-between w-full">
            <div className="md:flex sm:gap-x-1 hidden ">
              <FaWindows />
              <GrSort />
            </div>
            <div className="flex justify-between md:justify-end gap-x-7">
              <div className="flex items-center gap-x-[20px] ">
                <div>
                  {" "}
                  <p className=" text-regular  p-2.5 text-sm text-[#767676] hidden md:block">
                    Sort by :
                  </p>
                </div>

                <select className="text-regular block sm:w-[217] lg:w-[239px] md:w-[239px] border border-solid border-[#f3f3f3c6] bg-[#FFFFFF]  p-2.5 text-sm text-[#767676]">
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
                  <p className=" text-regular  p-2.5 text-sm text-[#767676] hidden  md:block">
                    Show:
                  </p>
                </div>

                <select onChange={pageOption} className="text-regular block sm:w-[139px] md:w-[59px] lg:w-[139px] border border-solid border-[#f3f3f3c6] bg-[#FFFFFF]  p-2.5 text-sm text-[#767676]">
                  <option value="12" selected>
                    12
                  </option>
                  <option vlaue="24">24</option>
                  <option vlaue="36">36</option>
                </select>
              </div>
            </div>
          </div>
          {/** head sort end */}

          <Pagination itemsPerPage={window.innerWidth<425? showPage: showPage} />
        </div>
      </Flex>
    </Container>
  );
};

export default Products;
