import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-row md:px-24 pt-12 justify-center items-center pb-usmfooter sm:pb-fuller md:pb-mdfooter lg:pb-48">
      <div className="w-full relative flex flex-row justify-center mx-auto max-w-5xl">{children}</div>
    </div>
  );
};

export default Container;
