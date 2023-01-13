import React from "react";

const Container = ({ children }) => {
  return <div className="max-w-contain mx-auto md:p-5 p-[10px]">{children}</div>;
};

export default Container;
