import React, { useState } from "react";
import Product from "./Product";

import ReactPaginate from "react-paginate";
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 7, 8, 9, 10, 11, 12, 13, 14,
  14, 17, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 7, 8, 9, 10, 11,
  12, 13, 14, 14, 17, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 7, 8,
  9, 10, 11, 12, 13, 14, 14, 17, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 7, 8, 9, 10, 11, 12, 13, 14, 14, 17, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 7, 8, 9, 10, 11, 12, 13, 14, 14, 17, 19,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className=" w-[43%] sm:w-[33%] lg:w-[220px] xl:w-[33%]">
            {" "}
            {/* unit width of item display in page */}
            <Product
              src="assets/best1.png"
              badge={true}
              title="Available"
              Pname="Basic Crew Neck"
              Price="$44.00"
              Color="blcak"
              className="text-[black]"
            />
          </div>
        ))}
    </>
  );
}

const Count = ({ start, end, total }) => {
  // show number
  return (
    <div className="mt-2">
      <p className="font-regular font-dm text-sm text-[#767676]">
        Products from {start + 1} to {end} of {total}
      </p>{" "}
    </div>
  );
};

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset); // a to d
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(pageCount);

  // Invoke when user click to request another page.
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    console.log("selected", e.selected);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <Items currentItems={currentItems} />
      </div>

      <div className="mt-5 md:mt-12 md:flex md:items-center md:justify-between  ">
        <ReactPaginate
          breakLabel={
            <div className=" mt-[75%] text-[red]">
              <p>...</p>
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={window.innerWidth < 415 ? 1 : 4}
          marginPagesDisplayed={window.innerWidth < 415 ? 1 : 2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          previousLabel="" // button name
          previousClassName="hidden"
          previousLinkClassName="page-link"
          nextLabel="" //button name
          nextClassName="hidden"
          nextLinkClassName="page-link"
          pageClassName="inline-block border border-[#F0F0F0] border-solid py-2 px-3.5 font-dm font-regular text-sm "
          pageLinkClassName=""
          containerClassName="flex sm:gap-x-3.5 gap-x-[5px]"
          activeClassName="inline-block border border-[#F0F0F0] border-solid py-2 px-3.5 font-dm font-regular text-sm bg-[black] text-[white]"
        />
        <Count start={itemOffset} end={endOffset} total={items.length} />
      </div>
    </>
  );
};

export default Pagination;
